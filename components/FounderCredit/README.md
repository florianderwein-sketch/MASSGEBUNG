# FounderCredit

Kompakte Signatur-Stil Komponente für die About-Page von MASSGEBUNG.

## Philosophie

**Product-First, Founder-Second** → Minimaler visueller Footprint, maximale Klarheit.

- ✅ **KEIN** Foto-Platzhalter / Initialen-Circle
- ✅ **KEIN** Karten-Container mit Background
- ✅ **KEINE** Überschrift ("Gründer", "Aus der Praxis")
- ✅ Nur 2 Zeilen, kompakt wie eine E-Mail-Signatur

## Design-Begründung

Ein Foto-Platzhalter (Initialen "FD") beansprucht ~40% der visuellen Fläche ohne Information zu tragen → unnötiger Cognitive Load. Ältere Zielgruppe (45-65) gravitiert zu Ruhe und Einfachheit.

Sobald ein echtes Foto existiert, kann es als optionales 40×48px-Element ergänzt werden.

## Verwendung

### Basis (nur Text)

```tsx
import { FounderCredit } from '@/components/FounderCredit';

export default function AboutPage() {
  return (
    <div>
      <h1>Über MASSGEBUNG</h1>
      <p>Kalkulationssoftware für Lohnbeschichter...</p>

      <FounderCredit />
    </div>
  );
}
```

**Ergebnis:**
```
Florian Derwein · Industriemechaniker & angehender
Maschinenbautechniker · 13 Jahre Fertigungserfahrung
Entwickelt mit Beschichtungsbetrieben.
```

---

### Mit optionalem Foto (später)

```tsx
<FounderCredit
  photoSrc="/images/florian-derwein.jpg"
  photoAlt="Florian Derwein"
/>
```

**Ergebnis:**
```
[40px Foto] Florian Derwein · Industriemechaniker & angehender
            Maschinenbautechniker · 13 Jahre Fertigungserfahrung
            Entwickelt mit Beschichtungsbetrieben.
```

---

### Mit Border-Top Abtrennung

```tsx
import styles from './FounderCredit.module.css';

<FounderCredit className={styles.withBorderTop} />
```

Fügt eine dezente Border-Linie (1px, opacity 0.08) oberhalb der Komponente hinzu.

---

## Props

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|--------------|
| `photoSrc` | `string?` | `undefined` | Optionales Foto (40×40px). **KEIN** Fallback-Avatar wenn nicht gesetzt! |
| `photoAlt` | `string?` | `"Florian Derwein"` | Alt-Text für das Foto |
| `className` | `string?` | `undefined` | Zusätzliche CSS-Klasse (z.B. für `withBorderTop`) |

---

## Design System Compliance (Tawny Furnace)

### Farben ✅

```css
Name:          rgba(255,255,255,0.87)  /* text-primary */
Credentials:   rgba(255,255,255,0.60)  /* text-secondary */
Separator (·): rgba(255,255,255,0.38)  /* text-tertiary */
Co-Creation:   rgba(255,255,255,0.38)  /* text-tertiary */
```

### Typografie ✅

```css
Font:          'DM Sans', sans-serif
Name:          15px, font-weight 600
Credentials:   15px, font-weight 400
Co-Creation:   13px, font-weight 400
```

### Spacing ✅

```css
Zeile 1 ↔ Zeile 2:   8px
Foto ↔ Text:         12px (wenn Foto vorhanden)
Border-Radius Foto:  5px
```

---

## Verbote (KRITISCH)

- ❌ **KEIN** Foto-Platzhalter / Initialen-Circle wenn `photoSrc` nicht gesetzt
- ❌ **KEINE** Überschrift ("Gründer", "Aus der Praxis")
- ❌ **KEIN** Karten-Container mit eigenem Background + Border
- ❌ **NICHT** "Entwickelt von einem Beschichtungsunternehmer"
- ❌ **NICHT** "Fertigungsingenieur" (geschützter Titel)
- ❌ **NICHT** "Praxiserfahrung in der Beschichtung"

---

## Technische Details

- **React**: Functional Component mit TypeScript
- **Next.js**: Kompatibel mit Next.js 14+ (App Router & Pages Router)
- **CSS**: CSS Modules mit CSS Custom Properties
- **Semantik**: Verwendet `<address>` HTML-Element
- **Accessibility**: `aria-hidden="true"` für dekorative Separator-Zeichen

---

## Changelog

### v1.0.0 (2024-02-14)
- ✨ Initial Release
- Signatur-Stil ohne Foto-Platzhalter
- Exakte Design System Compliance (Tawny Furnace)
- Optional: 40×40px Foto-Slot
