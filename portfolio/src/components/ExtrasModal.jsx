import { useState, useEffect, useCallback } from "react";
import { Compass, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";

const SLIDES = [
    {
    badge: "User Activity Analysis",
    title: "Power BI and Python",
    body: "Power BI Dashboard of user sessions",
    bullets: [
      "Analyzing peak usage activity",
      "Finding out which features are mostly used and how",
      "What factors lead to users upgrading",
    ],
    loc: "https://github.com/ValGrace/py_books",
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/bi_dashboard.png"
  },
  {
    badge: "Telco customer churn prediction",
    title: "Machine learning model",
    body: "Using machine learning to predict if a telecommunications customer is likely to churn based on demographic information, subscribed events, billing information and contract details",
    bullets: [
      "Demographic information",
      "Subscribed events",
      "Billing information and contract details",
    ],
    loc: "https://telco-customer-churn-prediction-nvcc.onrender.com",
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/ml-pipeline-enhance.png"
  },
  
  {
    badge: "Intellidoc",
    title: "RAG Engine",
    body: "Document search engine built on retrieval augmented generation",
    bullets: [
      "Extracts text from documents and splits into chunks",
      "Chunks are stored in vector db",
      "Fast api endpoints",
    ],
    loc: "https://interdoc-sigma.vercel.app/",
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/interdoc.png"
  },
  {
    badge: "Ecommerce website",
    title: "Node + React",
    body: "Learn how this was built",
    bullets: [
      "Firebase authentication",
      "Redux state management",
      "MPESA API integration",
    ],
    loc: "https://anypay-28455.web.app/",
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/cmd_tracker_arch.png"
  },
  {
    badge: "RDBMS",
    title: "Golang",
    body: "Relational Database Management System REPL shell",
    bullets: [
      "Interactive shell and embedded db",
      "Supports both DDL (Data Definition) and DML (Data Manipulation)",
      "Supports indexing, foreign keys and joins",
    ],
    loc: "https://github.com/ValGrace/RDBMS",
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/cmd_tracker_arch.png"
  },
  {
    badge: "47 Docs",
    title: "Python",
    body: "PDF Document Translator",
    bullets: [
      "Translates any pdf document in place",
      "Tries to retain the original layout",
      "Support for multiple languages",
    ],
    loc: "https://github.com/ValGrace/47Docs",
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/47Docs.png"
  },
  
];

export function ExtrasModal({ open, onClose }) {
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
          <h3 className="ob-preview__heading">Save all your CLI sessions in a structured way</h3>
          <p className="ob-preview__copy">
            Get started with CLI tracker. Monitor the commands you use and find them easily.
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

            <a className="ob-cta" href="https://github.com/ValGrace">
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
  const [open, setOpen] = useState(false);

  return (
    <div className="ob-demo">
      {/* <style>{CSS}</style> */}
      <button className="ob-trigger" onClick={() => setOpen(true)}>
        View project
      </button>
      <ExtrasModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

