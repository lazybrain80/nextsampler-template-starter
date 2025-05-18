import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { type NextRequest, NextResponse } from 'next/server'
import { updatePageSession, updateAPISession } from '@/libs/supabase'

const handleI18nRouting = createMiddleware(routing)

const protectedAPIRoute = ['/api/docs']

const noRedirectRoute = [
  '.*\\.png',
  '.*\\.jpg',
  '.*\\.ico',
  '.*\\.opengraph-image.png',
  '/api(.*)',
  '/auth/callback(.*)',
  '/sitemap.xml',
  '/robots.txt',
]

const publicRoute = [
  '^/$',
  '^/sitemap.xml$',
  '^/robots.txt$',
  '^/\\w{2}$', // root with locale
  '/(\\w{2}/)?apps(.*)',
  '/(\\w{2}/)?components(.*)',
  '/(\\w{2}/)?features(.*)',
  '/(\\w{2}/)?showcase(.*)',
  '/(\\w{2}/)?pricing(.*)',
  '/(\\w{2}/)?signin(.*)',
  '/(\\w{2}/)?signup(.*)',
  '/(\\w{2}/)?terms(.*)',
  '/(\\w{2}/)?privacy(.*)',
]

function isProtectedApi(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname
  return protectedAPIRoute.some(route => new RegExp(route).test(pathname))
}

function isNoRedirect(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname
  return noRedirectRoute.some(route => new RegExp(route).test(pathname))
}

function isPublic(request: NextRequest): boolean {
  const pathname = request.nextUrl.pathname
  return publicRoute.some(route => new RegExp(route).test(pathname))
}

export async function middleware(request: NextRequest) {
  if (isNoRedirect(request)) {
    //check protected api (no redirect but check session (api))
    if (isProtectedApi(request)) {
      return await updateAPISession(request)
    }
    //no redirect and no check session (example: auth/callback)
    return NextResponse.next()
  }

  // redirect to locale
  const response = handleI18nRouting(request)

  // public route
  if (isPublic(request)) {
    return response
  }

  // not public route and check session
  return await updatePageSession(request, response)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
