import { createServerFn } from "@tanstack/react-start";
import { skillService, SkillsResponse } from "@/api/skills";
import { OptionalFetcher } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";

export const getSkillsInServerFn = createServerFn().handler(() => {
  return skillService.getSkills() as unknown as OptionalFetcher<
    undefined,
    undefined,
    SkillsResponse
  >;
});

export const skillsQueryOptions = queryOptions({
  queryKey: ["skills"],
  queryFn: getSkillsInServerFn,
});

