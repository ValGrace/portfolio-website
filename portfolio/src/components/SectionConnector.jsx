import { motion } from "motion/react";

let position = "left"

export function SectionConnector({ position }) {
  const isLeft = position === "left";

  return (
    <div className={`relative w-full h-32 overflow-hidden ${isLeft ? "" : "flex justify-end"}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative w-32 h-full ${isLeft ? "ml-12" : "mr-12"}`}
      >
        {/* Vertical lines */}
        <div className="absolute inset-0 flex justify-center gap-3">
          <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent" />
          <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent" />
          <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent" />
        </div>

        {/* Center connector shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Outer glow */}
          <div className="absolute inset-0 blur-xl bg-emerald-500/30 rounded-full scale-150" />
          
          {/* Main capsule shape */}
          <svg
            width="40"
            height="80"
            viewBox="0 0 40 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            {/* Outer capsule */}
            <rect
              x="2"
              y="2"
              width="36"
              height="76"
              rx="18"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="rgba(16, 185, 129, 0.1)"
            />
            
            {/* Inner capsule 1 */}
            <rect
              x="6"
              y="6"
              width="28"
              height="68"
              rx="14"
              stroke="url(#gradient2)"
              strokeWidth="1.5"
              fill="rgba(16, 185, 129, 0.05)"
            />
            
            {/* Inner capsule 2 */}
            <rect
              x="10"
              y="10"
              width="20"
              height="60"
              rx="10"
              stroke="url(#gradient3)"
              strokeWidth="1"
              fill="rgba(16, 185, 129, 0.05)"
            />

            {/* Center ellipse */}
            <ellipse
              cx="20"
              cy="40"
              rx="8"
              ry="12"
              fill="url(#gradient4)"
              opacity="0.6"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="gradient1" x1="20" y1="0" x2="20" y2="80">
                <stop offset="0%" stopColor="#6148ecff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#485becff" stopOpacity="1" />
                <stop offset="100%" stopColor="#48c0ecff" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient2" x1="20" y1="0" x2="20" y2="80">
                <stop offset="0%" stopColor="#db2777" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#db2777" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#db2777" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient3" x1="20" y1="0" x2="20" y2="80">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient4" x1="20" y1="28" x2="20" y2="52">
                <stop offset="0%" stopColor="#4894ecff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5578f7ff" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated pulse effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-emerald-500/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}