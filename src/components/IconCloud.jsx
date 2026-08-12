"use client";

import React, { useEffect, useMemo, useState } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodejs",
  "nextjs",
  "npm",
  "express",
  "tailwindcss",
  "git",
  "github",
  "mongodb",
  "mysql",
  "postgresql",
  "vercel",
  "firebase",
  "vscode",
  "figma",
  "redux",
];

const DEVICON_BASE_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export function IconCloudDemo() {
  const [cloudSize, setCloudSize] = useState(590);
  const [cloudRadius, setCloudRadius] = useState(220);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 480) {
        setCloudSize(350);
        setCloudRadius(150);
      } else if (width < 640) {
        setCloudSize(380);
        setCloudRadius(150);
      } else if (width < 768) {
        setCloudSize(450);
        setCloudRadius(190);
      } else {
        setCloudSize(890);
        setCloudRadius(380);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = useMemo(
    () =>
      slugs.map((slug) => `${DEVICON_BASE_URL}/${slug}/${slug}-original.svg`),
    []
  );

  return (
    <div className="relative flex w-full max-w-full items-center justify-center overflow-hidden">
      <IconCloud
        images={images}
        size={cloudSize}
        radius={cloudRadius}
        className="max-w-full rounded-lg"
      />
    </div>
  );
}

export default IconCloudDemo;
