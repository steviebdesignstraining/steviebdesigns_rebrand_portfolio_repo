"use client";

import { motion } from "framer-motion";

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  type: "work" | "education" | "certification";
  employmentType: "Perm" | "Contract" | "Work Experience";
  achievements?: string[];
  location?: string;
};

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Mobile QA Engineer",
    company: "Stadion",
    period: "05/2025 - 07/2025",
    location: "London, United Kingdom",
    description: "Comprehensive manual testing and automation framework evaluation for mobile applications and web platforms.",
    skills: ["Maestro", "GitHub Actions", "CI/CD", "Manual Testing", "Exploratory Testing", "Regression Testing", "Agile"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Championed and implemented shift-left QA approach in two products",
      "Delivered live demonstrations of three automation frameworks",
      "Built GitHub Actions CI/CD pipelines with automated reporting",
      "Led weekly QA training sessions with live demos and video tutorials",
      "Created comprehensive QA knowledge base and documentation"
    ]
  },
  {
    id: "2",
    title: "Test Engineer",
    company: "Elsewhen",
    period: "11/2023 - 06/2024",
    location: "London, United Kingdom",
    description: "Test automation using Cypress and Playwright with TypeScript, focusing on API testing and security integration.",
    skills: ["Cypress", "Playwright", "TypeScript", "Okta", "API Testing", "Swagger", "Postman", "GitHub Actions"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Automated positive and negative test cases using Cypress/Playwright with TypeScript",
      "Implemented Okta authentication for automation scripts with access tokens",
      "Monitored CI/CD pipelines with GitHub Actions for PR merges",
      "Introduced Playwright to new projects while phasing out Cypress",
      "Acted as QA team advocate and spokesman in absence of QA lead"
    ]
  },
  {
    id: "3",
    title: "Automation Test Engineer",
    company: "Kubrick Group",
    period: "08/2022 - 08/2023",
    location: "London, United Kingdom",
    description: "Created QA processes from scratch and automated test cases using Cypress with JavaScript.",
    skills: ["Cypress", "JavaScript", "Azure DevOps", "API Testing", "GIT", "CI/CD", "Test Strategy"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Created QA processes from scratch including test strategies and test cases",
      "Automated Kubrick applications with Cypress and JavaScript",
      "Created and maintained CI pipelines in Azure DevOps with weekly scheduled runs",
      "Developed test cases based on requirement-based stories from backlog",
      "Created comprehensive release reports and documentation"
    ]
  },
  {
    id: "4",
    title: "Manual Mobile Tester",
    company: "TikTok",
    period: "07/2022 - 08/2022",
    location: "London, United Kingdom",
    description: "Mobile testing specialist focusing on iOS and Android platforms with exploratory and regression testing.",
    skills: ["Manual Testing", "iOS Testing", "Android Testing", "Exploratory Testing", "Regression Testing", "Acceptance Criteria"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Performed exploratory testing based on acceptance criteria",
      "Conducted functional and behavioral regression/smoke testing",
      "Tested both iOS and Android devices comprehensively"
    ]
  },
  {
    id: "5",
    title: "Automation/Manual QA Tester",
    company: "Curio",
    period: "04/2021 - 08/2022",
    location: "London, United Kingdom",
    description: "Led automation of QA processes using Cypress with TypeScript and Cucumber for web testing.",
    skills: ["Cypress", "TypeScript", "Cucumber", "Stripe", "Firebase", "Looker", "Instabug", "Intercom", "A/B Testing"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Automated Curio's web testing and developed comprehensive QA processes",
      "Established and monitored bug triage dashboard workflow",
      "Integrated CRM tools like Instabug and Intercom for bug reporting",
      "Conducted A/B testing and performance monitoring using Firebase and Looker",
      "Led presentations on QA advancements and new technologies"
    ]
  },
  {
    id: "6",
    title: "QA Engineer",
    company: "Efficio",
    period: "11/2020 - 04/2021",
    location: "London, United Kingdom",
    description: "Contract manual testing for procurement tools and systems.",
    skills: ["Manual Testing", "Procurement Tools", "Quality Assurance"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Performed comprehensive manual testing of procurement tools",
      "Ensured quality standards for business-critical applications"
    ]
  },
  {
    id: "7",
    title: "Mobile QA Tester",
    company: "Tempcover",
    period: "01/2020 - 06/2020",
    location: "London, United Kingdom",
    description: "Permanent role focusing on automation and manual testing for car insurance app using Detox and Cucumber.",
    skills: ["Detox", "Cucumber", "Mobile Testing", "Car Insurance", "Automation", "Manual Testing"],
    type: "work",
    employmentType: "Perm",
    achievements: [
      "Automated and manually tested new car insurance application",
      "Used Detox and Cucumber for mobile test automation",
      "Ensured quality standards for insurance platform"
    ]
  },
  {
    id: "8",
    title: "Software QA Tester",
    company: "BBC",
    period: "12/2019 - 01/2020",
    location: "London, United Kingdom",
    description: "Contract manual testing for BBC's toolkit and software systems.",
    skills: ["Manual Testing", "BBC Toolkit", "Software Testing"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Performed manual testing of BBC's toolkit",
      "Ensured quality standards for media software"
    ]
  },
  {
    id: "9",
    title: "QA Engineer",
    company: "Clarksons Platou",
    period: "05/2019 - 08/2019",
    location: "London, United Kingdom",
    description: "Contract testing of cloud-based product with data parsing capabilities using Cypress for desktop automation.",
    skills: ["Cypress", "Cloud Testing", "Data Parsing", "Desktop Automation", "Manual Testing"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Tested cloud-based product with data parsing between applications",
      "Implemented desktop automation using Cypress",
      "Ensured data integrity across cloud applications"
    ]
  },
  {
    id: "10",
    title: "Android and iOS Application Test Analyst",
    company: "Tantalum Corporation",
    period: "05/2018 - 02/2019",
    location: "London, United Kingdom",
    description: "Contract testing of Motor Tech application for both iOS and Android using ODB hardware integration.",
    skills: ["iOS Testing", "Android Testing", "ODB Hardware", "Motor Tech", "Mobile Applications"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Tested Motor Tech application for iOS and Android platforms",
      "Integrated testing with ODB hardware systems",
      "Ensured compatibility across mobile platforms"
    ]
  },
  {
    id: "11",
    title: "Quality Assurance Manager",
    company: "Freedman International",
    period: "09/2017 - 11/2017",
    location: "London, United Kingdom",
    description: "Contract QC Manager managing a team of 6 Quality Controllers and wider studio for major accounts including EA Games, Sage, and Fitbit.",
    skills: ["Team Management", "Quality Control", "EA Games", "Sage", "Fitbit", "Project Management"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Managed team of 6 Quality Controllers and wider studio",
      "Oversaw projects for major accounts: EA Games, Sage, and Fitbit",
      "Coordinated between Designers, Developers, Art Workers, and Project Managers"
    ]
  },
  {
    id: "12",
    title: "Digital Quality Assurance Manager",
    company: "William Lea Tag",
    period: "04/2017 - 09/2017",
    location: "London, United Kingdom",
    description: "Permanent role working for H&M testing digital assets, email marketing, web, and video assets.",
    skills: ["Digital Assets", "Email Marketing", "Web Testing", "Video Assets", "H&M", "Quality Assurance"],
    type: "work",
    employmentType: "Perm",
    achievements: [
      "Managed digital quality assurance for H&M brand",
      "Tested digital assets, email marketing, web, and video content",
      "Ensured brand consistency across digital platforms"
    ]
  },
  {
    id: "13",
    title: "Senior Digital Quality Controller",
    company: "Schawk",
    period: "06/2015 - 04/2017",
    location: "London, United Kingdom",
    description: "Permanent role working for Sky Digital testing digital assets, email marketing, web, and video assets.",
    skills: ["Digital Assets", "Email Marketing", "Web Testing", "Video Assets", "Sky Digital", "Quality Control"],
    type: "work",
    employmentType: "Perm",
    achievements: [
      "Managed digital quality control for Sky Digital",
      "Tested comprehensive range of digital assets and marketing materials",
      "Ensured quality standards for media content"
    ]
  },
  {
    id: "14",
    title: "Account Manager",
    company: "Telappliant",
    period: "08/2013 - 06/2015",
    location: "London, United Kingdom",
    description: "Account Manager for VoIP solutions managing accounts including Millwall Football Club.",
    skills: ["VoIP Solutions", "Account Management", "Client Relations", "Telecommunications"],
    type: "work",
    employmentType: "Perm",
    achievements: [
      "Managed VoIP solutions for major clients",
      "Handled account for Millwall Football Club",
      "Developed client relationships and technical solutions"
    ]
  },
  {
    id: "15",
    title: "Work Placement - Graphic Designer",
    company: "Apptomix",
    period: "08/2008 - 03/2009",
    location: "San Diego, California, USA",
    description: "Graphic and Frontend Designer for content management system development.",
    skills: ["Graphic Design", "Frontend Design", "Content Management", "Web Design"],
    type: "work",
    employmentType: "Work Experience",
    achievements: [
      "Designed graphics and frontend components for CMS",
      "Gained international work experience in San Diego",
      "Developed foundational design and development skills"
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experienceData.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-foreground/20" />
          
          {/* Timeline dot */}
          <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-background ${
            item.type === "work" ? "bg-blue-500" : 
            item.type === "education" ? "bg-green-500" : "bg-purple-500"
          }`} />
          
          {/* Content */}
          <div className="ml-16 pb-8">
            <div className="bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 hover:bg-background/70 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-foreground/80 font-medium">{item.company}</p>
                  {item.location && (
                    <p className="text-foreground/60 text-sm">{item.location}</p>
                  )}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mt-2">
                      <h4 className="text-sm font-medium text-foreground/70 mb-1">Key Achievements:</h4>
                      <ul className="text-sm text-foreground/60 space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end mt-2 sm:mt-0">
                  <span className="text-sm text-foreground/60 mb-1">
                    {item.period}
                  </span>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                    item.employmentType === "Perm" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200" :
                    item.employmentType === "Contract" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200" :
                    "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200"
                  }`}>
                    {item.employmentType}
                  </span>
                </div>
              </div>
              
              <p className="text-foreground/70 mb-4">{item.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-foreground/10 text-foreground/70 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-3">
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  item.type === "work" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200" :
                  item.type === "education" ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200" :
                  "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200"
                }`}>
                  {item.type === "work" ? "Work Experience" :
                   item.type === "education" ? "Education" : "Certification"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}