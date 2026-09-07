import type { Metadata } from 'next';
import { Archivo, Instrument_Sans, Martian_Mono } from 'next/font/google';
import './globals.css';
import { CalibrationRail } from '@/components/chrome/CalibrationRail';
import { Header } from '@/components/chrome/Header';
import { Footer } from '@/components/chrome/Footer';

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-archivo',
  display: 'swap'
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-instrument',
  display: 'swap'
});

const martianMono = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-martian',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'KTM Academy — Formation professionnelle digitale et immersive | Dakar',
  description: 'EdTech sénégalaise : e-learning, serious games, réalité virtuelle et plateformes LMS pour former vos équipes et mesurer les résultats.',
  metadataBase: new URL('https://ktmacademy.sn'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'KTM Academy — Formation professionnelle digitale et immersive',
    description: 'EdTech sénégalaise : e-learning, serious games, réalité virtuelle et plateformes LMS.',
    url: 'https://ktmacademy.sn',
    siteName: 'KTM ACADEMY',
    locale: 'fr_SN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KTM Academy — EdTech Sénégalaise',
    description: 'Solutions digitales & immersives pour la formation métier.'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'EducationalOrganization'],
  name: 'KTM ACADEMY',
  url: 'https://ktmacademy.sn',
  logo: 'https://ktmacademy.sn/brand/logo.svg',
  description: 'Solutions digitales & immersives pour la formation métier — la formation connectée aux réalités du terrain.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dakar',
    addressCountry: 'SN'
  },
  telephone: '+221 77 384 00 08',
  email: 'contact@ktmacademy.sn',
  areaServed: 'SN'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${instrumentSans.variable} ${martianMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#151A20] text-[#EFEAE2] font-body antialiased min-h-screen relative">
        <CalibrationRail />
        <Header />
        <main className="lg:pl-[72px] min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
