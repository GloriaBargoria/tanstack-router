import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/post/$postid")({
  component: PostId,
});

function PostId() {
  const { postid } = Route.useParams();
  
  return <div>POST {postid}</div>;
}
