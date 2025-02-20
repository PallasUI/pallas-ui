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
import { Heading } from '~/components/ui/typography'

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
  const ReadMe = await readmeFile?.getExportValue('default')
  const frontmatter = await readmeFile?.getExportValue('frontmatter')

  return (
    <div>
      <div>
        <Heading level={1}>{frontmatter?.title}</Heading>
        <p>{frontmatter?.description}</p>
        {ReadMe ? <ReadMe /> : null}
      </div>

      {exampleFiles ? (
        <div>
          <h2>Examples</h2>
          <ul>
            {exampleFiles.map(async (file) => {
              const fileExports = await file.getExports()
              return fileExports.map((fileExport) => {
                console.log(fileExport.getName())
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
  const Value = await fileExport.getRuntimeValue()
  const isUppercase = name[0] === name[0].toUpperCase()
  const isComponent = typeof Value === 'function' && isUppercase

  return (
    <section key={name}>
      <header>
        <Stack>
          <h3>{name}</h3>
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
