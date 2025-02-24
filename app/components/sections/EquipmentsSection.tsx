import { Title } from "@/components/common/typography/Title";
import { equipments } from "@/data/equipments";

export const EquipmentsSection = () => {
  return (
    <section
      className="flex flex-col gap-12 px-4 py-20 text-black ph:px-24 md:px-48 lg:px-72 xl:px-96"
      id="equipments"
    >
      <Title title="Les équipements" />

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {equipments.map((equipment) => (
          <div key={equipment.name} className="flex flex-col gap-4">
            <equipment.Icon className="h-8 w-8" />
            <p>{equipment.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
