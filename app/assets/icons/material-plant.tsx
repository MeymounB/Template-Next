import type { SVGProps } from "react";

export function MaterialPlant(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={props.className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.55 22q-.7 0-1.225-.425t-.7-1.1L5.5 16h13l-1.125 4.475q-.175.675-.7 1.1T15.45 22zM12 8q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v3q0 .825-.587 1.413T19 15H5q-.825 0-1.412-.587T3 13v-3h8V7.9q-2.15-.35-3.575-2T6 2q2.5 0 4.25 1.75T12 8"
      />
    </svg>
  );
}
