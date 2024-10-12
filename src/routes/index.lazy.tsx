import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});
// add commen t

function Home() {
  return (
    <div>
      <p>Homepage here</p>
      <Link
        to="/search"
        search={{
          query: "Gloria Jemutai",
          limit: 5,
        }}
      >
        Search for me
      </Link>
    </div>
  );
}
