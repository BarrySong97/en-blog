import { jsx } from "react/jsx-runtime";
function Right({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "scroll-container",
      className: "col-span-8 p-12 bg-white h-screen overflow-y-auto lenis",
      style: { viewTransitionName: "right-panel" },
      children
    }
  );
}
export {
  Right as R
};
