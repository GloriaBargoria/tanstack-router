import { Link, useParams } from "@tanstack/react-router";

const UserComponent = () => {
  const { username } = useParams({ strict: false });
  return (
    <>
      <div>User component here {username}</div>
      <Link to="/post/$postid" params={{ postid: "1234postid" }}>
        Post ids
      </Link>
    </>
  );
};

export default UserComponent;
