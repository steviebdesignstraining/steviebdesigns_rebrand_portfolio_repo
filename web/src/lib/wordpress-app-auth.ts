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

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export class WordPressAppAuth {
  private static readonly API_BASE = process.env.NEXT_PUBLIC_WP_API_URL;
  private static readonly USERNAME = process.env.WP_USERNAME;
  private static readonly APP_PASSWORD = process.env.WP_APP_PASSWORD;

  /**
   * Get Basic Auth header for WordPress Application Password
   */
  private static getAuthHeader(): string {
    if (!this.USERNAME || !this.APP_PASSWORD) {
      throw new Error('WordPress credentials not configured');
    }
    
    const credentials = btoa(`${this.USERNAME}:${this.APP_PASSWORD}`);
    return `Basic ${credentials}`;
  }

  /**
   * Fetch WordPress posts using Application Password
   */
  static async getPosts(page: number = 1, perPage: number = 10, categoryId?: string, tagId?: string): Promise<WordPressPost[]> {
    if (!this.API_BASE) {
      throw new Error('WordPress API URL not configured');
    }

    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
      _embed: 'true',
    });

    if (categoryId) {
      params.append('categories', categoryId);
    }

    if (tagId) {
      params.append('tags', tagId);
    }

    const response = await fetch(`${this.API_BASE}/posts?${params}`, {
      headers: {
        'Authorization': this.getAuthHeader(),
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
  static async getCategories(): Promise<WordPressCategory[]> {
    if (!this.API_BASE) {
      throw new Error('WordPress API URL not configured');
    }

    const response = await fetch(`${this.API_BASE}/categories`, {
      headers: {
        'Authorization': this.getAuthHeader(),
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
  static async getTags(): Promise<WordPressTag[]> {
    if (!this.API_BASE) {
      throw new Error('WordPress API URL not configured');
    }

    const response = await fetch(`${this.API_BASE}/tags`, {
      headers: {
        'Authorization': this.getAuthHeader(),
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test WordPress connection
   */
  static async testConnection(): Promise<boolean> {
    try {
      if (!this.API_BASE) {
        return false;
      }

      const response = await fetch(`${this.API_BASE}/posts?per_page=1`, {
        headers: {
          'Authorization': this.getAuthHeader(),
          'Content-Type': 'application/json',
        },
      });

      return response.ok;
    } catch (error) {
      console.error('WordPress connection test failed:', error);
      return false;
    }
  }

  /**
   * Get WordPress site info
   */
  static async getSiteInfo(): Promise<{name: string; description: string; url: string}> {
    if (!this.API_BASE) {
      throw new Error('WordPress API URL not configured');
    }

    const response = await fetch(`${this.API_BASE.replace('/wp/v2', '')}`, {
      headers: {
        'Authorization': this.getAuthHeader(),
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch site info: ${response.statusText}`);
    }

    return response.json();
  }
}

export type { WordPressPost, WordPressCategory, WordPressTag };
