# Aufgabe für Claude Code

## Was du tun sollst:

Erstelle ein GitHub Repository für die Siberian Struggle Website und deploye es auf GitHub Pages.

## Schritte:

1. **Git initialisieren** (falls noch nicht geschehen):
   ```bash
   git init
   ```

2. **Alle Dateien hinzufügen und committen**:
   ```bash
   git add index.html devlog.html impressum.html README.md
   git commit -m "Initial commit: Siberian Struggle website"
   ```

3. **GitHub Repository erstellen** via GitHub CLI (falls verfügbar):
   ```bash
   gh repo create siberian-struggle --public --source=. --push
   ```
   
   Oder manuell: Sage dem User, dass er auf github.com/new gehen soll.

4. **GitHub Pages aktivieren**:
   ```bash
   gh api repos/{owner}/siberian-struggle/pages -X POST -f source='{"branch":"main","path":"/"}'
   ```
   
   Oder: User anleiten unter Settings → Pages.

## Dateien im Projekt:

- `index.html` - Hauptseite mit Schneefalleffekt, Features, Newsletter
- `devlog.html` - Dev Diaries Seite
- `impressum.html` - Deutsches Impressum (Pflicht!)
- `README.md` - Projektdokumentation
- `setup.sh` - Setup-Script (optional)

## Wichtig:

- Das Impressum enthält bereits die korrekten Daten (Autorenglück Service)
- Social Links sind bereits konfiguriert (Discord, X, YouTube, Reddit)
- Steam-Link ist noch Platzhalter (#)
- Email-Platzhalter: kontakt@siberianstruggle.de

## Nach dem Setup:

Die Website ist erreichbar unter:
`https://[username].github.io/siberian-struggle/`

Für Custom Domain (siberianstruggle.de) später:
1. CNAME Datei erstellen mit Inhalt: `siberianstruggle.de`
2. DNS Records beim Domain-Provider setzen
3. In GitHub Pages Settings die Custom Domain eintragen
