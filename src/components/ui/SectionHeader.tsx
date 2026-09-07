import React from 'react';

interface SectionHeaderProps {
  title: string;
  intro?: string;
  className?: string;
  theme?: 'dark' | 'light';
  markerIndex?: string; // e.g. "01", "04", "06" only where sequence exists
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  intro,
  className = '',
  theme = 'dark',
  markerIndex
}) => {
  const textColor = theme === 'dark' ? 'text-[#EFEAE2]' : 'text-[#151A20]';
  const introColor = theme === 'dark' ? 'text-[#EFEAE2]/80' : 'text-[#28323C]';

  return (
    <div className={`space-y-4 max-w-4xl mb-12 lg:mb-16 ${className}`}>
      <div className="flex items-baseline gap-4">
        {markerIndex && (
          <span className="font-mono text-sm tracking-tight text-[#FE640E] select-none font-bold">
            {markerIndex}
          </span>
        )}
        <h2 className={`text-section-title font-archivo-display font-semibold ${textColor}`}>
          {title}
        </h2>
      </div>
      {intro && (
        <p className={`text-lg lg:text-xl font-normal leading-relaxed max-prose-width ${introColor}`}>
          {intro}
        </p>
      )}
    </div>
  );
};
