import { jsxs, jsx } from "react/jsx-runtime";
import { c as createSsrRpc } from "./router-Cg6pBZHi.mjs";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { b as blogService } from "./blogs-Cd-pRNEC.mjs";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { I as ImageWithFallback } from "./ImageWithFallback-JZsbMWov.mjs";
import { c as createServerFn } from "./server.mjs";
import "@tanstack/react-router-ssr-query";
import "@tanstack/react-router-devtools";
import "@tanstack/react-devtools";
import "@tanstack/react-query-devtools";
import "react";
import "lenis";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "qs-esm";
import "blurhash";
import "@unpic/react";
import "clsx";
import "tailwind-merge";
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
function BlogItem({ article }) {
  return /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children: /* @__PURE__ */ jsx(
    Link,
    {
      to: "/blogs/$slug",
      params: { slug: article.slug },
      className: "group block",
      "data-cursor-text": "Read More",
      children: /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "w-48 h-32 shrink-0 overflow-hidden rounded-lg bg-gray-100", children: /* @__PURE__ */ jsx(
          ImageWithFallback,
          {
            image: article.cover,
            alt: article.title,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-gray-400", children: [
            /* @__PURE__ */ jsx("span", { children: article.date }),
            /* @__PURE__ */ jsx("span", { children: "•" }),
            /* @__PURE__ */ jsx("span", { children: article.author })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors", children: article.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 line-clamp-2 leading-relaxed", children: article.preview })
        ] })
      ] })
    }
  ) });
}
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
function BlogList({ articles }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "grid gap-8",
      variants: containerVariants,
      initial: "hidden",
      animate: "show",
      children: articles.map((article) => /* @__PURE__ */ jsx(BlogItem, { article }, article.id))
    }
  );
}
const getBlogsInSeverFn_createServerFn_handler = createSsrRpc("502a02bfeb42ed000b78f43e20fc335bb3e654f4e3b56cd54ca59e260b5583e1");
const getBlogsInSeverFn = createServerFn().handler(getBlogsInSeverFn_createServerFn_handler, () => {
  return blogService.getBlogs();
});
const blogsQueryOptions = queryOptions({
  queryKey: ["blogs"],
  queryFn: getBlogsInSeverFn
});
function HomePage() {
  const {
    data
  } = useSuspenseQuery(blogsQueryOptions);
  const articles = data?.docs.map((blog) => {
    return {
      id: String(blog.id),
      slug: blog.slug,
      title: blog.title,
      preview: blog.excerpt,
      content: "",
      // Not used in list view
      author: "Barry Song",
      // Placeholder as author is not in Blog type
      date: new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }),
      cover: blog.coverImage
    };
  }) || [];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12 pb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold tracking-tight", children: "Latest Articles" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Thoughts, tutorials, and insights." })
    ] }),
    /* @__PURE__ */ jsx(BlogList, { articles })
  ] });
}
export {
  HomePage as component
};
