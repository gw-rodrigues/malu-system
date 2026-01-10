import { Toaster } from '@/components/ui/sonner'
import { fontVariables } from '@/lib/font'
import ThemeProvider from '@/components/layout/ThemeToggle/theme-provider'
import QueryProvider from '@/components/layout/query-provider'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import '@repo/ui/styles.css'
import './globals.css'

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
}

export const metadata: Metadata = {
  title: 'Malu System Dashboard',
  description: 'Malu System Dashboard Application',
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background overflow-hidden overscroll-none font-sans antialiased',
          fontVariables,
        )}
      >
        <NextTopLoader color="var(--primary)" showSpinner={false} />
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <QueryProvider>
              <Toaster />
              {children}
            </QueryProvider>
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
