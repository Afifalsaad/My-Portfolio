import React, { useState, useEffect } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
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
];

export function IconCloudDemo() {
  const [cloudSize, setCloudSize] = useState(500);
  const [cloudRadius, setCloudRadius] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCloudSize(380);
        setCloudRadius(150);
      } else if (width < 640) {
        setCloudSize(340);
        setCloudRadius(130);
      } else if (width < 768) {
        setCloudSize(400);
        setCloudRadius(160);
      } else {
        setCloudSize(590);
        setCloudRadius(220);
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex items-center justify-center overflow-hidden w-full max-w-full">
      <IconCloud
        images={images}
        size={cloudSize}
        radius={cloudRadius}
        className="rounded-lg max-w-full"
      />
    </div>
  );
}

export default IconCloudDemo;
