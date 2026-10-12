# Implementeringsplan: Prompt for Google AI Studio (Aabak Studio NfcReview)

Denne planen inneholder den komplette, spissede prompten du kan lime direkte inn i Google AI Studio når du bygger eller oppdaterer **Aabak Studio NFC Review** (`https://aabakstudio.com/NfcReview/`).

---

## 1. Oversikt & Mål

- **Mål**: Etablere det komplementære bindeleddet på NFC Review-nettsiden, slik at restaurantører som besøker siden for Google Review-kort umiddelbart oppdager og kan klikke seg inn på SmakSync (digitale menyer og NFC-bordkort).
- **Format**: Kort og presis instruks spesifikt fokusert på bindeleddet, optimalisert for Google AI Studios kodemotor.
- **Berørte flater på NFC Review-siden**:
  1. **Toppstripe (Ecosystem Bar)**: Diskret henvisning til SmakSync.
  2. **Hovednavigasjon**: Menypunkt «Menykort for restaurant ↗».
  3. **Restaurantseksjon**: Egen visuell seksjon for SmakSync med live demo-lenke og pakketilbud.

---

## 2. Den Ferdige Prompten (Klar til å kopiere til Google AI Studio)

Nedenfor er den nøyaktige prompten du limer inn i AI Studio på det andre prosjektet:

```text
Vi skal etablere et sømløst bindeledd og økosystem mellom denne nettsiden (Aabak Studio Google NFC Review Cards) og vår søsterside SmakSync (som leverer digitale menyer og NFC-bordkort for restauranter). 

Vennligst implementer følgende 3 kontaktpunkter på nettsiden:

1. Økosystem-toppstripe (øverst over headeren):
- Legg til en diskret, elegant toppstripe i mørk stil (bg-zinc-950 / text-zinc-300).
- Tekst: "Aabak Studio Økosystem · Driver du restaurant? Se våre digitale menyer & NFC-bordkort på SmakSync →"
- Lenke som åpner SmakSync i ny fane (target="_blank" rel="noopener noreferrer").

2. Hovednavigasjon & Mobilmeny:
- Legg til et menypunkt: "Menykort (SmakSync) ↗" som leder direkte til SmakSync.
- Gi det et diskret eksternt-lenke ikon så brukeren forstår det er en dedikert løsning for restauranter.

3. Dedikert Restaurant-seksjon ("Full pakke for serveringssteder"):
- Plasser en moderne seksjon før footeren eller under produktlisten med overskrift:
  "Driver du restaurant eller kafé? Kombiner Google Review Cards med SmakSync".
- Fremhev verdiløftet: 
  "Gjester tæpper for digital meny ved bordet – og tæpper for 5 stjerner ved kassen."
- Vis 3 nøkkelfordeler:
  • 0.4s lynraske digitale menyer uten app-nedlasting
  • Mattilsyn-godkjent allergenmerking og sanntidsendring av priser
  • Rabatt ved samlet bestilling av bordkort og diskkort
- Legg til to tydelige handlingsknapper:
  • Primær knapp: "Utforsk SmakSync Menyer ↗" (lenke til https://smaksync.no)
  • Sekundær knapp: "Se live meny-demo ↗" (lenke til https://smaksync.no/meny.html?id=restaurant_eik_og_gran)

Designkrav:
- Følg skandinavisk minimalisme (Inter, rene linjer, dype kontraster).
- Ikke overdriv med fargesterke badges eller AI-pill styling.
- Sørg for 100% responsivitet på mobil og desktop.
```

---

## 3. Brukeropplevelse & Konverteringsflyt

```
Besøkende på aabakstudio.com/NfcReview
                 │
                 ├── 1. Ser toppstripen: "Driver du restaurant? Se SmakSync..."
                 │
                 ├── 2. Ser menypunkt: "Menykort (SmakSync) ↗"
                 │
                 └── 3. Scroller til Restaurant-seksjonen:
                          ├── Klikker "Utforsk SmakSync" ───► Lander på SmakSync forside
                          └── Klikker "Se live meny-demo" ──► Åpner Restaurant Eik & Gran meny
```

---

## 4. Verifisering og Neste Steg

1. **Godkjenning**: Trykk **Proceed** for å godkjenne planen.
2. **Kopiering**: Kopier tekstblokken fra seksjon 2 og lim inn som første prompt i ditt nye Google AI Studio-prosjekt for `aabakstudio.com/NfcReview`.
3. **URL-er**: Bytt eventuelt ut `https://smaksync.no` med den faktiske URL-en du bruker for produksjonsmiljøet til SmakSync dersom du har eget tilpasset domene.
