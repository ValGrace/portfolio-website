import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const trendingArticles = [
  {
    title: "Building Scalable APIs with Golang",
    description:
      "A new AI-powered smartphone dominates the market with real-time translation and smart assistant. Analysts believe this marks a turning...",
    date: "18/05/2025",
    readTime: "8 min read",
    category: "Gadgets",
    categoryColor: "from-pink-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    trending: true,
  },
];

const readHistoryArticles = [
  {
    title: "Gen Z Flocks to Vexu: The New AI Social Media Platform",
    description:
      "A new AI-powered phone dominates the market with real-time translation and smart assistant...",
    date: "18/05/2025",
    readTime: "5 min read",
    category: "Gadgets",
    categoryColor: "from-pink-500 to-pink-600",
    link: "#",
  },
  {
    title: "Electric Cars to Dominate Asian Market by 2027",
    description:
      "A new AI-powered phone dominates the market with real-time translation and smart assistant...",
    date: "18/05/2025",
    readTime: "5 min read",
    category: "Future",
    categoryColor: "from-purple-500 to-purple-600",
    link: "#",
  },
  {
    title: "Smartwatches Can Now Track Emotions with 89% Accuracy",
    description:
      "A new AI-powered phone dominates the market with real-time translation and smart assistant...",
    date: "18/05/2025",
    readTime: "7 min read",
    category: "Apps",
    categoryColor: "from-red-500 to-red-600",
    link: "#",
  },
  {
    title: "AI Chef Robot Goes Viral for Cooking Restaurant-Quality Meals",
    description:
      "A new AI-powered phone dominates the market with real-time translation and smart assistant...",
    date: "18/05/2025",
    readTime: "5 min read",
    category: "Gadgets",
    categoryColor: "from-pink-500 to-pink-600",
    link: "#",
  },
  {
    title: "Quantum Computing Breakthrough Promises Faster AI Training",
    description:
      "A new AI-powered phone dominates the market with real-time translation and smart assistant...",
    date: "18/05/2025",
    readTime: "9 min read",
    category: "Future",
    categoryColor: "from-purple-500 to-purple-600",
    link: "#",
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
              Trending News
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
                    className="block relative rounded-lg overflow-hidden bg-[#0a1a0f] border border-gray-500 hover:border-gray-700/50 transition-all duration-300"
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
                            Trending #1
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
              Read History
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
                    className="block p-4 rounded-lg bg-[#0a1a0f] border border-gray-800/30 hover:border-gray-700/50 hover:bg-[#0d1f14] transition-all duration-300"
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