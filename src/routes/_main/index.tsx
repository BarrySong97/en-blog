import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { blogService } from "@/api/blogs";
import BlogList from "@/components/home/blog-list";
import type { Article } from "@/data/articles";
import type { Blog } from "@/payload-types";

const blogsQueryOptions = queryOptions({
  queryKey: ["blogs"],
  queryFn: () => blogService.getBlogs(),
});

export const Route = createFileRoute("/_main/")({
  component: HomePage,
  loader: async ({ context: { queryClient } }) => {
    await queryClient.ensureQueryData(blogsQueryOptions);
  },
});

function HomePage() {
  const { data } = useSuspenseQuery(blogsQueryOptions);

  // Transform Blog[] to Article[] for compatibility with BlogItem
  const articles: Article[] =
    data?.docs.map((blog: Blog) => {
      const coverUrl =
        typeof blog.coverImage === "object" && blog.coverImage?.url
          ? blog.coverImage.url
          : "";

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
        cover: coverUrl,
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
