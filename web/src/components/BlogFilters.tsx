"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Category = {
  id: number;
  name: string;
  slug: string;
};

type Tag = {
  id: number;
  name: string;
  slug: string;
};

type Props = {
  categories: Category[];
  tags: Tag[];
};

export default function BlogFilters({ categories, tags }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryChange = (categoryId: string) => {
    router.push(`/blog?${createQueryString("category", categoryId)}`);
  };

  const handleTagChange = (tagId: string) => {
    router.push(`/blog?${createQueryString("tag", tagId)}`);
  };

  const clearFilters = () => {
    router.push("/blog");
  };

  const currentCategory = searchParams.get("category");
  const currentTag = searchParams.get("tag");

  if (categories.length === 0 && tags.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        {(currentCategory || currentTag) && (
          <button
            onClick={clearFilters}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        {categories.length > 0 && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Categories:</label>
            <select
              value={currentCategory || ""}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-3 py-2 text-sm border border-foreground/20 rounded-md bg-background"
            >
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id.toString()}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {tags.length > 0 && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Tags:</label>
            <select
              value={currentTag || ""}
              onChange={(e) => handleTagChange(e.target.value)}
              className="px-3 py-2 text-sm border border-foreground/20 rounded-md bg-background"
            >
              <option value="">All tags</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id.toString()}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
