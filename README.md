# Agent-Repository – Vorlage

Startpunkt für Projekte, die mit einem KI-Agenten (Google Antigravity oder VS Code + Cline) entwickelt werden.

## Das ist drin
* `AGENTS.md` – verbindliche Regeln für den Agenten (Deutsch, tokenoptimiert, Sicherheit, Git). **Abschnitt 2 ausfüllen!**
* `.agents/skills/` – Skills (wiederverwendbare Anleitungen), Beispiel inklusive
* `.env-example` – Muster für Geheimnisse; echte Werte nur in `.env` (wird nie committet)
* `.devcontainer/` – fertige Umgebung für Codespaces
* `tests/` + `.github/workflows/autograding.yml` – prüft bei jedem Push, ob deine Governance vollständig ist
* `docs/` – Screenshots für die Abgabe

## So startest du
1. Lege über **Use this template ➔ Create a new repository** dein eigenes Repo an (privat).
2. Öffne es in der IDE und fülle in `AGENTS.md` Abschnitt 2 und 3 aus.
3. `npm test` ➔ alle Tests grün.
4. Lass den Agenten eine Aufgabe erledigen und prüfe den Diff, bevor du übernimmst.
5. Änderungen mit GitHub Desktop committen und pushen.
