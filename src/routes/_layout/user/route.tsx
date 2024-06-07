import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/user")({
  component: User1,
});

export default function User1() {
  return (
    <div>User
      <p>Hello absolute user</p>
    </div>
  );
}
