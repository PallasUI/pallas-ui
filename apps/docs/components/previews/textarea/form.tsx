'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { css } from '@styled-system/css'
import { Grid } from '@styled-system/jsx'
import { useState } from 'react'

export default function TextareaFormDemo() {
  const [bio, setBio] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (bio.length < 10) {
      setError('Bio must be at least 10 characters.')
      return
    }

    if (bio.length > 160) {
      setError('Bio must not be longer than 160 characters.')
      return
    }

    setError(null)
    alert(`Submitted bio: ${bio}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={css({ display: 'flex', flexDir: 'column', gap: '4', w: 'full' })}
    >
      <Grid gap="1.5">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Tell us a little bit about yourself"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        {error && <p className={css({ fontSize: 'sm', color: 'error.text' })}>{error}</p>}
        <p className={css({ fontSize: 'sm', color: 'text.tertiary' })}>
          You can <span className={css({ fontWeight: 'medium' })}>@mention</span> other users and
          organizations.
        </p>
      </Grid>
      <Button type="submit" className={css({ alignSelf: 'flex-start', mt: '2' })}>
        Submit
      </Button>
    </form>
  )
}
