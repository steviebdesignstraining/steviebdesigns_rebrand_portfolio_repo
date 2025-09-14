import { NextRequest, NextResponse } from 'next/server';
import { WordPressAuth } from '@/lib/wordpress-auth';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    // Handle OAuth2 errors
    if (error) {
      console.error('OAuth2 error:', error);
      return NextResponse.redirect(new URL('/blog?error=oauth_error', request.url));
    }

    // Check for authorization code
    if (!code) {
      return NextResponse.redirect(new URL('/blog?error=no_code', request.url));
    }

    // Exchange code for access token
    const tokenResponse = await WordPressAuth.exchangeCodeForToken(code);
    
    // Store token in a secure HTTP-only cookie
    const response = NextResponse.redirect(new URL('/blog?auth=success', request.url));
    
    response.cookies.set('wp_access_token', tokenResponse.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: tokenResponse.expires_in ? tokenResponse.expires_in : 3600, // 1 hour default
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('WordPress OAuth2 callback error:', error);
    return NextResponse.redirect(new URL('/blog?error=auth_failed', request.url));
  }
}
