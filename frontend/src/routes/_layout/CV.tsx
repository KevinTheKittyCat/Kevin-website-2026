import { createFileRoute } from '@tanstack/react-router'
import { DigitalCV } from '@/components/CV/DigitalCV'

export const Route = createFileRoute('/_layout/CV')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DigitalCV />
}
