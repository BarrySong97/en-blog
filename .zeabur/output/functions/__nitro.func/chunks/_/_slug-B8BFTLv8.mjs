import { a as createServerRpc, c as createServerFn } from "./server.mjs";
import { b as blogService } from "./blogs-Cd-pRNEC.mjs";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "qs-esm";
const getBlogBySlugInSeverFn_createServerFn_handler = createServerRpc("3419118dd18f50840fb043ae235978305367f084dd422cb752b6eaf1baf4a91a", (opts, signal) => {
  return getBlogBySlugInSeverFn.__executeServer(opts, signal);
});
const getBlogBySlugInSeverFn = createServerFn().inputValidator((data) => data).handler(getBlogBySlugInSeverFn_createServerFn_handler, ({
  data
}) => {
  return blogService.getBlogBySlug(data.slug);
});
export {
  getBlogBySlugInSeverFn_createServerFn_handler
};
