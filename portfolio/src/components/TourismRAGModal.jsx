import { useState, useEffect, useCallback } from "react";
import { Compass, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
const SLIDES = [
    {
    badge: "In Progress",
    title: "Overview",
    body: "RAG based LLM to find hotels in Kenya and tourist destinations",
    bullets: [
      "Search for hotels, accommodations anywhere in Kenya",
      "Plan your trip to Kenya and East Africa",
      "Find the best activities to do while on your trip",
    ],
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/voyager-travel.png"
  },
  {
    badge: "Voyager",
    title: "Features",
    body: "RAG engine to plan your trip",
    bullets: [
      "Breakdown of available accomodations based on needs",
      "Price comparisons",
      "Database of hotels, restaurants, villas and tourist attractions",
    ],
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/voyager2.png"
  },
  
  {
    badge: "Voyager",
    title: "Benefits",
    body: "Plan your perfect trip to Kenya in minutes",
    bullets: [
      "Chat based search capabilities for easy queries",
      "Scalable foundation for data processing using spark"
    ],
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/days2.png"
  },
  {
    badge: "Ecommerce Spark",
    title: "Architecture",
    body: "Learn how this was built",
    bullets: [
      "ChromaDB (vector based storage)",
      "RAG Pipeline (chunks -> embeddings -> vectors -> semantic search)",
      "Web Scraped Data / APIs",
      "Python",
      "ETL Pipeline -> (Extraction, transformations)",
      "LLM Prompt template"
      
    ],
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/RAG_pipeline.png"
  },
];


export function TourismModal({ open, onClose }) {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  const handleKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(SLIDES.length - 1, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    },
    [open, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="ob-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="ob-modal" role="dialog" aria-modal="true" aria-labelledby="ob-title">
        {/* LEFT: dashboard preview gallery */}
        <div className="ob-preview">
          <div className="ob-preview__glow" />
          <h3 className="ob-preview__heading">Chat with LLMs to find accomodations, parks, and hidden gems</h3>
          <p className="ob-preview__copy">
            Turning scraped tourism data into searchable queries.
          </p>

          <div className="ob-preview__imagewrap">
            <img
              key={index}
              src={`${slide.source}`}
              alt={`${slide.title} preview`}
              className="ob-preview__image"
              draggable={false}
            />
          </div>
        </div>

        {/* RIGHT: copy panel */}
        <div className="ob-panel">
          <div className="ob-panel__closerow">
            <button onClick={onClose} aria-label="Close" className="ob-closebtn">
              <X size={18} />
            </button>
          </div>

          <span className="ob-badge">{slide.badge}</span>

          <h2 id="ob-title" className="ob-title">
            {slide.title}
          </h2>

          <div className="ob-icon">
            <Compass size={22} color="#474973" />
          </div>

          <p className="ob-body">{slide.body}</p>

          <ul className="ob-bullets">
            {slide.bullets.map((b, i) => (
              <li key={i}>
                <span className="ob-bullets__dot" />
                {b}
              </li>
            ))}
          </ul>

          <div className="ob-footer">
            <div className="ob-nav">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="ob-navbtn"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="ob-dots">
                {SLIDES.map((_, i) => (
                  <span key={i} className={`ob-dots__item ${i === index ? "is-active" : ""}`} />
                ))}
              </div>
              <button
                onClick={() => setIndex((i) => Math.min(SLIDES.length - 1, i + 1))}
                disabled={index === SLIDES.length - 1}
                className="ob-navbtn"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
              <span className="ob-count">
                {index + 1}/{SLIDES.length}
              </span>
            </div>

            <a className="ob-cta" href="https://github.com/ValGrace/travel_assistant" target="_blank" 
  rel="noopener noreferrer">
              <ExternalLink size={14} />

              Show me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OnboardingModalDemo() {
  const [open, setOpen] = useState(true);

  return (
    <div className="ob-demo">
      {/* <style>{CSS}</style> */}
      <button className="ob-trigger" onClick={() => setOpen(true)}>
        Open dashboard tips
      </button>
      <TourismModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

// const CSS = `
// .ob-demo {
//   font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//   display: flex;
//   justify-content: center;
//   padding: 32px 16px;
// }
// .ob-trigger {
//   background: #474973;
//   color: #0b0c0e;
//   border: none;
//   border-radius: 4px;
//   padding: 10px 18px;
//   font-weight: 600;
//   font-size: 14px;
//   cursor: pointer;
// }

// .ob-overlay {
//   position: fixed;
//   inset: 0;
//   background: rgba(4, 5, 6, 0.72);
//   backdrop-filter: blur(2px);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   z-index: 1000;
//   animation: ob-fade 0.15s ease-out;
// }
// @keyframes ob-fade {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }

// .ob-modal {
//   background: #0b0c0e;
//   border-radius: 8px;
//   overflow: hidden;
//   width: 100%;
//   max-width: 1000px;
//   max-height: 92vh;
//   display: flex;
//   box-shadow: 0 20px 60px #a69cac13;
//   border: 1px solid #22252a;
//   animation: ob-pop 0.18s ease-out;
// }
// @keyframes ob-pop {
//   from { opacity: 0; transform: scale(0.97) translateY(4px); }
//   to { opacity: 1; transform: scale(1) translateY(0); }
// }

// /* LEFT PREVIEW PANEL */
// .ob-preview {
//   flex: 1 1 55%;
//   background: linear-gradient(160deg, #0D0C1D 0%, #0b0c0e 45%);
//   padding: 28px 24px;
//   position: relative;
//   min-width: 0;
//   overflow: hidden;
// }
// .ob-preview__glow {
//   position: absolute;
//   top: 0; left: 0; right: 0;
//   height: 6px;
//   background: linear-gradient(90deg, #474973, #A69CAC);
// }
// .ob-preview__heading {
//   color: #e6e6e6;
//   font-size: 16px;
//   font-weight: 600;
//   margin: 8px 0 6px;
// }
// .ob-preview__copy {
//   color: #9fa7ae;
//   font-size: 12.5px;
//   margin: 0 0 20px;
//   line-height: 1.5;
// }
// .ob-preview__imagewrap {
//   position: relative;
//   border-radius: 6px;
//   overflow: hidden;
//   border: 1px solid #2c3235;
//   background: #0e1013;
//   box-shadow: 0 12px 30px rgba(0,0,0,0.35);
// }
// .ob-preview__image {
//   display: block;
//   width: 100%;
//   height: auto;
//   aspect-ratio: 520 / 640;
//   object-fit: cover;
//   object-position: top;
//   animation: ob-img-fade 0.28s ease-out;
// }
// @keyframes ob-img-fade {
//   from { opacity: 0; transform: scale(1.01); }
//   to { opacity: 1; transform: scale(1); }
// }

// /* RIGHT COPY PANEL */
// .ob-panel {
//   flex: 1 1 45%;
//   padding: 24px 32px 28px;
//   display: flex;
//   flex-direction: column;
//   min-width: 0;
//   overflow-y: auto;
// }
// .ob-panel__closerow {
//   display: flex;
//   justify-content: flex-end;
// }
// .ob-closebtn {
//   background: none;
//   border: none;
//   color: #8e9297;
//   cursor: pointer;
//   padding: 4px;
//   line-height: 0;
// }
// .ob-closebtn:hover { color: #e6e6e6; }

// .ob-badge {
//   align-self: flex-start;
//   background: #161b3387;
//   color: #F1DAC4;
//   font-size: 11px;
//   font-weight: 700;
//   letter-spacing: 0.4px;
//   padding: 4px 10px;
//   border-radius: 4px;
//   margin-bottom: 18px;
// }
// .ob-title {
//   color: #f4f5f5;
//   font-size: 26px;
//   font-weight: 600;
//   line-height: 1.25;
//   margin: 0 0 20px;
// }
// .ob-icon {
//   width: 46px;
//   height: 46px;
//   border-radius: 8px;
//   background: #a69cac47;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
//   flex-shrink: 0;
// }
// .ob-body {
//   color: #d0d3d6;
//   font-size: 15px;
//   line-height: 1.5;
//   margin: 0 0 16px;
// }
// .ob-bullets {
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   flex: 1;
// }
// .ob-bullets li {
//   display: flex;
//   gap: 10px;
//   margin-bottom: 14px;
//   color: #c7cad0;
//   font-size: 13.5px;
//   line-height: 1.5;
// }
// .ob-bullets__dot {
//   width: 6px;
//   height: 6px;
//   border-radius: 50%;
//   background: #F1DAC4;
//   margin-top: 6px;
//   flex-shrink: 0;
// }

// .ob-footer {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 12px;
//   gap: 12px;
//   flex-wrap: wrap;
// }
// .ob-nav {
//   display: flex;
//   align-items: center;
//   gap: 10px;
// }
// .ob-navbtn {
//   width: 28px;
//   height: 28px;
//   border-radius: 4px;
//   border: 1px solid #3d434a;
//   background: transparent;
//   color: #c7cad0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// }
// .ob-navbtn:disabled {
//   color: #4a4f55;
//   cursor: default;
// }
// .ob-dots {
//   display: flex;
//   gap: 6px;
// }
// .ob-dots__item {
//   width: 6px;
//   height: 6px;
//   border-radius: 50%;
//   background: #3d434a;
// }
// .ob-dots__item.is-active {
//   background: #F1DAC4;
// }
// .ob-count {
//   color: #8e9297;
//   font-size: 12px;
//   margin-left: 2px;
// }
// .ob-cta {
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   background: transparent;
//   border: 1px solid #3d434a;
//   color: #e6e6e6;
//   border-radius: 4px;
//   padding: 8px 16px;
//   font-size: 13.5px;
//   font-weight: 600;
//   cursor: pointer;
//   white-space: nowrap;
// }
// .ob-cta:hover {
//   border-color: #A69CAC;
//   color: #A69CAC;
// }

// /* RESPONSIVE */
// @media (max-width: 860px) {
//   .ob-modal {
//     max-width: 640px;
//   }
//   .ob-title { font-size: 22px; }
// }

// @media (max-width: 720px) {
//   .ob-modal {
//     flex-direction: column;
//     max-height: 94vh;
//     overflow-y: auto;
//   }
//   .ob-preview {
//     flex: 0 0 auto;
//     padding: 20px 20px 24px;
//     max-height: 40vh;
//   }
//   .ob-preview__imagewrap {
//     max-height: 32vh;
//   }
//   .ob-preview__image {
//     height: 100%;
//     max-height: 32vh;
//   }
//   .ob-panel {
//     padding: 18px 20px 22px;
//     overflow-y: visible;
//   }
//   .ob-panel__closerow {
//     position: absolute;
//     top: 10px;
//     right: 10px;
//   }
//   .ob-preview {
//     position: relative;
//   }
// }

// @media (max-width: 480px) {
//   .ob-overlay { padding: 0; align-items: flex-end; }
//   .ob-modal {
//     max-width: 100%;
//     max-height: 96vh;
//     border-radius: 12px 12px 0 0;
//   }
//   .ob-preview {
//     padding: 18px 16px 20px;
//     max-height: 34vh;
//   }
//   .ob-preview__imagewrap,
//   .ob-preview__image {
//     max-height: 26vh;
//   }
//   .ob-title {
//     font-size: 20px;
//   }
//   .ob-panel {
//     padding: 16px 18px 20px;
//   }
//   .ob-footer {
//     flex-direction: column;
//     align-items: stretch;
//   }
//   .ob-cta {
//     justify-content: center;
//   }
//   .ob-nav {
//     justify-content: space-between;
//   }
// }
// `;