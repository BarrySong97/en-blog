import { a as createServerRpc, c as createServerFn } from "./server.mjs";
import { b as blogService } from "./blogs-Cd-pRNEC.mjs";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "qs-esm";
const getBlogsInSeverFn_createServerFn_handler = createServerRpc("502a02bfeb42ed000b78f43e20fc335bb3e654f4e3b56cd54ca59e260b5583e1", (opts, signal) => {
  return getBlogsInSeverFn.__executeServer(opts, signal);
});
const getBlogsInSeverFn = createServerFn().handler(getBlogsInSeverFn_createServerFn_handler, () => {
  return blogService.getBlogs();
});
export {
  getBlogsInSeverFn_createServerFn_handler
};
