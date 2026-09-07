import React from 'react';

interface PixelMarkerProps {
  size?: number; // default 10px
  className?: string;
  satellites?: boolean;
}

export const PixelMarker: React.FC<PixelMarkerProps> = ({
  size = 10,
  className = '',
  satellites = false
}) => {
  return (
    <span className={`inline-flex items-baseline relative shrink-0 ${className}`}>
      <span
        className="bg-[#FE640E] inline-block"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '0px'
        }}
        aria-hidden="true"
      />
      {satellites && (
        <>
          <span
            className="bg-[#FE640E]/80 absolute inline-block"
            style={{
              width: `${Math.max(4, size - 4)}px`,
              height: `${Math.max(4, size - 4)}px`,
              left: `-${size * 1.2}px`,
              bottom: `-${size * 0.8}px`
            }}
            aria-hidden="true"
          />
          <span
            className="bg-[#FE640E]/60 absolute inline-block"
            style={{
              width: `${Math.max(3, size - 6)}px`,
              height: `${Math.max(3, size - 6)}px`,
              left: `-${size * 2}px`,
              bottom: `-${size * 1.5}px`
            }}
            aria-hidden="true"
          />
        </>
      )}
    </span>
  );
};
