import * as React from "react";

function MiniLogo(props) {
  return (
    <svg
      className="logo-mini"
      viewBox="0 0 541.33331 544"
      height={544}
      width={541.33331}
      xmlSpace="preserve"
      {...props}
    >
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
    </svg>
  );
}

export default MiniLogo;
