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
};

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Senior QA Engineer",
    company: "Tech Solutions Ltd",
    period: "2020 - Present",
    description: "Leading QA initiatives for mobile and web applications, implementing automated testing frameworks, and mentoring junior team members.",
    skills: ["Playwright", "Cypress", "WebdriverIO", "Appium", "CI/CD", "API Testing", "Test Strategy"],
    type: "work",
    employmentType: "Contract",
    achievements: [
      "Successfully implemented shift-left QA strategies in two major products",
      "Developed high-level automation test scripts using Playwright and Cypress",
      "Built and maintained CI/CD pipelines for improved real-time visibility",
      "Mentored 3 junior QA engineers and improved team efficiency by 40%"
    ]
  },
  {
    id: "2",
    title: "QA Engineer",
    company: "Digital Innovations Inc",
    period: "2018 - 2020",
    description: "Developed comprehensive test strategies for e-commerce platforms, implemented automated regression testing, and collaborated with cross-functional teams.",
    skills: ["Manual Testing", "Test Automation", "Postman", "Jira", "Agile", "Selenium", "BDD"],
    type: "work",
    employmentType: "Perm",
    achievements: [
      "Reduced manual testing time by 60% through automation implementation",
      "Led cross-functional team coordination for quality assurance initiatives",
      "Enhanced quality control metrics and reduced production bugs by 45%"
    ]
  },
  {
    id: "3",
    title: "Software Tester",
    company: "WebDev Agency",
    period: "2016 - 2018",
    description: "Performed manual and automated testing for various web applications, created test documentation, and ensured quality standards.",
    skills: ["Manual Testing", "Bug Tracking", "Test Planning", "Cross-browser Testing", "Mobile Testing"],
    type: "work",
    employmentType: "Perm",
    achievements: [
      "Established comprehensive test documentation standards",
      "Improved bug detection rate by 35% through enhanced test planning",
      "Collaborated with development teams to implement quality gates"
    ]
  },
  {
    id: "4",
    title: "Junior QA Analyst",
    company: "StartupTech Solutions",
    period: "2014 - 2016",
    description: "Entry-level position focusing on manual testing, bug reporting, and learning automated testing tools and methodologies.",
    skills: ["Manual Testing", "Bug Reporting", "Test Case Design", "Agile Methodologies"],
    type: "work",
    employmentType: "Perm",
    achievements: [
      "Completed ISTQB Foundation Level certification",
      "Developed first automated test suite using Selenium",
      "Improved team communication and documentation processes"
    ]
  },
  {
    id: "5",
    title: "BSc Computer Science",
    company: "University of Technology",
    period: "2010 - 2014",
    description: "Specialized in software engineering, database systems, and software testing methodologies with focus on quality assurance and automation.",
    skills: ["Software Engineering", "Database Systems", "Testing Methodologies", "Programming", "Project Management"],
    type: "education",
    employmentType: "Work Experience"
  },
  {
    id: "6",
    title: "ISTQB Foundation Level",
    company: "International Software Testing Qualifications Board",
    period: "2015",
    description: "Foundation level certification in software testing principles, methodologies, and best practices.",
    skills: ["Test Design", "Test Management", "Risk Analysis", "Quality Assurance"],
    type: "certification",
    employmentType: "Work Experience"
  },
  {
    id: "7",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    period: "2019",
    description: "Cloud architecture and solutions design certification covering AWS services and best practices.",
    skills: ["Cloud Architecture", "AWS Services", "DevOps", "Infrastructure"],
    type: "certification",
    employmentType: "Work Experience"
  },
  {
    id: "8",
    title: "Cypress.io Test Automation",
    company: "Cypress.io",
    period: "2020",
    description: "Advanced certification in Cypress test automation framework and modern testing practices.",
    skills: ["Cypress", "JavaScript", "Test Automation", "E2E Testing"],
    type: "certification",
    employmentType: "Work Experience"
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