import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import Right from "@/components/layout/right";
import { motion } from "motion/react";
import BlogContent from "@/components/blog/Content";
import {
  getHeadings,
  type HeadingNode,
} from "@/components/richtext/get-headings";
import { Blog } from "@/payload-types";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { blogQueryOptions } from "@/serverfn/blog";
import { homeQueryOptions } from "@/serverfn/home";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogPost,
  loader: async ({ context: { queryClient }, params: { slug } }) => {
    await Promise.all([
      queryClient.ensureQueryData(blogQueryOptions(slug)),
      queryClient.ensureQueryData(homeQueryOptions),
    ]);
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
