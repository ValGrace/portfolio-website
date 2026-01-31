import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Code2, Database, Cloud } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    technologies: ["HTML5", "JavaScript", "React", "Node.js", "Golang", "TypeScript"],
  },
  {
    icon: Database,
    title: "Software and Data Engineering",
    technologies: ["System Design", "Algorithms", "Problem Solving", "Web Security", "Power BI", "SQL", "APIS"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing and DevOps",
    technologies: ["Git", "Docker", "AWS", "CI/CD", "Serverless", "Powershell", "Networking", "Linux"],
  },
];

export default function Profile() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">ABOUT ME</h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            I built my skillset from a software engineering degree, lots of personal projects, online tutorials and collaborating with other developers. I have interests in data engineering, web security and cloud computing.
            {/* I studied software development at KCA University in Kenya. I enjoy using cutting edge
            technology tools to address challenges. With a strong foundation in software
            engineering, I can confidently deliver a project from the requirements to a final
            implemented product. I am proficient in React, Node.JS, Golang programming and Cloud
            and Devops technologies. */}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-center mb-7 text-gray-200">SKILLSET</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-lg border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="mb-4 inline-block p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                  <skill.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="mb-4 text-gray-100">{skill.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}