import { useState, useEffect, useCallback } from "react";
import { Compass, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import tui from "../assets/tui.png"
const SLIDES = [
    {
    badge: "Exchange Liquidation",
    title: "Overview",
    body: "Real-time crypto liquidation monitoring data pipeline",
    bullets: [
      "Connnects to major cryptocurrency exchanges (binance, bybit, coinbase, kraken, okx)",
      "Captures liquidation related trade events and streams them in a pipeline",
      "Stores the events for analysis and retrieval",
    ],
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/ml_pred.png"
  },
  {
    badge: "Exchange Liquidation",
    title: "Features",
    body: "Multi-exchange (Binance, ByBit, Coinbase, Kraken, OKX)",
    bullets: [
      "Real-time websocket straming",
      "Pyspark ETL Processing",
      "Kafka-based event consumption for high throughput",
      "Partitioned storage for efficient querying",
      "API endpoints for retrieving trades, filtering data, viewing summaries"
    ],
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/crypt_pulse_preds.png"
  },
  
  {
    badge: "Exchange Liquidation",
    title: "Benefits",
    body: "Gain timely insights into liquidation events across multiple exchanges",
    bullets: [
      "Centralizes market data into one queryable system",
      "Supports analytics, monitoring and downstream fdporting",
      "Helps traders, analysts or developers observe market conditions in real time",
    ],
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/live_trades.png"
  },
  {
    badge: "Exchange Liquidation",
    title: "Architecture",
    body: "Learn how this was built",
    bullets: [
      "Kafka (event consumption)",
      "DynamoDB (storage)",
      "FastAPI (API endpoints)",
      "Python (Programming Language)",
      "Docker (local setup and testing)",
      "AWS CLI (aws interaction)",
      "Pyspark (ETL transformations)",
      "Websockets (Real-time streaming)",
      "Similar project (github.com/ValGrace/kraken_api_project) -> also uses Airflow, Postgres, Debezium"
    ],
    source: "https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/crypto_arch.png"
  },
];


function svgToDataUri(svg) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function statTile(x, y, w, h, color, label) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${color}" opacity="0.92"/>
    <text x="${x + 10}" y="${y + h / 2 + 5}" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#0b0c0e">${label}</text>
  `;
}

function sparkline(x, y, w, h, color, points) {
  const scaled = points
    .map((p, i) => `${x + (i / (points.length - 1)) * w},${y + h - p * h}`)
    .join(" ");
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="url(#g-${color.replace("#", "")})"/>
    <polyline points="${scaled}" fill="none" stroke="${color}" stroke-width="1.6"/>
  `;
}

function gradDef(color) {
  const id = `g-${color.replace("#", "")}`;
  return `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0.02"/>
    </linearGradient>`;
}

function cardChrome(x, y, w, h, label) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#181b1f" stroke="#2c3235"/>
    <rect x="${x}" y="${y}" width="${w}" height="22" fill="none" stroke="#2c3235" stroke-width="0.6"/>
    <rect x="${x + 10}" y="${y + 8}" width="10" height="8" rx="2" fill="#3d444a"/>
    ${label ? `<text x="${x + w - 10}" y="${y + 15}" text-anchor="end" font-family="Inter, sans-serif" font-size="9" fill="#8e9297">${label}</text>` : ""}
  `;
}

// Slide 1: metrics explorer
const svgMetrics = `
<svg viewBox="0 0 520 640" xmlns="http://www.w3.org/2000/svg">
  <defs>${gradDef("#5794f2")}</defs>
  <rect width="520" height="640" fill="#0b0c0e"/>
  ${cardChrome(24, 24, 472, 560, "Metrics explorer")}
  <rect x="40" y="60" width="130" height="500" rx="3" fill="#12151a" stroke="#22262b"/>
  ${["browse", "completion", "config", "history", "record", "remove", "search", "status", "cleanup"]
    .map(
      (m, i) => `<rect x="52" y="${76 + i * 40}" width="106" height="26" rx="3" fill="${i === 2 ? "#47497369" : "#181b1f"}" stroke="${i === 2 ? "#474973" : "#262b30"}"/>
       <text x="60" y="${76 + i * 40 + 17}" font-family="Inter, sans-serif" font-size="9" fill="${i === 2 ? "#F1DAC4" : "#c7cad0"}">${m}</text>`
    )
    .join("")}
  <rect x="188" y="60" width="292" height="230" rx="3" fill="#12151a" stroke="#22262b"/>
  <image href="../assets/tui.png" x="188" y="60" width="292" height="230" />
  ${sparkline(200, 76, 268, 190, "#3a0096", [0.2, 0.35, 0.3, 0.5, 0.42, 0.6, 0.55, 0.72, 0.64, 0.8, 0.7, 0.66])}
  <text x="200" y="70" font-family="Inter, sans-serif" font-size="10" fill="#c7cad0">http.requests — rate</text>
  <rect x="188" y="304" width="292" height="256" rx="3" fill="#12151a" stroke="#22262b"/>
  <text x="200" y="320" font-family="Inter, sans-serif" font-size="10" fill="#c7cad0">breakdown by status code</text>
  ${statTile(200, 332, 84, 40, "#73bf69", "200 · 92%")}
  ${statTile(292, 332, 84, 40, "#fade2a", "404 · 5%")}
  ${statTile(384, 332, 84, 40, "#f2495c", "500 · 3%")}
  ${sparkline(200, 388, 268, 150, "#73bf69", [0.5, 0.55, 0.6, 0.5, 0.65, 0.6, 0.7, 0.62, 0.75, 0.68, 0.8, 0.74])}
  
</svg>`;

// Slide 2: correlate logs / metrics / traces
const svgCorrelate = `
<svg viewBox="0 0 520 640" xmlns="http://www.w3.org/2000/svg">
  <image href="../assets/xprofile.png" x="188" y="60" width="292" height="230" />
</svg>`;

// Slide 3: alert rule setup
const svgAlerts = `
<svg viewBox="0 0 520 640" xmlns="http://www.w3.org/2000/svg">
  <image href="../assets/xprofile.png" x="188" y="60" width="292" height="230" />
</svg>`;

// Slide 4: dashboard templates (matches product screenshot)
const svgTemplates = `
<svg viewBox="0 0 520 640" xmlns="http://www.w3.org/2000/svg">
  <image href="../assets/xprofile.png" x="188" y="60" width="292" height="230" />
</svg>`;

const SLIDE_IMAGES = [svgMetrics, svgCorrelate, svgAlerts, svgTemplates].map(svgToDataUri);

export function LiqModal({ open, onClose }) {
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
          <h3 className="ob-preview__heading">Monitor crypto liquidation across major exchanges</h3>
          <p className="ob-preview__copy">
            Get started with Liquid Exchange. Analyze market data in a centralized system.
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

            <a className="ob-cta" href="https://github.com/ValGrace/exchange_liquidation" target="_blank" 
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

export default function LiqModalView() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ob-demo">
      {/* <style>{CSS}</style> */}
      <button className="ob-trigger" onClick={() => setOpen(true)}>
        View project
      </button>
      <LiqModal open={open} onClose={() => setOpen(false)} />
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