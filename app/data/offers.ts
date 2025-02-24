import private1 from "@/assets/images/offers/private/private1.webp";
import private2 from "@/assets/images/offers/private/private2.webp";
import private3 from "@/assets/images/offers/private/private3.webp";
import private4 from "@/assets/images/offers/private/private4.webp";
import private5 from "@/assets/images/offers/private/private5.webp";
import private6 from "@/assets/images/offers/private/private6.webp";
import private7 from "@/assets/images/offers/private/private7.webp";
import private8 from "@/assets/images/offers/private/private8.webp";
import private9 from "@/assets/images/offers/private/private9.webp";
import private10 from "@/assets/images/offers/private/private10.webp";

import openspace1 from "@/assets/images/offers/openspace/openspace1.webp";
import openspace2 from "@/assets/images/offers/openspace/openspace2.webp";
import openspace3 from "@/assets/images/offers/openspace/openspace3.webp";
import openspace4 from "@/assets/images/offers/openspace/openspace4.webp";
import openspace5 from "@/assets/images/offers/openspace/openspace5.webp";

import { StaticImageData } from "next/image";

type Formula = {
  name: string;
  description: string;
  prix: number;
};

type PrivateOffice = {
  id: string;
  shortDescription: string;
  longDescription: string;
  name: string;
  cardPhoto: StaticImageData;
  photos: StaticImageData[];
  formules: [Formula, Formula, Formula];
};

type SharedSpace = {
  id: string;
  shortDescription: string;
  longDescription: string;
  name: string;
  cardPhoto: StaticImageData;
  photos: StaticImageData[];
  formules: [Formula];
};

type Offers = {
  privateOffice: PrivateOffice;
  sharedSpace: SharedSpace;
};

export const offersData: Offers = {
  privateOffice: {
    id: "bureau-prive",
    name: "Bureaux Privés",
    shortDescription:
      "Des bureaux fermés modernes et lumineux, conçus pour offrir confort et confidentialité. Certains disposent d’une terrasse privée avec une vue imprenable sur Paris, créant un cadre de travail privilégié pour les professionnels en quête de sérénité.",
    longDescription:
      "Un cadre de travail haut de gamme, pensé pour allier calme et performance. Ces bureaux privatifs sont aménagés pour garantir concentration et bien-être, avec des espaces lumineux et parfaitement équipés. Certains offrent une terrasse privée avec une vue exceptionnelle sur les toits de Paris, ajoutant une touche d’inspiration à chaque journée de travail.",
    cardPhoto: private1,
    photos: [
      private1,
      private2,
      private3,
      private4,
      private5,
      private6,
      private7,
      private8,
      private9,
      private10,
    ],
    formules: [
      {
        name: "Petit",
        description: "Bureau privé pour 1-2 personnes",
        prix: 450,
      },
      {
        name: "Moyen",
        description: "Bureau privé pour 3-4 personnes",
        prix: 800,
      },
      {
        name: "Grand",
        description: "Bureau privé pour 5-6 personnes",
        prix: 1200,
      },
    ],
  },
  sharedSpace: {
    id: "espace-partage",
    name: "Espace Partagé",
    shortDescription:
      "Un espace de coworking conçu pour allier confort et efficacité. Des postes de travail ergonomiques dans un open space baigné de lumière naturelle, offrant un cadre dynamique et inspirant, idéal pour échanger, créer et avancer.",
    longDescription:
      "Un environnement spacieux et convivial, pensé pour stimuler la collaboration et la productivité. Des îlots de travail ergonomiques permettent de travailler seul ou en équipe, favorisant les échanges tout en maintenant une atmosphère propice à la concentration. Un équilibre parfait entre flexibilité et professionnalisme, dans un espace conçu pour encourager la créativité.",
    cardPhoto: openspace1,
    photos: [openspace1, openspace2, openspace3, openspace4, openspace5],
    formules: [
      {
        name: "Ultra Flexible",
        description: "Accès illimité à l'espace partagé et aux commodités",
        prix: 380,
      },
    ],
  },
};
