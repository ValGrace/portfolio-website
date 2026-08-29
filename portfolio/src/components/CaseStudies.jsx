// import { useInView } from "../hooks/useInView";
import React, {useState, useRef} from "react"
import {OnboardingModal} from "./NewModal";
import {LiqModal} from "./ExchLiqModal";
import { TourismModal } from "./TourismRAGModal";
import { ESparkModal } from "./EcomSparkModal";
import { ExtrasModal} from "./ExtrasModal"


export default function CaseStudies() {
  // const [ref, isInView] = useInView({ threshold: 0.1 });

  const step = 322; // card width + gap
 
  const [open, setOpen] = useState(false)
  const [openLiq, setOpenLiq] = useState(false)
  const [openTours, setOpenTours] = useState(false)
  const [openEspark, setOpenEspark] = useState(false)
  const [openExtras, setOpenExtras] = useState(false)

  // nextBtn.addEventListener('onClick', () => {
  //   track.scrollBy({ left: step, behavior: 'smooth' });
  // });
  // prevBtn.addEventListener('onClick', () => {
  //   track.scrollBy({ left: -step, behavior: 'smooth' });
  // });
  const trackRef = useRef(null)
  const ScrollTrack = (direction) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: direction === 'left' ? -step : step,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="case-wrap" id="projects_new">
  <div className="panel">
    <div className="glow"></div>

    <div className="header">
      <div className="header-text">
        <p className="eyebrow">EXPLORE SOME OF MY WORK</p>
        <h1>Projects</h1>
        <p className="sub">See how I use technology to solve problems.</p>
      </div>
      <div className="nav">
        <button className="nav-btn" id="prevBtn" aria-label="Previous" onClick={() => ScrollTrack('left')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>
        <button className="nav-btn" id="nextBtn" aria-label="Next" onClick={() => ScrollTrack('right')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>

    <div className="track-wrap">
      <div className="track" id="track" ref={trackRef}>
        <article className="case-card" onClick={() => setOpenLiq(true)}>
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-violet">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 A5 5 0 0 1 17 8 L12 8 Z"/><path d="M21 12 A5 5 0 0 1 16 17 L16 12 Z"/><path d="M12 21 A5 5 0 0 1 7 16 L12 16 Z"/><path d="M3 12 A5 5 0 0 1 8 7 L8 12 Z"/></svg>
              </span>
              <span className="brand-name">Exchange Liquidation</span>
            </div>
            <h3 className="case-card-title">Cryptocurrency market aggregation for traders</h3>
            <p className="case-card-desc">For traders and analysts to spot risk, and possible arbitrage opportunities before the market moves too far</p>
            <svg className="art" viewBox="0 0 260 260">
              <image href="https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/pulse_two.jpeg" x="-35" y="10" width="332" height="230" />
            </svg>
            
          </div>
        </article>
        <LiqModal open={openLiq} onClose={() => setOpenLiq(false)} />

        <article className="case-card" onClick={() => setOpenTours(true)}>
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-natgeo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="3" width="8" height="18" rx="1.5"/></svg>
              </span>
              <span className="brand-name">Tourism RAG</span>
            </div>
            <h3 className="case-card-title">Plan your next trip to Kenya on a budget</h3>
            <p className="case-card-desc">Helping tourists and locals find the best accomodations, plan a safari, and immerse themselves into the culture.</p>
            <svg className="art" viewBox="0 0 260 260">
              <image href="https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/screen_travel.png" x="-35" y="10" width="332" height="230" />
            </svg>
          </div>
        </article>
        <TourismModal open={openTours} onClose={() => setOpenTours(false)} />

  
        <article className="case-card" onClick={() => setOpen(true)}>
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-undertow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 14c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/><path d="M3 19c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/></svg>
              </span>
              <span className="brand-name">Command History Tracker</span>
            </div>
            <h3 className="case-card-title">A database for your CLI  sessions</h3>
            <p className="case-card-desc">Organized CLI session history for developers to browse commands faster </p>
            <svg className="art" viewBox="0 0 260 260">
              <image href="https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/tui.png" x="-35" y="10" width="332" height="230" />
            </svg>
           
          </div>
        </article>
        <OnboardingModal open={open} onClose={() => setOpen(false)} />

   
        <article className="case-card" onClick={() => setOpenEspark(true)}>
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-luxe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="14" height="14" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/></svg>
              </span>
              <span className="brand-name">Ecommerce Spark</span>
            </div>
            <h3 className="case-card-title">Scalable ecommerce data processing</h3>
            <p className="case-card-desc">Helps ecommerce businesses to turn messy data into useable business intelligence</p>
            <svg className="art" viewBox="0 0 260 260">
              <image href="https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/store.png" x="-35" y="10" width="332" height="230" />
            </svg>
          </div>
        </article>
        <ESparkModal open={openEspark} onClose={() => setOpenEspark(false)} />


          <article className="case-card" onClick={() => setOpenExtras(true)}>
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-luxe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="14" height="14" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/></svg>
              </span>
              <span className="brand-name">Other Projects</span>
            </div>
            <h3 className="case-card-title">Data Analysis and ML</h3>
            <p className="case-card-desc">These are some other smaller projects I have done</p>
            <svg className="art" viewBox="0 0 260 260">
              <image href="https://raw.githubusercontent.com/ValGrace/portfolio-website/Main/portfolio/src/assets/bi_dashboard.png" x="-35" y="10" width="332" height="230" />
            </svg>
          </div>
        </article>
        <ExtrasModal open={openExtras} onClose={() => setOpenExtras(false)} />

      </div>
    </div>
  </div>
</div>

  );
}