import React from 'react';
import Image from 'next/image';
import { LogoMark } from './LogoMark';
import { LogoWordmark } from './LogoWordmark';

interface LogoLockupProps {
  variant?: 'light' | 'knockout';
  className?: string;
  height?: number;
  useImage?: boolean;
}

export const LogoLockup: React.FC<LogoLockupProps> = ({
  variant = 'knockout',
  className = '',
  height = 56,
  useImage = true
}) => {
  if (useImage) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Logo KTM.png"
          alt="KTM ACADEMY Logo"
          className="object-contain w-auto transition-all duration-200 drop-shadow-md"
          style={{ height: `${height}px` }}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <LogoMark variant={variant} height={height} />
      <LogoWordmark variant={variant} height={Math.round(height * 0.75)} />
    </div>
  );
};

