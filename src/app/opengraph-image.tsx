import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'KTM Academy — Formation professionnelle digitale et immersive';
export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#151A20',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'sans-serif',
          color: '#EFEAE2',
          position: 'relative'
        }}
      >
        {/* Top Lockup */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '18px',
              height: '18px',
              backgroundColor: '#FE640E',
              borderRadius: '0px'
            }}
          />
          <span style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em' }}>
            KTM <span style={{ color: '#FE640E' }}>ACADEMY</span>
          </span>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '850px' }}>
          <span style={{ fontSize: '56px', fontWeight: 800, lineHeight: 1.05, color: '#EFEAE2' }}>
            Former autrement. Déployer à grande échelle.
          </span>
          <span style={{ fontSize: '24px', color: '#7C8894' }}>
            EdTech sénégalaise : e-learning, serious games, VR/AR et LMS pour la formation métier.
          </span>
        </div>

        {/* Bottom Orange Trace Line Motif */}
        <div
          style={{
            height: '4px',
            width: '100%',
            background: 'linear-gradient(to right, #FE640E, #FF8812)',
            borderRadius: '2px'
          }}
        />
      </div>
    ),
    {
      ...size
    }
  );
}
