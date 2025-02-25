'use client'

import { useState, useEffect, useRef } from 'react'
import { Globe, FileText, Brain, MessageSquareMore, Wrench, Newspaper, UserRound, Download, MapPin, Github, Linkedin, Cloud, LockKeyhole, Infinity, ServerCog, Mail, BriefcaseBusiness, GraduationCap, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import ProjectDocumentation from '../app/docs/[project]/ProjectDocumentation'

interface AnimatedTextProps {
  text: string
  animationKey: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, animationKey }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setDisplayedText('')
    setCurrentIndex(0)
  }, [animationKey])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 3)

      return () => clearTimeout(timer)
    }
  }, [text, currentIndex])

  return <span>{displayedText}</span>
}

const BarGraphic = () => (
  <svg width="120" height="4" viewBox="30 0 60 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="4" fill="#3E2723"/>
    <rect x="60" width="80" height="4" fill="#E6DCC8"/>
  </svg>
)

const BackgroundSVG = () => (
  <svg className="fixed inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="triangles" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M0 0 L50 0 L25 43.3 Z" fill="#C4A484" opacity="0.1" />
        <path d="M50 0 L100 0 L75 43.3 Z" fill="#3E2723" opacity="0.1" />
        <path d="M25 43.3 L75 43.3 L50 86.6 Z" fill="#E6DCC8" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#triangles)" />
  </svg>
)

type TabType = 'About' | 'Resume' | 'Portfolio' | 'Contact';

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>('About')
  const [stickyTop, setStickyTop] = useState(0)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const mainContentRef = useRef<HTMLElement>(null)
  const params = useParams()
  const pathname = usePathname()

  const tabs: TabType[] = ['About', 'Resume', 'Portfolio', 'Contact']

  const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom
        setStickyTop(Math.max(0, headerBottom))
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname.startsWith('/docs/')) {
      setActiveTab('Portfolio')
      setSelectedProject(params.project as string)
    }
  }, [pathname, params])

  const scrollToTop = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleDocumentationClick = (projectSlug: string) => {
    setActiveTab('Portfolio')
    setSelectedProject(projectSlug)
    scrollToTop()
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    if (tab === 'Portfolio') {
      setSelectedProject(null)
    }
    scrollToTop()
  }

  const content: Record<TabType, JSX.Element> = {
    About: (
      <div className="text-[#3E2723]">
        <h2 className="text-3xl font-bold mb-1">About Me</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <AnimatedText 
              text="Adept customer-focused professional with a passion for keeping up with attention to detail, recently earning a Bachelor of Science in Computer Information Systems. Using my hands-on experience in networking and the cloud, as well as a commitment to clear, effective communication, I thrive in fast-paced environments where collaboration and customer satisfaction are key. Ready to bring my skills to resolve technical challenges, ensure smooth operations, and build robust cloud solutions."
              animationKey={`${activeTab}-1`}
            />
          </div>
          <div className="mb-4">
            <AnimatedText 
              text="In my recent projects, I&apos;ve focused on leveraging AWS to build secure and scalable solutions. One of my key projects, EZSender, showcases my ability to integrate AWS services such as Lambda, S3, Cognito, and API Gateway to build a robust mass email campaign system. This project allowed me to explore key security concerns around user authentication and secure data transmission, reinforcing my commitment to cloud security best practices."
              animationKey={`${activeTab}-2`}
            />
          </div>
          <div className="mb-4">
            <AnimatedText 
              text="My technical expertise extends to AWS serverless technologies, including Lambda, SQS, SNS, and IAM policies for secure access control. I am also skilled in automating infrastructure using Terraform and CloudFormation, ensuring that systems are both scalable and resilient."
              animationKey={`${activeTab}-3`}
            />
          </div>
          <div className="mb-4">
            <AnimatedText 
              text="Beyond technical skills, I thrive in collaborative environments, having worked on teams where I contributed to developing cloud-based applications and consulted on information system security. I believe that communication and teamwork are essential in driving innovation and delivering secure solutions."
              animationKey={`${activeTab}-4`}
            />
          </div>
          <div className="mb-4">
            <AnimatedText 
              text="As I look to the future, I&apos;m eager to contribute to the field of cloud security, helping organizations safeguard their assets in the cloud. Whether it&apos;s architecting secure systems or mitigating vulnerabilities, I&apos;m ready to take on new challenges and make an impact."
              animationKey={`${activeTab}-5`}
            />
          </div>
        </motion.div>
        <h3 className="text-2xl font-semibold mb-4 mt-8">What I&apos;m Doing</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Cloud Security",
              description: "Building secure, resilient cloud environments to protect data and ensure compliance.",
              icon: <LockKeyhole className="w-12 h-12 mb-4" />
            },
            {
              title: "Client-Focused Problem Solving",
              description: "Delivering cloud-based solutions and resolving technical issues, ensuring client satisfaction and smooth operations.",
              icon: <Cloud className="w-12 h-12 mb-4" />
            },
            {
              title: "Infrastructure as Code (IaC)",
              description: "Automating cloud infrastructure with Terraform and CloudFormation to ensure scalability, efficiency, and consistency.",
              icon: <ServerCog className="w-12 h-12 mb-4" />
            },
            {
              title: "DevOps",
              description: "Streamlining development and operations for fast, reliable, and automated CI/CD software delivery.",
              icon: <Infinity className="w-12 h-12 mb-4" />
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-lg shadow-lg text-[#FFF8E1] bg-gradient-to-b from-[#5D4037] via-[#3E2723] to-[#5D4037]"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    Resume: (
      <div className="">
        <h2 className="text-3xl font-bold mb-1">Resume</h2>
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center my-1 mt-0 mb-1">
            <BarGraphic />
          </div>
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 mr-2" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Bachelor of Science in Computer Information Systems</h4>
              <p>University of Houston - Main Campus</p>
              <p>Minor in Technology, Leadership, and Innovation Management</p>
              <p>GPA: 3.53</p>
              <p>Houston, Texas | December 2024</p>
            </div>
            <div className="bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Certifications and Relevant Coursework</h4>
              <ul className="list-disc list-inside">
                <li>AWS - Certified Cloud Practitioner</li>
                <li>Cloud Computing Architecture</li>
                <li>Intrusion Detection and Incident Response</li>
                <li>Enterprise Application Development</li>
                <li>Information Systems Operations</li>
              </ul>
            </div>
          </div>
        </motion.div>
    
        {/* Skills Section */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 mr-2" />
            <h3 className="text-2xl font-semibold">Skills</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Cloud Technologies</h4>
              <ul className="list-disc list-inside">
                <li>Amazon Web Services (Cognito, Lambda, Amplify, S3, RDS, SES)</li>
                <li>Google Cloud Platform</li>
                <li>Kubernetes</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className="bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Programming Languages</h4>
              <ul className="list-disc list-inside">
                <li>Python</li>
                <li>JavaScript / TypeScript</li>
                <li>Java</li>
                <li>Bash scripting</li>
              </ul>
            </div>
            <div className="bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">DevOps & Tools</h4>
              <ul className="list-disc list-inside">
                <li>CI/CD (GitHub Actions)</li>
                <li>Infrastructure as Code (Terraform / CloudFormation)</li>
                <li>Version Control (Git)</li>
                <li>Agile methodologies</li>
              </ul>
            </div>
          </div>
        </motion.div>
    
        <div>
          <div className="flex items-center mb-4">
            <BriefcaseBusiness className="w-6 h-6 mr-2" />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>
          <div className="relative">
            {[
              {
                "title": "Fine Dining Sales Support",
                "position": "PostScript",
                "date": "June 2024 - Present",
                "location": "Houston, Texas",
                "responsibilities": [
                  "Worked with 90+ clients per day, efficiently multitasking client requests in a critical, fast-paced environment.",
                  "Generated over $8,000 in food sales in a single day, consistently exceeding daily sales targets by 15-20%, increasing revenue and PPA.",
                  "Led training for 10+ team members, highlighting leadership and process optimization, raising secret shopper scores by 20+ points.",
                  "Achieved an average of 20-22 high-value sales per shift, while turning first-time clients into repeat customers, increasing daily guest counts."
                ]
              },
              {
                "title": "Lead Server / Cashier / Barista",
                "position": "Adair Kitchen",
                "date": "November 2023 - June 2024",
                "location": "Houston, Texas",
                "responsibilities": [
                  "Collaborated with team members to ensure efficient service, especially during intense peak times.",
                  "Multitasked over 70+ espresso-based drinks per hour in a quick and efficient manner, while taking orders, cleaning, and checking inventory.",
                  "Managed 250+ client operations per day, ensuring accurate transactions with speed and accuracy, leading to quick and efficient service."
                ]
              },
              {
                "title": "Technical Support Analyst",
                "position": "University of Houston",
                "date": "January 2022 - November 2023",
                "location": "Houston, Texas",
                "responsibilities": [
                  "Resolved over 1,200 technical issues per month, with a 97% resolution rate through troubleshooting and coordination with other departments.",
                  "Deployed Windows 11 on approximately 400 computers each month, while working on various IT-related issues, including network access, password management, and 2FA ensuring minimal downtime and lowered user complaints by 35%.",
                  "Provided hands-on support and guidance during system upgrades and maintenance, assisting over 200 users in adapting to new features and software updates each semester.",                ]
              },
              {
                "title": "Customer Service Representative",
                "position": "University of Houston",
                "date": "September 2021 - January 2022",
                "location": "Houston, Texas",
                "responsibilities": [
                  "Successfully identified and resolved at least 1,500 client issues per month through effective communication and coordination with other team members, resulting in a resolution rate of 95% or higher.",
                  "Assisted 110+ students and parents per day with account issues, ticket updates, and financial questions.",
                  "Consistently achieved a positive overall customer service experience by maintaining a customer satisfaction rate of 98% or higher and receiving positive feedback and compliments from customers on at least 70% of interactions."
                ]
              }
            ].map((job, index, array) => (
              <motion.div
                key={job.title}
                className="pl-8 pb-8 relative"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#3E2723]" style={{
                  top: index === 0 ? '12px' : '0',
                  bottom: index === array.length - 1 ? '12px' : '0'
                }}></div>
                <div className="absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-[#3E2723] border-2 border-[#FFF8E1]"></div>
                <div className="bg-gradient-to-b from-[#5D4037] via-[#3E2723] to-[#5D4037] p-4 rounded-lg shadow-lg text-[#FFF8E1]">
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <p className="text-lg">{job.position}</p>
                  <p className="text-[#C4A484]">{job.date}</p>
                  <p className="text-[#C4A484]">{job.location}</p>
                  <ul className="list-disc list-inside mt-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
    Portfolio: (
      <div>
        {selectedProject ? (
          <div>
            <div className="flex items-center mb-4">
              <button onClick={() => setSelectedProject(null)} className="text-2xl font-bold mb-1 text-[#3E2723] hover:underline flex items-center">
                <ChevronRight className="w-4 h-4 mr-2 transform rotate-180" />
                Back to Portfolio
              </button>
            </div>
            <ProjectDocumentation project={selectedProject} />
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#3E2723]">Portfolio</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Image Suite",
                  slug: "image-suite",
                  image: "/images/image-suite.png",
                  category: "Project",
                  description: "A comprehensive image processing and management tool built with Bootstrap and deployed with Google Cloud Run services.",
                  technologies: ["Python", "Flask", "Pillow", "rembg", "Docker", "Google Cloud Run"],
                  links: [
                    { name: "GitHub Repo", url: "https://github.com/Diechewood/image-suite", icon: <Github className="w-4 h-4 mr-2" /> },
                    { name: "Website", url: "https://image-suite-905291854682.us-central1.run.app", icon: <Globe className="w-4 h-4 mr-2" /> },
                    { name: "Documentation", action: () => handleDocumentationClick("image-suite"), icon: <FileText className="w-4 h-4 mr-2" /> }
                  ]
                },
                {
                  title: "EZSender",
                  slug: "ezsender",
                  image: "/images/ezsender.png",
                  category: "Project",
                  description: "A mass email campaign system which uses AWS services for scalable and secure email delivery.",
                  technologies: ["AWS S3", "AWS Lambda", "AWS SES", "AWS Cognito", "Bootstrap", "Node.js"],
                  links: [
                    { name: "GitHub Repo", url: "https://github.com/Diechewood/EZSender", icon: <Github className="w-4 h-4 mr-2" /> },
                    { name: "Website", url: "http://ezsender-app.s3-website-us-west-1.amazonaws.com/", icon: <Globe className="w-4 h-4 mr-2" /> },
                    { name: "Documentation", action: () => handleDocumentationClick("ezsender"), icon: <FileText className="w-4 h-4 mr-2" /> }
                  ]
                },
                {
                  title: "Portfolio Site",
                  slug: "portfolio-site",
                  image: "/images/portfolio-site.png",
                  category: "Project",
                  description: "A responsive and interactive portfolio website showcasing my projects and skills.",
                  technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "AWS Amplify"],
                  links: [
                    { name: "GitHub Repo", url: "https://github.com/Diechewood/portfolio-site", icon: <Github className="w-4 h-4 mr-2" /> },
                    { name: "Website", url: "https://eliangtz.com", icon: <Globe className="w-4 h-4 mr-2" /> },
                    { name: "Documentation", action: () => handleDocumentationClick("portfolio-site"), icon: <FileText className="w-4 h-4 mr-2" /> }
                  ]
                },
                {
                  title: "SpeedyStats (WIP)",
                  slug: "speedystats",
                  image: "/images/speedystats.png",
                  category: "Project",
                  description: "A real-time analytics dashboard for monitoring and visualizing speed metrics for longboarders.",
                  technologies: ["Swift", "AWS Lambda", "DynamoDB", "AWS S3", "GPS Tracking"],
                  links: [
                    { name: "GitHub Repo", url: "https://github.com/Diechewood/speedystats", icon: <Github className="w-4 h-4 mr-2" /> },
                    { name: "Documentation", action: () => handleDocumentationClick("speedystats"), icon: <FileText className="w-4 h-4 mr-2" /> }
                  ]
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex flex-col lg:flex-row relative overflow-hidden rounded-lg shadow-lg bg-[#3E2723]"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative w-full lg:w-64 h-64 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-2 left-2 bg-[#FF9800] text-[#3E2723] text-xs font-bold px-2 py-1 rounded">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 
                        className="text-lg font-semibold text-[#FFF8E1] mb-2 cursor-pointer hover:underline transition-all duration-300"
                        onClick={() => handleDocumentationClick(project.slug)}
                      >
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-[#C4A484] text-[#3E2723] text-xs font-bold px-3 py-1 rounded-full mb-2">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#C4A484] mb-4">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                      {project.links.map((link) => (
                        link.action ? (
                          <button
                            key={link.name}
                            onClick={link.action}
                            className="bg-[#C4A484] text-[#3E2723] text-sm font-bold px-4 py-2 rounded hover:bg-[#E6DCC8] transition-colors duration-300 flex items-center justify-center"
                          >
                            {link.icon}
                            {link.name}
                          </button>
                        ) : (
                          <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#C4A484] text-[#3E2723] text-sm font-bold px-4 py-2 rounded hover:bg-[#E6DCC8] transition-colors duration-300 flex items-center justify-center"
                          >
                            {link.icon}
                            {link.name}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
    Contact: (
      <div className="text-[#3E2723]">
        <h2 className="text-3xl font-bold mb-1">Contact Me</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
          >
          <div className="flex items-center my-1 mt-0 mb-1">
            <BarGraphic />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const subject = encodeURIComponent("Contact from Portfolio");
              const body = encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`);
              window.location.href = `mailto:eztz721@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-[#C4A484] rounded-md bg-[#FFF8E1] focus:outline-none focus:ring-2 focus:ring-[#3E2723]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-[#C4A484] rounded-md bg-[#FFF8E1] focus:outline-none focus:ring-2 focus:ring-[#3E2723]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 border border-[#C4A484] rounded-md bg-[#FFF8E1] focus:outline-none focus:ring-2 focus:ring-[#3E2723]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3E2723] text-[#FFF8E1] py-2 px-4 rounded-md hover:bg-[#5D4037] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="mailto:EzTz721@gmail.com"  target="_blank" rel="noopener noreferrer" className="text-[#3E2723] hover:text-[#5D4037]">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/elian-gutierrez-795088264/"  target="_blank" rel="noopener noreferrer" className="text-[#3E2723] hover:text-[#5D4037]">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Diechewood"  target="_blank" rel="noopener noreferrer" className="text-[#3E2723] hover:text-[#5D4037]">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    )
  }

  const getTabIcon = (tab: TabType) => {
    switch (tab) {
      case 'About':
        return <UserRound className="w-6 h-6 mb-1" />
      case 'Resume':
        return <Newspaper className="w-6 h-6 mb-1" />
      case 'Portfolio':
        return <Wrench className="w-6 h-6 mb-1" />
      case 'Contact':
        return <MessageSquareMore className="w-6 h-6 mb-1" />
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8E1] text-[#3E2723] p-4">
      <BackgroundSVG />
      <div className="max-w-6xl mx-auto space-y-4 flex flex-col relative z-10">
        {/* Updated Header */}
        <header ref={headerRef} className="bg-[#3E2723] p-6 rounded-lg shadow-lg border-2 border-[#C4A484]">
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-between">
            <div className="flex flex-col sm:flex-row items-center sm:items-center mb-6 lg:mb-0">
              <div className="mb-4 sm:mb-0 sm:mr-6">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-[#C4A484]"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold text-[#FFF8E1]">Elian Gutierrez</h1>
                <p className="text-[#C4A484]">Certified Cloud Computing and IT Specialist</p>
                <div className="flex justify-center sm:justify-start space-x-4 mt-2">
                  <a href="https://www.linkedin.com/in/elian-gutierrez-795088264/" target="_blank" rel="noopener noreferrer" className="text-[#C4A484] hover:text-[#FFF8E1]">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Diechewood" target="_blank" rel="noopener noreferrer" className="text-[#C4A484] hover:text-[#FFF8E1]">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="bg-[#3E2723] p-4 rounded-lg max-w-xs w-full">
                <div className="grid grid-cols-2 gap-4 text-[#FFF8E1]">
                  <div>
                    <p className="text-[#C4A484] text-sm font-bold">EMAIL</p>
                    <a href="mailto:EzTz721@gmail.com" className="text-sm hover:underline">EzTz721@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-[#C4A484] text-sm font-bold">Resume</p>
                    <a href="https://drive.google.com/drive/folders/1xj651lOmp9LfEtIXLVxWHQoXg_RTpWAa?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline flex items-center">
                      Download <Download className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[#C4A484] text-sm font-bold">LOCATION</p>
                    <p className="text-sm flex items-center">
                      Costa Mesa, California <MapPin className="w-4 h-4 ml-1" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Tab switcher */}
          <nav 
            className="bg-[#C4A484] p-4 rounded-lg shadow-lg w-full md:w-auto min-w-32 top-0 z-10 border-2 border-[#3E2723]"
            style={{
              position: 'sticky',
              top: stickyTop,
              height: 'fit-content',
              alignSelf: 'flex-start'
            }}
          >
            <ul className="grid grid-cols-4 md:grid-cols-1 gap-2">
              {tabs.map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleTabChange(tab)}
                    className={`w-full aspect-rectangle md:aspect-auto md:h-24 md:w-24 flex flex-col items-center justify-center p-2 rounded-md transition-colors ${
                      activeTab === tab
                        ? 'bg-[#3E2723] text-[#FFF8E1]'
                        : 'bg-[#FFF8E1] text-[#3E2723] hover:bg-[#E6DCC8]'
                    }`}
                  >
                    {getTabIcon(tab)}
                    <span className="text-xs md:text-sm text-center">{tab}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content area */}
          <main 
            ref={mainContentRef}
            className="flex-grow bg-[#C4A484] p-6 rounded-lg shadow-lg border-2 border-[#3E2723] overflow-y-auto scrollbar-hide" 
            style={{
              height: `calc(100vh - ${stickyTop}px - 2rem)`,
              position: 'sticky',
              top: `calc(${stickyTop}px + 1rem)`,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {content[activeTab]}
          </main>
        </div>
      </div>
    </div>
  )
}