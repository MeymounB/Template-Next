import type { SVGProps } from "react";

export function MdiChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={props.className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.41 18.16L8.75 12.5l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95z"
      />
    </svg>
  );
}
