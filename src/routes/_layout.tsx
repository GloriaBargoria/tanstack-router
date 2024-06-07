import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

export default function Layout() {
  return (
    <div>
      layout here
      <div>
        <Outlet />
      </div>
    </div>
  );
}
