"use client";

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "The property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "The property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "The property is modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "The property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "The property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "The property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "The property is close to a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "The property has skiing activities!",
  },
  {
    label: "Castle ",
    icon: GiCastle,
    description: "The property is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "The property is camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "The property is camping activities!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "The property is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "The property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "The property is in the barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "The property is luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};
export default Categories;
