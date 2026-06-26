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
- Inhalte von `impressum.html`, `datenschutz.html` und `agb.html` sind Platzhalter und müssen rechtlich geprüft/ergänzt werden.
- Das Kontaktformular in `pages/kontakt.html` hat noch keine Backend-Anbindung (`action`/Mailhandler fehlt).
