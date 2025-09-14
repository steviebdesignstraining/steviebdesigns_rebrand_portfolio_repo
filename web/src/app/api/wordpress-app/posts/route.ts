import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');

    const apiBase = process.env.NEXT_PUBLIC_WP_API_URL;
    const username = process.env.WP_USERNAME;
    const appPassword = process.env.WP_APP_PASSWORD;

    if (!apiBase || !username || !appPassword) {
      return NextResponse.json(
        { error: 'WordPress credentials not configured' },
        { status: 500 }
      );
    }

    // Build API URL with parameters
    let apiUrl = `${apiBase}/posts?page=${page}&per_page=${perPage}&_embed=true`;
    
    if (category) {
      apiUrl += `&categories=${category}`;
    }
    
    if (tag) {
      apiUrl += `&tags=${tag}`;
    }

    // Create Basic Auth header
    const credentials = Buffer.from(`${username}:${appPassword}`).toString('base64');

    // Fetch posts from WordPress
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Invalid WordPress credentials' },
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
    const body = await request.json();
    const { page = 1, per_page = 10, category, tag } = body;

    const apiBase = process.env.NEXT_PUBLIC_WP_API_URL;
    const username = process.env.WP_USERNAME;
    const appPassword = process.env.WP_APP_PASSWORD;

    if (!apiBase || !username || !appPassword) {
      return NextResponse.json(
        { error: 'WordPress credentials not configured' },
        { status: 500 }
      );
    }

    // Build API URL with parameters
    let apiUrl = `${apiBase}/posts?page=${page}&per_page=${per_page}&_embed=true`;
    
    if (category) {
      apiUrl += `&categories=${category}`;
    }
    
    if (tag) {
      apiUrl += `&tags=${tag}`;
    }

    // Create Basic Auth header
    const credentials = Buffer.from(`${username}:${appPassword}`).toString('base64');

    // Fetch posts from WordPress
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Invalid WordPress credentials' },
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
