import { SVGProps } from "react";
import { MaterialWifi } from "@/assets/icons/material-wifi";
import { MaterialDoors } from "@/assets/icons/material-doors";
import { MaterialMonitor } from "@/assets/icons/material-monitor";
import { MaterialCafe } from "@/assets/icons/material-cafe";
import { MdiFridge } from "@/assets/icons/mdi-fridge";
import { MaterialSoccer } from "@/assets/icons/material-soccer";
import { MingShower } from "@/assets/icons/ming-shower";
import { MaterialPhone } from "@/assets/icons/material-phone";
import { FluentGames } from "@/assets/icons/fluent-games";
import { MaterialPlant } from "@/assets/icons/material-plant";
import { HugeTerrace } from "@/assets/icons/huge-terrace";
import { MdiRoof } from "@/assets/icons/mdi-roof";
type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

interface Equipment {
  name: string;
  Icon: IconComponent;
}

export const equipments: Equipment[] = [
  {
    name: "Internet haut-débit",
    Icon: MaterialWifi,
  },
  {
    name: "Salles de réunion",
    Icon: MaterialDoors,
  },
  {
    name: "Grands écrans",
    Icon: MaterialMonitor,
  },
  {
    name: "Boissons chaudes",
    Icon: MaterialCafe,
  },
  {
    name: "Cuisine équipée",
    Icon: MdiFridge,
  },
  {
    name: "Jeux de société",
    Icon: FluentGames,
  },
  {
    name: "Phone box",
    Icon: MaterialPhone,
  },
  {
    name: "Douches",
    Icon: MingShower,
  },
  {
    name: "Végétation",
    Icon: MaterialPlant,
  },
  {
    name: "Babyfoot",
    Icon: MaterialSoccer,
  },
  {
    name: "Terrasse intérieure",
    Icon: HugeTerrace,
  },
  {
    name: "Rooftop",
    Icon: MdiRoof,
  },
];
