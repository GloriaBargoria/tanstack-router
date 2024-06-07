import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user/$username')({
  component: User
})

export default function User() {
  const { username } = Route.useParams();

  console.log("username", username)

  return (
    <div>
      <p>Hello {username}</p>
    </div>
  );
}