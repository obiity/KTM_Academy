import React from 'react';

export const Telemetry: React.FC = () => {
  return (
    <div className="flex items-center gap-3 text-xs text-[#7C8894] font-mono tracking-wider select-none">
      <span className="inline-block w-2 h-2 bg-[#FE640E] rounded-none animate-pulse" />
      <span style={{ fontFamily: 'var(--font-martian), monospace' }}>
        EDTECH / DAKAR 14.6928°N 17.4467°O / LANCEMENT 2026
      </span>
    </div>
  );
};
