'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projectData = {
  'image-suite': {
    title: 'Image Suite',
    description: 'A comprehensive image processing and manipulation tool.',
    image: '/images/image-suite.png',
    github: 'https://github.com/yourusername/image-suite',
    liveDemo: 'https://image-suite-demo.com',
    tags: ['React', 'Node.js', 'Express', 'AWS S3', 'WebGL'],
    sections: [
      {
        title: 'Project Overview',
        content: 'Image Suite is a powerful web application designed to provide users with a wide range of image processing capabilities. From basic editing to advanced filters and effects, Image Suite offers a user-friendly interface for both amateur and professional users.'
      },
      {
        title: 'Key Features',
        content: 'Some of the key features of Image Suite include: real-time image filtering, layer-based editing, cloud storage integration, and collaborative editing capabilities.'
      },
      {
        title: 'Technology Stack',
        content: 'Image Suite is built using React for the frontend, Node.js and Express for the backend, and leverages AWS S3 for image storage. We use WebGL for high-performance image processing directly in the browser.'
      },
      {
        title: 'Development Process',
        content: 'The development of Image Suite followed an agile methodology, with two-week sprints and regular stakeholder reviews. We used Git for version control and implemented a CI/CD pipeline using GitHub Actions.'
      },
      {
        title: 'Challenges and Solutions',
        content: 'One of the main challenges we faced was optimizing the performance of complex image processing operations. We overcame this by implementing Web Workers for background processing and utilizing WebAssembly for computationally intensive tasks.'
      },
      {
        title: 'Future Enhancements',
        content: 'Future plans for Image Suite include implementing AI-powered image enhancement features, expanding the range of export formats, and developing a mobile application for on-the-go editing.'
      }
    ]
  },
  'ezsender': {
    title: 'EZSender',
    description: 'A streamlined email campaign management system.',
    image: '/images/ezsender.png',
    github: 'https://github.com/yourusername/ezsender',
    liveDemo: 'https://ezsender-demo.com',
    tags: ['React', 'Node.js', 'AWS SES', 'DynamoDB', 'Lambda'],
    sections: [
      {
        title: 'Project Overview',
        content: 'EZSender is a robust email campaign management system designed to simplify the process of creating, sending, and analyzing email campaigns. It offers an intuitive interface for marketers and businesses to effectively reach their audience.'
      },
      {
        title: 'Key Features',
        content: 'EZSender boasts features such as drag-and-drop email builders, advanced segmentation tools, A/B testing capabilities, and comprehensive analytics dashboards.'
      },
      {
        title: 'Technology Stack',
        content: 'EZSender is built with a React frontend, Node.js backend, and utilizes AWS services including SES for email sending, DynamoDB for data storage, and Lambda for serverless processing.'
      },
      {
        title: 'Development Process',
        content: 'We adopted a test-driven development approach for EZSender, ensuring high code quality and reliability. The project was managed using Jira, with continuous integration handled by Jenkins.'
      },
      {
        title: 'Challenges and Solutions',
        content: 'A significant challenge was ensuring high deliverability rates for emails. We addressed this by implementing IP warming strategies, feedback loops with major ISPs, and rigorous content checking to avoid spam filters.'
      },
      {
        title: 'Future Enhancements',
        content: 'Planned enhancements for EZSender include AI-powered content suggestions, advanced automation workflows, and integration with popular CRM systems.'
      }
    ]
  },
  'portfolio-site': {
    title: 'Portfolio Site',
    description: 'A personal portfolio website showcasing projects and skills.',
    image: '/images/portfolio-site.png',
    github: 'https://github.com/yourusername/portfolio-site',
    liveDemo: 'https://yourdomain.com',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    sections: [
      {
        title: 'Project Overview',
        content: 'This portfolio site serves as a digital resume and project showcase, designed to highlight my skills, experiences, and achievements in web development and cloud computing.'
      },
      {
        title: 'Key Features',
        content: 'The site features a responsive design, interactive project displays, a skill progress visualization, and a contact form for potential employers or clients.'
      },
      {
        title: 'Technology Stack',
        content: 'Built using Next.js for server-side rendering and optimal performance, styled with Tailwind CSS for a clean, modern look, and deployed on Vercel for seamless continuous deployment.'
      },
      {
        title: 'Development Process',
        content: 'The portfolio was developed iteratively, starting with a basic structure and progressively adding features and refining the design based on feedback from peers and mentors.'
      },
      {
        title: 'Challenges and Solutions',
        content: 'One challenge was creating a performant image gallery for project screenshots. This was solved by implementing lazy loading and optimizing images using Next.js Image component.'
      },
      {
        title: 'Future Enhancements',
        content: 'Future plans include adding a blog section to share technical insights, implementing dark mode, and creating interactive demos for featured projects.'
      }
    ]
  },
  'speedystats': {
    title: 'SpeedyStats',
    description: 'A real-time analytics dashboard for website performance monitoring.',
    image: '/images/speedystats.png',
    github: 'https://github.com/yourusername/speedystats',
    liveDemo: 'https://speedystats-demo.com',
    tags: ['Vue.js', 'Go', 'ClickHouse', 'Docker', 'Kubernetes'],
    sections: [
      {
        title: 'Project Overview',
        content: 'SpeedyStats is a comprehensive analytics tool designed to provide real-time insights into website performance, user behavior, and conversion rates. It offers a user-friendly dashboard for businesses to make data-driven decisions.'
      },
      {
        title: 'Key Features',
        content: 'Key features of SpeedyStats include real-time visitor tracking, custom event tracking, funnel analysis, heatmaps, and integration with popular marketing tools.'
      },
      {
        title: 'Technology Stack',
        content: 'SpeedyStats is built with a Vue.js frontend for reactive updates, a Go backend for high-performance data processing, and uses ClickHouse for efficient storage and querying of large datasets.'
      },
      {
        title: 'Development Process',
        content: 'The development followed a microservices architecture, with each major feature developed as a separate service. We used Docker for containerization and Kubernetes for orchestration, ensuring scalability and ease of deployment.'
      },
      {
        title: 'Challenges and Solutions',
        content: 'A major challenge was handling the high volume of incoming data in real-time. This was addressed by implementing a message queue system using Apache Kafka and optimizing our data aggregation algorithms.'
      },
      {
        title: 'Future Enhancements',
        content: 'Planned enhancements for SpeedyStats include implementing machine learning models for predictive analytics, expanding the range of integrations with third-party tools, and developing a mobile app for on-the-go analytics monitoring.'
      }
    ]
  }
}

type Props = {
  project: string
}

export default function ProjectDocumentation({ project }: Props) {
  const projectInfo = projectData[project as keyof typeof projectData]

  if (!projectInfo) {
    return <div className="text-[#FFF8E1]">Project not found</div>
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      className="text-[#FFF8E1] bg-[#3E2723] min-h-screen p-4 sm:p-6 md:p-8 rounded-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
        <motion.div className="relative w-full h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden" variants={itemVariants}>
          <Image
            src={projectInfo.image}
            alt={projectInfo.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#FFF8E1]" variants={itemVariants}>{projectInfo.title}</motion.h1>
        <motion.p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 text-[#C4A484]" variants={itemVariants}>{projectInfo.description}</motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
          <a
            href={projectInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#C4A484] text-[#3E2723] px-4 py-2 rounded-lg hover:bg-[#E6DCC8] transition-colors duration-300 w-full sm:w-auto"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href={projectInfo.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#C4A484] text-[#3E2723] px-4 py-2 rounded-lg hover:bg-[#E6DCC8] transition-colors duration-300 w-full sm:w-auto"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        </motion.div>
        <motion.div className="flex flex-wrap gap-2 mb-4 sm:mb-6 md:mb-8" variants={itemVariants}>
          {projectInfo.tags.map((tag, index) => (
            <span key={index} className="bg-[#C4A484] text-[#3E2723] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              {tag}
            </span>
          ))}
        </motion.div>
        {projectInfo.sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-4 sm:mb-6 md:mb-8 bg-[#5D4037] p-4 sm:p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#E6DCC8]">{section.title}</h2>
            <p className="text-sm sm:text-base text-[#FFF8E1]">{section.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}