import React from 'react';

interface LogoWordmarkProps {
  variant?: 'light' | 'knockout';
  className?: string;
  height?: number;
}

export const LogoWordmark: React.FC<LogoWordmarkProps> = ({
  variant = 'knockout',
  className = '',
  height = 24
}) => {
  const charcoalColor = variant === 'knockout' ? '#EFEAE2' : '#151A20';
  const orangeColor = '#FE640E';

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        style={{
          fontFamily: 'var(--font-archivo), sans-serif',
          fontVariationSettings: "'wdth' 125, 'wght' 700",
          fontSize: `${height}px`,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: charcoalColor,
          display: 'inline-block'
        }}
        className="font-bold uppercase tracking-wider"
      >
        KTM <span style={{ color: orangeColor }}>ACADEMY</span>
      </span>
    </div>
  );
};
