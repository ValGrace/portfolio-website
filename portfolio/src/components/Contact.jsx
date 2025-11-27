import { motion} from "motion/react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useInView } from "../hooks/useInView";


const socialLinks = [
    {icon: Mail, label: "Email", url: "mailto:gracevalerie1@gmail.com"},
    {icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/grace-anyango873/"},
    {icon: Github, label: "GitHub", url: "https://github.com/ValGrace"},
    {icon: Twitter, label: "Twitter", url: "https://twitter.com/Grace_Anyango7"},
]


const Contact = () => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center" ref={ref}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm open to working and collaborating on exciting projects. Feel free to contact me and i'll answer any question you may have.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border border-emerald-500/20 hover:border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all group"
              >
                <link.icon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
                <span className="text-gray-300 group-hover:text-white">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-12 border-t border-emerald-500/20"
          >
            <p className="text-gray-400">
                Grace Valerie Anyango.
            </p>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact