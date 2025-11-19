import { Outlet, createFileRoute } from "@tanstack/react-router";
import Left from "@/components/layout/left";
import Right from "@/components/layout/right";

export const Route = createFileRoute("/_main")({
  component: MainLayout,
});

function MainLayout() {
  return (
    <div className="h-screen grid grid-cols-12 overflow-hidden">
      <Left />
      <Right>
        <Outlet />
      </Right>
    </div>
  );
}
