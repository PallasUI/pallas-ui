import { Directory } from 'renoun/file-system'

// Set up renoun directory for docs
export const docs = new Directory({
  path: 'content',
  include: '*.mdx',
  loaders: {
    mdx: (path) => import(`@/content/${path}.mdx`),
  },
})
