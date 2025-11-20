import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { BlogsResponse } from "@/api/blogs";
import BlogList from "@/components/home/blog-list";
import type { Article } from "@/data/articles";
import type { Blog, Media } from "@/payload-types";
import { blogsQueryOptions } from "@/serverfn/blogs";

export const Route = createFileRoute("/(main)/")({
  component: HomePage,
  loader: async ({ context: { queryClient } }) => {
    await queryClient.ensureQueryData(blogsQueryOptions);
  },
});

function HomePage() {
  const { data } = useSuspenseQuery(blogsQueryOptions) as unknown as {
    data: BlogsResponse;
  };

  // Transform Blog[] to Article[] for compatibility with BlogItem
  const articles: Article[] =
    data?.docs.map((blog: Blog) => {
      return {
        id: String(blog.id),
        slug: blog.slug,
        title: blog.title,
        preview: blog.excerpt,
        content: "", // Not used in list view
        author: "Barry Song", // Placeholder as author is not in Blog type
        date: new Date(blog.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        cover: blog.coverImage as Media,
      };
    }) || [];

  return (
    <div className="flex flex-col gap-12 pb-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold tracking-tight">Latest Articles</h2>
        <p className="text-gray-500">Thoughts, tutorials, and insights.</p>
      </div>

      {/*  render BlogList on client to ensure animation triggers correctly */}
      <BlogList articles={articles} />
    </div>
  );
}
