import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get access token from cookies
    const accessToken = request.cookies.get('wp_access_token')?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');

    // Build API URL with parameters
    let apiUrl = `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?page=${page}&per_page=${perPage}&_embed=true`;
    
    if (category) {
      apiUrl += `&categories=${category}`;
    }
    
    if (tag) {
      apiUrl += `&tags=${tag}`;
    }

    // Fetch posts from WordPress
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401 }
        );
      }
      throw new Error(`WordPress API error: ${response.statusText}`);
    }

    const posts = await response.json();

    return NextResponse.json(posts);

  } catch (error) {
    console.error('WordPress posts API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get access token from cookies
    const accessToken = request.cookies.get('wp_access_token')?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { page = 1, per_page = 10, category, tag } = body;

    // Build API URL with parameters
    let apiUrl = `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?page=${page}&per_page=${per_page}&_embed=true`;
    
    if (category) {
      apiUrl += `&categories=${category}`;
    }
    
    if (tag) {
      apiUrl += `&tags=${tag}`;
    }

    // Fetch posts from WordPress
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401 }
        );
      }
      throw new Error(`WordPress API error: ${response.statusText}`);
    }

    const posts = await response.json();

    return NextResponse.json(posts);

  } catch (error) {
    console.error('WordPress posts API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
