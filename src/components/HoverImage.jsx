"use client";
import { useState } from "react";
import { AnimatedTabs } from "@/components/wensity/animated-tabs";

const tabs = [
  {
    id: "paris",
    label: "Paris",
    title: "Iron lace at golden hour",
    description:
      "The tower holds the last light while the city softens into blue.",
    image:
      "https://assets.wensity.com/photos/landscape/eiffel-tower-sunset.webp",
  },
  {
    id: "kyoto",
    label: "Kyoto",
    title: "Shrine path through cedar",
    description: "Moss and timber lead the eye forward through soft fog.",
    image:
      "https://assets.wensity.com/photos/landscape/forest-shrine-path.webp",
  },
  {
    id: "sahara",
    label: "Sahara",
    title: "Dunes catching fire",
    description: "Wind-carved ridges glow amber, then drop into cool shadow.",
    image: "https://assets.wensity.com/photos/landscape/dune-sunset.webp",
  },
];

export default function HoverImage() {
  const [value, setValue] = useState(tabs[0]?.id || "");
  return <AnimatedTabs tabs={tabs} value={value} onValueChange={setValue} />;
}
