# SmakSync 🍽️📱

> **Fremtidens meny ligger allerede på bordet.**  
> Skandinavisk B2B SaaS-portefølje og demoside for NFC-menykort (fysiske bordkort) og skreddersydde, lynraske digitale menyer til restauranter, caféer og utesteder.

---

## 🚀 Egenskaper

- **Skandinavisk minimalistisk estetikk:** Stramt design bygget med nøytrale toner (Zinc/Slate/Sort/Hvit), Inter-typografi og subtil smaragdgrønn aksentfarge.
- **Null ventetid (< 0.4s):** Lynraske menyer direkte i nettleseren uten krav om app-nedlasting.
- **NFC + QR fallback:** Visning av fysiske bordkort i matt sort akryl eller nordisk eik.
- **Interaktivt Demo-Galleri:** 3 separate mobilmenyer med ulike visuelle identiteter:
  - *Café & Bakery* (varmt, lyst tema)
  - *Fine Dining* (mørkt, sobert uttrykk med vinparing)
  - *Cocktail Bar* (mørkt nattema med fargekodede signaturdrinker)
- **Kundeportal / Dashboard Mockup:**
  - Sanntidstabell for retter og priser.
  - Funksjonell hurtig-toggle mellom «Aktiv» og «Utsolgt».
  - Redigeringsmodal for pris- og statusjustering.
- **Full-Service Kontaktskjema:** Enkelt skjema der restaurantdrivere kan sende oppdateringsønsker.
- **100% responsiv:** Optimalisert for smarttelefoner, nettbrett og desktop.

---

## 🛠️ Teknologistakk

- **HTML5 & Vanilla JavaScript** for lynrask ytelse og enkel vedlikeholdbarhet.
- **Tailwind CSS** (via CDN med tilpasset tema).
- **Google Fonts (Inter)** for ren og presis typografi.
- **Vite** som moderne bundler og utviklingsserver.
- **GitHub Actions** for automatisert distribusjon til GitHub Pages.

---

## 💻 Kom i gang lokalt

### Forutsetninger
- [Node.js](https://nodejs.org/) (versjon 18 eller nyere)
- npm, pnpm eller yarn

### Installasjon

1. **Klon repositoriet:**
   ```bash
   git clone https://github.com/<ditt-brukernavn>/SmakSync.git
   cd smartmeny
   ```

2. **Installer avhengigheter:**
   ```bash
   npm install
   ```

3. **Start utviklingsserveren:**
   ```bash
   npm run dev
   ```
   Åpne `http://localhost:3000` i nettleseren.

4. **Bygg for produksjon:**
   ```bash
   npm run build
   ```
   Byggfilene lagres i mappen `dist/`.

---

## 🌐 Publisering på GitHub Pages

Dette repositoriet er optimalisert for GitHub Pages via `/docs`-mappen (som du har konfigurert under innstillingene dine):

1. **Source:** `Deploy from a branch`
2. **Branch:** `main` / `/docs`
3. Nettsiden serveres direkte fra `docs/index.html` med `.nojekyll` aktivert, slik at den publiseres umiddelbart uten Jekyll-krasj!

---

## 📁 Prosjektstruktur

```
├── docs/
│   ├── index.html          # Nettside for GitHub Pages (produksjon)
│   └── .nojekyll           # Slår av Jekyll på GitHub Pages
├── index.html              # Kildekode / lokal visning
├── package.json            # Prosjektkonfigurasjon og scripts
├── vite.config.ts          # Vite build-oppsett (bygger til docs/)
├── tsconfig.json           # TypeScript-konfigurasjon
├── .gitignore              # Ignorerte filer for Git
└── README.md               # Dokumentasjon
```

---

## 📄 Lisens & Rettigheter

© 2026 SmartMeny AS. Alle rettigheter reservert.
