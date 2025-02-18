import { Directory } from 'renoun/file-system'

// Set up renoun directory for docs
export const DocsCollection = new Directory({
  path: '/src/content',
  loaders: {
    mdx: (path) => import(`@/content/${path}.mdx`),
  },
})
