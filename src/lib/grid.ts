export interface MarkerPoint {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  satellites: Array<{ dx: number; dy: number; size: number }>;
}

export const HERO_TRACE_PATH = "M 50,480 C 150,460 250,380 340,300 C 430,220 520,160 620,110 C 720,60 810,40 900,30";

export const HERO_MARKERS: MarkerPoint[] = [
  {
    id: "apprendre",
    label: "Apprendre",
    x: 100,
    y: 468,
    size: 12,
    satellites: [
      { dx: -14, dy: 14, size: 6 },
      { dx: -24, dy: 24, size: 4 }
    ]
  },
  {
    id: "jouer",
    label: "Jouer",
    x: 340,
    y: 300,
    size: 10,
    satellites: [
      { dx: -12, dy: 12, size: 5 },
      { dx: -20, dy: 20, size: 4 }
    ]
  },
  {
    id: "pratiquer",
    label: "Pratiquer",
    x: 620,
    y: 110,
    size: 8,
    satellites: [
      { dx: -10, dy: 10, size: 4 }
    ]
  },
  {
    id: "maitriser",
    label: "Maîtriser",
    x: 900,
    y: 30,
    size: 8,
    satellites: [
      { dx: -8, dy: 8, size: 4 }
    ]
  }
];

export const SECTION_LIST = [
  { id: "hero", index: "01", name: "Promesse" },
  { id: "pourquoi-ktm", index: "02", name: "Pourquoi KTM" },
  { id: "solutions", index: "03", name: "Solutions" },
  { id: "voksia", index: "04", name: "VOKSIA" },
  { id: "preuves", index: "05", name: "Preuves" },
  { id: "a-propos", index: "06", name: "À propos" },
  { id: "partenaires", index: "07", name: "Partenaires" },
  { id: "contact", index: "08", name: "Diagnostic" }
];
