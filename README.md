# SmartMeny 🍽️📱

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
   git clone https://github.com/<ditt-brukernavn>/smartmeny.git
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

Dette repositoriet er klargjort med automatisk GitHub Actions CI/CD (`.github/workflows/deploy.yml`).

### Slik aktiverer du GitHub Pages:

1. Gå til repositoriet på **GitHub**.
2. Klikk på **Settings** > **Pages** (i venstremenyen).
3. Under **Build and deployment** > **Source**, velg **GitHub Actions**.
4. Når du pusher endringer til `main`-branchen, vil GitHub Actions automatisk bygge og publisere nettsiden til:
   `https://<ditt-brukernavn>.github.io/<repo-navn>/`

> *Merk: `vite.config.ts` er allerede konfigurert med `base: './'`, slik at alle stier fungerer feilfritt både på tilpassede domener og undermapper på GitHub Pages.*

---

## 📁 Prosjektstruktur

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automatisk GitHub Actions deployment
├── index.html              # Komplett landingsside, mockups og JavaScript
├── package.json            # Prosjektkonfigurasjon og scripts
├── vite.config.ts          # Vite build-oppsett med relativ basesti
├── tsconfig.json           # TypeScript-konfigurasjon
├── .gitignore              # Ignorerte filer for Git
└── README.md               # Dokumentasjon
```

---

## 📄 Lisens & Rettigheter

© 2026 SmartMeny AS. Alle rettigheter reservert.
