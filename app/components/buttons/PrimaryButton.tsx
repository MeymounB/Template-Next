import Link from "next/link";

export type PrimaryButtonProps = {
  text: string;
  navigateTo?: string;
  variant?: "primary" | "black";
  target?: string;
};

export const PrimaryButton = ({
  text,
  navigateTo,
  variant = "primary",
  target = "_self",
}: PrimaryButtonProps) => {
  const buttonClasses =
    variant === "primary"
      ? "w-fit rounded-full border border-red-500 px-4 py-1.5 text-sm md:px-6 md:py-2 md:text-base text-red-500 transition-all hover:bg-red-500 hover:text-white hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px] active:shadow-md"
      : "w-fit rounded-full border border-black px-4 py-1.5 text-sm md:px-6 md:py-2 md:text-base text-black transition-all hover:bg-black hover:text-white hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px] active:shadow-md";

  return navigateTo ? (
    <Link
      href={navigateTo}
      className={buttonClasses}
      target={target}
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  ) : (
    <button className={buttonClasses}>{text}</button>
  );
};
