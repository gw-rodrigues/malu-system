import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const publicRoutes = [
  {
    path: '/confirm',
    whenAuthenticated: 'next',
  },
  {
    path: '/error',
    whenAuthenticated: 'next',
  },
  {
    path: '/forgot-password',
    whenAuthenticated: 'redirect',
  },
  {
    path: '/sign-in',
    whenAuthenticated: 'redirect',
  },
  {
    path: '/update-password',
    whenAuthenticated: 'next',
  },
  {
    path: '/dashboard',
    whenAuthenticated: 'next',
  },
  {
    path: '/',
    whenAuthenticated: 'redirect',
  },
] as const

const REDIRECT_ROUTE_WHEN_NOT_AUTHENTICATED = '/sign-in'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })
  return supabaseResponse

  const path = request.nextUrl.pathname
  const publicRoute = publicRoutes.find((route) => route.path === path)

  // With Fluid compute, don't put this client in a global environment
  // variable. Always create a new one on each request.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // Do not run code between createServerClient and
  // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: If you remove getClaims() and you use server-side rendering
  // with the Supabase client, your users may be randomly logged out.
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  if (!user && publicRoute) {
    return NextResponse.next()
  }

  if (!user && !publicRoute) {
    return NextResponse.redirect(
      new URL(REDIRECT_ROUTE_WHEN_NOT_AUTHENTICATED, request.nextUrl),
    )
  }

  if (user && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // If you're creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse
}
