import BlogNavigation from "@/components/BlogNavigation";
import BlogAppContent from "@/components/BlogAppContent";

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

async function getCategories(): Promise<WpCategory[]> {
  const apiRoot = process.env.NEXT_PUBLIC_WP_API_URL;
  if (!apiRoot) return [];
  
  try {
    const res = await fetch(`${apiRoot.replace(/\/$/, "")}/categories`, { 
      next: { revalidate: 300 } 
    });
    if (!res.ok) return [];
    
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return [];
    }
    
    return (await res.json()) as WpCategory[];
  } catch (error) {
    console.warn('Failed to fetch WordPress categories:', error);
    return [];
  }
}

async function getTags(): Promise<WpTag[]> {
  const apiRoot = process.env.NEXT_PUBLIC_WP_API_URL;
  if (!apiRoot) return [];
  
  try {
    const res = await fetch(`${apiRoot.replace(/\/$/, "")}/tags`, { 
      next: { revalidate: 300 } 
    });
    if (!res.ok) return [];
    
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return [];
    }
    
    return (await res.json()) as WpTag[];
  } catch (error) {
    console.warn('Failed to fetch WordPress tags:', error);
    return [];
  }
}

export default async function BlogPage() {
  // Get categories and tags for the filter dropdowns
  const [categories, tags] = await Promise.all([
    getCategories(),
    getTags(),
  ]);

  return (
    <div className="min-h-screen">
      <BlogNavigation />
      
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Blog</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Insights, tutorials, and updates on QA engineering, automation, and modern web development.
          </p>
        </div>

        <BlogAppContent categories={categories} tags={tags} />
      </main>
    </div>
  );
}