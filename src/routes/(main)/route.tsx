import { Outlet, createFileRoute } from "@tanstack/react-router";
import Left from "@/components/layout/left";
import Right from "@/components/layout/right";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { homeService } from "@/api";
import { createServerFn, OptionalFetcher } from "@tanstack/react-start";
import { Home } from "@/payload-types";

const getHomeInSeverFn = createServerFn().handler(() => {
  return homeService.getHome() as unknown as OptionalFetcher<
    undefined,
    undefined,
    Home
  >;
});
const homeQueryOptions = queryOptions({
  queryKey: ["home"],
  queryFn: getHomeInSeverFn,
});
export const Route = createFileRoute("/(main)")({
  component: MainLayout,
  loader: async ({ context: { queryClient } }) => {
    await queryClient.ensureQueryData(homeQueryOptions);
  },
});

function MainLayout() {
  const { data: homeData } = useSuspenseQuery(homeQueryOptions) as unknown as {
    data: Home;
  };
  return (
    <div className="h-screen grid grid-cols-12 overflow-hidden">
      <Left homeData={homeData} />
      <Right>
        <Outlet />
      </Right>
    </div>
  );
}
