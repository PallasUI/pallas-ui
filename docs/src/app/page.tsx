import { css } from '@styled-system/css'
import { heading } from '@styled-system/recipes'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

const Page = () => {
  return (
    <main
      className={css({
        maxW: '7xl',
        mx: 'auto',
        flex: '1',
        px: '4',
        alignItems: 'flex-start',
      })}
    >
      <div
        className={css({
          w: 'full',

          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: 'url(/images/top_light.png)',

          _dark: {
            backgroundImage: 'url(/images/top_dark.png)',
          },
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxW: 'lg',
            gap: '4',
            px: '0',
            py: '8',

            md: {
              py: '32',
            },
          })}
        >
          <h1 className={heading()}>
            Build your own
            <br />
            Component Library
          </h1>
          <p>
            Accessible and customizable components built with Panda CSS & Radix, based on shadcn/ui.
          </p>
          <div
            className={css({
              display: 'flex',
              mt: '8',
              gap: '4',
              w: 'full',
              flexDirection: 'column',

              md: {
                flexDirection: 'row',
                alignItems: 'center',
              },
            })}
          >
            <Button variant="outlined">
              <Link href="/docs/overview/introduction">Get Started</Link>
            </Button>
            <Button variant="outlined">
              <Link href="/docs/components/accordion">View Components</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
