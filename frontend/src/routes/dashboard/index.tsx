import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../view/pages/dashboard/dashboard'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard/>
}
