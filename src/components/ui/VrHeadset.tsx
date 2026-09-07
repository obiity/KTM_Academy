import React from 'react';

export const VrHeadset: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* VR Headset Visor Main Body */}
    <rect x="2" y="7" width="20" height="10" rx="3" />
    {/* Top Headstrap */}
    <path d="M4 7C4 4 8 2 12 2C16 2 20 4 20 7" />
    {/* Left & Right VR Lenses */}
    <circle cx="8" cy="12" r="2.2" />
    <circle cx="16" cy="12" r="2.2" />
    {/* Nose Bridge Contour */}
    <path d="M11 15c.5.5 1.5.5 2 0" />
  </svg>
);
