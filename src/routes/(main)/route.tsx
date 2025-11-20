import { Outlet, createFileRoute } from "@tanstack/react-router";
import Left from "@/components/layout/left";
import Right from "@/components/layout/right";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Home } from "@/payload-types";
import { homeQueryOptions } from "@/serverfn/home";
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
