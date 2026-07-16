import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import React, {useRef} from "react"


export default function CaseStudies() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const track = document.getElementById('track');
  // const prevBtn = document.getElementById('prevBtn');
  // const nextBtn = document.getElementById('nextBtn');
   const trackRef = useRef(null);
  const step = 322; // card width + gap

  // nextBtn.addEventListener('onClick', () => {
  //   track.scrollBy({ left: step, behavior: 'smooth' });
  // });
  // prevBtn.addEventListener('onClick', () => {
  //   track.scrollBy({ left: -step, behavior: 'smooth' });
  // });

  return (
    <div className="case-wrap">
  <div className="panel">
    <div className="glow"></div>

    <div className="header">
      <div className="header-text">
        <p className="eyebrow">EXPLORE SOME OF MY WORK</p>
        <h1>Projects</h1>
        <p className="sub">See how I use technology to solve problems.</p>
      </div>
      <div classNameName="nav">
        <button className="nav-btn" id="prevBtn" aria-label="Previous" onClick={() => window.scrollBy({ left: -step, behavior: 'smooth' })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>
        <button className="nav-btn" id="nextBtn" aria-label="Next" onClick={() => window.scrollBy({ left: step, behavior: 'smooth' })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>

    <div className="track-wrap">
      <div className="track" id="track">
        <article className="case-card">
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-violet">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 A5 5 0 0 1 17 8 L12 8 Z"/><path d="M21 12 A5 5 0 0 1 16 17 L16 12 Z"/><path d="M12 21 A5 5 0 0 1 7 16 L12 16 Z"/><path d="M3 12 A5 5 0 0 1 8 7 L8 12 Z"/></svg>
              </span>
              <span className="brand-name">Exchange Liquidation</span>
            </div>
            <h3 className="case-card-title">Stress reduction for frontline workers</h3>
            <p className="case-card-desc">Help frontline workers recover with the healing power of nature sounds</p>
            <svg className="art" viewBox="0 0 260 260">
              <image href="https://media.istockphoto.com/id/1463455851/photo/cryptocurrency-market-financial-data-and-candlesticks-internet-banking.jpg?s=1024x1024&w=is&k=20&c=iTK_kYVDlAibVlQ7L-CgR0NVezeg5mhS0Jk8lVyLHdc=" x="-20" y="10" width="292" height="230" />
            </svg>
          </div>
        </article>


        <article className="case-card">
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-natgeo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="3" width="8" height="18" rx="1.5"/></svg>
              </span>
              <span className="brand-name">Tourism RAG</span>
            </div>
            <h3 className="case-card-title">Bringing the largest mountain on Earth to life</h3>
            <p className="case-card-desc">Immersing visitors in the sounds of Base Camp as they are transported to Nepal</p>
            <svg className="art" viewBox="0 0 260 260">
              <g stroke="white" stroke-width="1" fill="none" opacity="0.5">
                <rect x="55" y="70" width="150" height="190" rx="2"/>
                <rect x="90" y="105" width="80" height="120" rx="2"/>
              </g>
            </svg>
          </div>
        </article>

  
        <article className="case-card">
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-undertow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 14c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/><path d="M3 19c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/></svg>
              </span>
              <span className="brand-name">Command History Tracker</span>
            </div>
            <h3 className="case-card-title">A fully Immersive, world-className cocktail experience</h3>
            <p className="case-card-desc">Immersed in the realistic sounds of a ship as it voyages across the sea</p>
            <svg className="art" viewBox="0 0 260 260">
              <text x="130" y="230" text-anchor="middle" font-size="76" font-weight="800" letter-spacing="2"
                fill="none" stroke="white" stroke-width="1" opacity="0.5" transform="rotate(-4 130 200)">CMD</text>
            </svg>
          </div>
        </article>

   
        <article className="case-card">
          <svg className="border-svg" viewBox="0 0 300 400"><rect className="border-rect" x="1" y="1" width="298" height="398" rx="20" ry="20"/></svg>
          <div className="case-card-inner">
            <div className="brand">
              <span className="icon icon-luxe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="14" height="14" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/></svg>
              </span>
              <span className="brand-name">Ecommerce Spark</span>
            </div>
            <h3 className="case-card-title">Transforming luxury retail atmospheres</h3>
            <p className="case-card-desc">Positioning premium products with soundscapes that enhance perceived value</p>
            <svg className="art" viewBox="0 0 260 260">
              <g stroke="white" stroke-width="1" fill="none" opacity="0.5">
                <rect x="60" y="60" width="110" height="110" rx="6"/>
                <rect x="95" y="95" width="110" height="110" rx="6"/>
              </g>
            </svg>
          </div>
        </article>

      </div>
    </div>
  </div>
</div>

  );
}