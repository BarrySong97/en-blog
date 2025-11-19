import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
import { c as createLucideIcon } from "./createLucideIcon.mjs";
import "react";
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
function ProductItem({
  title,
  description,
  tags,
  link,
  image,
  index
}) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 },
      className: "h-full",
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full",
          "data-cursor-text": "View More",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "aspect-video w-full overflow-hidden bg-gray-100 relative", children: [
              image ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: image,
                  alt: title,
                  className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-gray-50 text-gray-300", children: /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold opacity-20", children: title[0] }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-black", children: /* @__PURE__ */ jsx(ExternalLink, { size: 18 }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-gray-600 transition-colors", children: title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed line-clamp-3", children: description })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto flex flex-wrap gap-2", children: tags.map((tag) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-2.5 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full border border-gray-100",
                  children: tag
                },
                tag
              )) })
            ] })
          ]
        }
      )
    }
  );
}
function ProductsPage() {
  const products = [{
    title: "DevTools Pro",
    description: "A comprehensive suite of developer tools to boost your productivity. Includes performance profiling, network inspection, and state management debugging.",
    tags: ["Electron", "React", "Rust"],
    link: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600&h=900"
  }, {
    title: "Design System UI",
    description: "A modern, accessible design system for building consistent user interfaces. Features a complete set of accessible components and comprehensive documentation.",
    tags: ["Figma", "React", "Tailwind"],
    link: "#",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1600&h=900"
  }, {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets and reports. Visualize your data with interactive charts and gain actionable insights.",
    tags: ["Next.js", "D3.js", "TypeScript"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600&h=900"
  }, {
    title: "Task Master",
    description: "A minimalist task management app focused on deep work and focus. Organize your tasks, set priorities, and track your progress with ease.",
    tags: ["Vue", "Firebase", "PWA"],
    link: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600&h=900"
  }];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12 pb-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold tracking-tight", children: "Products" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Open source projects and commercial products I've built." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: products.map((product, index) => /* @__PURE__ */ jsx(ProductItem, { ...product, index }, product.title)) })
  ] });
}
export {
  ProductsPage as component
};
