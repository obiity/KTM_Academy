import React from 'react';
import Image from 'next/image';

interface LogoLockupProps {
  variant?: 'light' | 'knockout';
  className?: string;
  height?: number;
  useImage?: boolean;
}

export const LogoLockup: React.FC<LogoLockupProps> = ({
  variant = 'knockout',
  className = '',
  height = 52,
  useImage = true
}) => {
  const logoSrc = variant === 'light'
    ? '/KTM Skills Academy - Logo Noir.png'
    : '/KTM Skills Academy - Logo Blanc.png';

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="KTM Skills Academy"
        className="object-contain w-auto transition-all duration-200"
        style={{ height: `${height}px` }}
      />
    </div>
  );
};
