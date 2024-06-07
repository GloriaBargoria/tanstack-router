import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/$postid')({
  component: () => <div>Hello /post/$postid!</div>
})