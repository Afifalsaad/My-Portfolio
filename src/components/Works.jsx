"use client";
import { useState } from "react";
import { AnimatedTabs } from "@/components/wensity/animated-tabs";
import { projectsData } from "@/data/projects";

const tabs = [
  {
    id: "garments-master",
    label: "Garments Master",
    title: "Production Management",
    description:
      "Garments Order & Production Tracker System — track buyer orders, manage cutting/sewing/finishing stages, and monitor inventory for timely delivery.",
    image: "/Garments Master.png",
    link: "/project/garments-master",
  },
  {
    id: "earth-clean",
    label: "Earth Clean",
    title: "Productivity & Collaboration",
    description:
      "Issue Tracking and Collaboration platform — report, manage, and collaborate on issues in a transparent and organized way.",
    image: "/Earth Clean.png",
    link: "/project/earth-clean",
  },
  {
    id: "study-ai",
    label: "StudyAI",
    title: "AI & EdTech",
    description:
      "Personalized study plans, PDF summaries, and progress tracking — all powered by Google Gemini.",
    image: "/Screenshot (188).png",
    link: "/project/study-ai",
  },
];

export function Works() {
  const [value, setValue] = useState(tabs[0]?.id || "");
  return <AnimatedTabs tabs={tabs} value={value} onValueChange={setValue} />;
}
