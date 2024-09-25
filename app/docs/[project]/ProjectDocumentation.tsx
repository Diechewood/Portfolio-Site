'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projectData = {
  'image-suite': {
    title: 'Image Suite',
    description: 'A comprehensive image processing and manipulation tool.',
    image: '/images/image-suite.png',
    github: 'https://github.com/Diechewood/image-suite',
    liveDemo: 'https://image-suite-demo.com',
    tags: ['Python', 'Flask', 'Pillow', 'rembg', 'Docker', 'Google Cloud Run'],
    sections: [
      {
        title: 'Project Overview',
        content: `This project is a personal portfolio website designed to showcase my skills, projects, and professional experience in web development and cloud computing. The site is built using modern web technologies and is hosted on AWS Amplify, leveraging its powerful features for continuous deployment and scalability.

Key Features:

• Responsive design for optimal viewing on all devices
• Interactive UI with smooth animations and transitions
• Dynamic content loading for project documentation
• Integrated contact form
• Continuous deployment pipeline with GitHub integration`
      },
      {
        title: 'Architecture',
        content: `The architecture of this portfolio site leverages modern web technologies and cloud services:

• GitHub: Stores the source code and triggers builds on commits.
• AWS Amplify: Provides the hosting environment and handles builds.
• Route 53: Manages DNS for the custom domain.
• Next.js: Powers the application, providing server-side rendering and optimized performance.
• React: Used for building the user interface components.
• Tailwind CSS: Utilized for styling and responsive design.
• Framer Motion: Implements smooth animations and transitions.`,
        image: '/images/Port-Arch.png'
      },
      {
        title: 'Development Process',
        content: `The development process was structured and iterative:

3.1 Initial Setup
1. Created a new Next.js project using \`create-next-app\`.
2. Set up the project structure, including pages, components, and styles.
3. Integrated Tailwind CSS for styling.
4. Implemented basic routing using Next.js file-based routing system.

3.2 Component Development
1. Developed reusable components such as \`AnimatedText\`, \`BarGraphic\`, and \`BackgroundSVG\`.
2. Created the main \`Portfolio\` component to serve as the central hub of the application.
3. Implemented tab-based navigation for different sections (About, Resume, Portfolio, Contact).

3.3 Styling and Responsiveness
1. Utilized Tailwind CSS for consistent and responsive styling across the application.
2. Implemented a custom color scheme using Tailwind's configuration options.
3. Ensured responsiveness across various screen sizes using Tailwind's responsive utilities.

3.4 Animation and Interactivity
1. Integrated Framer Motion for smooth animations and transitions.
2. Implemented fade-in animations for content sections.
3. Created interactive elements such as the tab switcher and project cards.

3.5 Dynamic Content Loading
1. Developed a \`ProjectDocumentation\` component for displaying detailed project information.
2. Implemented dynamic routing for project documentation pages.
3. Created a data structure to store project information and render it dynamically.

3.6 Contact Form Integration
1. Designed and implemented a contact form component.
2. Set up client-side form validation.
3. Implemented a simple email sending mechanism using the \`mailto\` protocol.

3.7 Performance Optimization
1. Utilized Next.js Image component for optimized image loading.
2. Implemented lazy loading for off-screen content.
3. Optimized animations to reduce layout shifts and improve performance.`,
        codeSnippets: [
          {
            title: 'Tailwind CSS Configuration',
            code: `
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3E2723',
        secondary: '#C4A484',
        background: '#FFF8E1',
      },
    },
  },
  variants: {},
  plugins: [],
}`,
            language: 'javascript'
          },
          {
            title: 'AnimatedText Component',
            code: `
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  const words = text.split(' ');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.025 } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;`,
            language: 'jsx'
          }
        ]
      },
      {
        title: 'Deployment Process',
        content: `The deployment process leveraged AWS services for continuous integration and delivery:

1. Set up an AWS account and configured Amplify for the project.
2. Connected the GitHub repository to AWS Amplify for continuous deployment.
3. Configured build settings in the \`amplify.yml\` file.
4. Set up a custom domain using Amazon Route 53.
5. Configured SSL/TLS certificate for secure HTTPS connections.`
      },
      {
        title: 'Challenges and Solutions',
        content: `Several challenges were encountered and overcome during development:

5.1 Performance Optimization
Challenge: Initial load times were slow due to large asset sizes and unoptimized animations.
Solution:
• Implemented lazy loading for off-screen content.
• Optimized images using Next.js Image component.
• Refined animations to reduce layout shifts.
• Utilized code splitting to reduce initial bundle size.

5.2 Responsive Design
Challenge: Ensuring a consistent and appealing layout across various device sizes.
Solution:
• Leveraged Tailwind CSS's responsive utilities for flexible layouts.
• Implemented a mobile-first design approach.
• Created custom breakpoints for specific components when needed.

5.3 State Management
Challenge: Managing complex state across different components and tabs.
Solution:
• Utilized React's Context API for global state management.
• Implemented custom hooks for shared logic and state.
• Used local component state for isolated UI interactions.`
      },
      {
        title: 'Key Learnings',
        content: `This project provided valuable learning experiences:

1. AWS Amplify Integration: Gained hands-on experience with AWS Amplify, learning how to leverage its features for continuous deployment and hosting.
2. Next.js and React Optimization: Deepened understanding of Next.js and React best practices, particularly in areas of performance optimization and server-side rendering.
3. Responsive Design Techniques: Improved skills in creating fluid, responsive layouts that work seamlessly across devices.
4. Animation Performance: Learned techniques for implementing smooth animations while maintaining good performance.
5. Git Workflow: Enhanced Git skills, particularly in managing feature branches and integrating with CI/CD pipelines.`
      },
      {
        title: 'Future Enhancements',
        content: `Plans for future improvements include:

1. Implement server-side contact form handling for improved security and reliability.
2. Add a blog section to share technical insights and project updates.
3. Integrate more interactive elements and micro-interactions to enhance user engagement.
4. Implement dark mode toggle for improved accessibility and user preference.
5. Explore the integration of a headless CMS for easier content management.`
      },
      {
        title: 'Conclusion',
        content: `This portfolio website project showcases my skills in modern web development, from frontend technologies like React and Next.js to cloud deployment with AWS Amplify. Through overcoming various challenges, I've demonstrated my ability to create performant, responsive, and visually appealing web applications. The continuous integration and deployment pipeline ensures that the site can be easily updated, reflecting my latest projects and skills.`
      }
    ]
  },
  'ezsender': {
    title: 'EZSender',
    description: 'A streamlined email campaign management system.',
    image: '/images/ezsender.png',
    github: 'https://github.com/Diechewood/EZSender',
    liveDemo: 'https://ezsender-demo.com',
    tags: ['React', 'Node.js', 'AWS SES', 'DynamoDB', 'Lambda'],
    sections: [
      {
        title: 'Project Overview',
        content: `This project is a personal portfolio website designed to showcase my skills, projects, and professional experience in web development and cloud computing. The site is built using modern web technologies and is hosted on AWS Amplify, leveraging its powerful features for continuous deployment and scalability.

Key Features:

• Responsive design for optimal viewing on all devices
• Interactive UI with smooth animations and transitions
• Dynamic content loading for project documentation
• Integrated contact form
• Continuous deployment pipeline with GitHub integration`
      },
      {
        title: 'Architecture',
        content: `The architecture of this portfolio site leverages modern web technologies and cloud services:

• GitHub: Stores the source code and triggers builds on commits.
• AWS Amplify: Provides the hosting environment and handles builds.
• Route 53: Manages DNS for the custom domain.
• Next.js: Powers the application, providing server-side rendering and optimized performance.
• React: Used for building the user interface components.
• Tailwind CSS: Utilized for styling and responsive design.
• Framer Motion: Implements smooth animations and transitions.`,
        image: '/images/Port-Arch.png'
      },
      {
        title: 'Development Process',
        content: `The development process was structured and iterative:

3.1 Initial Setup
1. Created a new Next.js project using \`create-next-app\`.
2. Set up the project structure, including pages, components, and styles.
3. Integrated Tailwind CSS for styling.
4. Implemented basic routing using Next.js file-based routing system.

3.2 Component Development
1. Developed reusable components such as \`AnimatedText\`, \`BarGraphic\`, and \`BackgroundSVG\`.
2. Created the main \`Portfolio\` component to serve as the central hub of the application.
3. Implemented tab-based navigation for different sections (About, Resume, Portfolio, Contact).

3.3 Styling and Responsiveness
1. Utilized Tailwind CSS for consistent and responsive styling across the application.
2. Implemented a custom color scheme using Tailwind's configuration options.
3. Ensured responsiveness across various screen sizes using Tailwind's responsive utilities.

3.4 Animation and Interactivity
1. Integrated Framer Motion for smooth animations and transitions.
2. Implemented fade-in animations for content sections.
3. Created interactive elements such as the tab switcher and project cards.

3.5 Dynamic Content Loading
1. Developed a \`ProjectDocumentation\` component for displaying detailed project information.
2. Implemented dynamic routing for project documentation pages.
3. Created a data structure to store project information and render it dynamically.

3.6 Contact Form Integration
1. Designed and implemented a contact form component.
2. Set up client-side form validation.
3. Implemented a simple email sending mechanism using the \`mailto\` protocol.

3.7 Performance Optimization
1. Utilized Next.js Image component for optimized image loading.
2. Implemented lazy loading for off-screen content.
3. Optimized animations to reduce layout shifts and improve performance.`,
        codeSnippets: [
          {
            title: 'Tailwind CSS Configuration',
            code: `
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3E2723',
        secondary: '#C4A484',
        background: '#FFF8E1',
      },
    },
  },
  variants: {},
  plugins: [],
}`,
            language: 'javascript'
          },
          {
            title: 'AnimatedText Component',
            code: `
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  const words = text.split(' ');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.025 } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;`,
            language: 'jsx'
          }
        ]
      },
      {
        title: 'Deployment Process',
        content: `The deployment process leveraged AWS services for continuous integration and delivery:

1. Set up an AWS account and configured Amplify for the project.
2. Connected the GitHub repository to AWS Amplify for continuous deployment.
3. Configured build settings in the \`amplify.yml\` file.
4. Set up a custom domain using Amazon Route 53.
5. Configured SSL/TLS certificate for secure HTTPS connections.`
      },
      {
        title: 'Challenges and Solutions',
        content: `Several challenges were encountered and overcome during development:

5.1 Performance Optimization
Challenge: Initial load times were slow due to large asset sizes and unoptimized animations.
Solution:
• Implemented lazy loading for off-screen content.
• Optimized images using Next.js Image component.
• Refined animations to reduce layout shifts.
• Utilized code splitting to reduce initial bundle size.

5.2 Responsive Design
Challenge: Ensuring a consistent and appealing layout across various device sizes.
Solution:
• Leveraged Tailwind CSS's responsive utilities for flexible layouts.
• Implemented a mobile-first design approach.
• Created custom breakpoints for specific components when needed.

5.3 State Management
Challenge: Managing complex state across different components and tabs.
Solution:
• Utilized React's Context API for global state management.
• Implemented custom hooks for shared logic and state.
• Used local component state for isolated UI interactions.`
      },
      {
        title: 'Key Learnings',
        content: `This project provided valuable learning experiences:

1. AWS Amplify Integration: Gained hands-on experience with AWS Amplify, learning how to leverage its features for continuous deployment and hosting.
2. Next.js and React Optimization: Deepened understanding of Next.js and React best practices, particularly in areas of performance optimization and server-side rendering.
3. Responsive Design Techniques: Improved skills in creating fluid, responsive layouts that work seamlessly across devices.
4. Animation Performance: Learned techniques for implementing smooth animations while maintaining good performance.
5. Git Workflow: Enhanced Git skills, particularly in managing feature branches and integrating with CI/CD pipelines.`
      },
      {
        title: 'Future Enhancements',
        content: `Plans for future improvements include:

1. Implement server-side contact form handling for improved security and reliability.
2. Add a blog section to share technical insights and project updates.
3. Integrate more interactive elements and micro-interactions to enhance user engagement.
4. Implement dark mode toggle for improved accessibility and user preference.
5. Explore the integration of a headless CMS for easier content management.`
      },
      {
        title: 'Conclusion',
        content: `This portfolio website project showcases my skills in modern web development, from frontend technologies like React and Next.js to cloud deployment with AWS Amplify. Through overcoming various challenges, I've demonstrated my ability to create performant, responsive, and visually appealing web applications. The continuous integration and deployment pipeline ensures that the site can be easily updated, reflecting my latest projects and skills.`
      }
    ]
  },
  'portfolio-site': {
    title: 'Portfolio Site',
    description: 'A personal portfolio website showcasing projects and skills.',
    image: '/images/portfolio-site.png',
    github: 'https://github.com/yourusername/portfolio-site',
    liveDemo: 'https://yourdomain.com',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'AWS Amplify'],
    sections: [
      {
        title: 'Project Overview',
        content: `This project is a personal portfolio website designed to showcase my skills, projects, and professional experience in web development and cloud computing. The site is built using modern web technologies and is hosted on AWS Amplify, leveraging its powerful features for continuous deployment and scalability.

Key Features:

• Responsive design for optimal viewing on all devices
• Interactive UI with smooth animations and transitions
• Dynamic content loading for project documentation
• Integrated contact form
• Continuous deployment pipeline with GitHub integration`
      },
      {
        title: 'Architecture',
        content: `The architecture of this portfolio site leverages modern web technologies and cloud services:

• GitHub: Stores the source code and triggers builds on commits.
• AWS Amplify: Provides the hosting environment and handles builds.
• Route 53: Manages DNS for the custom domain.
• Next.js: Powers the application, providing server-side rendering and optimized performance.
• React: Used for building the user interface components.
• Tailwind CSS: Utilized for styling and responsive design.
• Framer Motion: Implements smooth animations and transitions.`,
        image: '/images/Port-Arch.png'
      },
      {
        title: 'Development Process',
        content: `The development process was structured and iterative:

3.1 Initial Setup
1. Created a new Next.js project using \`create-next-app\`.
2. Set up the project structure, including pages, components, and styles.
3. Integrated Tailwind CSS for styling.
4. Implemented basic routing using Next.js file-based routing system.

3.2 Component Development
1. Developed reusable components such as \`AnimatedText\`, \`BarGraphic\`, and \`BackgroundSVG\`.
2. Created the main \`Portfolio\` component to serve as the central hub of the application.
3. Implemented tab-based navigation for different sections (About, Resume, Portfolio, Contact).

3.3 Styling and Responsiveness
1. Utilized Tailwind CSS for consistent and responsive styling across the application.
2. Implemented a custom color scheme using Tailwind's configuration options.
3. Ensured responsiveness across various screen sizes using Tailwind's responsive utilities.

3.4 Animation and Interactivity
1. Integrated Framer Motion for smooth animations and transitions.
2. Implemented fade-in animations for content sections.
3. Created interactive elements such as the tab switcher and project cards.

3.5 Dynamic Content Loading
1. Developed a \`ProjectDocumentation\` component for displaying detailed project information.
2. Implemented dynamic routing for project documentation pages.
3. Created a data structure to store project information and render it dynamically.

3.6 Contact Form Integration
1. Designed and implemented a contact form component.
2. Set up client-side form validation.
3. Implemented a simple email sending mechanism using the \`mailto\` protocol.

3.7 Performance Optimization
1. Utilized Next.js Image component for optimized image loading.
2. Implemented lazy loading for off-screen content.
3. Optimized animations to reduce layout shifts and improve performance.`,
        codeSnippets: [
          {
            title: 'Tailwind CSS Configuration',
            code: `
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3E2723',
        secondary: '#C4A484',
        background: '#FFF8E1',
      },
    },
  },
  variants: {},
  plugins: [],
}`,
            language: 'javascript'
          },
          {
            title: 'AnimatedText Component',
            code: `
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  const words = text.split(' ');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.025 } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;`,
            language: 'jsx'
          }
        ]
      },
      {
        title: 'Deployment Process',
        content: `The deployment process leveraged AWS services for continuous integration and delivery:

1. Set up an AWS account and configured Amplify for the project.
2. Connected the GitHub repository to AWS Amplify for continuous deployment.
3. Configured build settings in the \`amplify.yml\` file.
4. Set up a custom domain using Amazon Route 53.
5. Configured SSL/TLS certificate for secure HTTPS connections.`
      },
      {
        title: 'Challenges and Solutions',
        content: `Several challenges were encountered and overcome during development:

5.1 Performance Optimization
Challenge: Initial load times were slow due to large asset sizes and unoptimized animations.
Solution:
• Implemented lazy loading for off-screen content.
• Optimized images using Next.js Image component.
• Refined animations to reduce layout shifts.
• Utilized code splitting to reduce initial bundle size.

5.2 Responsive Design
Challenge: Ensuring a consistent and appealing layout across various device sizes.
Solution:
• Leveraged Tailwind CSS's responsive utilities for flexible layouts.
• Implemented a mobile-first design approach.
• Created custom breakpoints for specific components when needed.

5.3 State Management
Challenge: Managing complex state across different components and tabs.
Solution:
• Utilized React's Context API for global state management.
• Implemented custom hooks for shared logic and state.
• Used local component state for isolated UI interactions.`
      },
      {
        title: 'Key Learnings',
        content: `This project provided valuable learning experiences:

1. AWS Amplify Integration: Gained hands-on experience with AWS Amplify, learning how to leverage its features for continuous deployment and hosting.
2. Next.js and React Optimization: Deepened understanding of Next.js and React best practices, particularly in areas of performance optimization and server-side rendering.
3. Responsive Design Techniques: Improved skills in creating fluid, responsive layouts that work seamlessly across devices.
4. Animation Performance: Learned techniques for implementing smooth animations while maintaining good performance.
5. Git Workflow: Enhanced Git skills, particularly in managing feature branches and integrating with CI/CD pipelines.`
      },
      {
        title: 'Future Enhancements',
        content: `Plans for future improvements include:

1. Implement server-side contact form handling for improved security and reliability.
2. Add a blog section to share technical insights and project updates.
3. Integrate more interactive elements and micro-interactions to enhance user engagement.
4. Implement dark mode toggle for improved accessibility and user preference.
5. Explore the integration of a headless CMS for easier content management.`
      },
      {
        title: 'Conclusion',
        content: `This portfolio website project showcases my skills in modern web development, from frontend technologies like React and Next.js to cloud deployment with AWS Amplify. Through overcoming various challenges, I've demonstrated my ability to create performant, responsive, and visually appealing web applications. The continuous integration and deployment pipeline ensures that the site can be easily updated, reflecting my latest projects and skills.`
      }
    ]
  },
  'speedystats': {
    title: 'SpeedyStats',
    description: 'A real-time analytics dashboard for website performance monitoring.',
    image: '/images/speedystats.png',
    github: 'https://github.com/Diechewood/speedystats',
    liveDemo: 'https://speedystats-demo.com',
    tags: ['Vue.js', 'Go', 'ClickHouse', 'Docker', 'Kubernetes'],
    sections: [
      {
        title: 'Project Overview',
        content: `This project is a personal portfolio website designed to showcase my skills, projects, and professional experience in web development and cloud computing. The site is built using modern web technologies and is hosted on AWS Amplify, leveraging its powerful features for continuous deployment and scalability.

Key Features:

• Responsive design for optimal viewing on all devices
• Interactive UI with smooth animations and transitions
• Dynamic content loading for project documentation
• Integrated contact form
• Continuous deployment pipeline with GitHub integration`
      },
      {
        title: 'Architecture',
        content: `The architecture of this portfolio site leverages modern web technologies and cloud services:

• GitHub: Stores the source code and triggers builds on commits.
• AWS Amplify: Provides the hosting environment and handles builds.
• Route 53: Manages DNS for the custom domain.
• Next.js: Powers the application, providing server-side rendering and optimized performance.
• React: Used for building the user interface components.
• Tailwind CSS: Utilized for styling and responsive design.
• Framer Motion: Implements smooth animations and transitions.`,
        image: '/images/Port-Arch.png'
      },
      {
        title: 'Development Process',
        content: `The development process was structured and iterative:

3.1 Initial Setup
1. Created a new Next.js project using \`create-next-app\`.
2. Set up the project structure, including pages, components, and styles.
3. Integrated Tailwind CSS for styling.
4. Implemented basic routing using Next.js file-based routing system.

3.2 Component Development
1. Developed reusable components such as \`AnimatedText\`, \`BarGraphic\`, and \`BackgroundSVG\`.
2. Created the main \`Portfolio\` component to serve as the central hub of the application.
3. Implemented tab-based navigation for different sections (About, Resume, Portfolio, Contact).

3.3 Styling and Responsiveness
1. Utilized Tailwind CSS for consistent and responsive styling across the application.
2. Implemented a custom color scheme using Tailwind's configuration options.
3. Ensured responsiveness across various screen sizes using Tailwind's responsive utilities.

3.4 Animation and Interactivity
1. Integrated Framer Motion for smooth animations and transitions.
2. Implemented fade-in animations for content sections.
3. Created interactive elements such as the tab switcher and project cards.

3.5 Dynamic Content Loading
1. Developed a \`ProjectDocumentation\` component for displaying detailed project information.
2. Implemented dynamic routing for project documentation pages.
3. Created a data structure to store project information and render it dynamically.

3.6 Contact Form Integration
1. Designed and implemented a contact form component.
2. Set up client-side form validation.
3. Implemented a simple email sending mechanism using the \`mailto\` protocol.

3.7 Performance Optimization
1. Utilized Next.js Image component for optimized image loading.
2. Implemented lazy loading for off-screen content.
3. Optimized animations to reduce layout shifts and improve performance.`,
        codeSnippets: [
          {
            title: 'Tailwind CSS Configuration',
            code: `
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3E2723',
        secondary: '#C4A484',
        background: '#FFF8E1',
      },
    },
  },
  variants: {},
  plugins: [],
}`,
            language: 'javascript'
          },
          {
            title: 'AnimatedText Component',
            code: `
import { motion } from 'framer-motion';

const AnimatedText = ({ text }) => {
  const words = text.split(' ');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.025 } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;`,
            language: 'jsx'
          }
        ]
      },
      {
        title: 'Deployment Process',
        content: `The deployment process leveraged AWS services for continuous integration and delivery:

1. Set up an AWS account and configured Amplify for the project.
2. Connected the GitHub repository to AWS Amplify for continuous deployment.
3. Configured build settings in the \`amplify.yml\` file.
4. Set up a custom domain using Amazon Route 53.
5. Configured SSL/TLS certificate for secure HTTPS connections.`
      },
      {
        title: 'Challenges and Solutions',
        content: `Several challenges were encountered and overcome during development:

5.1 Performance Optimization
Challenge: Initial load times were slow due to large asset sizes and unoptimized animations.
Solution:
• Implemented lazy loading for off-screen content.
• Optimized images using Next.js Image component.
• Refined animations to reduce layout shifts.
• Utilized code splitting to reduce initial bundle size.

5.2 Responsive Design
Challenge: Ensuring a consistent and appealing layout across various device sizes.
Solution:
• Leveraged Tailwind CSS's responsive utilities for flexible layouts.
• Implemented a mobile-first design approach.
• Created custom breakpoints for specific components when needed.

5.3 State Management
Challenge: Managing complex state across different components and tabs.
Solution:
• Utilized React's Context API for global state management.
• Implemented custom hooks for shared logic and state.
• Used local component state for isolated UI interactions.`
      },
      {
        title: 'Key Learnings',
        content: `This project provided valuable learning experiences:

1. AWS Amplify Integration: Gained hands-on experience with AWS Amplify, learning how to leverage its features for continuous deployment and hosting.
2. Next.js and React Optimization: Deepened understanding of Next.js and React best practices, particularly in areas of performance optimization and server-side rendering.
3. Responsive Design Techniques: Improved skills in creating fluid, responsive layouts that work seamlessly across devices.
4. Animation Performance: Learned techniques for implementing smooth animations while maintaining good performance.
5. Git Workflow: Enhanced Git skills, particularly in managing feature branches and integrating with CI/CD pipelines.`
      },
      {
        title: 'Future Enhancements',
        content: `Plans for future improvements include:

1. Implement server-side contact form handling for improved security and reliability.
2. Add a blog section to share technical insights and project updates.
3. Integrate more interactive elements and micro-interactions to enhance user engagement.
4. Implement dark mode toggle for improved accessibility and user preference.
5. Explore the integration of a headless CMS for easier content management.`
      },
      {
        title: 'Conclusion',
        content: `This portfolio website project showcases my skills in modern web development, from frontend technologies like React and Next.js to cloud deployment with AWS Amplify. Through overcoming various challenges, I've demonstrated my ability to create performant, responsive, and visually appealing web applications. The continuous integration and deployment pipeline ensures that the site can be easily updated, reflecting my latest projects and skills.`
      }
    ]
  }
}

type Props = {
  project: string
}

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
  <pre className="bg-[#2D2D2D] p-4 rounded-lg overflow-x-auto">
    <code className="text-[#E6DCC8] text-sm" data-language={language}>{code}</code>
  </pre>
)

export default function ProjectDocumentation({ project }: Props) {
  const projectInfo = projectData[project as keyof typeof projectData]
  const [activeSection, setActiveSection] = useState('')
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const setSectionRef = useCallback((el: HTMLDivElement | null, title: string) => {
    if (el) {
      sectionRefs.current[title] = el
    }
  }, [])

  useEffect(() => {
    if (!projectInfo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [projectInfo])

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
      className="text-[#FFF8E1] bg-[#3E2723] min-h-screen p-2 sm:p-4 md:p-6 rounded-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{projectInfo.title}</h1>
          <div className="flex gap-2 sm:gap-4">
            <a
              href={projectInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#C4A484] text-[#3E2723] px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg hover:bg-[#E6DCC8] transition-colors duration-300 text-xs sm:text-sm md:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              GitHub
            </a>
            <a
              href={projectInfo.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#C4A484] text-[#3E2723] px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg hover:bg-[#E6DCC8] transition-colors duration-300 text-xs sm:text-sm md:text-base"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              Live Demo
            </a>
          </div>
        </div>
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4 bg-[#5D4037] p-2 sm:p-3 md:p-4 rounded-lg">{projectInfo.description}</p>
          <div className="flex flex-wrap gap-2">
            {projectInfo.tags.map((tag, index) => (
              <span key={index} className="bg-[#C4A484] text-[#3E2723] px-2 py-1 rounded-full text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
          <nav className="md:col-span-1 bg-[#5D4037] p-2 sm:p-3 md:p-4 rounded-lg md:sticky md:top-4 md:self-start order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Table of Contents</h2>
            <ul className="space-y-1 sm:space-y-2">
              {projectInfo.sections.map((section) => (
                <li key={section.title}>
                  <a
                    href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block py-1 px-2 rounded transition-colors text-sm sm:text-base ${
                      activeSection === section.title.toLowerCase().replace(/\s+/g, '-')
                        ? 'bg-[#C4A484] text-[#3E2723]'
                        : 'hover:bg-[#3E2723]'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2 aspect-[16/9] relative rounded-lg overflow-hidden bg-[#1E1E1E] order-1 md:order-2">
            <Image
              src={projectInfo.image}
              alt={projectInfo.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {projectInfo.sections.map((section, index) => (
          <motion.div
            key={index}
            id={section.title.toLowerCase().replace(/\s+/g, '-')}
            ref={(el) => setSectionRef(el, section.title)}
            variants={itemVariants}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#E6DCC8] bg-[#5D4037] p-2 sm:p-3 rounded-lg">{section.title}</h2>
            {section.title === 'Architecture' ? (
              <div className="bg-[#4E342E] p-2 sm:p-3 md:p-4 rounded-lg shadow-lg">
                {section.image && (
                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={section.image}
                      alt="Architecture Diagram"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                )}
                <ul className="list-disc list-inside text-sm sm:text-base">
                  {section.content.split('\n').filter(line => line.trim().startsWith('•')).map((line, i) => (
                    <li key={i} className="mb-2">{line.trim().substring(1).trim()}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-sm sm:text-base text-[#FFF8E1] whitespace-pre-wrap bg-[#4E342E] p-2 sm:p-3 md:p-4 rounded-lg shadow-lg">
                {section.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.match(/^\d+\.\d+/)) {
                    const [subheading, ...content] = paragraph.split('\n')
                    return (
                      <div key={i}>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 mt-4 text-[#C4A484] underline">
                          {subheading}
                        </h3>
                        {content.map((line, j) => (
                          <p key={j} className="mb-2 sm:mb-4 last:mb-0">
                            {line}
                          </p>
                        ))}
                      </div>
                    )
                  }
                  return (
                    <p key={i} className="mb-2 sm:mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            )}
            {section.codeSnippets && section.codeSnippets.map((snippet, i) => (
              <div key={i} className="mt-4">
                <h3 className="text-lg font-semibold mb-2 text-[#C4A484]">{snippet.title}</h3>
                <CodeBlock code={snippet.code} language={snippet.language} />
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}