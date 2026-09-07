import React from 'react';

interface LogoMarkProps {
  variant?: 'light' | 'knockout';
  className?: string;
  height?: number;
}

export const LogoMark: React.FC<LogoMarkProps> = ({
  variant = 'knockout',
  className = '',
  height = 28
}) => {
  const charcoalColor = variant === 'knockout' ? '#EFEAE2' : '#151A20';
  const orangeColor = '#FE640E';

  return (
    <svg
      height={height}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-label="KTM Academy Logo Mark"
    >
      {/* Open Book Base */}
      <path
        d="M 10,65 Q 35,55 50,62 Q 65,55 90,65 L 90,72 Q 65,62 50,69 Q 35,62 10,72 Z"
        fill={charcoalColor}
      />
      <path
        d="M 12,58 Q 35,48 50,55 Q 65,48 88,58"
        stroke={charcoalColor}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* KTM Rising Letter Elements */}
      <path
        d="M 22,50 L 22,28 M 22,38 L 32,28 M 22,38 L 32,50"
        stroke={charcoalColor}
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M 38,28 L 54,28 M 46,28 L 46,50"
        stroke={charcoalColor}
        strokeWidth="4"
        strokeLinecap="square"
      />
      <path
        d="M 60,50 L 60,28 L 68,40 L 76,28 L 76,50"
        stroke={charcoalColor}
        strokeWidth="3.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Signature Ascending Orange Arrow */}
      <path
        d="M 45,52 C 48,35 62,20 82,10"
        stroke={orangeColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <polygon
        points="86,8 74,10 82,18"
        fill={orangeColor}
      />

      {/* Scattering Pixel Cluster */}
      <rect x="26" y="16" width="4.5" height="4.5" fill={orangeColor} />
      <rect x="20" y="10" width="3.5" height="3.5" fill={orangeColor} opacity="0.9" />
      <rect x="14" y="18" width="3" height="3" fill={orangeColor} opacity="0.75" />
      <rect x="10" y="12" width="2.5" height="2.5" fill={orangeColor} opacity="0.6" />
      <rect x="32" y="8" width="3" height="3" fill={orangeColor} opacity="0.8" />
    </svg>
  );
};
