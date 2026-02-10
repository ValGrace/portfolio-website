import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Calendar, Clock, ExternalLink } from "lucide-react";
// import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";

const trendingArticles = [
  {
    title: "How Cloudflare broke the internet",
    description:
      "A look into the Cloudflare outage that affected a significant portion of the internet, exploring how a bad query was responsible for such a huge mishap.",
    date: "Nov 20, 2025",
    readTime: "3 min read",
    category: "Gadgets",
    categoryColor: "from-pink-500 to-pink-600",
    image: "https://medium.com/@gracevalerie1/how-cloudflare-broke-the-internet-496035a4f29e",
    link: "#",
    trending: true,
  },
  {
    title: "Meta Unveils VR Glasses That Feel Like Reality",
    description:
      "Meta introduces ultra-light VR glasses with lifelike visuals and seamless interactions designed for next-gen digital experiences. The immersive quality makes it almost impossible to distinguish from reality.",
    date: "18/05/2025",
    readTime: "6 min read",
    category: "Apps",
    categoryColor: "from-red-500 to-red-600",
    image: "https://images.unsplash.com/photo-1525459571112-472991c82d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGdsYXNzZXN8ZW58MXx8fHwxNzcwMTMwODA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
  },
  {
    title: "AI Chess Engine Defeats World Champions",
    description:
      "A revolutionary AI-powered chess engine demonstrates unprecedented strategic thinking and adaptation, defeating multiple world champions in tournament play.",
    date: "17/05/2025",
    readTime: "7 min read",
    category: "Future",
    categoryColor: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1763788427927-87bc7c1fbcf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2hlc3MlMjBzdHJhdGVneXxlbnwxfHx8fDE3NzAxMzA4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "#",
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

const categories = ["All", "Gadgets", "Apps", "Future"];

export function Articles() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="articles" className="min-h-screen py-20 px-6 relative bg-[#01200F]" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex gap-8 mb-12 border-b border-gray-800"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-4 px-1 text-sm font-medium transition-colors relative ${
                activeCategory === category
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#104F55] to-[#32746D]"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trending News */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-bold text-white mb-6"
            >
              Trending News
            </motion.h2>

            <div className="space-y-6">
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
                    className="block relative rounded-xl overflow-hidden bg-[#011502]/50 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                  >
                    {/* Image with overlay */}
                    <div className="relative h-48 overflow-hidden">
                      {/* <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      /> */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Category Badge on Image */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-md bg-gradient-to-r ${article.categoryColor}`}>
                          {article.category}
                        </span>
                      </div>

                      {/* Trending Badge */}
                      {article.trending && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-black rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500">
                            Trending #1
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#9EC5AB] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                        {article.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ExternalLink className="w-3.5 h-3.5" />
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
              className="text-2xl font-bold text-white mb-6"
            >
              Read History
            </motion.h2>

            <div className="space-y-4">
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
                    className="block p-5 rounded-xl bg-[#011502]/50 border border-gray-800/50 hover:border-gray-700/50 hover:bg-[#011502]/70 transition-all duration-300"
                  >
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-md bg-gradient-to-r ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#9EC5AB] transition-colors">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                      {article.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended News Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Recommended News</h2>
        </motion.div>
      </div>
    </section>
  );
}