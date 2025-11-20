import { createServerFn } from "@tanstack/react-start";
import { blogService } from "@/api/blogs";
import { OptionalFetcher } from "@tanstack/react-start";
import { Blog } from "@/payload-types";
import { queryOptions } from "@tanstack/react-query";

export const getBlogBySlugInSeverFn = createServerFn()
  .inputValidator((data: { slug: string }) => data)
  .handler(({ data }) => {
    return blogService.getBlogBySlug(data.slug) as unknown as OptionalFetcher<
      undefined,
      { slug: string },
      Blog
    >;
  });

export const blogQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["blogs", "detail", slug],
    queryFn: () => getBlogBySlugInSeverFn({ data: { slug } }),
  });
