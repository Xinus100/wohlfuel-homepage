# wohlfuel-homepage

Alinas Wohlfühl-Homepage für Yoga – statische Website (nur Frontend).

## Aufbau

```
index.html        Startseite (One-Pager)
impressum.html    Impressum (Pflicht in DE) – Platzhalter ausfüllen
datenschutz.html  Datenschutzerklärung – Platzhalter ausfüllen
styles.css        Styling
script.js         Mobiles Menü, Footer-Jahr, Formular-Hinweis
assets/           Bilder, Favicon
```

Kein Build, kein Node nötig. Es ist reines HTML/CSS/JS.

## Lokal ansehen

Einfach `index.html` im Browser öffnen (Doppelklick).

Etwas komfortabler mit Live-Reload: In VS Code die Erweiterung
**Live Server** installieren, dann Rechtsklick auf `index.html` → *Open with Live Server*.

## Inhalte anpassen

Alle Platzhalter stehen in eckigen Klammern, z. B. `[Ort]`, `[Nachname]`, `[XX] €`.
Kurz nach `[` suchen und ersetzen.

- Texte: direkt in `index.html`
- Farben/Schrift: Variablen oben in `styles.css` (`:root`)
- Foto: echtes Bild als `assets/alina.jpg` ablegen und in `index.html`
  `assets/alina.svg` → `assets/alina.jpg` ändern

## Veröffentlichen (Domain liegt bei Wix)

Die Wix-Domain kann auf einen kostenlosen Static-Host zeigen. Empfohlen:

1. **Cloudflare Pages** oder **Netlify** – GitHub-Repo verbinden, jeder Push
   veröffentlicht automatisch. Kein Build-Command nötig (Ordner = Projektwurzel).
2. Beim Host die eigene Domain hinzufügen; er nennt dir DNS-Einträge
   (meist ein `CNAME` für `www` und ein Weiterleitungs-/`A`-Eintrag für die Root-Domain).
3. Bei Wix: **Domains → deine Domain → DNS-Einträge bearbeiten** und die
   Einträge des Hosts eintragen. HTTPS macht der Host automatisch.

Alternative ohne DNS-Umzug: Domain bei Wix lassen und dort nur eine
Weiterleitung einrichten – schöner ist die direkte Anbindung oben.

## Kontaktformular

Aktuell nur ein Hinweis (kein Backend). Zwei Wege:

- **Jetzt schnell:** Dienst wie [Formspree](https://formspree.io) oder Netlify Forms –
  `action` im `<form>` anpassen.
- **Später:** eigenes Backend in diesem Repo ergänzen (Ordner `backend/`),
  das Formular per `fetch` anbinden.

## Nächste Schritte

- [ ] Platzhalter-Texte ausfüllen
- [ ] Echtes Foto einfügen
- [ ] Impressum & Datenschutz vervollständigen
- [ ] Hosting einrichten und Domain verbinden
- [ ] Optional: Google Fonts lokal einbinden (DSGVO), Kontaktformular aktivieren
