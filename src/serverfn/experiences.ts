import { createServerFn } from "@tanstack/react-start";
import { experienceService, ExperiencesResponse } from "@/api/experiences";
import { OptionalFetcher } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export const getExperiencesInServerFn = createServerFn().handler(() => {
  return experienceService.getExperiences() as unknown as OptionalFetcher<
    undefined,
    undefined,
    ExperiencesResponse
  >;
});

export const experiencesQueryOptions = queryOptions({
  queryKey: ["experiences"],
  queryFn: getExperiencesInServerFn,
});

