import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/')({
  component: Post
})

export default function Post(){
  
  return(
    <div className='text-black'>
      absolute post route
    </div>
  )
}