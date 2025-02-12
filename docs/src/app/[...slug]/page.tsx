import { docs } from '~/collections/docs'

export default async function DocPage({ params }: { params: { slug: string[] } }) {
  // const slug = params.slug.join('/')
  // const doc = await docs.getFile(slug, 'mdx')
  // const Content = await doc.getExportValue('default')

  return null
}

export async function generateStaticParams() {
  const entries = await docs.getEntries()
  return entries.map((entry) => ({
    slug: entry.getPath().split('/'),
  }))
}
