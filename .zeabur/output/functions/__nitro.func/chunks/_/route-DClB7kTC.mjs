import { jsxs, jsx } from "react/jsx-runtime";
import { Outlet, useRouterState, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { R as Right } from "./right-C07iTDah.mjs";
import { G as Github, M as Mail } from "./mail.mjs";
import { c as createLucideIcon } from "./createLucideIcon.mjs";
import "react";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
];
const Twitter = createLucideIcon("twitter", __iconNode);
function Left() {
  const router = useRouterState();
  const menuItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/about" },
    { label: "PRODUCTS", to: "/products" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "col-span-4 h-screen sticky top-0 p-12 flex flex-col justify-between border-r border-gray-200 bg-[#f2f2f2]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "w-24 h-24 rounded-full overflow-hidden bg-gray-200",
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: {
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut"
          },
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1760",
              alt: "Profile",
              className: "w-full h-full object-cover"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: {
            delay: 0.3,
            duration: 0.5,
            ease: "easeOut"
          },
          children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Barry Song" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-2 text-lg", children: "Frontend Developer & UI/UX Enthusiast. Creating digital experiences that matter." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "flex gap-4 text-gray-600",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: {
            delay: 0.4,
            duration: 0.5,
            ease: "easeOut"
          },
          children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "hover:text-black transition-colors",
                "data-cursor": "-md",
                children: /* @__PURE__ */ jsx(Github, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "hover:text-black transition-colors",
                "data-cursor": "-md",
                children: /* @__PURE__ */ jsx(Twitter, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "hover:text-black transition-colors",
                "data-cursor": "-md",
                children: /* @__PURE__ */ jsx(Linkedin, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "hover:text-black transition-colors",
                "data-cursor": "-md",
                children: /* @__PURE__ */ jsx(Mail, { size: 20 })
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: menuItems.map((item, index) => {
      const isActive = router.location.pathname === item.to;
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: {
            delay: 0.5 + index * 0.1,
            duration: 0.5,
            ease: "easeOut"
          },
          className: "w-fit",
          children: /* @__PURE__ */ jsx(Link, { to: item.to, className: "block", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex items-center gap-2 relative",
              initial: "rest",
              whileHover: "hover",
              animate: "rest",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "w-2 h-2 bg-black rounded-full",
                    initial: { opacity: 0, scale: 0 },
                    animate: {
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `text-xl font-medium transition-colors ${isActive ? "text-black" : "text-gray-400 group-hover:text-gray-600"}`,
                    children: item.label
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute bottom-0 left-4 right-0 h-[2px] bg-black origin-left",
                    variants: {
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 }
                    },
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }
                )
              ]
            }
          ) })
        },
        item.to
      );
    }) })
  ] });
}
function MainLayout() {
  return /* @__PURE__ */ jsxs("div", { className: "h-screen grid grid-cols-12 overflow-hidden", children: [
    /* @__PURE__ */ jsx(Left, {}),
    /* @__PURE__ */ jsx(Right, { children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] });
}
export {
  MainLayout as component
};
