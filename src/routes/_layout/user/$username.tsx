import { createFileRoute } from '@tanstack/react-router'
import UserComponent from '../../../components/UserComponent';

export const Route = createFileRoute('/_layout/user/$username')({
  component: UserComponent
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