import Error from '@repo/ui/error-page'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <html lang="en" className="dark">
      <body>
        <div>
          <Error />
        </div>
      </body>
    </html>
  )
}
