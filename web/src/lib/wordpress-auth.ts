interface WordPressTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in?: number;
  refresh_token?: string;
}

interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export class WordPressAuth {
  private static readonly CLIENT_ID = process.env.WP_CLIENT_ID;
  private static readonly CLIENT_SECRET = process.env.WP_CLIENT_SECRET;
  private static readonly REDIRECT_URI = process.env.WP_REDIRECT_URI;
  private static readonly AUTHORIZE_URL = process.env.WP_AUTHORIZE_URL;
  private static readonly TOKEN_URL = process.env.WP_TOKEN_URL;
  private static readonly API_BASE = process.env.NEXT_PUBLIC_WP_API_URL;

  /**
   * Generate the authorization URL for WordPress OAuth2
   */
  static getAuthorizationUrl(): string {
    const params = new URLSearchParams({
      client_id: this.CLIENT_ID || '',
      redirect_uri: this.REDIRECT_URI || '',
      response_type: 'code',
      scope: 'global',
    });

    return `${this.AUTHORIZE_URL}?${params.toString()}`;
  }

  /**
   * Exchange authorization code for access token
   */
  static async exchangeCodeForToken(code: string): Promise<WordPressTokenResponse> {
    const response = await fetch(this.TOKEN_URL || '', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: this.CLIENT_ID || '',
        client_secret: this.CLIENT_SECRET || '',
        redirect_uri: this.REDIRECT_URI || '',
        grant_type: 'authorization_code',
        code: code,
      }),
    });

    if (!response.ok) {
      throw new Error(`Token exchange failed: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Fetch WordPress posts using access token
   */
  static async getPosts(accessToken: string, page: number = 1, perPage: number = 10): Promise<WordPressPost[]> {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      _embed: 'true',
    });

    const response = await fetch(`${this.API_BASE}/posts?${params}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Fetch WordPress categories
   */
  static async getCategories(accessToken: string): Promise<Array<{id: number; name: string; slug: string}>> {
    const response = await fetch(`${this.API_BASE}/categories`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Fetch WordPress tags
   */
  static async getTags(accessToken: string): Promise<Array<{id: number; name: string; slug: string}>> {
    const response = await fetch(`${this.API_BASE}/tags`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Store access token in localStorage (client-side)
   */
  static setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('wp_access_token', token);
    }
  }

  /**
   * Get access token from localStorage (client-side)
   */
  static getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('wp_access_token');
    }
    return null;
  }

  /**
   * Remove access token from localStorage (client-side)
   */
  static clearToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('wp_access_token');
    }
  }

  /**
   * Check if user is authenticated
   */
  static isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}

export type { WordPressPost, WordPressTokenResponse };
