import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const agents = existsSync("AGENTS.md") ? readFileSync("AGENTS.md", "utf8") : "";

test("AGENTS.md existiert und ist nicht leer", () => {
  assert.ok(agents.trim().length > 200);
});

test("Basis-Regeln: Sprache Deutsch & tokenoptimiert", () => {
  assert.match(agents, /Deutsch/);
  assert.match(agents, /[Tt]okenoptimiert/);
});

test("Sicherheitsregel: keine Secrets im Code", () => {
  assert.match(agents, /Secrets|API-Key/i);
});

test(".env ist ausgeschlossen, .env-example vorhanden", () => {
  assert.match(readFileSync(".gitignore", "utf8"), /^\.env$/m);
  assert.ok(existsSync(".env-example"));
});

test("Projekt-Regeln wurden ausgefüllt (Platzhalter entfernt)", () => {
  assert.doesNotMatch(agents, /_\(1 Satz/, "Abschnitt 2 'Projekt' noch nicht ausgefüllt");
});
