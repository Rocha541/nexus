import { createFileRoute } from '@tanstack/react-router'
import Login from '../view/pages/login/login'

export const Route = createFileRoute('/_layout/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
     <Login />
  </>
}

