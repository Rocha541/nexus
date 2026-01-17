import { createFileRoute, Outlet } from '@tanstack/react-router'
import AuthLayout from '../view/layouts/authLayout'

export const Route = createFileRoute('/_layout')({
    component: RouteComponent,
})

function RouteComponent() {
  return <> <AuthLayout /> <Outlet /> </>
}
