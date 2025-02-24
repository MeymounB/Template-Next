import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { MdiChevronLeft } from "@/assets/icons/mdi-chevron-left";
import { MdiChevronRight } from "@/assets/icons/mdi-chevron-right";

interface CarouselCardsProps {
  images: StaticImageData[];
}

export function CarouselCards({ images }: CarouselCardsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    checkScrollPosition();
    scrollContainer?.addEventListener("scroll", checkScrollPosition);

    return () => {
      scrollContainer?.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 325 : 610;
      const scrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col-reverse gap-4 ph:flex-col">
      <div className="flex justify-end gap-2 px-4 ph:px-24 md:px-48 lg:px-72 xl:px-96">
        <button
          title="Scroll left"
          onClick={() => scroll("left")}
          disabled={isAtStart}
          className={`group rounded-full border-1 border-primary p-2 transition-all duration-200 hover:bg-primary hover:text-white ${
            isAtStart ? "cursor-default opacity-50" : ""
          }`}
        >
          <MdiChevronLeft className="h-6 w-6 text-primary transition-all duration-200 group-hover:text-white" />
        </button>
        <button
          title="Scroll right"
          onClick={() => scroll("right")}
          disabled={isAtEnd}
          className={`group rounded-full border-1 border-primary p-2 transition-all duration-200 hover:bg-primary hover:text-white ${
            isAtEnd ? "cursor-default opacity-50" : ""
          }`}
        >
          <MdiChevronRight className="h-6 w-6 text-primary transition-all duration-200 group-hover:text-white" />
        </button>
      </div>
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide [&>*:first-child]:ml-4 [&>*:first-child]:ph:ml-24 [&>*:first-child]:md:ml-48 [&>*:first-child]:lg:ml-72 [&>*:first-child]:xl:ml-96 [&>*:last-child]:mr-4 [&>*:last-child]:ph:mr-24 [&>*:last-child]:md:mr-48 [&>*:last-child]:lg:mr-72 [&>*:last-child]:xl:mr-96 [&>*]:ml-6"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[400px] w-[300px] flex-none md:h-[480px] md:w-[400px] lg:h-[554px] lg:w-[481px]"
            >
              <Image
                src={image}
                alt={`Place ${index + 1}`}
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
