import Link from "next/link";

type WpPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
  };
};

async function getPosts(): Promise<WpPost[]> {
  const apiRoot = process.env.NEXT_PUBLIC_WP_API_URL;
  if (!apiRoot) return [];
  const url = `${apiRoot.replace(/\/$/, "")}/posts?per_page=9&_embed`;
  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  return (await res.json()) as WpPost[];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Blog</h1>
      <p className="mt-2 text-foreground/70">
        {posts.length === 0
          ? "Connect a WordPress API via NEXT_PUBLIC_WP_API_URL to show posts."
          : `Latest ${posts.length} posts`}
      </p>

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
                  <Link href={post.link} target="_blank" className="inline-block mt-3 text-sm underline">Read more</Link>
                </article>
              );
            })}
      </div>
    </div>
  );
}
