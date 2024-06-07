import { createFileRoute } from "@tanstack/react-router";

type SearchParams = {
  query: string;
  limit: number;
};

export const Route = createFileRoute("/search")({
  component: Search,
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      query: search.query as string,
      limit: Number(search.limit ?? 10),
    };
  },
});

function Search() {
  const { query, limit } = Route.useSearch();
  return (
    <div>
      <p>Search page here</p>
      <p>Search page Query: {query}</p>
      <p>Search page Limit: {limit}</p>
    </div>
  );
}
