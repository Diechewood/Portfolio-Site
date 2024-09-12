'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageSquareMore, Wrench, Newspaper, UserRound, Download, MapPin, Github, Linkedin, Cloud, LockKeyhole, Infinity, ServerCog, Mail, BriefcaseBusiness, GraduationCap } from 'lucide-react'
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
      <div className="text-[#3E2723]">
        <h2 className="text-3xl font-bold mb-1">About Me</h2>
        <div className="flex items-center my-1 mt-0 mb-1">
          <BarGraphic />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <AnimatedText 
              text="A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning, automation, and monitoring. I have completed and been certified by Google Cloud for Associate Cloud Engineer and AWS for AWS Certified Cloud Practitioner."
              animationKey={`${activeTab}-1`}
            />
          </div>
          <div className="mb-4">
            <AnimatedText 
              text="Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on AWS and GCP, as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented monitoring and logging tools like ELK, Grafana, and Datadog to ensure comprehensive visibility into system performance and implemented GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort."
              animationKey={`${activeTab}-2`}
            />
          </div>
          <div className="mb-4">
            <AnimatedText 
              text="With a Bachelor's degree in Computer Science and a strong GPA, I am committed to continuous learning and professional growth. I am seeking opportunities to leverage my skills and contribute to the success of DevOps, SRE and cloud engineering projects."
              animationKey={`${activeTab}-3`}
            />
          </div>
        </motion.div>
        <h3 className="text-2xl font-semibold mb-4 mt-8">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Cloud Security",
              description: "I enjoy learning software development either for personal or specific purposes",
              icon: <LockKeyhole className="w-12 h-12 mb-4" />
            },
            {
              title: "Cloud Engineer",
              description: "Equipped with abilities to design, secure and maintenance of an organization's cloud-based infrastructure and application",
              icon: <Cloud className="w-12 h-12 mb-4" />
            },
            {
              title: "DevOps",
              description: "I enjoy to improve the speed and quality of delivery, automate and achieve CICD",
              icon: <Infinity className="w-12 h-12 mb-4" />
            },
            {
              title: "SRE",
              description: "I curious the processes and tools that ensure the scalability, reliability and availability of software systems",
              icon: <ServerCog className="w-12 h-12 mb-4" />
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-[#3E2723] p-6 rounded-lg shadow-lg text-[#FFF8E1]"
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
      <div className="text-[#3E2723]">
        <h2 className="text-3xl font-bold mb-1">Resume</h2>
        <div className="flex items-center my-1 mt-0 mb-1">
          <BarGraphic />
        </div>
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 mr-2" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">University of Houston - Main Campus</h4>
              <p>Bachelor of Science in Computer Information Systems</p>
              <p>Minor in Technology, Leadership, and Innovation Management</p>
              <p>GPA: 3.53</p>
              <p>Houston, Texas | December 2024</p>
            </div>
            <div className="bg-[#E6DCC8] p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Relevant Coursework</h4>
              <ul className="list-disc list-inside">
                <li>Cloud Computing Architecture</li>
                <li>Intrusion Detection and Incident Response</li>
                <li>Enterprise Application Development</li>
                <li>Organizational Leadership and Supervision</li>
                <li>Fundamentals of Information Security</li>
                <li>Information Systems Operations</li>
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
              },
              {
                title: "Willieʼs Grill and Icehouse",
                position: "Server / Cashier / Bartender",
                date: "February 2024 - Current",
                location: "Houston, Texas",
                responsibilities: [
                  "Managed cash register operations, processing transactions with accuracy.",
                  "Offered friendly and prompt customer service, responded to inquiries, and resolved complaints.",
                  "Assisted with inventory management and notified management of any shortages.",
                  "Collaborated with team members to ensure efficient service, especially during peak times."
                ]
              },
              {
                title: "University of Houston Student Financials Office",
                position: "Customer Service Representative",
                date: "September 2021 - August 2022",
                location: "Houston, Texas",
                responsibilities: [
                  "Successfully identified and resolved at least 1,500 client issues per month through effective communication and coordination with other team members, resulting in a resolution rate of 95% or higher.",
                  "Assisted at least 300 students and parents per month with account issues.",
                  "Consistently achieved a positive overall customer service experience by maintaining a customer satisfaction rate of 98% or higher and receiving positive feedback and compliments from customers on at least 50% of interactions.",
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
                <div className="bg-[#3E2723] p-4 rounded-lg shadow-lg text-[#FFF8E1]">
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
        <h2 className="text-3xl font-bold mb-1">Portfolio</h2>
        <div className="flex items-center my-1 mt-0 mb-3">
          <BarGraphic />
        </div>
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
              className="bg-[#3E2723] p-4 rounded-lg text-[#FFF8E1]"
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
      <div className="text-[#3E2723]">
        <h2 className="text-3xl font-bold mb-1">Contact Me</h2>
        <div className="flex items-center my-1 mt-0 mb-2">
          <BarGraphic />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
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
          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row items-center md:items-center">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="md:w-40 md:h-40 w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left flex flex-col justify-center">
                <h1 className="text-3xl font-bold">Elian Gutierrez</h1>
                <p className="text-[#3E2723]">DevOps | SRE | Cloud Engineer</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-2">
                  <a href="https://www.linkedin.com/in/elian-gutierrez-795088264/" target="_blank" rel="noopener noreferrer" className="text-[#3E2723] hover:text-[#5D4037]" title="Linkedin">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Diechewood" target="_blank" rel="noopener noreferrer" className="text-[#3E2723] hover:text-[#5D4037]" title="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <div className="bg-[#C4A484] p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[#3E2723] text-sm font-bold">EMAIL</p>
                    <a href="mailto:EzTz721@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E1] text-sm hover:underline">EzTz721@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-[#3E2723] text-sm font-bold">CV</p>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#FFF8E1] text-sm hover:underline flex items-center justify-center md:justify-end">
                      Download <Download className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[#3E2723] text-sm font-bold">LOCATION</p>
                    <p className="text-[#FFF8E1] text-sm flex items-center justify-center md:justify-end">
                      Houston, Texas <MapPin className="w-4 h-4 ml-1" />
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