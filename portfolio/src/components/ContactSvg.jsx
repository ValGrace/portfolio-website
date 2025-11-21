import * as React from "react";

const SvgContIcon = (props) => (
  <g>
    <mask
      id="ay"
      width="640"
      height="256"
      x="0"
      y="406"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path fill="url(#ax)" d="M0 406h640v256H0z"></path>
    </mask>
    <g filter="url(#az)" mask="url(#ay)">
      <path
        fill="#09080D"
        d="M627.12 669.16H12.88c62.945-103.71 176.94-173 307.12-173s244.18 69.289 307.12 173"
      ></path>
      <path
        stroke="url(#am)"
        strokeOpacity="0.1"
        d="M320 496.66c129.68 0 243.28 68.853 306.23 172H13.77c62.952-103.15 176.55-172 306.23-172z"
      ></path>
    </g>
  </g>
);

export default SvgContIcon;
