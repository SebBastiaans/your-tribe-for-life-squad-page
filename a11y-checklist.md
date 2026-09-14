# Accessibility checklist

Gebaseerd op [The A11Y Project checklist](https://www.a11yproject.com/checklist/). Gebruik dit bestand om code/componenten te laten reviewen, bijv.: *"Review src/components/Form.tsx tegen a11y-checklist.md, geef per punt pass/fail met uitleg."*

## Content

- [ ] Gebruik heldere taal, vermijd figuurlijk taalgebruik en complexe metaforen — WCAG 3.1.5 Reading Level
- [ ] `button`, `a` en `label` elementen hebben unieke, beschrijvende inhoud — WCAG 1.3.1 Info and Relationships
- [ ] Links-uitgelijnde tekst voor LTR-talen, rechts-uitgelijnd voor RTL-talen — WCAG 1.4.8 Visual Presentation

## Global code

- [ ] HTML is valide — WCAG 4.1.1 Parsing
- [ ] `lang`-attribuut op het `html`-element — WCAG 3.1.1 Language of Page
- [ ] Unieke `title` per pagina/view — WCAG 2.4.2 Page Titled
- [ ] Viewport-zoom is niet uitgeschakeld — WCAG 1.4.4 Resize text
- [ ] Landmark-elementen voor belangrijke contentregio's — WCAG 4.1.2 Name, Role, Value
- [ ] Lineaire content-flow (DOM-volgorde = visuele volgorde) — WCAG 2.4.3 Focus Order
- [ ] Geen `autofocus`-attribuut gebruikt — WCAG 2.4.3 Focus Order
- [ ] Sessie-timeouts kunnen worden verlengd — WCAG 2.2.1 Timing Adjustable
- [ ] Geen `title`-attribuut tooltips — WCAG 4.1.2 Name, Role, Value

## Keyboard

- [ ] Zichtbare focus-stijl voor interactieve elementen bij toetsenbordnavigatie — WCAG 2.4.7 Focus Visible
- [ ] Toetsenbord-focusvolgorde komt overeen met visuele layout — WCAG 1.3.2 Meaningful Sequence
- [ ] Geen onzichtbare focusbare elementen — WCAG 2.4.3 Focus Order

## Images

- [ ] Alle `img`-elementen hebben een `alt`-attribuut — WCAG 1.1.1 Non-text Content
- [ ] Decoratieve afbeeldingen gebruiken lege `alt=""` — WCAG 1.1.1 Non-text Content
- [ ] Tekstalternatief voor complexe afbeeldingen (grafieken, kaarten) — WCAG 1.1.1 Non-text Content
- [ ] Alt-tekst bevat de tekst die in de afbeelding staat (indien relevant) — WCAG 1.1.1 Non-text Content

## Headings

- [ ] Heading-elementen gebruikt om content te introduceren — WCAG 2.4.6 Headings or Labels
- [ ] Slechts één `h1` per pagina/view — WCAG 2.4.6 Headings or Labels
- [ ] Headings in logische volgorde — WCAG 2.4.6 Headings or Labels
- [ ] Geen heading-niveaus overgeslagen — WCAG 2.4.6 Headings or Labels

## Lists

- [ ] Lijstelementen (`ol`, `ul`, `dl`) gebruikt voor lijst-content — WCAG 1.3.1 Info and Relationships

## Controls

- [ ] `a`-element gebruikt voor links — WCAG 1.3.1 Info and Relationships
- [ ] Links zijn herkenbaar als links (niet alleen kleur) — WCAG 1.4.1 Use of Color
- [ ] Controls hebben een `:focus`-state — WCAG 2.4.7 Focus Visible
- [ ] `button`-element gebruikt voor knoppen — WCAG 1.3.1 Info and Relationships
- [ ] Skip-link aanwezig en zichtbaar bij focus — WCAG 2.4.1 Bypass Blocks
- [ ] Links die in nieuw tabblad/venster openen zijn dit aangegeven — G201

## Tables

- [ ] `table`-element gebruikt voor tabulaire data — WCAG 1.3.1 Info and Relationships
- [ ] `th`-elementen met juiste `scope`-attributen voor tabelkoppen — WCAG 4.1.1 Parsing
- [ ] `caption`-element voor titel van de tabel — WCAG 2.4.6 Headings or Labels

## Forms

- [ ] Alle inputs gekoppeld aan een `label`-element — WCAG 3.2.2 On Input
- [ ] `fieldset`/`legend` gebruikt waar toepasselijk — WCAG 1.3.1 Info and Relationships
- [ ] `autocomplete` gebruikt waar toepasselijk — WCAG 1.3.5 Identify Input Purpose
- [ ] Forminput-fouten worden na submit als lijst boven het formulier getoond — WCAG 3.3.1 Error Identification
- [ ] Foutmelding is gekoppeld aan bijbehorende input — WCAG 3.3.1 Error Identification
- [ ] Error/warning/success states niet alleen met kleur gecommuniceerd — WCAG 1.4.1 Use of Color

## Media

- [ ] Media speelt niet automatisch af — WCAG 1.4.2 Audio Control
- [ ] Mediacontrols gebruiken passende markup — WCAG 1.3.1 Info and Relationships
- [ ] Alle media is te pauzeren — WCAG 2.1.1 Keyboard

## Video

- [ ] Ondertiteling (captions) aanwezig — WCAG 1.2.2 Captions
- [ ] Geen triggers voor epileptische aanvallen — WCAG 2.3.1 Three Flashes or Below Threshold

## Audio

- [ ] Transcript beschikbaar — WCAG 1.1.1 Non-text Content

## Appearance

- [ ] Content gecontroleerd in speciale browsing modes (bijv. Windows High Contrast) — WCAG 1.4.1 Use of Color
- [ ] Tekst blijft bruikbaar bij 200% zoom — WCAG 1.4.4 Resize text
- [ ] Voldoende nabijheid tussen gerelateerde content — WCAG 1.3.3 Sensory Characteristics
- [ ] Kleur is niet de enige manier om informatie over te brengen — WCAG 1.4.1 Use of Color
- [ ] Instructies zijn niet alleen visueel of alleen auditief — WCAG 1.3.3 Sensory Characteristics
- [ ] Eenvoudige, consistente layout — WCAG 1.4.10 Reflow

## Animation

- [ ] Animaties zijn subtiel en flitsen niet te veel — WCAG 2.3.1 Three Flashes or Below Threshold
- [ ] Mechanisme om achtergrondvideo te pauzeren — WCAG 2.2.2 Pause, Stop, Hide
- [ ] Animatie respecteert `prefers-reduced-motion` — WCAG 2.3.3 Animation from Interactions

## Color contrast

- [ ] Contrast normale tekst gecontroleerd — WCAG 1.4.3 Contrast
- [ ] Contrast grote tekst gecontroleerd — WCAG 1.4.3 Contrast
- [ ] Contrast van iconen gecontroleerd — WCAG 1.4.11 Non-text Contrast
- [ ] Contrast van randen bij input-elementen gecontroleerd — WCAG 1.4.11 Non-text Contrast
- [ ] Tekst over afbeeldingen/video gecontroleerd — WCAG 1.4.3 Contrast
- [ ] Custom `::selection`-kleuren gecontroleerd — WCAG 1.4.3 Contrast

## Mobile and touch

- [ ] Site werkt in elke oriëntatie (portrait/landscape) — WCAG 1.3.4 Orientation
- [ ] Geen horizontale scroll — WCAG 1.4.10 Reflow
- [ ] Icoon-knoppen/links zijn makkelijk te activeren (voldoende target size) — WCAG 2.5.5 Target Size
- [ ] Voldoende ruimte tussen interactieve items — WCAG 2.4.1 Bypass Blocks

---

Bron: [a11yproject.com/checklist](https://www.a11yproject.com/checklist/) — bij twijfel over een item, klik door naar de bijbehorende WCAG success criterion voor de volledige toelichting.
