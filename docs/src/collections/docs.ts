import { Directory, withSchema } from 'renoun/file-system'
import { z } from 'zod'
// Set up renoun directory for docs
export const DocsCollection = new Directory({
  path: '/src/content',
  loaders: {
    mdx: withSchema(
      {
        frontmatter: z.object({
          title: z.string(),
          description: z.string(),
        }),
      },
      (path) => import(`~/content/${path}.mdx`),
    ),
    tsx: (path) => import(`~/content/${path}.tsx`),
  },
})
