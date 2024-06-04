import { NextResponse } from 'next/server'
 
export function middleware(request) {

  const isAuth = true

  if (request.nextUrl.pathname.startsWith('/panel') && !isAuth) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

}