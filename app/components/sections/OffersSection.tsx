import { offersData } from "@/data/offers";
import Image, { StaticImageData } from "next/image";
import { Title } from "@/components/common/typography/Title";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { useEffect, useState, useCallback } from "react";
import { MdiChevronLeft } from "@/assets/icons/mdi-chevron-left";
import { MdiChevronRight } from "@/assets/icons/mdi-chevron-right";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = ({
  images,
  className,
}: {
  images: StaticImageData[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0); // -1 pour gauche, 1 pour droite
  const [dragStart, setDragStart] = useState(0);
  const [controlsHidden, setControlsHidden] = useState(false);

  const nextImage = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const previousImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    const dragDistance = info.offset.x;
    const dragThreshold = 50; // Distance minimum pour déclencher le changement

    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        previousImage();
      } else {
        nextImage();
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused) {
      interval = setInterval(() => {
        nextImage();
      }, 7000); // Change image every 7 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, nextImage]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="group relative overflow-hidden">
      <button
        onClick={() => setControlsHidden(!controlsHidden)}
        className="pointer-events-auto absolute right-4 top-4 z-10 block rounded-full border border-primary bg-white/80 p-2 text-primary transition-all duration-200 hover:bg-primary hover:text-white lg:hidden"
        title={
          controlsHidden ? "Afficher les contrôles" : "Masquer les contrôles"
        }
      >
        <Icon
          icon={controlsHidden ? "mdi:eye" : "mdi:eye-off"}
          className="h-6 w-6"
        />
      </button>

      <button
        onClick={() => setIsPaused(!isPaused)}
        className={`pointer-events-auto absolute bottom-4 right-4 z-10 rounded-full border border-primary bg-white/80 p-2 text-primary opacity-100 transition-all duration-200 hover:bg-primary hover:text-white lg:${
          controlsHidden
            ? "hidden"
            : isPaused
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
        }`}
        title={isPaused ? "Reprendre le défilement" : "Mettre en pause"}
      >
        <Icon icon={isPaused ? "mdi:play" : "mdi:pause"} className="h-6 w-6" />
      </button>

      <div className={`relative h-[400px] w-full ${className}`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              fill
              className="rounded-lg object-cover"
              priority={currentIndex === 0}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 ${
          controlsHidden ? "opacity-0" : "opacity-100"
        } lg:opacity-0 lg:transition-opacity lg:duration-200 lg:group-hover:opacity-100`}
      >
        <button
          onClick={previousImage}
          className="pointer-events-auto rounded-full border border-primary bg-white/80 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
          title="Image précédente"
        >
          <MdiChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="pointer-events-auto rounded-full border border-primary bg-white/80 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
          title="Image suivante"
        >
          <MdiChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`pointer-events-none absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 ${
          controlsHidden ? "opacity-0" : "opacity-100"
        } lg:opacity-0 lg:transition-opacity lg:duration-200 lg:group-hover:opacity-100`}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`pointer-events-auto h-2 w-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-primary"
                : "bg-white/50 hover:bg-white/80"
            }`}
            title={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const OffersSection = () => {
  return (
    <section
      className="flex flex-col gap-12 px-4 py-20 ph:px-24 md:px-48 lg:px-72 xl:px-96"
      id="offers"
    >
      <Title title="Nos offres" />
      <div className="grid grid-cols-1 gap-12 text-black lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <ImageCarousel images={offersData.privateOffice.photos} />
          <h2 className="text-2xl font-semibold">
            {offersData.privateOffice.name}
          </h2>
          <p className="text-red-500">
            À partir de {offersData.privateOffice.formules[0].prix}€/mois
          </p>
          <p className="flex-grow">
            {offersData.privateOffice.shortDescription}
          </p>
          <div className="flex flex-col gap-4 xs:flex-row lg:flex-row">
            <PrimaryButton
              variant="black"
              text="Découvrir l'offre"
              navigateTo={`/offres/${offersData.privateOffice.id}`}
            />
            <PrimaryButton text="Nous Contacter" navigateTo="/#contact" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ImageCarousel images={offersData.sharedSpace.photos} />
          <h2 className="text-2xl font-semibold">
            {offersData.sharedSpace.name}
          </h2>
          <p className="text-red-500">
            À partir de {offersData.sharedSpace.formules[0].prix}€/mois
          </p>
          <p className="flex-grow">{offersData.sharedSpace.shortDescription}</p>
          <div className="flex flex-col gap-4 xs:flex-row">
            <PrimaryButton
              variant="black"
              text="Découvrir l'offre"
              navigateTo={`/offres/${offersData.sharedSpace.id}`}
            />
            <PrimaryButton text="Nous Contacter" navigateTo="/#contact" />
          </div>
        </div>
      </div>
    </section>
  );
};
