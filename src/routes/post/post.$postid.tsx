import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/post/$postid')({
  component: () => PostId
})

export default function PostId(){
  const {postid} = Route.useParams()
  return(
    <div>POST {postid}</div>
  )
}