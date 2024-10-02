'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ZoomIn, X } from 'lucide-react'

type CodeSnippet = {
  title: string;
  code: string;
  language: string;
}

type BaseSection = {
  title: string;
  content: string;
}

type SectionWithImage = BaseSection & {
  image: string;
  codeSnippets?: never;
}

type SectionWithCodeSnippets = BaseSection & {
  codeSnippets: CodeSnippet[];
  image?: never;
}

type Section = BaseSection | SectionWithImage | SectionWithCodeSnippets;

type ProjectInfo = {
  title: string;
  description: string;
  image: string;
  github: string;
  liveDemo?: string;
  tags: string[];
  sections: Section[];
}

const projectData: Record<string, ProjectInfo> = {
  'image-suite': {
    title: 'Image Suite',
    description: 'An innovative web-based image processing tool designed to simplify common image editing tasks.',
    image: '/images/image-suite.png',
    github: 'https://github.com/yourusername/image-suite',
    liveDemo: 'https://image-suite-905291854682.us-central1.run.app',
    tags: ['Python', 'Flask', 'Pillow', 'rembg', 'Docker', 'Google Cloud Run'],
    sections: [
      {
        title: 'Introduction',
        content: `Image Suite is an innovative web-based image processing tool designed to simplify common image editing tasks. It provides users with a suite of powerful features, including background removal, image blurring, bokeh effect application, foreground blurring, and image rescaling. The project aims to make these often complex image manipulation techniques accessible to users without requiring advanced software or technical expertise.

Key Features:

• Background Removal
• Image Blurring
• Bokeh Effect
• Foreground Blur
• Image Rescaling`
      },
      {
        title: 'Project Overview',
        content: `Image Suite leverages modern web technologies and cloud infrastructure to deliver a seamless user experience. The application is built with a responsive frontend using HTML, CSS, and JavaScript, while the backend utilizes Python with the Flask framework for robust image processing capabilities.

Technology Stack:

• Frontend: HTML, CSS, JavaScript
• Backend: Python (Flask)
• Image Processing Libraries: Pillow, rembg
• Containerization: Docker
• Cloud Platform: Google Cloud Platform (GCP)
• CI/CD: Google Cloud Build`
      },
      {
        title: 'Functionality and User Experience',
        content: `3.1 User Interface

Image Suite boasts an intuitive and user-friendly interface. Upon accessing the application, users are greeted with a clean, modern design featuring:

• A prominent logo for brand recognition
• A tab-based navigation system for easy access to different image processing features
• A central content area that dynamically updates based on the selected feature

The responsive design ensures a consistent experience across various devices, from desktop computers to mobile phones.

3.2 Image Processing Features

Background Removal
This feature allows users to easily remove the background from their images, leaving only the main subject. It's particularly useful for creating product images, profile pictures, or preparing images for graphic design projects.

Image Blurring
Users can apply a customizable blur effect to their entire image. This feature is helpful for creating abstract backgrounds or softening certain elements of a photograph.

Bokeh Effect
This advanced feature simulates the popular bokeh effect in photography, where the background is blurred while keeping the subject in focus. Users can adjust the intensity of the blur to achieve their desired aesthetic.

Foreground Blur
An innovative feature that blurs the foreground while keeping the background sharp. This can create unique visual effects or draw attention to background elements in an image.

Image Rescaling
This utility allows users to resize their images by specifying a percentage. It's useful for preparing images for various platforms or reducing file sizes while maintaining aspect ratios.

3.3 User Interaction Flow

1. The user selects a desired image processing feature from the tab navigation.
2. The interface updates to display the options specific to the chosen feature.
3. Users can then either drag and drop an image onto the designated area or use a file picker to select an image.
4. Depending on the feature, users may adjust parameters (e.g., blur intensity, scaling percentage) using intuitive controls.
5. Upon submission, a progress bar indicates the processing status.
6. Once complete, the processed image is automatically downloaded to the user's device.
7. A custom popup notifies the user of successful processing or any errors encountered.`
      },
      {
        title: 'Technical Implementation Highlights',
        content: `4.1 Backend Processing

The heart of Image Suite lies in its Python backend, which leverages powerful libraries for image manipulation:`,
        codeSnippets: [
          {
            title: 'Backend Image Processing',
            code: `from rembg import remove
from PIL import Image, ImageFilter

def remove_background(input_image):
    return remove(input_image, post_process_mask=True)

def apply_blur(input_image, percentage):
    return input_image.filter(ImageFilter.GaussianBlur(radius=percentage / 10))

def apply_bokeh_effect(input_image, blur_intensity):
    mask = remove(input_image, only_mask=True)
    blurred_image = input_image.filter(ImageFilter.GaussianBlur(radius=blur_intensity / 10))
    return Image.composite(input_image, blurred_image, mask)`,
            language: 'python'
          }
        ]
      },
      {
        title: 'Frontend Interactivity',
        content: `4.2 Frontend Interactivity

The frontend employs JavaScript to handle user interactions and communicate with the backend:`,
        codeSnippets: [
          {
            title: 'Frontend File Handling',
            code: `function handleFiles(files, form) {
    if (files.length) {
        let formData = new FormData();
        formData.append('file', files[0]);
        
        // Add feature-specific parameters
        if (form.id === 'file-form-blur-image') {
            formData.append('blur_percentage', form.querySelector('#blurPercentage').value);
        }
        
        // Fetch request to process image
        fetch(formAction, {
            method: 'POST',
            body: formData
        })
        .then(response => response.blob())
        .then(blob => {
            // Handle successful processing and download
        })
        .catch(() => {
            // Handle errors
        });
    }
}`,
            language: 'javascript'
          }
        ]
      },
      {
        title: 'Cloud Deployment',
        content: `Image Suite utilizes a modern, cloud-native architecture to ensure scalability, reliability, and ease of deployment:

• Containerization: The application is containerized using Docker, ensuring consistency across development and production environments.
• Artifact Registry: Stores the Docker images securely within the Google Cloud ecosystem.
• Cloud Run: Provides a serverless environment for running the application, automatically scaling based on demand.
• Cloud Build: Automates the CI/CD pipeline, building and deploying new versions of the application when changes are pushed to the repository.`,
      },
      {
        title: 'Challenges and Solutions',
        content: `1. Performance Optimization:
• Challenge: Processing large images could lead to slow response times.
• Solution: Implemented server-side caching of processed images and optimized image processing algorithms.

2. Scalability:
• Challenge: Handling multiple concurrent users and large file uploads.
• Solution: Leveraged Cloud Run's auto-scaling capabilities and implemented client-side file size checks.

3. User Experience:
• Challenge: Providing real-time feedback during image processing.
• Solution: Implemented a progress bar and custom notifications to keep users informed of processing status.`
      },
      {
        title: 'Future Enhancements',
        content: `1. Implement user authentication to allow saving and managing processed images.
2. Add more advanced image processing features like color correction and filters.
3. Integrate with AI services for intelligent background removal and object detection.
4. Develop a mobile app version of Image Suite for on-the-go image processing.
5. Implement batch processing capabilities for handling multiple images simultaneously.`
      },
      {
        title: 'Conclusion',
        content: `Image Suite demonstrates a modern approach to building and deploying a web application for image processing. By leveraging powerful image processing libraries and cloud technologies, it achieves a balance between functionality, performance, and user experience. The project showcases skills in full-stack development, cloud architecture, and DevOps practices, while providing users with a valuable tool for their image editing needs.`
      }
    ]
  },
  'ezsender': {
  title: 'EZSender',
  description: 'A serverless email-sending application allowing bulk email dispatch via AWS SES and features role-based authentication using AWS Cognito.',
  image: '/images/ezsender.png',
  liveDemo: 'http://ezsender-app.s3-website-us-west-1.amazonaws.com/',
  github: 'https://github.com/Diechewood/ezsender',
  tags: ['AWS S3', 'AWS Lambda', 'AWS SES', 'AWS Cognito', 'Bootstrap', 'Node.js'],
  sections: [
    {
      title: 'Project Overview',
      content: `EZSender is a cloud-based application designed for bulk email sending. Admin users can upload CSV files of email addresses and send personalized bulk emails using AWS SES. The application is hosted on AWS S3 as a static website, and the backend email processing logic is handled by AWS Lambda. User authentication is managed via AWS Cognito, with role-based access to distinguish between guests and admins.

Key Features:

• Bulk email sending using AWS SES
• CSV file upload for recipient email lists
• Role-based access via AWS Cognito (Guest and Admin roles)
• Serverless architecture using AWS Lambda
• Frontend hosted on AWS S3 as a static site`
    },
    {
      title: 'Architecture',
      image: '/images/ezsender-architecture.png',
      content: `The architecture leverages AWS services to create a scalable and serverless email-sending platform:

• S3: Hosts the static frontend (HTML, JavaScript, and CSS).
• AWS Lambda: Handles backend processing, such as parsing CSV files and sending emails using AWS SES.
• AWS SES: Manages the bulk email sending.
• AWS Cognito: Handles user authentication and authorization, allowing for distinct roles (guest and admin).
• CloudWatch: Provides monitoring and logging for the Lambda functions.`,
      
    },
    {
      title: 'Development Process',
      content: `The development process was structured to ensure scalability and ease of use for both admins and guests.

3.1 Initial Setup
1. Set up AWS S3 for static website hosting.
2. Developed the Lambda function using Node.js to handle file uploads and send emails.
3. Integrated AWS SES for bulk email sending.
4. Configured AWS Cognito for user authentication with guest and admin roles.

3.2 Email Sending Logic
1. Built the Lambda function to process CSV files uploaded to S3, extract email addresses, and send personalized emails using SES.
2. Implemented retry and circuit breaker logic to ensure resilience during email sending.
3. Added support for dynamic email templates with placeholders (e.g., {name}) to personalize messages.

3.3 Authentication and Authorization
1. Integrated AWS Cognito for managing login and role-based access control (guest and admin roles).
2. Used Amplify on the frontend for seamless integration with Cognito, ensuring only admins can send emails.

3.4 CSV Upload Handling
1. Implemented a drag-and-drop feature for uploading CSV files to S3 using Amplify Storage.
2. Ensured file validation for the correct format (Name and Email columns) before upload.

3.5 Monitoring and Error Handling
1. Configured AWS CloudWatch to monitor Lambda execution and log any errors during the email-sending process.`,
      codeSnippets: [
        {
          title: 'Lambda Function to Process CSV and Send Emails',
          code: `
import AWS from 'aws-sdk';
import csv from 'csv-parser';
import { Readable } from 'stream';

const s3 = new AWS.S3();
const ses = new AWS.SES({ region: 'us-west-1' });
const secretsManager = new AWS.SecretsManager();

export const handler = async (event) => {
  const bucketName = event.Records[0].s3.bucket.name;
  const objectKey = event.Records[0].s3.object.key;

  const params = { Bucket: bucketName, Key: objectKey };
  const data = await s3.getObject(params).promise();
  const recipients = await parseCSV(data.Body);

  for (let i = 0; i < recipients.length; i += 50) {
    const batch = recipients.slice(i, i + 50);
    const emailPromises = batch.map(recipient => sendEmail(recipient, "Subject", "Template"));
    await Promise.all(emailPromises);
  }
};

const parseCSV = async (buffer) => {
  const recipients = [];
  const stream = Readable.from(buffer.toString());
  return new Promise((resolve, reject) => {
    stream.pipe(csv()).on('data', row => {
      if (row.Name && row.Email) recipients.push({ name: row.Name, email: row.Email });
    }).on('end', () => resolve(recipients)).on('error', error => reject(error));
  });
};

const sendEmail = async (recipient, subject, template) => {
  const params = {
    Destination: { ToAddresses: [recipient.email] },
    Message: {
      Subject: { Data: subject },
      Body: { Text: { Data: template.replace("{name}", recipient.name) } }
    },
    Source: 'no-reply@yourdomain.com'
  };
  await ses.sendEmail(params).promise();
};`,
          language: 'javascript'
        }
      ]
    },
    {
      title: 'Deployment Process',
      content: `The deployment process is fully automated using AWS services:

1. The frontend (HTML, JS, CSS) is hosted on S3 and configured for static website hosting.
2. The Lambda function is deployed via the AWS Management Console and is triggered by S3 events when a CSV file is uploaded.
3. AWS SES is used to send the emails in bulk, ensuring compliance with SES quotas.
4. AWS Cognito is integrated with Amplify for user authentication.
5. CloudWatch provides monitoring and logs for the Lambda function.`,
    },
    {
      title: 'Challenges and Solutions',
      content: `Several challenges were encountered during the development of EZSender:

5.1 CSV File Size and Lambda Limitations
Challenge: Handling large CSV files within the Lambda execution time.
Solution: Batching emails in groups of 50 to ensure all recipients are processed efficiently.

5.2 User Authorization
Challenge: Implementing role-based access control for admins and guests.
Solution: Integrated AWS Cognito groups to distinguish between guest and admin roles, restricting certain functionalities to admin users only.

5.3 SES Throttling and Quotas
Challenge: Staying within AWS SES send quotas when sending bulk emails.
Solution: Implemented retry logic and a circuit breaker to handle SES rate limits and retries for failed emails.`,
    },
    {
      title: 'Key Learnings',
      content: `The development of EZSender offered key insights into building serverless applications:

1. AWS Lambda: Learned how to effectively manage large-scale email sending using serverless technology.
2. AWS SES: Gained experience with sending bulk emails and handling rate limits.
3. AWS Cognito: Implemented role-based authentication using Cognito groups.
4. Serverless Monitoring: Gained experience in using AWS CloudWatch for monitoring and troubleshooting serverless applications.
5. Amplify Integration: Improved understanding of how to integrate AWS Amplify with other AWS services for a seamless user experience.`,
    },
    {
      title: 'Future Enhancements',
      content: `Future enhancements for EZSender include:

1. Adding advanced email scheduling features for admins.
2. Integrating rich HTML templates with SES for better email designs.
3. Implementing detailed email analytics (e.g., open rates, click rates).
4. Improving scalability with advanced AWS Lambda features, such as concurrency control.`,
    },
    {
      title: 'Conclusion',
      content: `EZSender showcases the power of serverless architecture, integrating multiple AWS services (S3, Lambda, SES, Cognito) to provide a scalable, secure, and efficient email-sending platform. Its architecture allows for easy expansion and future enhancements, making it a robust tool for any organization.`,
    }
  ]
},
  'portfolio-site': {
    title: 'Portfolio Site',
    description: 'A personal portfolio website showcasing projects and skills.',
    image: '/images/portfolio-site.png',
    github: 'https://github.com/Diechewood/portfolio-site',
    liveDemo: 'https://eliangtz.com',
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
      description: 'An ongoing project: Real-time speed tracking and analysis iOS app with AWS backend.',
      image: '/images/speedystats.png',
      github: '"https://github.com/Diechewood/speedystats"',
      tags: ['Swift', 'iOS', 'AWS', 'Lambda', 'DynamoDB', 'S3', 'GPS Tracking'],
      sections: [
        {
          title: 'Project Overview',
          content: `SpeedyStats is an iOS app I am currently developing. It's designed to track and analyze real-time speed for activities like longboarding, cycling, and running. The app will use GPS data and AWS services for backend tasks. Here's where I am now:

1. Backend: Completed and operational
2. API: In progress, with core functions implemented
3. Frontend: Early stages of development

My goal is to create a user-friendly app that gives accurate speed tracking and helpful performance analysis.`
        },
        {
          title: 'Current Progress',
          content: `Here's what I've done so far:

1. Technology Stack:
   - Frontend (In Progress): Swift for iOS
   - Backend (Completed): AWS Lambda, S3, RDS, API Gateway
   - Databases (Set Up): Amazon RDS (PostgreSQL) for user info, DynamoDB for session data
   - Data Storage (Ready): Amazon S3 for speed history and media
   - Cloud Platform: AWS
   - CI/CD (Planned): AWS CodePipeline

2. Features (In Various Stages):
   - Real-time GPS speed tracking (Backend ready, Frontend in progress)
   - Speed data storage and analysis (Backend complete)
   - Data charts and graphs (Planned for Frontend)
   - User login and profiles (Backend ready, Frontend planned)
   - Session timer (Planned)
   - AWS service integration (Mostly complete)

3. Backend Work (Completed):
   - Set up system to receive GPS data through API Gateway
   - Created Lambda functions to process speed data in real-time
   - Implemented data storage in RDS and DynamoDB

4. Frontend Development (Early Stages):
   - Started building the main app structure
   - Planning the dashboard for real-time speed display
   - Designing the session management interface

5. AWS Setup (Completed):
   - Configured Lambda for data processing
   - Set up API Gateway for app-backend connection
   - Prepared RDS for user data and DynamoDB for speed records
   - Configured S3 for long-term data storage
   - Set up Cognito for future user authentication`
        },
        {
          title: 'Next Steps',
          content: `I will be focusing on these areas as I move forward:

1. API Development:
   - Finish core API functions for data transfer between app and backend
   - Test and refine API performance and security

2. Frontend Creation:
   - Build the main user interface
   - Implement real-time speed display
   - Create screens for historical data and user profiles
   - Add data visualization with charts and graphs

3. Feature Implementation:
   - Integrate GPS tracking with the user interface
   - Add session timing functionality
   - Implement secure user login and profile management

4. Testing and Refinement:
   - Conduct thorough testing of all features
   - Optimize app performance and data processing
   - Ensure smooth interaction between frontend and backend

5. Preparation for Launch:
   - Final security checks and optimizations
   - Submit to App Store for review
   - Plan for post-launch updates and support`
        },
        {
          title: 'Challenges and Solutions',
          content: `As I build SpeedyStats, there are several challenges:

1. Real-time Data Handling:
   Challenge: Processing large amounts of GPS data quickly.
   Solution: Using AWS Lambda's scaling to handle varying data loads efficiently.

2. Data Storage and Retrieval:
   Challenge: Managing lots of speed data for analysis.
   Solution: Using Amazon S3 for storage and DynamoDB for quick data access.

3. App Security:
   Challenge: Keeping user data safe.
   Solution: Implementing secure login and data encryption with AWS Cognito and API Gateway.

4. User Experience:
   Challenge: Creating an easy-to-use interface that shows complex data.
   Solution: Focusing on clean design and intuitive controls in the iOS app.

I'm learning a lot as I work through these challenges, improving my skills in AWS services, real-time data processing, iOS development, and app security.`
        },
        {
          title: 'Looking Ahead',
          content: `As I continue developing SpeedyStats, I'm excited about its potential. I'm not just building an app; I'm creating a tool that could help athletes and longboarding enthusiasts improve their performance.

My next big tasks are finishing the API, building out the frontend, and bringing all the pieces together into a smooth, working app. I am looking forward to the day when users can track their speeds, analyze their performance, and share their achievements, all from their iOS devices.

This project is teaching me a lot about mobile app development, cloud services, and handling real-time data. I'm eager to apply these lessons to make SpeedyStats the best it can be, and to use what I've learned in future projects.`
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
  const projectInfo = projectData[project]
  const [activeSection, setActiveSection] = useState('')
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
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

  const handleZoom = (imageSrc: string) => {
    setZoomedImage(imageSrc)
  }

  return (
    <motion.div
      className="text-[#FFF8E1] bg-[#3E2723] min-h-screen p-2 sm:p-4 md:p-6 rounded-lg overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="max-w-full md:max-w-5xl mx-auto" variants={itemVariants}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-0">{projectInfo.title}</h1>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <a
              href={projectInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#C4A484] text-[#3E2723] px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg hover:bg-[#E6DCC8] transition-colors duration-300 text-xs sm:text-sm md:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              GitHub
            </a>
            {projectInfo.liveDemo && (
              <a
                href={projectInfo.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#C4A484] text-[#3E2723] px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg hover:bg-[#E6DCC8] transition-colors duration-300 text-xs sm:text-sm md:text-base"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Live Demo
              </a>
            )}
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
            {'image' in section && section.image && (
              <div className="mb-4 relative rounded-lg overflow-hidden">
                <Image
                  src={section.image}
                  alt={`${section.title} Diagram`}
                  width={800}
                  height={450}
                  layout="responsive"
                  objectFit="contain"
                  className="transition-all duration-300 ease-in-out"
                />
                <button
                  onClick={() => handleZoom(section.image)}
                  className="absolute top-2 right-2 bg-[#C4A484] text-[#3E2723] p-2 rounded-full hover:bg-[#E6DCC8] transition-colors duration-300"
                >
                  <ZoomIn size={24} />
                </button>
              </div>
            )}
            <div className="text-sm sm:text-base text-[#FFF8E1] whitespace-pre-wrap bg-[#4E342E] p-2 sm:p-3 md:p-4 rounded-lg shadow-lg">
              {section.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-2 sm:mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
            {'codeSnippets' in section && section.codeSnippets && section.codeSnippets.map((snippet, i) => (
              <div key={i} className="mt-4">
                <h3 className="text-lg font-semibold mb-2 text-[#C4A484]">{snippet.title}</h3>
                <CodeBlock code={snippet.code} language={snippet.language} />
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center cursor-pointer"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-[90vw] h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={zoomedImage}
                alt="Zoomed image"
                layout="fill"
                objectFit="contain"
              />
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 bg-[#C4A484] text-[#3E2723] p-2 rounded-full hover:bg-[#E6DCC8] transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}