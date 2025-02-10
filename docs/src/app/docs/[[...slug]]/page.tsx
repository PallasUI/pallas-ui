import { css } from '@styled-system/css'
import { heading, icon } from '@styled-system/recipes'
import { type Component as ComponentDoc, allDocuments } from 'contentlayer/generated'
import { ChevronRightIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import { MdxComponent } from '~/components/docs/mdx-component'
import { Pager } from '~/components/docs/pager'
import { ReferenceBadges } from '~/components/docs/reference-badges'
import { Toc } from '~/components/docs/toc'
import { siteUrl } from '~/lib/env'

export const generateStaticParams = async () =>
  allDocuments.map((doc) => ({ slug: doc.slugAsParams.split('/') }))

export async function generateMetadata({
  params: ParamsPromise,
}: { params: Promise<{ slug: string[] }> }) {
  const params = await ParamsPromise
  const doc = allDocuments.find((doc) => doc.slugAsParams === params.slug.join('/'))

  if (!doc) return notFound()

  const metadata = {
    title: doc.title,
    description: doc.description,
  }

  const ogImage = {
    alt: `${doc.title} | Shadow Panda`,
    type: 'image/png',
    width: 1200,
    height: 630,
    url: `/og/docs/${params.slug.join('/')}`,
  }

  return {
    ...metadata,
    openGraph: {
      ...metadata,
      type: 'website',
      locale: 'en_US',
      url: `${siteUrl}/docs/${doc.slugAsParams}`,
      images: [ogImage],
    },
    twitter: {
      ...metadata,
      site: 'Shadow Panda',
      card: 'summary_large_image',
      creator: '@nanopx',
      images: [ogImage],
    },
  }
}

async function ComponentsPage({ params: paramsPromise }: { params: Promise<{ slug: string[] }> }) {
  const params = await paramsPromise
  const doc = allDocuments.find((doc) => doc.slugAsParams === params.slug.join('/'))

  if (!doc) {
    notFound()
  }

  return (
    <main
      className={css({
        position: 'relative',
        py: '8',
        xl: {
          display: 'grid',
          gridTemplateColumns: '1fr minmax(0, 200px)',
          gap: '10',
        },
      })}
    >
      <div
        className={css({
          mx: 'auto',
          w: 'full',
          minW: '0',
        })}
      >
        <div
          className={css({
            mb: '4',
            display: 'flex',
            alignItems: 'center',
            spaceX: '1',
            textStyle: 'sm',
            color: 'muted.foreground',
          })}
        >
          <div className={css({ truncate: true })}>{doc.type}</div>
          <ChevronRightIcon className={icon()} />
          <div className={css({ fontWeight: 'medium', color: 'foreground' })}>{doc.title}</div>
        </div>

        <h1 className={heading()}>{doc.title}</h1>
        <p className={css({ mt: '4' })}>{doc.description}</p>
        {(doc as ComponentDoc).references && (
          <ReferenceBadges {...(doc as ComponentDoc).references} />
        )}

        <div className={css({ mt: '8' })}>
          <MdxComponent code={doc.body.code} />
        </div>

        <Pager className={css({ mt: '12' })} doc={doc} />
      </div>
      {doc.toc && (
        <div
          className={css({
            display: 'none',
            position: 'relative',
            textStyle: 'sm',
            xl: {
              display: 'block',
            },
          })}
        >
          <div
            className={css({
              position: 'sticky',
              top: '20',
            })}
          >
            <Toc toc={doc.tocData} />
          </div>
        </div>
      )}
    </main>
  )
}

export default ComponentsPage
