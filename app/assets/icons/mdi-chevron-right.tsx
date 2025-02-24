import type { SVGProps } from "react";

export function MdiChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={props.className}
      {...props}
    >
      <path
        fill="currentColor"
        d="m8.59 18.16l5.66-5.66l-5.66-5.66l-.7.71l4.95 4.95l-4.95 4.95z"
      />
    </svg>
  );
}
