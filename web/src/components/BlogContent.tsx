"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { WordPressAuth } from '@/lib/wordpress-auth';
import { WordPressPost } from '@/lib/wordpress-auth';

interface BlogContentProps {
  categories: Array<{id: number; name: string; slug: string}>;
  tags: Array<{id: number; name: string; slug: string}>;
}

export default function BlogContent({ categories, tags }: BlogContentProps) {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  // Check authentication status
  useEffect(() => {
    const token = WordPressAuth.getToken();
    setAuthenticated(!!token);
  }, []);

  // Handle OAuth2 authentication
  const handleAuthentication = () => {
    const authUrl = WordPressAuth.getAuthorizationUrl();
    window.location.href = authUrl;
  };

  // Fetch posts
  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (selectedCategory) params.append('category', selectedCategory);
      if (selectedTag) params.append('tag', selectedTag);

      const response = await fetch(`/api/wordpress/posts?${params}`);
      
      if (!response.ok) {
        if (response.status === 401) {
          WordPressAuth.clearToken();
          setAuthenticated(false);
          setError('Authentication expired. Please login again.');
          return;
        }
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load blog posts. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, selectedTag]);

  // Load posts when authentication or filters change
  useEffect(() => {
    if (authenticated) {
      fetchPosts();
    }
  }, [authenticated, selectedCategory, selectedTag, fetchPosts]);

  // Handle URL parameters after OAuth2 callback
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authStatus = urlParams.get('auth');
    const errorParam = urlParams.get('error');

    if (authStatus === 'success') {
      setAuthenticated(true);
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (errorParam) {
      setError('Authentication failed. Please try again.');
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">WordPress Blog Access</h2>
            <p className="text-foreground/70 max-w-md mx-auto">
              Connect to your WordPress blog to view and manage your posts. 
              This requires authentication with WordPress.com.
            </p>
          </div>
          <button
            onClick={handleAuthentication}
            className="px-6 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            🔐 Connect to WordPress
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mx-auto"></div>
          <p className="text-foreground/70">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-red-600 text-6xl">⚠️</div>
          <h3 className="text-xl font-semibold">Error Loading Posts</h3>
          <p className="text-foreground/70 max-w-md mx-auto">{error}</p>
          <button
            onClick={fetchPosts}
            className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-foreground/20 rounded-md bg-background"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="px-4 py-2 border border-foreground/20 rounded-md bg-background"
        >
          <option value="">All Tags</option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">No Posts Found</h3>
          <p className="text-foreground/70">
            {selectedCategory || selectedTag 
              ? 'No posts match your current filters.'
              : 'No blog posts available at the moment.'
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg border border-foreground/10 p-6 hover:bg-foreground/[.03] transition-colors"
            >
              {/* Featured Image */}
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <div className="mb-4">
                  <Image
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              )}

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg leading-tight">
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </h3>
                
                <div className="text-sm text-foreground/70">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                <div 
                  className="text-sm text-foreground/80 line-clamp-3"
                  dangerouslySetInnerHTML={{ 
                    __html: post.excerpt.rendered.replace(/<[^>]*>/g, '') 
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Authentication Status */}
      <div className="text-center pt-8 border-t border-foreground/10">
        <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Connected to WordPress</span>
        </div>
        <button
          onClick={() => {
            WordPressAuth.clearToken();
            setAuthenticated(false);
            setPosts([]);
          }}
          className="mt-2 text-xs text-foreground/50 hover:text-foreground/70 transition-colors"
        >
          Disconnect
        </button>
      </div>
    </div>
  );
}
