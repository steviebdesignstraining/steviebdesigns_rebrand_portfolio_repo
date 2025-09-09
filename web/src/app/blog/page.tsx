import Link from "next/link";
import { Suspense } from "react";
import BlogFilters from "@/components/BlogFilters";

type WpPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; taxonomy: string }>>;
  };
};

type WpCategory = {
  id: number;
  name: string;
  slug: string;
};

type WpTag = {
  id: number;
  name: string;
  slug: string;
};

async function getPosts(categoryId?: string, tagId?: string): Promise<WpPost[]> {
  const apiRoot = process.env.NEXT_PUBLIC_WP_API_URL;
  if (!apiRoot) return [];
  
  let url = `${apiRoot.replace(/\/$/, "")}/posts?per_page=9&_embed`;
  if (categoryId) url += `&categories=${categoryId}`;
  if (tagId) url += `&tags=${tagId}`;
  
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  return (await res.json()) as WpPost[];
}

async function getCategories(): Promise<WpCategory[]> {
  const apiRoot = process.env.NEXT_PUBLIC_WP_API_URL;
  if (!apiRoot) return [];
  const res = await fetch(`${apiRoot.replace(/\/$/, "")}/categories?per_page=20`, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  return (await res.json()) as WpCategory[];
}

async function getTags(): Promise<WpTag[]> {
  const apiRoot = process.env.NEXT_PUBLIC_WP_API_URL;
  if (!apiRoot) return [];
  const res = await fetch(`${apiRoot.replace(/\/$/, "")}/tags?per_page=20`, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  return (await res.json()) as WpTag[];
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; tag?: string };
}) {
  const [posts, categories, tags] = await Promise.all([
    getPosts(searchParams.category, searchParams.tag),
    getCategories(),
    getTags(),
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Blog</h1>
      <p className="mt-2 text-foreground/70">
        {posts.length === 0
          ? "Connect a WordPress API via NEXT_PUBLIC_WP_API_URL to show posts."
          : `Latest ${posts.length} posts`}
      </p>

      <Suspense fallback={<div className="mt-6 h-12 bg-foreground/5 rounded-md animate-pulse" />}>
        <BlogFilters categories={categories} tags={tags} />
      </Suspense>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length === 0
          ? Array.from({ length: 6 }).map((_, idx) => (
              <article key={idx} className="rounded-lg border border-foreground/10 p-5">
                <div className="aspect-video rounded-md bg-foreground/10" />
                <h2 className="mt-4 font-medium">Sample Post Title {idx + 1}</h2>
                <p className="text-sm text-foreground/70 mt-1">Short excerpt for the sample post goes here.</p>
                <span className="inline-block mt-3 text-sm opacity-60">Read more</span>
              </article>
            ))
          : posts.map((post) => {
              const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              const postCategories = post._embedded?.["wp:term"]?.[0]?.filter(t => t.taxonomy === "category") || [];
              const postTags = post._embedded?.["wp:term"]?.[0]?.filter(t => t.taxonomy === "post_tag") || [];
              
              return (
                <article key={post.id} className="rounded-lg border border-foreground/10 p-5 hover:bg-foreground/[.03] transition">
                  <div className="aspect-video rounded-md bg-foreground/10 overflow-hidden">
                    {img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={img} alt="Featured" className="w-full h-full object-cover" />
                    ) : null}
                  </div>
                  <h2 className="mt-4 font-medium" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <p className="text-sm text-foreground/70 mt-1" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  
                  {(postCategories.length > 0 || postTags.length > 0) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {postCategories.map((cat) => (
                        <span key={cat.id} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded">
                          {cat.name}
                        </span>
                      ))}
                      {postTags.map((tag) => (
                        <span key={tag.id} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link href={post.link} target="_blank" className="inline-block mt-3 text-sm underline">Read more</Link>
                </article>
              );
            })}
      </div>
    </div>
  );
}
