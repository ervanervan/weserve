import React from "react";

export default function Shadow() {
  return (
    <svg
      width="178"
      height="221"
      viewBox="0 0 178 221"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden absolute top-0 right-2 group-hover:block"
    >
      <g filter="url(#filter0_f_1_371)">
        <ellipse
          cx="97.65"
          cy="102.527"
          rx="32.0478"
          ry="76.7916"
          transform="rotate(30 97.65 102.527)"
          className="fill-dark dark:fill-dark-white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_371"
          x="0.27005"
          y="-15.8951"
          width="194.76"
          height="236.845"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="25"
            result="effect1_foregroundBlur_1_371"
          />
        </filter>
      </defs>
    </svg>
  );
}
