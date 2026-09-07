# GEMINI.md — KTM ACADEMY / Corporate Website Build Brief

> Rename this file to `GEMINI.md` at the project root before starting the Antigravity session.

---

## 0. ROLE & NON-NEGOTIABLES

You are the lead front-end engineer **and** art director on this build. The benchmark is Awwwards Site of the Day, not a marketing template. Every decision must be defensible.

**Hard rules:**

1. **All UI copy is in French.** Never translate, paraphrase, or "improve" the French strings supplied in section 8. Copy them character-for-character, accents included. Your reasoning, comments, commits, and variable names are in English.
2. **No generic AI-page tells.** Specifically banned: tracked-out ALL-CAPS eyebrow labels above every heading; meta strings joined with middle dots (`A · B · C`); one-word-highlighted headlines; identical rounded cards with identical soft grey shadows; gradient washes used as decoration; `→` glued to every link label; fade-and-slide-up entrance on every single section.
3. **Numbers `01/02/03` only where the content is genuinely a sequence.** That is true for the pedagogical model and the 4-step engagement process. It is *not* true for the service catalogue or the expertise list — style those differently.
4. **One bold moment, everything else disciplined.** The hero gesture-trace (section 5.1) is the memorable element. Do not compete with it elsewhere.
5. **Ship a quality floor without announcing it:** responsive from 360px, visible keyboard focus, `prefers-reduced-motion` fully respected, WCAG AA contrast, no layout shift.

---

## 1. THE CLIENT

**KTM ACADEMY** — Senegalese EdTech launched in 2026, based in Dakar. It designs professional training systems combining instructional engineering, digital technology and hands-on practice: e-learning, serious games, VR/AR simulation, LMS platforms, and a technical hub (Pôle-Tech / Hub-Tech).

**Audience of the site, in priority order:**
1. Training & HR directors in Senegalese and West African companies (mining, energy, mobility, BTP, agro).
2. Institutions, ministries, vocational training centres, donors and NGOs running skills programmes.
3. Partner trainers and technical centres who might join the Hub-Tech.

**The single job of the site:** convince a decision-maker that a newly launched structure is credible, then convert them into a *diagnostic conjoint* → *pilote sur mesure*. Credibility is earned through precision and evidence of craft, not through volume of claims.

**Strategic tension to design around:** the company is new, but the team is experienced. The site must feel established without overclaiming. There is an explicit transparency note about references (section 8.11) — it is a feature, not fine print. Give it real typographic presence.

---

## 2. ART DIRECTION

### 2.1 Concept — « La trace ascendante »

**The whole system is extracted from the client's existing logo. Study it before designing anything.** The logo is an open book from which the letters KTM rise; an orange arrow curves upward out of the book, and to its left a cluster of small squares detaches from the mass and scatters into the air. Three ideas are already encoded there: *knowledge as a base*, *ascent as the outcome*, and *matter becoming pixels*.

The site does not invent a new metaphor. It extends that one. Vocational training is the repetition of a gesture until it becomes competence — and the logo's arrow is already that gesture, recorded as a rising path. So:

- **The trace** — a continuous orange stroke that is a direct extension of the logo's arrow: same curvature family, same gradient direction (deep at the base, bright at the tip). It connects sections; its progress equals scroll progress.
- **The pixel marker** — a small filled square, borrowed verbatim from the logo's scattering cluster. It flags a keyframe, a step, a selected state. Markers sit near the trace and grow smaller and more spaced as they move away from it, exactly as in the logo. Used *only* on genuine steps, milestones and selections — never as decoration.
- **The calibration rail** — a fixed left rail with tick marks and the current section index. It is the site's navigation and its progress indicator; the trace runs down it.
- **The plateau** — a floor grid, visible only in the immersive section, that grounds objects in space. The pixel markers detach upward from it.

Read together: the base grid is the terrain, the trace is the gesture, the pixels are the digitisation of that gesture. That is literally the company's business model, and it comes out of the logo the client already owns.

### 2.2 Palette — sampled from the logo

These values are measured from the supplied logo file. Do not substitute approximations.

| Token | Hex | Role |
|---|---|---|
| `--encre` | `#151A20` | The logo's charcoal, exactly. Base background of all dark sections. A blue-leaning graphite, not a tinted black. |
| `--encre-profond` | `#0C1116` | Deeper value for the hero vignette and the plateau horizon. Use only for depth, never for large flat fields. |
| `--acier` | `#28323C` | Elevated surfaces on dark: inset panels, table rows, 1px rules, portrait placeholders. |
| `--craie` | `#EFEAE2` | Light-section background, and body text on dark. Warm off-white. Pure `#FFFFFF` is forbidden site-wide. |
| `--orange-ktm` | `#FE640E` | Primary accent. The logo's core orange. Trace, pixel markers, primary CTA, selected states. |
| `--ambre` | `#FF8812` | The logo gradient's bright end. **Only** as the terminal stop of the trace gradient and the CTA hover state. Never as a flat fill. |
| `--bleu-acier` | `#5C7C93` | Secondary accent — the cool side of the logo's charcoal, pulled out and saturated slightly. The digital/data layer: links on dark, focus rings, Pôle-Tech accent, chart strokes. Muted on purpose; it must never compete with the orange. |
| `--gris-atelier` | `#7C8894` | Meta text, hairlines, disabled states, section indices. |

**Colour rules:**
- Orange is a *scarce* resource. Budget: the trace, the pixel markers, one CTA style, the Hub-Tech side of the diptych, and selected states. Nothing else. If more than roughly 5% of any viewport is orange, you have overspent.
- The only permitted gradient on the entire site is the trace stroke: `--orange-ktm` → `--ambre` along the path direction, mirroring the logo's arrow. It is a quotation of the brand mark, not decoration. No gradient backgrounds, no gradient text, no gradient buttons.
- `--orange-ktm` on `--craie` fails AA at body sizes. Orange text is permitted only at ≥ 24px / 600 weight, or on `--encre`. Body links use `--bleu-acier` darkened to `#3E5A6E` on light backgrounds.
- Orange and `--bleu-acier` meet as large adjacent fields in exactly one place: the Pôle-Tech / Hub-Tech diptych, where the opposition carries meaning.

Section rhythm: alternate `--encre` and `--craie`, but not mechanically. The immersive section (8.8) is `--encre` full-bleed and taller than its neighbours; the transparency note (8.12) is `--craie` and deliberately quiet.

### 2.3 Typography

Two families, plus one functional mono restricted to a single component.

- **Display — `Archivo` (variable, Google Fonts).** Use the width axis. Headlines at `wdth 112–125`, `wght 600–700`, tight tracking (`-0.02em`), sentence case. The expanded width is doing the work of industrial signage — this is the personality of the page, so set it large: hero at `clamp(3.2rem, 7.5vw, 7rem)`, section titles at `clamp(2rem, 4vw, 3.5rem)`.
- **Body — `Instrument Sans` (Google Fonts).** 400 / 500 / 600. Body at `1.0625rem`, line-height `1.6`, max line length **66 characters**. Do not exceed 72.
- **Data — `Martian Mono` (Google Fonts), `wght 400`, `wdth semi-condensed`.** Permitted **only** in the hero telemetry readout and the KPI counters, because those are genuinely measured values. Not for labels, not for eyebrows, not for buttons.

Load with `next/font/google`, `display: 'swap'`, subset `latin` + `latin-ext` (French accents).

Type scale (1.25 minor third, fluid via `clamp`): 0.8125 / 0.9375 / 1.0625 / 1.3125 / 1.625 / 2.125 / 2.75 / 3.5 / 4.5 rem.

### 2.3-bis Logo usage

The supplied file is a raster PNG on white. Before building:

1. Place the original at `public/brand/ktm-academy-source.png`.
2. **Vectorise it** into three SVG components: `LogoLockup` (mark + wordmark, for the footer and OG image), `LogoMark` (the book/arrow symbol alone, for the favicon and the mobile header), `LogoWordmark` (type only, for the desktop header). Trace paths cleanly — no embedded raster.
3. Produce a **knockout version for dark backgrounds**: the charcoal parts become `--craie`, the orange stays `--orange-ktm`. The header sits on `--encre` over the hero, so this is the version that ships first.
4. Header lockup height: 28px desktop, 24px mobile. Minimum clear space on all sides = the cap height of the wordmark.
5. Never recolour the mark outside those two versions, never place it on orange, never apply the trace gradient to it, never rotate or add effects.
6. Favicon set from `LogoMark` at 16/32/180/512, plus `manifest.json` with `--encre` as `theme_color`.

The wordmark's letterforms (a wide, squared-off geometric sans with flat terminals) are what motivated the Archivo-expanded choice in 2.3 — the display type should read as a continuation of the logo, not a different voice next to it.

### 2.4 Layout

Asymmetric. A 12-column grid with a **72px fixed calibration rail** on the left (collapses to a 4px top progress bar under 1024px). Content occupies columns 1–7 for prose and 1–12 for full-bleed moments; a 5-column right channel carries pull-quotes, KPIs and captions. Everything is **left-aligned**. The only centred block on the entire site is the final CTA (8.14).

Vertical rhythm on an 8px base. Section padding: `clamp(6rem, 12vh, 11rem)` top and bottom. Do not let sections be equal heights — the immersive and solutions sections should breathe more than the rest.

Wireframe, desktop:

```
┌──┬──────────────────────────────────────────────────────────┐
│  │  KTM ACADEMY            services  modèle  hub  contact   │
│ R├──────────────────────────────────────────────────────────┤
│ A│                                                          │
│ I│   Former autrement.            ╭─ trace ──╮              │
│ L│   Déployer à                  ╱            ◇ MAÎTRISER   │
│  │   grande échelle.            ◇ PRATIQUER                 │
│ 0│                             ╱                            │
│ 1│   [ Démarrer un pilote ]   ◇ JOUER                       │
│  │                           ╱                              │
│ ┆│   ◇ APPRENDRE ──────────╯                                │
│ 0│                                                          │
│ 2│   TELEMETRY  ·  DAKAR 14.6928°N  ·  2026                 │
├──┴──────────────────────────────────────────────────────────┤
│  │  02 / Positionnement                                     │
│  │  ┌──────────────────────────┬───────────────────────┐    │
│  │  │ prose, 7 cols            │ pull-quote, 5 cols    │    │
└──┴──────────────────────────────────────────────────────────┘
```

### 2.5 Motion

One orchestrated page-load sequence, then motion only in response to the user.

**Page load (2.4s total, then never again):** rail ticks draw top-to-bottom (400ms) → headline lines rise from a clipped mask, staggered 90ms → the gesture trace draws via `stroke-dashoffset` (1100ms, `cubic-bezier(.16,1,.3,1)`) → the four keyframe markers pop in as the trace passes them → telemetry readout types in.

**On scroll:** the rail index updates and the trace continues as a thin thread down the left rail. Sections do **not** each get a fade-up. Instead: the immersive section (8.7) uses a scroll-scrubbed reveal of its plateau grid, and the KPI counters (8.11) count up once on entry. That is all.

**On interaction:** pack selector state changes, accordion opens, form validation, hover on service tiles (the tile's marker snaps to the cursor's quadrant — subtle, 120ms). Hover must never be the only affordance.

Under `prefers-reduced-motion: reduce`: no trace drawing (render the final path immediately), no counters (render final values), no scrub, no smooth scroll. Interaction feedback stays but drops to opacity-only at 120ms.

---

## 3. TECH STACK

- **Next.js 15**, App Router, TypeScript strict, `src/` directory.
- **Tailwind CSS v4** with the palette and type scale above defined as `@theme` tokens. No arbitrary hex values in JSX.
- **GSAP 3 + ScrollTrigger** for the load sequence, trace drawing and scrub. **Lenis** for smooth scroll (disabled under reduced motion).
- **SVG only** for the trace, markers, rail and plateau grid. No canvas, no Three.js — this site does not need a 3D runtime and must stay under budget.
- `next/image` for all raster assets, AVIF + WebP, explicit `sizes`.
- Form: React Hook Form + Zod, posting to a `/api/contact` route handler. Stub the mail transport behind an env var and leave a clear `TODO`.
- No UI kit, no component library, no icon library. Draw the handful of needed icons as inline SVG (24px grid, 1.5px stroke, square caps — they must look like technical drawings, not rounded app icons).

**Performance budget:** LCP < 2.0s on 4G, CLS < 0.05, total JS < 120KB gzipped, Lighthouse ≥ 95 across the board. The client's audience includes low-bandwidth regions — this is a brand-relevant constraint, not a nicety.

---

## 4. FILE STRUCTURE

```
src/
  app/
    layout.tsx                 fonts, metadata, Lenis provider
    page.tsx                   single-page composition
    api/contact/route.ts
    globals.css                @theme tokens, base layer
  components/
    chrome/Header.tsx
    chrome/CalibrationRail.tsx
    chrome/Footer.tsx
    hero/Hero.tsx
    hero/GestureTrace.tsx      the SVG path + markers + GSAP timeline
    hero/Telemetry.tsx
    sections/Positionnement.tsx
    sections/CatalogueServices.tsx
    sections/ServicesOrganisations.tsx
    sections/Expertises.tsx
    sections/ModelePedagogique.tsx
    sections/Modalites.tsx
    sections/Immersif.tsx
    sections/Ingenierie.tsx
    sections/PoleHubTech.tsx
    sections/Solutions.tsx      includes the interactive configurator
    sections/Capacites.tsx
    sections/Perspectives.tsx
    sections/Equipe.tsx
    sections/Contact.tsx
    ui/Marker.tsx
    ui/SectionHeader.tsx
    ui/KpiCounter.tsx
    ui/Button.tsx
  content/fr.ts                ALL French strings, single source of truth
  lib/motion.ts                shared GSAP eases + reduced-motion guard
  lib/grid.ts
```

`content/fr.ts` exports typed objects. No French string is ever hard-coded in a component. This makes a future EN version a drop-in.

---

## 5. THE HERO

### 5.1 Gesture trace

A single SVG `<path>` spanning roughly 60% of the viewport width in the right half of the hero. **Derive its curvature directly from the logo's arrow** — open the logo, trace the arrow's spine, and use that as the seed curve, extended and flattened to fit the hero. It must read as the logo's gesture continued across the page, not as a decorative swoosh or a data chart.

Stroke: 2px, round cap, filled with a `linearGradient` running along the path from `--orange-ktm` at the origin to `--ambre` at the tip — the same low-to-high progression as the logo. Drawn via `stroke-dasharray` / `stroke-dashoffset`.

At each of the four inflection points, place a **pixel marker**: a filled square in `--orange-ktm`, 12px at the first point and shrinking to 8px at the last, plus one or two smaller unfilled satellite squares (6px, 4px) offset diagonally away from the path — the scattering cluster from the logo, reused as a functional marker. Label each in `Instrument Sans` 500 at 0.8125rem, `--craie`, sentence case: `Apprendre`, `Jouer`, `Pratiquer`, `Maîtriser`. These four words are the company's pedagogical model, so the hero states the product thesis before a single paragraph of copy.

Behind the trace: a 48px grid in `--gris-atelier` at 8% opacity, fading out toward the headline so it never reduces text contrast. The pixel markers should look like squares that have lifted off this grid.

Do **not** redraw the book from the logo anywhere on the site. The mark owns that form; the page borrows only the arrow and the pixels.

### 5.2 Hero content

- Headline (Archivo, expanded, three lines, clipped-mask reveal):
  `Former autrement.` / `Déployer à` / `grande échelle.`
- Sub (max 66ch): `Solutions digitales & immersives pour la formation métier — la formation connectée aux réalités du terrain.`
- Primary CTA: `Démarrer un pilote` — solid `--orange-ktm`, `--craie` text, square corners (2px radius maximum, site-wide). Hover/focus: background shifts to `--ambre`, plus a 2px `--craie` offset outline on focus.
- Secondary CTA: `Voir le catalogue` — text link with a 1px underline offset 6px, `--craie`, underline turns `--bleu-acier` on hover/focus.
- Telemetry readout, bottom-left, `Martian Mono` 0.75rem, `--gris-atelier`: `EDTECH / DAKAR 14.6928°N 17.4467°O / LANCEMENT 2026`.

No scroll-down chevron. No autoplay video.

---

## 6. THE INTERACTIVE MOMENT — « Composez votre dispositif »

The catalogue's central claim is modularity. Prove it instead of asserting it.

In the Solutions section, build a configurator:
1. The user selects **one** base pack from the five (radio behaviour).
2. The user toggles **any** of the four complements (checkbox behaviour).
3. A live summary panel updates on the right: the chosen pack, the complements, and a short generated sentence in French describing the resulting dispositif.
4. A button `Envoyer cette configuration` scrolls to the contact form and pre-fills the message textarea with the composed summary.

Implementation notes: local React state, no persistence, no backend. Selected state is shown with a filled `--orange-ktm` pixel marker and a 2px `--orange-ktm` left border, **not** with a colour-only change. Keyboard operable as a real radio group and checkbox group (`role`, `aria-checked`, arrow-key navigation on the radios). Announce summary updates via `aria-live="polite"`.

This single component is what turns the page from a brochure into a product surface. Give it real engineering attention.

---

## 7. SECTION-BY-SECTION LAYOUT DIRECTION

| # | Section | Layout treatment |
|---|---|---|
| 01 | Hero | Full-bleed `--encre`, 100vh min, split 5/7 text/trace. |
| 02 | Positionnement | `--craie`. Prose 7 cols left; mission statement as a large Archivo pull-quote in the right channel; the three values as a single horizontal row of three, separated by 1px rules, **no cards**. |
| 03 | Catalogue de services (8) | `--encre`. A 4×2 asymmetric grid where tiles are *not* equal: tiles 01, 04, 05 span 1.5 units in height. Each tile = number in `--gris-atelier`, title in Archivo, one line of body. Border: 1px `--acier` on two sides only (top + left), creating a continuous plotted grid rather than eight floating boxes. |
| 04 | Services aux organisations | `--craie`. The 4 steps as a genuine horizontal sequence with the trace motif connecting them; benefits list in the right channel; the quote `« Déployer la formation sans interrompre l'activité. »` set large. |
| 05 | Nos expertises (5) | `--craie`. A single row of five narrow columns separated by hairlines — a "spectrum" rather than cards. Below, the three pillars (Pédagogie / Technologie / Terrain) as a 3-col band on `--acier`. |
| 06 | Modèle pédagogique | `--encre`. **The only place numbered 01→04 markers are fully deployed**, echoing the hero trace: the same curve, redrawn horizontally, with the four stages sitting on it. Scroll-scrubbed. |
| 07 | Modalités (online / offline / blended) | `--craie`. Five bullets as a definition list, not icons-in-circles. Right channel carries a compact device-agnostic diagram drawn in SVG (desktop / tablet / phone silhouettes, 1.5px stroke). |
| 08 | Formation immersive | `--encre`, full-bleed, tallest section. Plateau grid in perspective at the bottom, revealed on scroll. Four items (Serious games / Simulations VR / Défis collaboratifs / Cas pratiques) as a left list; the statement `Reproduire les situations réelles pour que l'erreur se corrige avant le terrain, pas pendant.` set at display size on the right. This is the emotional peak — but the *only* new visual device here is the plateau. |
| 09 | Ingénierie pédagogique | `--craie`. Five pillars as a stepped left-indent list (each item indents 24px further than the last, mirroring progressive design). Conviction statement in the right channel. |
| 10 | Pôle-Tech / Hub-Tech | `--encre`. Strict diptych, 1px vertical rule down the centre, Pôle-Tech left in `--bleu-acier` accent, Hub-Tech right in `--orange-ktm` accent. This is the one place the two accents are used oppositionally — it encodes "produce the technology / make it live". |
| 11 | Nos solutions + configurator | `--craie`. See section 6. |
| 12 | Capacités et réalisations | `--encre`. Four KPI counters in Martian Mono at display size; domains list below; **the transparency note gets its own bordered block in `--craie`**, full width, italic, at readable size — not shrunk into a footnote. |
| 13 | Perspectives / Vision 2030 | `--craie`. Six items in a 3×2 grid with hairline separators; the Vision 2030 statement as a full-width Archivo band on `--encre` closing the section. |
| 14 | Équipe | `--craie`. Three people, portrait placeholders at 4:5, name in Archivo, role in `--bleu-acier`, one line of scope. Grayscale portraits that go to full colour on hover **and** on focus. |
| 15 | Contact | `--encre`. Centred (the only centred block on the site). Large statement, then a two-column split: form left, coordinates right. Below: the 3-step engagement process on the trace motif. |

Header: sticky, transparent over hero, gains a 1px `--acier` bottom rule and an `--encre` backdrop-blur after 80px. Links: `Services`, `Modèle`, `Immersif`, `Hub-Tech`, `Solutions`, `Équipe` + the CTA `Démarrer un pilote`. Mobile: full-screen overlay menu, items revealed with a 40ms stagger, close on Escape, focus trapped.

---

## 8. FRENCH CONTENT — VERBATIM

**Copy these strings exactly into `src/content/fr.ts`. Do not translate. Do not rewrite. Do not add filler copy of your own invention beyond what is listed here.**

### 8.1 Identité

- Nom : `KTM ACADEMY`
- Signature : `Former autrement. Transformer durablement.`
- Baseline catalogue : `FORMER AUTREMENT. DÉPLOYER À GRANDE ÉCHELLE.`
- Descriptif : `Solutions digitales & immersives pour la formation métier — la formation connectée aux réalités du terrain.`
- Domaines : `E-learning`, `Serious games`, `Réalité virtuelle`, `Plateformes LMS`, `Hub technique`
- Mention structure : `Une EdTech sénégalaise dédiée à la formation professionnelle digitale, immersive et orientée emploi.`

### 8.2 Positionnement

Titre : `Une academy nouvelle, un socle d'expérience solide`

Corps : `Lancée en 2026, KTM Academy conçoit des dispositifs de formation professionnelle qui associent ingénierie pédagogique, technologies digitales et mise en pratique. Sa vocation : rapprocher durablement les compétences des besoins réels de l'économie.`

Mission : `Transformer les savoirs en compétences mobilisables, et les compétences en opportunités durables.`

Valeurs :
- `Innovation` — `Concevoir autrement.`
- `Inclusion` — `Former sans exclure.`
- `Impact` — `Mesurer les résultats.`

Positionnement : `Une plateforme de compétences, un laboratoire pédagogique et un partenaire de déploiement pour les entreprises, les institutions et les apprenants.`

Ambition : `Devenir la référence sénégalaise de la formation professionnelle digitale, immersive et connectée à l'emploi.`

### 8.3 Catalogue de services

Intro : `Une offre modulaire, combinable et adaptable aux métiers, aux publics et aux contraintes de terrain.`

1. `Formation continue digitale` — `Parcours courts, certifiants ou sur mesure pour renforcer les compétences des équipes.`
2. `Digitalisation de contenus` — `Transformation de contenus existants en modules interactifs, vidéos, quiz et microlearning.`
3. `Plateformes LMS` — `Déploiement, administration, suivi des apprenants, certificats et tableaux de bord.`
4. `Serious games` — `Scénarios métiers, décisions, score et feedback pour apprendre par l'action.`
5. `Réalité virtuelle / AR` — `Simulations immersives de gestes, procédures et environnements professionnels.`
6. `Reporting & analytics` — `Indicateurs de progression, performance, engagement et pilotage des programmes.`
7. `Formation de formateurs` — `Transfert de méthodes, outils digitaux et pratiques d'animation hybride.`
8. `Déploiement multi-sites` — `Installation, accompagnement au changement, support et maintenance.`

Clôture : `Un seul interlocuteur — diagnostic, conception, production, déploiement et amélioration continue.`

Chiffres : `8` / `Services intégrés` · `100%` / `Offre modulaire` · `1` / `Interlocuteur unique`

### 8.4 Services aux entreprises et institutions

Intro : `Nous aidons les organisations à former plus vite, plus largement et avec davantage de visibilité sur les résultats.`

1. `Diagnostic & conception` — `Analyse des besoins, cartographie des compétences, parcours et référentiels.`
2. `Production pédagogique` — `Modules e-learning, vidéos, quiz et simulations.`
3. `Déploiement & adoption` — `Pilote, formation des formateurs, communication et accompagnement au changement.`
4. `Suivi & optimisation` — `Tableaux de bord, évaluations, reporting et amélioration continue.`

Bénéfices (titre : `Bénéfices pour votre organisation`) :
- `Réduction des coûts et du temps d'immobilisation`
- `Standardisation des compétences`
- `Accès multi-support et hors ligne partiel`
- `Pilotage en temps réel`
- `Déploiement multi-sites et multi-régions`

Citation : `« Déployer la formation sans interrompre l'activité. »`

Chiffres : `01→04` / `Un parcours continu` · `100%` / `Piloté et mesuré` · `0` / `Interruption d'activité`

### 8.5 Nos expertises

- `Serious games` — `Apprendre par le jeu et la décision.`
- `E-learning` — `Parcours interactifs, pratiques et mesurables.`
- `VR / AR` — `Simulations immersives de gestes et de situations.`
- `Inclusion` — `Accessibilité, langues locales et faible connectivité.`
- `Conseil` — `Stratégie, ingénierie et digitalisation des formations.`

Titre de bande : `Une expertise au service de l'apprentissage et de l'emploi`

Piliers :
- `Pédagogie` — `Approche par compétences, scénarisation, évaluation et certification.`
- `Technologie` — `LMS, SCORM, applications, data, IA adaptative et outils immersifs.`
- `Terrain` — `Contextualisation métier, expérimentation pilote et accompagnement des utilisateurs.`

Différence : `Cinq expertises, une seule équipe : la même exigence de la conception à la mise en situation réelle, du diagnostic à l'impact mesuré.`

Chiffres : `05` / `Domaines d'expertise` · `3` / `Piliers d'exécution` · `360°` / `Approche intégrée`

### 8.6 Modèle pédagogique

Titre : `Apprendre · Jouer · Pratiquer · Maîtriser`

Intro : `Notre modèle pédagogique transforme le contenu en expérience, puis l'expérience en compétence observable.`

1. `Apprendre` — `Comprendre les notions essentielles grâce à des contenus courts et accessibles.`
2. `Jouer` — `Décider, tester et apprendre de l'erreur dans des scénarios interactifs.`
3. `Pratiquer` — `Répéter des gestes et procédures dans un environnement sécurisé.`
4. `Maîtriser` — `Évaluer les acquis, consolider la compétence et préparer la mise en situation réelle.`

Clôture : `Du contenu à la compétence : un parcours progressif, mesurable et ancré dans le réel.`

Chiffres : `4` / `Étapes progressives` · `1` / `Compétence observable` · `100%` / `Ancré dans le réel`

### 8.7 Modalités

Titre : `Formation online, offline et blended learning`
Sous-titre : `Une formation flexible, accessible et continue`

- `Cours interactifs` — `accessibles sur ordinateur, tablette et smartphone`
- `Microlearning` — `modules courts, ciblés et directement mobilisables`
- `Suivi et évaluation intégrés` — `avec attestations ou certificats`
- `Accès hors ligne partiel` — `pour les zones à connectivité limitée`
- `Animation` — `en présentiel, à distance ou en format hybride`

Clôture : `Le bon contenu, au bon moment, sur le support le plus adapté.`

### 8.8 Formation immersive

Titre : `Formation immersive : serious games et réalité virtuelle`
Accroche : `Apprendre en faisant`

- `Serious games` — `Scénarios métiers, choix, score et feedback immédiat.`
- `Simulations VR` — `Reproduction de gestes techniques et de procédures complexes.`
- `Défis collaboratifs` — `Développement des soft skills et du travail d'équipe.`
- `Cas pratiques` — `Situations contextualisées pour coller aux réalités du terrain.`

Statement : `Immersion totale — reproduire les situations réelles pour que l'erreur se corrige avant le terrain, pas pendant.`

### 8.9 Ingénierie pédagogique

Titre : `Ingénierie pédagogique digitale et contextualisée`
Sous-titre : `Des parcours conçus pour les métiers réels`

- `Conception sur mesure` — `Objectifs, compétences, activités et évaluations alignés.`
- `Scénarios interactifs` — `Situations professionnelles adaptées aux contextes locaux.`
- `Langues locales` — `Traduction, voix-off et adaptation culturelle des contenus.`
- `Accessibilité` — `Formats légers, mobile-first et alternatives pour différents profils.`
- `IA adaptative` — `Recommandation de contenus et progression personnalisée selon les données disponibles.`

Conviction : `Un contenu n'a de valeur que s'il parle le langage du métier, du terrain et de l'apprenant.`

Chiffres : `5` / `Piliers d'ingénierie` · `100%` / `Contenus contextualisés` · `N` / `Langues locales`

### 8.10 Pôle-Tech & Hub-Tech

Titre : `Pôle-Tech et Hub-Tech`
Intro : `Deux dispositifs complémentaires : produire la technologie, et faire vivre un écosystème d'innovation.`

`Pôle-Tech` :
- `Développement de plateformes LMS et métiers`
- `Applications web et mobiles`
- `Intégration SCORM et interopérabilité`
- `Hébergement, sécurité et maintenance`
- `Data & analytics pour la gestion des compétences`

`Hub-Tech` :
- `Accompagnement technique et pédagogique`
- `Centre de ressources partagées`
- `Démonstrations et expérimentations`
- `Recherche appliquée et innovation`
- `Plateforme de collaboration entre formateurs, institutions, entreprises et ONG`

Statement : `Un écosystème, pas un simple outil. Le Pôle-Tech produit la technologie ; le Hub-Tech la fait vivre auprès des formateurs, institutions et entreprises.`

Chiffres : `2` / `Dispositifs complémentaires` · `1` / `Écosystème partagé` · `∞` / `Innovation continue`

### 8.11 Nos solutions

Intro : `Des offres modulaires pour démarrer rapidement ou construire un dispositif complet.`

1. `Pack Digital Start` — `Modules e-learning + quiz` — `Pour lancer un premier parcours digital.`
2. `Pack Serious Game` — `Scénario immersif clé en main` — `Pour entraîner la décision et la résolution de problèmes.`
3. `Pack VR / AR` — `Simulation avec casques` — `Pour pratiquer des gestes complexes sans risque.`
4. `Pack LMS` — `Plateforme + suivi` — `Pour diffuser, administrer et mesurer les parcours.`
5. `Pack sur mesure` — `Co-conception complète` — `Pour répondre à un besoin métier ou institutionnel spécifique.`

Compléments (titre : `Chaque pack peut être complété par :`) :
- `Formation de formateurs` — `Transfert des méthodes et outils.`
- `Déploiement` — `Pilote, multi-sites et accompagnement.`
- `Support` — `Maintenance, assistance et amélioration.`
- `Reporting` — `Indicateurs, tableaux de bord et bilan.`

Clôture : `Toujours modulaire — chaque pack se combine, s'étend et s'adapte à votre budget, votre calendrier et votre ambition.`

Libellés du configurateur :
- `Composez votre dispositif`
- `Choisissez un pack de base`
- `Ajoutez vos compléments`
- `Votre configuration`
- `Envoyer cette configuration`
- Phrase générée (template) : `Dispositif basé sur le {PACK}, complété par : {COMPLÉMENTS}.` — si aucun complément : `Dispositif basé sur le {PACK}, sans complément pour le moment.`

### 8.12 Capacités et réalisations

Titre : `Capacités et réalisations mobilisées`
Intro : `KTM Academy s'appuie sur l'expérience cumulée de son équipe dans la formation digitale, l'ingénierie pédagogique et les technologies immersives.`

KPI : `250+` / `Modules digitaux et contenus` · `40 h+` / `Serious games métiers` · `4+` / `Centres accompagnés` · `100+` / `Acteurs terrain mobilisés`

`Domaines d'expérience` :
- `Mécatronique, maintenance et mobilité`
- `Entrepreneuriat, gestion et compétences transversales`
- `Digitalisation de centres et dispositifs de formation`
- `Formation de publics jeunes, femmes, artisans et professionnels`
- `Contenus adaptés aux réalités africaines et aux contraintes de connectivité`

Note : `Une expérience mobile, immersive et orientée résultats.`

Transparence — titre `Transparence sur les références`, texte : `Les réalisations antérieures au lancement sont présentées comme l'expérience des experts et équipes aujourd'hui mobilisés par KTM Academy, et non comme des réalisations autonomes de la nouvelle structure.`

### 8.13 Perspectives

Titre : `Perspectives d'avenir`
Vision : `Construire un écosystème de formation digitale capable d'accompagner durablement la transformation des métiers en Afrique.`

- `Accessibilité élargie` — `Démocratiser les outils immersifs et les rendre accessibles en zones urbaines et rurales.`
- `Alignement emploi / formation` — `Rapprocher les compétences acquises des besoins réels du marché du travail.`
- `Extension sectorielle` — `Développer de nouveaux parcours dans la santé, l'énergie, le BTP et l'agriculture durable.`
- `Innovation durable` — `Intégrer des technologies vertes, des contenus responsables et des usages sobres.`
- `Infrastructures` — `Faire du Hub-Tech une plateforme régionale de ressources, démonstration et expérimentation.`
- `Internationalisation` — `Déployer les solutions de KTM Academy au Sénégal, en Afrique de l'Ouest et au-delà.`

Bande de clôture : `Vision 2030 — faire de KTM Academy un hub africain de référence pour la formation professionnelle innovante, inclusive et orientée emploi.`

### 8.14 Équipe

Titre : `Organisation et équipe de lancement`
Intro : `Une équipe complémentaire réunissant pilotage, développement technologique et création d'expériences pédagogiques.`

- `Mame Diarra Bousso Diop` — `Directrice générale` — `Stratégie, finance, partenariats et pilotage de projets.`
- `Vieux Moussa Diédhiou` — `Directeur technique` — `Plateformes, applications et architecture technique.`
- `Ousmane Bitèye` — `Directeur artistique` — `Scénarisation immersive, 3D et serious games.`

Clôture : `Une gouvernance légère, agile et orientée vers la qualité des livrables et l'impact des formations.`

Chiffres : `3` / `Dirigeants fondateurs` · `1` / `Vision commune` · `2026` / `Année de lancement`

### 8.15 Contact

Titre : `Construisons ensemble l'avenir de la formation en Afrique.`

Corps : `Vous avez un projet de digitalisation, de formation métier, de serious game, de réalité virtuelle ou de plateforme LMS ? Échangeons sur votre besoin et construisons un pilote adapté.`

Signature : `Apprendre. Pratiquer. Réussir.`

Coordonnées :
- `Adresse` — `Dakar, Sénégal`
- `Téléphone` — `+221 77 384 00 08`
- `E-mail` — `contact@ktmacademy.sn` *(TODO: à confirmer avec le client avant mise en ligne)*

Processus :
1. `Prise de contact`
2. `Diagnostic conjoint`
3. `Pilote sur mesure`

Formulaire — libellés : `Nom et prénom`, `Organisation`, `E-mail professionnel`, `Téléphone`, `Votre besoin`, `Envoyer la demande`
États : succès `Demande envoyée. Nous revenons vers vous sous 48 heures ouvrées.` · erreur réseau `L'envoi a échoué. Réessayez ou écrivez-nous directement à contact@ktmacademy.sn.` · champ requis `Ce champ est requis.` · e-mail invalide `Adresse e-mail invalide.`

Footer : `KTM ACADEMY — Former autrement. Transformer durablement.` · `© 2026 KTM Academy. Dakar, Sénégal.` · liens `Mentions légales`, `Politique de confidentialité`

---

## 9. SEO & METADATA

```
title:       KTM Academy — Formation professionnelle digitale et immersive | Dakar
description: EdTech sénégalaise : e-learning, serious games, réalité virtuelle et
             plateformes LMS pour former vos équipes et mesurer les résultats.
lang:        fr
locale:      fr_SN
```

Add: OpenGraph + Twitter card (1200×630, `--encre` background, Archivo headline, the gesture trace), `Organization` + `EducationalOrganization` JSON-LD with address, phone and `areaServed: SN`, canonical URL, `sitemap.ts`, `robots.ts`. All heading levels sequential — exactly one `h1`.

---

## 10. ASSETS TO GENERATE

No stock photography. Produce these yourself as code or placeholders:

1. **Logo** — vectorised from `public/brand/ktm-academy-source.png` per section 2.3-bis: `LogoLockup`, `LogoMark`, `LogoWordmark`, each in a light and a knockout variant, as inline SVG components. Never re-draw the logo by hand and never approximate it with type.
2. **Trace path** — cubic bezier seeded from the logo's arrow spine, committed as a path string in `lib/grid.ts` with the four pixel-marker coordinates and their satellite offsets.
3. **Plateau grid** — SVG perspective grid, generated procedurally.
4. **Team portraits** — 4:5 placeholders in `--acier` with the person's initials in Archivo. Leave a clear `TODO` for real photography.
5. **OG image** — a static route (`opengraph-image.tsx`) rendered with `next/og`: `--encre` field, knockout lockup top-left, Archivo headline, the orange trace crossing the lower third.
6. **Favicon + manifest** — from `LogoMark`, per section 2.3-bis.

---

## 11. BUILD ORDER

1. Scaffold Next.js 15 + TS + Tailwind v4; define all `@theme` tokens; wire the three fonts.
2. Build `content/fr.ts` in full from section 8 before writing any JSX. Verify accents.
3. Chrome: Header, CalibrationRail, Footer, Lenis provider, reduced-motion guard.
4. Hero + GestureTrace + the page-load GSAP timeline. **Stop and review this against section 5 before continuing** — if the hero is not memorable, nothing after it will save the site.
5. Sections 02–07 in order.
6. Immersive section with the scrubbed plateau.
7. Solutions + configurator (the heaviest engineering).
8. Capacités, Perspectives, Équipe, Contact + API route.
9. SEO, OG image, JSON-LD, sitemap.
10. Audit pass: Lighthouse, axe, keyboard-only walkthrough, 360px viewport, reduced-motion, offline font fallback.

---

## 12. SELF-CRITIQUE BEFORE DELIVERY

Answer each in writing before you call the build done:

- Could this page be re-skinned for a fintech, a consultancy or a SaaS without changing its structure? If yes, the design is generic — fix it.
- Is there exactly one bold element, or did decoration spread?
- Does every border, number and rule encode information, or is any of it there because it looked empty?
- Are the numbered markers only on real sequences?
- Is any French string altered from section 8?
- Does the page look like it belongs to *this* logo — same charcoal, same orange, same rising geometry — or like a generic dark site that happens to have the logo pasted in the corner?
- Is orange still scarce, or did it creep into borders, icons and hovers?
- Does the transparency note (8.12) read as honest confidence, or as an apology hidden in small type?
- Does the site work, and still look intentional, with JavaScript disabled and on a 3G connection?
