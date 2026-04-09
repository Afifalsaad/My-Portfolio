import React from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

const skillSlugs = [
  'react',
  'nextdotjs',
  'nodedotjs',
  'express',
  'mongodb',
  'tailwindcss',
  'javascript',
  'typescript',
  'html5',
  'css3',
  'git',
  'github',
  'postgresql',
  'firebase',
  'redux',
  'webpack',
  'vite',
  'docker',
  'aws',
  'vercel',
];

const IconCloud = ({ iconSlugs }) => {
  const [icons, setIcons] = React.useState(null);

  React.useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs || skillSlugs }).then(setIcons);
  }, [iconSlugs]);

  const renderCloud = () => {
    if (!icons) return null;

    return Object.values(icons.simpleIcons).map((icon) => {
      return renderSimpleIcon({
        icon,
        size: 64,
        bgHex: '#ffffff',
        fallbackHex: '#000000',
        minContrastRatio: 2,
        aProps: {
          onClick: (e) => e.preventDefault(),
          style: { outline: 'none' },
        },
      });
    });
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Cloud
        containerProps={{
          className: "w-full h-full cursor-grab active:cursor-grabbing",
        }}
        canvasProps={{
          width: 400,
          height: 400,
          style: { maxWidth: '100%', maxHeight: '100%' },
        }}
        options={{
          reverse: true,
          depth: 1,
          wheelZoom: false,
          maxSpeed: 0.05,
          initial: [0.02, 0.02],
          shuffleTags: true,
          noSelect: true,
          lock: false,
          freezeActive: false,
          freezeDecel: false,
          activeCursor: 'grabbing',
          pulsateTo: 0.6,
          pulsateTime: 2,
          dragControl: true,
          dragThreshold: 0.1,
          clickToFront: false,
          fadeIn: 1000,
          padding: 0,
          outlineColour: 'transparent',
          outlineThickness: 0,
          bgColour: 'transparent',
          textColour: '#4ade80',
          textHeight: 20,
          textFont: 'inherit',
          shadow: '#4ade80',
          shadowBlur: 15,
          shadowOffset: [0, 0],
        }}
      >
        {renderCloud()}
      </Cloud>
    </div>
  );
};

export default IconCloud;
