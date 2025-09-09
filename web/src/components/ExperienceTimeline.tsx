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
};

const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Senior QA Engineer",
    company: "Tech Solutions Ltd",
    period: "2020 - Present",
    description: "Leading QA initiatives for mobile and web applications, implementing automated testing frameworks, and mentoring junior team members.",
    skills: ["Cypress", "Playwright", "Selenium", "CI/CD", "API Testing"],
    type: "work"
  },
  {
    id: "2",
    title: "QA Engineer",
    company: "Digital Innovations Inc",
    period: "2018 - 2020",
    description: "Developed comprehensive test strategies for e-commerce platforms, implemented automated regression testing, and collaborated with cross-functional teams.",
    skills: ["Manual Testing", "Test Automation", "Postman", "Jira", "Agile"],
    type: "work"
  },
  {
    id: "3",
    title: "Software Tester",
    company: "WebDev Agency",
    period: "2016 - 2018",
    description: "Performed manual and automated testing for various web applications, created test documentation, and ensured quality standards.",
    skills: ["Manual Testing", "Bug Tracking", "Test Planning", "Cross-browser Testing"],
    type: "work"
  },
  {
    id: "4",
    title: "BSc Multimedia and Internet Technology",
    company: "University of Technology",
    period: "2012 - 2016",
    description: "Specialized in web development, multimedia design, and internet technologies with focus on user experience and quality assurance.",
    skills: ["Web Development", "Multimedia Design", "User Experience", "Project Management"],
    type: "education"
  },
  {
    id: "5",
    title: "ISTQB Certified Tester",
    company: "International Software Testing Qualifications Board",
    period: "2019",
    description: "Foundation level certification in software testing principles, methodologies, and best practices.",
    skills: ["Test Design", "Test Management", "Risk Analysis", "Quality Assurance"],
    type: "certification"
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
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-foreground/80 font-medium">{item.company}</p>
                </div>
                <span className="text-sm text-foreground/60 mt-1 sm:mt-0">
                  {item.period}
                </span>
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
