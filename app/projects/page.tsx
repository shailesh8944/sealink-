import type { Metadata } from 'next'
import ProjectsClient from '@/components/pages/ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Sealink project portfolio — AFCOS, autonomous maritime systems, digital twin & engine modelling, and marine propulsion development.',
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
