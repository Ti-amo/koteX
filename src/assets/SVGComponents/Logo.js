import * as React from "react";

function Logo(props) {
  return (
    <svg
      className="logo"
      viewBox="0 0 2054.6667 544"
      height={544}
      width={2054.6667}
      xmlSpace="preserve"
      {...props}
    >
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 408h1541V0H0z" />
        </clipPath>
      </defs>
      <path
        d="M0 0l316.425 315.306 61.495-60.378-125.228-129.7L377.92 0l-59.26-60.378L190.078 60.377 62.614-70.441z"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
        transform="matrix(1.33333 0 0 -1.33333 0 544) translate(17.232 81.694)"
      />
      <path
        d="M0 0l60.378-60.377L125.228 0 62.614 60.378z"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
        transform="matrix(1.33333 0 0 -1.33333 0 544) translate(17.232 336.622)"
      />
      <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 544)">
        <text
          style={{
            InkscapeFontSpecification: "Nunito-Bold"
          }}
          transform="matrix(1 0 0 -1 455 86.013)"
          fontVariant="normal"
          fontWeight={700}
          fontStretch="normal"
          fontSize="369px"
          fontFamily="Nunito"
          writingMode="lr-tb"
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
        >
          <tspan y={0} x="0 241.69501 452.763 588.92401 784.86298">
            {" KoteX "}
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default Logo;
