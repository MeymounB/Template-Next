import type { SVGProps } from "react";

export function MdiRoof(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={props.className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 16h3L12 7L2 16h3l7-6.31zM7 8.81V7H4v4.5z"
      />
    </svg>
  );
}
