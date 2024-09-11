'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageSquareMore, Wrench, Newspaper, UserRound, Download, MapPin, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

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
      }, 10)

      return () => clearTimeout(timer)
    }
  }, [text, currentIndex])

  return <span>{displayedText}</span>
}

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

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('About')
  const [stickyTop, setStickyTop] = useState(0)
  const headerRef = useRef<HTMLElement>(null)

  const tabs = ['About', 'Resume', 'Portfolio', 'Contact']

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

  const content = {
    About: (
      <div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <AnimatedText text="A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning, automation, and monitoring. I have been certified by Google Cloud for Associate Cloud Engineer and AWS Certified Cloud Practitioner." animationKey={activeTab} />
        <ul className="list-disc list-inside mt-4">
          <li><AnimatedText text="DevOps Engineer at XYZ Company - Jan 2020 to Present" animationKey={`${activeTab}-1`} /></li>
          <li><AnimatedText text="Cloud Engineer at ABC Corporation - Jun 2018 to Dec 2019" animationKey={`${activeTab}-2`} /></li>
          <li><AnimatedText text="Bachelor's Degree in Computer Science - University of Example" animationKey={`${activeTab}-3`} /></li>
        </ul>
      </div>
    ),
    Resume: (
      <div className="text-[#3E2723]">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="mb-4 bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold">University of Houston - Main Campus</h4>
            <p>Bachelor of Science in Computer Information Systems</p>
            <p>Minor in Technology, Leadership, and Innovation Management</p>
            <p>GPA: 3.53</p>
            <p>Houston, Texas | December 2024</p>
            <p className="mt-2">Relevant coursework: Cloud Computing Architecture, Enterprise Application Development, Organizational Leadership and Supervision, Quality Improvement Methods, Leading Change in the Workplace, Information Systems Operations</p>
          </div>
        </motion.div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="relative border-l-2 border-[#3E2723] pl-8 pb-8">
            {[
              {
                title: "Adair Kitchen",
                position: "Lead Server / Cashier / Barista",
                date: "February 2024 - Current",
                location: "Houston, Texas",
                responsibilities: [
                  "Collaborated with team members to ensure efficient service, especially during peak times.",
                  "Made 70+ espresso-based drinks per hour in a quick and efficient manner, while multitasking taking orders, cleaning, and checking inventory.",
                  "Assisted with inventory management and notified management of any shortages and surpluses.",
                  "Managed 250+ cash register operations per day, ensuring accurate transactions with speed and accuracy."
                ]
              },
              {
                title: "Jinya Ramen Bar",
                position: "Server",
                date: "October 2023 - April 2024",
                location: "Katy, Texas",
                responsibilities: [
                  "Mastered high-volume service, enhancing guest experience through expert menu knowledge and upselling.",
                  "Proficient in assisting guests with menu selections, offering detailed explanations of food options, and recommending cocktails and wines.",
                  "Handled 100+ guest orders per day, with high quality service ensuring all standards are met and exceeded."
                ]
              },
              {
                title: "Dove Canyon Golf Club",
                position: "Fine Dining Server",
                date: "Seasonal - April 2023 - August 2023",
                location: "Mission Viejo, California",
                responsibilities: [
                  "Possessed extensive knowledge of correct wine pairings, spirits, and cocktails, providing expert recommendations and service.",
                  "Efficiently managed multiple tables while maintaining a high standard of service, ensuring timely delivery of courses and meeting the specific needs of each guest.",
                  "Provided high-quality service to thousands of guests per month in a fine dining environment, ensuring guest satisfaction and repeat business."
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={job.title}
                className="mb-8 relative"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-4 w-4 rounded-full bg-[#3E2723] shadow-md border-2 border-white"></div>
                <div className="bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <p className="text-lg">{job.position}</p>
                  <p className="text-gray-600">{job.date}</p>
                  <p className="text-gray-600">{job.location}</p>
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
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Cloud Migration Project",
              description: "Led the migration of a monolithic application to a microservices architecture on AWS."
            },
            {
              title: "Automated CI/CD Pipeline",
              description: "Implemented a fully automated CI/CD pipeline using Jenkins, Docker, and Kubernetes."
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#E6DCC8] p-4 rounded-lg"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    Contact: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <AnimatedText text="If you would like to get in touch, please reach out through one of the following channels:" animationKey={activeTab} />
        <ul className="space-y-2 mt-4">
          <li>Email: <a href="mailto:elian@example.com" className="text-[#3E2723] hover:underline"><AnimatedText text="elian@example.com" animationKey={`${activeTab}-1`} /></a></li>
          <li>LinkedIn: <a href="#" className="text-[#3E2723] hover:underline"><AnimatedText text="LinkedIn Profile" animationKey={`${activeTab}-2`} /></a></li>
          <li>GitHub: <a href="#" className="text-[#3E2723] hover:underline"><AnimatedText text="GitHub Profile" animationKey={`${activeTab}-3`} /></a></li>
        </ul>
      </div>
    )
  }

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'About':
        return <UserRound className="w-6 h-6 mb-1" />
      case 'Resume':
        return <Newspaper className="w-6 h-6 mb-1" />
      case 'Portfolio':
        return <Wrench className="w-6 h-6 mb-1" />
      case 'Contact':
        return <MessageSquareMore className="w-6 h-6 mb-1" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF8E1] text-[#3E2723] p-4">
      <BackgroundSVG />
      <div className="max-w-6xl mx-auto space-y-4 flex flex-col relative z-10">
        {/* Header */}
        <header ref={headerRef} className="bg-[#C4A484] p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold">Elian Gutierrez</h1>
                <p className="text-[#3E2723]">DevOps | SRE | Cloud Engineer</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-2">
                  <a href="#" className="text-[#3E2723] hover:text-[#5D4037]" title="Linkedin">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-[#3E2723] hover:text-[#5D4037]" title="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <div className="bg-[#C4A484] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[#3E2723] text-md">EMAIL</p>
                    <a href="mailto:elian@example.com" className="text-[#FFF8E1] text-sm hover:underline">elian@example.com</a>
                  </div>
                  <div>
                    <p className="text-[#3E2723] text-md">CV</p>
                    <a href="#" className="text-[#FFF8E1] text-sm hover:underline flex items-center justify-center md:justify-end">
                      Download <Download className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[#3E2723] text-md">LOCATION</p>
                    <p className="text-[#FFF8E1] text-sm flex items-center justify-center md:justify-end">
                      Jakarta, ID <MapPin className="w-4 h-4 ml-1" />
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
            className="bg-[#C4A484] p-4 rounded-lg shadow-lg w-full md:w-auto min-w-32 top-0 z-10"
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
                    onClick={() => setActiveTab(tab)}
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
          <main className="flex-grow bg-[#C4A484] p-6 rounded-lg shadow-lg">
            {content[activeTab]}
          </main>
        </div>
      </div>
    </div>
  )
}