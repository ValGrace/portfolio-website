import React from 'react'

const TopSection = () => {
    return (
        <div className='topsection'>
            <div className='content-topsection'>
        <h2>Hello,   <span>I am Grace Valerie, </span></h2>

        <h3 className='career'>a Software Engineer</h3>
        </div>
        <div className='side-topsection'>
        <svg>
  <filter id="glow">
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="SourceGraphic"
                 operator="out" result="glow" />
    <feFlood flood-color="white" flood-opacity="0.2" />
    <feComposite in2="SourceGraphic"
                 operator="atop" result="light" />
    <feComposite in="glow" in2="light" />    
  </filter>
  <pattern id="p" patternUnits="userSpaceOnUse"
           width="180px" height="120px"
           patternTransform="scale(1,0.8660254)">
    <g filter="url(#glow)">
      <g class="wrapper">
        <path id="hex" pathLength="388.5"
                 d="M-30,-60 30,-60 60,0
                         30,60 -30,60 -60,0Z"
                 transform="scale(0.935)" />
      </g>
      <use xlinkHref="#hex" x="0" y="+120" />
      <use xlinkHref="#hex" x="+90" y="+60" />
      <use xlinkHref="#hex" x="+180" y="0" />
      <use xlinkHref="#hex" x="+180" y="120" />
    </g>
  </pattern>
  <rect fill="url(#p)" width="100%" height="100%"/>
</svg>
    
            </div> 
        </div>
    )
}

export default TopSection