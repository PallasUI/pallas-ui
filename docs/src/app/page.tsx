import { css } from '@styled-system/css'

export default function Home() {
  return (
    <div
      className={css({
        maxWidth: '800px',
        margin: '0 auto',
        padding: '8',
      })}
    >
      <h1
        className={css({
          fontSize: '4xl',
          fontWeight: 'bold',
          marginBottom: '4',
        })}
      >
        Welcome to our Design System
      </h1>
      <p
        className={css({
          fontSize: 'lg',
          color: 'gray.700',
          lineHeight: 'relaxed',
        })}
      >
        Explore our components, guidelines, and best practices for building consistent user
        interfaces.
      </p>
    </div>
  )
}
