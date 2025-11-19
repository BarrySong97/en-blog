import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
import { M as Mail, G as Github } from "./mail.mjs";
import { c as createLucideIcon } from "./createLucideIcon.mjs";
import "react";
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
const SectionTitle = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx("h2", { className: `text-3xl font-bold mb-6 ${className || ""}`, ...props, children });
};
const Paragraph = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx("p", { className: `text-lg leading-relaxed ${className || ""}`, ...props, children });
};
function AboutPage() {
  const experiences = [{
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Leading the frontend team, architectural decision making, and mentoring junior developers.",
    logo: "https://ui-avatars.com/api/?name=TC&background=random",
    url: "https://example.com"
  }, {
    role: "Frontend Developer",
    company: "Startup Inc",
    period: "2019 - 2021",
    description: "Built key features for the main product using React and TypeScript.",
    logo: "https://ui-avatars.com/api/?name=SI&background=random",
    url: "https://example.com"
  }];
  const skills = ["React", "TypeScript", "Next.js", "TanStack", "TailwindCSS", "Node.js", "PostgreSQL", "Framer Motion"];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-16 pb-20 max-w-4xl", children: [
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5
    }, className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx(SectionTitle, { children: "ABOUT ME" }),
      /* @__PURE__ */ jsx(Paragraph, { children: "I'm Barry Song, a developer based in Digital World. I specialize in the React ecosystem and enjoy solving complex problems with simple, elegant solutions. When I'm not coding, you can find me exploring new technologies or contributing to open source." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gray-200" }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.2
    }, className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ jsx(SectionTitle, { children: "EXPERIENCE" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8", children: experiences.map((exp, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-start gap-6", children: [
        /* @__PURE__ */ jsx("img", { src: exp.logo, alt: `${exp.company} logo`, className: "w-12 h-12 rounded-lg object-cover bg-gray-100" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: exp.role }),
          /* @__PURE__ */ jsx("a", { href: exp.url, target: "_blank", rel: "noopener noreferrer", className: "font-medium hover:text-blue-600 hover:underline transition-colors w-fit", children: exp.company }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: exp.period }),
          /* @__PURE__ */ jsx(Paragraph, { className: "mt-2 text-base", children: exp.description })
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gray-200" }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.3
    }, className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ jsx(SectionTitle, { children: "TECH STACK" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: skills.map((skill) => /* @__PURE__ */ jsx("span", { className: "px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors cursor-default", children: skill }, skill)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gray-200" }),
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      delay: 0.4
    }, className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ jsx(SectionTitle, { children: "GET IN TOUCH" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "mailto:barry@example.com", className: "group flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg text-gray-700", children: /* @__PURE__ */ jsx(Mail, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 font-medium", children: "Email" }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: "barry@example.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "text-gray-400 group-hover:text-gray-900 transition-colors", size: 20 })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "https://github.com/barrysong", target: "_blank", rel: "noopener noreferrer", className: "group flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg text-gray-700", children: /* @__PURE__ */ jsx(Github, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 font-medium", children: "GitHub" }),
              /* @__PURE__ */ jsx("div", { className: "font-bold", children: "@barrysong" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "text-gray-400 group-hover:text-gray-900 transition-colors", size: 20 })
        ] })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
