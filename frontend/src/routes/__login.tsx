import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/__login"!</div>
}
