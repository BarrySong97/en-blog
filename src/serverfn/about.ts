import { createServerFn } from "@tanstack/react-start";
import { aboutService } from "@/api/about";
import { OptionalFetcher } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";
import { About } from "@/payload-types";

export const getAboutInServerFn = createServerFn().handler(() => {
  return aboutService.getAbout() as unknown as OptionalFetcher<
    undefined,
    undefined,
    About
  >;
});

export const aboutQueryOptions = queryOptions({
  queryKey: ["about"],
  queryFn: getAboutInServerFn,
});

