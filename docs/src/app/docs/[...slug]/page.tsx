import { Stack } from '@styled-system/jsx'
import { notFound } from 'next/navigation'
import { APIReference } from 'renoun/components'
import {
  FileNotFoundError,
  type JavaScriptFileExport,
  isDirectory,
  isFile,
} from 'renoun/file-system'
import { DocsCollection } from '~/collections/docs'
import { MDXComponent } from '~/components/docs/mdx-component'

export default async function Component({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const componentEntry = await DocsCollection.getEntry(slug).catch((error) => {
    if (error instanceof FileNotFoundError) {
      notFound()
    }
    throw error
  })

  if (!componentEntry) {
    notFound()
  }

  const componentDirectory = isDirectory(componentEntry)
    ? componentEntry
    : componentEntry.getParent()
  const mainEntry = await componentDirectory.getFile(slug, ['ts', 'tsx']).catch((error) => {
    if (error instanceof FileNotFoundError) {
      return componentDirectory.getFile('index', ['ts', 'tsx']).catch((error) => {
        if (error instanceof FileNotFoundError) {
          return undefined
        }
        throw error
      })
    }
    throw error
  })
  const examplesEntry = await componentDirectory.getEntry('examples').catch((error) => {
    if (error instanceof FileNotFoundError) {
      return undefined
    }
    throw error
  })
  const exampleFiles = examplesEntry
    ? isDirectory(examplesEntry)
      ? (await examplesEntry.getEntries()).filter((entry) => isFile(entry, 'tsx'))
      : isFile(examplesEntry, 'tsx')
        ? [examplesEntry]
        : null
    : null
  const readmeFile = await componentDirectory.getFile('readme', 'mdx').catch((error) => {
    if (error instanceof FileNotFoundError) {
      return undefined
    }
    throw error
  })
  const readMe = await readmeFile?.getText()
  const lastCommitDate = await componentEntry.getLastCommitDate()
  const parentDirectory = componentEntry.getParent()
  const title = ['index', 'readme'].includes(componentEntry.getBaseName().toLowerCase())
    ? parentDirectory.getBaseName()
    : componentEntry.getBaseName()

  return (
    <div>
      <div>
        <h1>{title}</h1>
        {readMe ? <MDXComponent value={readMe} /> : null}
      </div>

      {mainEntry ? (
        <div>
          <h2>API Reference</h2>
          <APIReference source={mainEntry} />
        </div>
      ) : null}

      {exampleFiles ? (
        <div>
          <h2>Examples</h2>
          <ul>
            {exampleFiles.map(async (file) => {
              const fileExports = await file.getExports()

              return fileExports.map((fileExport) => {
                return (
                  <li key={fileExport.getName()}>
                    <Preview fileExport={fileExport} />
                  </li>
                )
              })
            })}
          </ul>
        </div>
      ) : null}

      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '1rem',
          }}
        >
          {lastCommitDate ? (
            <div
              style={{
                gridColumn: 1,
                fontSize: 'var(--font-size-body-3)',
                color: 'var(--color-foreground-secondary)',
                textAlign: 'left',
              }}
            >
              Last updated{' '}
              <time
                dateTime={lastCommitDate.toISOString()}
                itemProp="dateModified"
                style={{ fontWeight: 600 }}
              >
                {lastCommitDate.toLocaleString('en', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </time>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

async function Preview({
  fileExport,
}: {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  fileExport: JavaScriptFileExport<any>
}) {
  const name = fileExport.getName()
  const description = fileExport.getDescription()
  const url = fileExport.getSourceUrl()
  const Value = await fileExport.getRuntimeValue()
  const isUppercase = name[0] === name[0].toUpperCase()
  const isComponent = typeof Value === 'function' && isUppercase

  return (
    <section key={name}>
      <header>
        <Stack>
          <h3>{name}</h3> <a href={url}>Edit example</a>
        </Stack>
        {description ? <p>{description}</p> : null}
      </header>

      <div>
        {isComponent ? (
          <div>
            <Value />
          </div>
        ) : null}
      </div>
    </section>
  )
}
