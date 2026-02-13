import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const trendingArticles = [
  {
    title: "How Cloudflare broke the internet",
    description:
      "A look into the Cloudflare outage that affected a significant portion of the internet, exploring how a bad query was responsible for such a huge mishap.",
    date: "18/05/2025",
    readTime: "3 min read",
    category: "Cloudflare",
    categoryColor: "from-pink-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    trending: true,
  },
  {
    title: "Useful Linux Commands for Data Engineers",
    description:
      "A deep dive into how data engineers can leverage linux commands to enhance their daily tasks and workflows",
    date: "18/05/2025",
    readTime: "4 min read",
    category: "Linux",
    categoryColor: "from-pink-500 to-pink-600",
    image: "https://images.pexels.com/photos/11034131/pexels-photo-11034131.jpeg",
    link: "https://dev.to/valgrace/useful-linux-commands-for-data-engineers-3082",
    trending: false,
  }
];

const readHistoryArticles = [
  {
    title: "How to Install Golang Mockery on Windows?",
    description:
      "This article is a lightweight guide on how to download golang mockery which is a package used to perform unit tests",
    date: "February 28, 2025",
    readTime: "3 min read",
    category: "Golang",
    categoryColor: "from-pink-500 to-pink-600",
    link: "https://www.geeksforgeeks.org/installation-guide/how-to-install-golang-mockery-on-windows/",
  },
  {
    title: "The Ultimate CSS Testing Toolbox",
    description:
      "Testing front-end code is essential to ensure a seamless user experience. This article covers the different types of testing techniques and how to use different tools.",
    date: "18/05/2025",
    readTime: "7 min read",
    category: "CSS",
    categoryColor: "from-purple-500 to-purple-600",
    link: "https://dev.to/valgrace/the-ultimate-css-testing-toolbox-4n2m",
  },
  {
    title: "ProxyChaining",
    description:
      "In a world where digital privacy is a myth, achieving total anonymity has been a top concern for many organizations and individuals. One technique that enables this is using proxychains.",
    date: "18/05/2025",
    readTime: "4 min read",
    category: "Security",
    categoryColor: "from-red-500 to-red-600",
    link: "https://dev.to/valgrace/proxychaining-1c86",
  },
  {
    title: "Data Manipulation Language in SQL",
    description:
      "A comprehensive guide to understanding and using Data Manipulation Language (DML) in SQL, including INSERT, UPDATE, and DELETE operations.",
    date: "11/02/2026",
    readTime: "5 min read",
    category: "SQL",
    categoryColor: "from-pink-500 to-pink-600",
    link: "https://medium.com/@gracevalerie1/data-manipulation-language-in-sql-c84e9e3c2836",
  },
  {
    title: "Data Definition Language in SQL",
    description:
      "A comprehensive guide to understanding and using Data Definition Language (DDL) in SQL, including CREATE, ALTER, and DROP operations.",
    date: "18/05/2025",
    readTime: "5 min read",
    category: "SQL",
    categoryColor: "from-purple-500 to-purple-600",
    link: "https://medium.com/@gracevalerie1/data-definition-language-commands-in-sql-55fa158e88b8",
  },
];


export function Articles() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="articles" className="min-h-screen py-12 px-6 relative bg-[#FFF]" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trending News */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl font-bold text-white mb-5"
            >
             My Technical Articles
            </motion.h2>

            <div className="space-y-5">
              {trendingArticles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group relative"
                >
                  <a
                    href={article.link}
                    className="block relative rounded-lg overflow-hidden border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent hover:border-gray-700/50 transition-all duration-300"
                  >
                    {/* Image with overlay */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Category Badge on Image */}
                      <div className="absolute top-3 left-3">
                        <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold text-white rounded bg-gradient-to-r ${article.categoryColor}`}>
                          {article.category}
                        </span>
                      </div>

                      {/* Trending Badge */}
                      {article.trending && (
                        <div className="absolute top-3 right-3">
                          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-black rounded bg-gradient-to-r from-yellow-400 to-yellow-500">
                            Databases
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-white mb-2 leading-tight group-hover:text-[#9EC5AB] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
                        {article.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          <span>Source</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Read History */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl font-bold text-white mb-5"
            >
              More Stories...
            </motion.h2>

            <div className="space-y-3">
              {readHistoryArticles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <a
                    href={article.link}
                    className="block p-4 rounded-lg border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent hover:border-gray-700/50 hover:bg-[#0d1f14] transition-all duration-300"
                  >
                    {/* Category Badge */}
                    <div className="mb-2.5">
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold text-white rounded bg-gradient-to-r ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-semibold text-white mb-2 leading-tight group-hover:text-[#9EC5AB] transition-colors">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2">
                      {article.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        <span>Source</span>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}