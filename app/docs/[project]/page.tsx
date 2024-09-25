import { Metadata } from 'next'
import ProjectDocumentation from './ProjectDocumentation'

const projectData = {
  'image-suite': {
    title: 'Image Suite',
    description: 'A comprehensive image processing and manipulation tool.',
  },
  'ezsender': {
    title: 'EZSender',
    description: 'A streamlined email campaign management system.',
  },
  'portfolio-site': {
    title: 'Portfolio Site',
    description: 'A personal portfolio website showcasing projects and skills.',
  },
  'speedystats': {
    title: 'SpeedyStats',
    description: 'A real-time analytics dashboard for website performance monitoring.',
  }
}

type Props = {
  params: { project: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectData[params.project as keyof typeof projectData]
  return {
    title: project ? `${project.title} | Project Documentation` : 'Project Not Found',
    description: project?.description || 'Project documentation not available',
  }
}

export default function Page({ params }: Props) {
  return <ProjectDocumentation project={params.project} />
}