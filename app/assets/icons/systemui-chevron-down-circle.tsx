import type { SVGProps } from "react";

export function SystemuiChevronDownCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      className={props.className}
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 2)"
        strokeWidth="1"
      >
        <circle cx="8.5" cy="8.5" r="8" />
        <path d="m5.466 7.466l3 3.068l3-3.068" />
      </g>
    </svg>
  );
}
