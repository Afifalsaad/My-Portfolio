"use client";
import { useState } from "react";
import { AnimatedTabs } from "@/components/wensity/animated-tabs";

const tabs = [
  {
    id: "study-ai",
    label: "StudyAI",
    title: "AI-Powered Study Assistant",
    description:
      "Personalized study plans, PDF summaries, and progress tracking — all powered by Google Gemini.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&auto=format&fit=crop&q=80",
    link: "/project/study-ai",
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

export function Works() {
  const [value, setValue] = useState(tabs[0]?.id || "");
  return <AnimatedTabs tabs={tabs} value={value} onValueChange={setValue} />;
}
