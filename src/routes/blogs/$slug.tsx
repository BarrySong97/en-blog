import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import Right from "@/components/layout/right";
import { motion } from "motion/react";
import BlogContent from "@/components/blog/Content";
import {
  getHeadings,
  type HeadingNode,
} from "@/components/richtext/get-headings";
import { Blog, Media } from "@/payload-types";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { blogQueryOptions } from "@/serverfn/blog";
import { homeQueryOptions } from "@/serverfn/home";
import { getImageUrl } from "@/lib/get-image-url";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogPost,
  loader: async ({ context: { queryClient }, params: { slug } }) => {
    const [blogData] = await Promise.all([
      queryClient.ensureQueryData(blogQueryOptions(slug)),
      queryClient.ensureQueryData(homeQueryOptions),
    ]);

    const fullBlog = (blogData as unknown as { docs: Blog[] })?.docs?.[0];
    // Return only necessary fields for SEO to avoid recursive type issues with Blog interface
    return {
      blog: fullBlog
        ? {
            title: fullBlog.title,
            excerpt: fullBlog.excerpt,
            coverImage: fullBlog.coverImage,
          }
        : undefined,
    };
  },
  head: ({ loaderData }) => {
    const blog = loaderData?.blog;
    console.log(blog);
    if (!blog) {
      console.log("no blog");
      return {
        title: "Barry Song's Blog",
      };
    }
    return {
      meta: [
        {
          title: `${blog.title} | Barry Song's Blog`,
        },
        {
          name: "description",
          content: blog.excerpt,
        },
        {
          property: "og:title",
          content: blog.title,
        },
        {
          property: "og:description",
          content: blog.excerpt,
        },
        {
          property: "og:image",
          content:
            getImageUrl((blog.coverImage as Media)?.sizes?.tablet?.url ?? "") ||
            "/og.webp",
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: blog.title,
        },
        {
          name: "twitter:description",
          content: blog.excerpt,
        },
        {
          name: "twitter:image",
          content: (blog.coverImage as Media)?.url || "/og.webp",
        },
      ],
    };
  },
});

function BlogPost() {
  const { slug } = Route.useParams();
  const { data } = useSuspenseQuery(blogQueryOptions(slug)) as unknown as {
    data: { docs: Blog[] };
  };
  const article = data.docs[0];

  if (!article) {
    return <div>Article not found</div>;
  }

  const headings = getHeadings(
    article?.content?.root?.children as unknown as HeadingNode[]
  );

  return (
    <div className="h-screen grid grid-cols-12 overflow-hidden">
      {/* Left Sidebar - Custom for Blog Post */}
      <BlogSidebar article={article} />

      {/* Right Content */}
      <Right>
        <div className="max-w-3xl mx-auto flex flex-col gap-12 pb-20">
          <motion.div
            className="prose prose-lg max-w-none pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <BlogContent
              blog={article}
              toc={
                new Map(
                  headings.map((heading) => [heading.anchor, heading])
                ) as any
              }
            />
          </motion.div>
        </div>
      </Right>
    </div>
  );
}
