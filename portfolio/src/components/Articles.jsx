import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "How Cloudflare broke the internet",
    description:
      "A look into the Cloudflare outage that affected a significant portion of the internet, exploring how a bad query was responsible for such a huge mishap.",
    date: "Nov 20, 2025",
    readTime: "3 min read",
    tags: ["Cloudflare", "SQL", "Databases"],
    link: "https://medium.com/@gracevalerie1/how-cloudflare-broke-the-internet-496035a4f29e",
  },
  {
    title: "How to Install Golang Mockery on Windows?",
    description:
      "This article is a lightweight guide on how to download golang mockery which is a package used to perform unit tests.",
    date: "February 28, 2025",
    readTime: "3 min read",
    tags: ["Golang", "Testing"],
    link: "https://www.geeksforgeeks.org/installation-guide/how-to-install-golang-mockery-on-windows/",
  },
  {
    title: "The Ultimate CSS Testing Toolbox",
    description:
      "Testing front-end code is essential to ensure a seamless user experience. This article covers the different types of testing techniques and how to use different tools.",
    date: "September 24, 2023",
    readTime: "12 min read",
    tags: ["CSS", "Style Guide", "Testing"],
    link: "https://dev.to/valgrace/the-ultimate-css-testing-toolbox-4n2m",
  },
  {
    title: "Git Branching Strategies",
    description:
      "Version control systems are the powerhouse when it comes to delivering software. they are capable of managing source code changes and tracking code change history",
    date: "--- --, 2024",
    readTime: "4 min read",
    tags: ["Git", "GitHub", "CICD"],
    link: "https://dev.to/valgrace/git-branching-strategies-how-to-manage-your-codebase-effectively-32lm",
  },
  {
    title: "ProxyChaining",
    description:
      "In a world where digital privacy is a myth, achieving total anonymity has been a top concern for many organizations and individuals. One technique that enables this is using proxychains.",
    date: "July 31, 2024",
    readTime: "4 min read",
    tags: ["Security", "proxy", "linux", "tor"],
    link: "https://dev.to/valgrace/proxychaining-1c86",
  },
];

export default function Articles() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="articles" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4">Technical Articles</h2>
          <p className="text-gray-400">
            Sharing knowledge and insights on software development, cloud computing, and best
            practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <a
                href={article.link}
                className="block h-full p-6 border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent hover:border-emerald-500/40 hover:from-emerald-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="mb-3 text-gray-100 group-hover:text-emerald-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-emerald-400 group-hover:gap-3 transition-all">
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500/40 hover:bg-emerald-500/10 rounded-lg transition-all group"
          >
            <span className="text-gray-300 group-hover:text-white">View All Articles</span>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}