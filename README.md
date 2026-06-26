# FurtnerLive Pro

DSGVO-konforme Livestreaming-Landingpage für Gemeinden, Vereine und öffentliche Einrichtungen.

## Struktur

```
furtnerlivepro/
│
├── index.html              Startseite
├── assets/
│   ├── logo.png             Logo (noch einzufügen)
│   ├── hero.webp            Hero-Bild (optional)
│   └── icons/
│
├── css/
│   ├── style.css            Basis-Styles
│   └── responsive.css       Mobile/Breakpoints
│
├── js/
│   ├── app.js                Scroll-Verhalten, FAQ-Toggle
│   └── animations.js         Scroll-Reveal-Animationen
│
└── pages/
    ├── pricing.html          Preise & Pakete
    ├── kontakt.html          Kontaktformular
    ├── impressum.html        Impressum (Platzhalter)
    ├── datenschutz.html      Datenschutzerklärung (Platzhalter)
    └── agb.html               AGB (Platzhalter)
```

## Offene Punkte

- `assets/logo.png` muss noch hochgeladen werden (aktuell als Platzhalterpfad referenziert).
- `impressum.html` und `datenschutz.html` enthalten die vom Betreiber bereitgestellten echten Inhalte.
- `agb.html` enthält nur den vom Betreiber bereitgestellten Schlussteil (§5–§6); §1–§4 sind weiterhin Platzhalter und müssen durch den vollständigen Originaltext ersetzt werden.
- Das Kontaktformular in `pages/kontakt.html` ist über EmailJS angebunden (kein eigenes Backend).
