import { createServerFn } from "@tanstack/react-start";
import { homeService } from "@/api/home";
import { OptionalFetcher } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";
import { Home } from "@/payload-types";

export const getHomeInSeverFn = createServerFn().handler(() => {
  return homeService.getHome() as unknown as OptionalFetcher<
    undefined,
    undefined,
    Home
  >;
});

export const homeQueryOptions = queryOptions({
  queryKey: ["home"],
  queryFn: getHomeInSeverFn,
});

