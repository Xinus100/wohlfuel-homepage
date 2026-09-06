# wohlfuel-homepage

WOHLRAUM – Wohlgefühl Yoga in Breisach am Rhein. Statische Website (nur Frontend).

Live: https://wohlraum-fuehlen.de

## Aufbau

```
index.html        Startseite (One-Pager)
impressum.html    Impressum (Pflicht in DE)
datenschutz.html  Datenschutzerklärung
styles.css        Styling
script.js         Mobiles Menü, Footer-Jahr
assets/           Bilder, Favicon
```

Kein Build, kein Node nötig. Reines HTML/CSS/JS.

## Lokal ansehen

`index.html` im Browser öffnen (Doppelklick).

Komfortabler mit Live-Reload: in VS Code die Erweiterung **Live Server**
installieren, dann Rechtsklick auf `index.html` → *Open with Live Server*.

## Hosting

GitHub Pages, Deployment vom Branch `main` (Ordner `/`). Jeder Push auf `main`
veröffentlicht automatisch. Domain `wohlraum-fuehlen.de` ist per DNS bei Wix
angebunden (`A`-Records auf GitHub, `CNAME` `www` → `xinus100.github.io`),
die Datei `CNAME` im Repo hält die Domain fest.

> Nicht direkt auf github.com editieren, wenn parallel lokal gearbeitet wird –
> sonst laufen die Stände auseinander.

## Noch offen / Platzhalter

Nach `[` in den Dateien suchen:

- `impressum.html` / `datenschutz.html`: Straße + Hausnummer, PLZ prüfen (79206?),
  Umsatzsteuer-/Kleinunternehmer-Angabe
- `index.html`: konkrete Kurszeiten, Preise und Angebotstexte im Abschnitt
  „Kurse & Termine" bzw. „Mein Angebot"

## Kontaktformular

Aktuell nicht vorhanden (kein Backend). Kontakt läuft über den E-Mail- und
Telefon-Link im Abschnitt „Kontakt". Optionen für später:

- **Schnell:** Dienst wie [Formspree](https://formspree.io) – ein `<form>` mit
  passender `action` in den Kontaktabschnitt einsetzen.
- **Später:** eigenes Backend in diesem Repo (Ordner `backend/`), Formular per
  `fetch` anbinden.

## Ideen für später

- [ ] Kurszeiten/Preise als Tabelle einbauen, sobald sie feststehen
- [ ] Google Fonts lokal einbinden (DSGVO)
- [ ] Kontaktformular aktivieren
