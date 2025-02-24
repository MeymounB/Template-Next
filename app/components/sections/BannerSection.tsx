import background from "@/assets/images/homepage/background.webp";

interface BannerSectionProps {
  title: string;
}

export const BannerSection = ({ title }: BannerSectionProps) => {
  return (
    <div
      className="flex h-[40vh] w-full items-end justify-start overflow-x-hidden bg-cover bg-center bg-no-repeat px-4 py-8 ph:px-24 ph:py-16 md:px-48 lg:px-72 xl:px-96"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <h1 className="text-start text-xl font-extrabold uppercase text-white ph:text-2xl lg:text-5xl">
        {title}
      </h1>
    </div>
  );
};
