import type { SVGProps } from "react";

export function HugeTerrace(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={props.className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M15 22H9v-1h6zm4-18l-4-2H9L5 4zM8 5l.4 1h7.2l.4-1zm2 5h1v5c-.6 0-1 .4-1 1v4h4v-4c0-.6-.4-1-1-1v-5h1l.4-1H9.6zm-.8-2h5.6l.4-1H8.8z"
      />
    </svg>
  );
}
