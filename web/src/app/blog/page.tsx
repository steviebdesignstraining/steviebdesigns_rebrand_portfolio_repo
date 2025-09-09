import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Blog</h1>
      <p className="mt-2 text-foreground/70">Posts loaded via WordPress REST API (placeholder).</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <article key={idx} className="rounded-lg border border-foreground/10 p-5 hover:bg-foreground/[.03] transition">
            <div className="aspect-video rounded-md bg-foreground/10" />
            <h2 className="mt-4 font-medium">Sample Post Title {idx + 1}</h2>
            <p className="text-sm text-foreground/70 mt-1">Short excerpt for the sample post goes here.</p>
            <Link href="#" className="inline-block mt-3 text-sm underline">Read more</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
