import { createFileRoute } from '@tanstack/react-router'
import Register from '../view/pages/register/register'

export const Route = createFileRoute('/_layout/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
     <Register />
     </>
}
