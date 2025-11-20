import { createServerFn } from "@tanstack/react-start";
import { blogService, BlogsResponse } from "@/api/blogs";
import { OptionalFetcher } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export const getBlogsInSeverFn = createServerFn().handler(() => {
  return blogService.getBlogs() as unknown as OptionalFetcher<
    undefined,
    undefined,
    BlogsResponse
  >;
});

export const blogsQueryOptions = queryOptions({
  queryKey: ["blogs"],
  queryFn: getBlogsInSeverFn,
});

