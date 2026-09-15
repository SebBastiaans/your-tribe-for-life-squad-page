# FDND Code Conventies

Bron: [docs.fdnd.nl/conventies.html](https://docs.fdnd.nl/conventies.html)

Deze conventies zijn bedoeld om als checklist/context te gebruiken bij het reviewen of schrijven van code (bijv. met Claude Code) in FDND-projecten.

---

## Algemeen — Naming

- Gebruik betekenisvolle namen voor classes, ID's, variabelen en functienamen.
- Gebruik **kebab-case** voor classes, CSS-variabelen en ID's in HTML/CSS.
- Gebruik **camelCase** in JavaScript voor variabelen en functies.
- Gebruik altijd Engels voor namen in code.
- Wees consistent in naamgeving.
- Schrijf namen van classes, ID's, functies en variabelen voluit uit — minifiers regelen afkortingen, dat hoef je zelf niet te doen.

**CSS**

✅ Goed:
```css
.header-trigger {
  --primary-color: hotpink;
}
```

❌ Fout:
```css
.btn-1 {
  --color-1: hotpink;
  --kleur-2: hotpink;
}
```

**HTML**

✅ Goed:
```html
<form id="contact-form" class="contact-form"></form>
```

❌ Fout:
```html
<form id="contactForm" class="myForm"></form>
```

❌ Inconsistent (mix van `.button-primary` en `.button--secondary`):
```html
<button class="button-primary">Submit</button>
<button class="button--secondary">Submit</button>
```

**JavaScript**

✅ Goed:
```javascript
const initHeader = () => {}
```

❌ Fout:
```javascript
MyFunction() {}
var initHeader = () => {}
```

---

## HTML Conventies

- Gebruik gestructureerde en [semantische HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).
- Vermijd onnodig diepe nesting; voorkom te veel geneste `section`-elementen en bijbehorende heading-diepte. Link liever naar een aparte pagina voor meer info dan alles op één pagina te proppen.
- Maak gebruik van ingebouwde HTML-features (bijv. formuliervalidatie via form-elementen zelf, i.p.v. zelf te bouwen).
- Gebruik 1 tab voor indentatie.
- Gebruik dubbele quotes voor attributen.

---

## CSS Conventies

### Algemeen

- 1 tab voor indentatie.
- Volg de HTML-volgorde in de CSS.
- Structureer code van generiek naar specifiek.
- Maak gebruik van **cascade** en **inheritance**; gebruik **utility classes** om herhaling te voorkomen (DRY-principe).
- Gebruik kebab-case voor class- en ID-namen.

### Robuuste font-face

Gebruik alleen `woff2` (eventueel aangevuld met `woff` voor oudere browsers) voor custom fonts.

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.woff2') format('woff2'),
       url('webfont.woff') format('woff');
}

body {
  font-family: 'MyWebFont', Fallback, sans-serif;
}
```

Bron: [Using font face in CSS (CSS-Tricks)](https://css-tricks.com/snippets/css/using-font-face-in-css/)

### CSS Nesting

Gebruik CSS nesting voor compactere code. Gebruik **PostCSS** om dit om te zetten naar platte CSS, omdat native CSS Nesting geen fallback-ondersteuning heeft.

### Pseudo-private custom properties

Gebruik pseudo-private custom properties voor modulaire, compacte code; combineer dit met CSS nesting voor nog compactere code.

```css
button {
    --_opacity: 1;
    --_brdr-color: var(--primary-neutral);
    --_bg-color: var(--primary-lightest);
    --_color: var(--primary-darkest);

    border: 3px solid var(--_brdr-color);
    background: var(--_bg-color);
    color: var(--_color);
    opacity: var(--_opacity);

    &:hover,
    &:focus-visible {
        --_brdr-color: var(--accent-darkest);
        --_bg-color: var(--accent-lightest);
        --_color: var(--accent-darkest);
    }
}
```

### Rijk, dynamisch kleurenpalet met custom properties

Definieer hue- en saturation-variaties via custom properties voor een rijker palet en betere visuele hiërarchie.

```css
/* Basis HSL-waarden */
--primary-h: 359;
--primary-s: 100%;

--secondary-h: 162;
--secondary-s: 100%;

--accent-h: 51;
--accent-s: 100%;

/* Lightness-variaties */
--darkest: 15%;
--dark: 30%;
--neutral: 50%;
--light: 70%;
--lightest: 90%;

/* Rood-variaties o.b.v. HSL-waarden */
--primary-darkest: hsl(var(--primary-h), var(--primary-s), var(--darkest));
--primary-dark: hsl(var(--primary-h), var(--primary-s), var(--dark));
--primary-neutral: hsl(var(--primary-h), var(--primary-s), var(--neutral));
--primary-light: hsl(var(--primary-h), var(--primary-s), var(--light));
--primary-lightest: hsl(var(--primary-h), var(--primary-s), var(--lightest));

/* Groen-variaties o.b.v. HSL-waarden */
--secondary-darkest: hsl(var(--secondary-h), var(--secondary-s), var(--darkest));
--secondary-dark: hsl(var(--secondary-h), var(--secondary-s), var(--dark));
--secondary-neutral: hsl(var(--secondary-h), var(--secondary-s), var(--neutral));
--secondary-light: hsl(var(--secondary-h), var(--secondary-s), var(--light));
--secondary-lightest: hsl(var(--secondary-h), var(--secondary-s), var(--lightest));

/* Goud-variaties o.b.v. HSL-waarden */
--accent-darkest: hsl(var(--accent-h), var(--accent-s), var(--darkest));
--accent-dark: hsl(var(--accent-h), var(--accent-s), var(--dark));
--accent-neutral: hsl(var(--accent-h), var(--accent-s), var(--neutral));
--accent-light: hsl(var(--accent-h), var(--accent-s), var(--light));
--accent-lightest: hsl(var(--accent-h), var(--accent-s), var(--lightest));
```

### The New Responsive

Moderne responsive design gaat verder dan viewport media queries: houd ook rekening met gebruikersvoorkeuren (dark mode), container queries (component past zich aan aan de parent) en nieuwe apparaattypen (foldables).

**Responsive naar de container**
Gebruik [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) voor apparaat-onafhankelijke breakpoints en component-based responsive styling.

**Responsive naar de gebruiker**
Gebruik [media queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/) voor styling op basis van gebruikersvoorkeuren (bijv. `prefers-color-scheme`).

Bronnen:
- [The new responsive: Web design in a component-driven world](https://web.dev/articles/new-responsive)
- [Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/)
- [Using Media Queries — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using)

---

## JavaScript Conventies

- 1 tab voor indentatie.
- Single quotes voor strings.
- Gebruik comments om ingewikkelde code toe te lichten.
- Geen puntkomma's aan het einde van regels.

### Voorkeursstructuur per scope

Maak gebruik van JavaScript **hoisting**:

```javascript
// 1. declareer alle variabelen voor deze scope

// 2. alle code-logica

// 3. function declarations
```

### Gebruik template literals i.p.v. string concatenation

Template literals gebruiken backticks (`` ` ``) i.p.v. gewone quotes, waardoor variabelen en expressies eenvoudig ingevoegd kunnen worden zonder concatenatie.

✅ Goed:
```javascript
const name = 'Bob'
const message = `Hello ${name}, welcome!`
```

❌ Fout:
```javascript
const name = 'Bob'
const message = 'Hello ' + name + ', welcome!'
```

Dynamische expressies:
```javascript
const user = 'Alice'
const items = 5

// Goed
const summary = `${user} has ${items} items in their cart.`
```

Bron: [Template literals — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Gebruik object destructuring

```javascript
// Fout
const name = person.name
const age = person.age

// Goed
const { name, age } = person
```

In templates:
```html
<!-- Fout -->
<h2>{person.name}</h2>
<p>{person.age}</p>

<!-- Goed -->
<h2>{name}</h2>
<p>{age}</p>
```

Bron: [Destructuring — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

### Wanneer const, let en var gebruiken

**Gebruik standaard `const`**

Gebruik `const` voor variabelen die niet opnieuw toegewezen hoeven te worden — dit maakt code voorspelbaarder en voorkomt onbedoelde wijzigingen.

```javascript
const MAX_USERS = 100
const apiUrl = "https://example.com/api"

// Fout
var message = "Hello"

// Goed
const message = "Hello"
```

**Gebruik `let` alleen als herwaardering nodig is**

```javascript
// Fout
const count = 0
count = 1 // Error: Assignment to constant variable

// Goed
let count = 0
count = 1
```

**Vermijd `var`**

`var` heeft function scope en kan opnieuw gedeclareerd worden, wat onverwachte bugs geeft door hoisting. Vermijd tenzij noodzakelijk.

```javascript
// Fout
var name = "Alice"

// Goed
const name = "Alice"
```

**Let op**: gebruik `const` ook voor objecten en arrays waarvan de inhoud verandert — de referentie blijft constant, ook al veranderen de properties/elementen.

```javascript
const user = { name: "John" }
user.age = 25 // Mag

const numbers = [1, 2, 3]
numbers.push(4) // Mag
```

---

## SvelteKit Conventies

### Gebruik Svelte 5-syntax

Gebruik in Svelte 5-projecten de Svelte 5-syntax (runes mode).

Bron: [Svelte 4 & Svelte 5 compared](https://component-party.dev/?f=svelte4-svelte5)

### Data

- Haal data uitsluitend op via `+page.server.js`-bestanden.
- Manipuleer data waar mogelijk op de server (in `+page.server.js`).

### Routes & componentstructuur

Een `+page.svelte`-route/paginacomponent wordt onderverdeeld in componenten; de belangrijkste taak van de page is data ophalen en doorgeven aan componenten.

```svelte
<script>
  import { HeroSlider, SlideCards, Agenda, HomeCampus, HomePartners } from '$lib/index.js'

  let { data } = $props()

  const { hero, slides, campus, agenda, partners } = data
</script>

<HeroSlider {hero} />
<SlideCards {slides} />
<HomeCampus {campus} />
<Agenda {agenda} />
<HomePartners {partners} />
```

### Componenten

- Gebruik object destructuring voor schone template-code.
- Geef alleen de noodzakelijke data door aan componenten.
- Voorkom te diepe component-nesting (maximaal 3 niveaus).
- Gebruik betekenisvolle namen voor componenten/functies/variabelen/CSS-classes.
- Structureer `+page.svelte`-componenten logisch i.p.v. losse HTML:

```svelte
<script>
  import Semesters from "$lib/organisms/Semesters.svelte"
  import Program from "$lib/molecules/Program.svelte"

  let { data } = $props()
  const { title, subtitle, content, semesters } = data
</script>

<Program {title} {content} />
<Semesters {semesters} {subtitle} />
```

### Vermijd `:global` in CSS

Beperk het gebruik van `:global` in CSS; zet stylingregels liever in globale stylesheets en/of gebruik pseudo-private custom properties waar nodig.

---

## Workflow Conventies

### The Girl / Boy Scout Rule

Verbeter code met elke wijziging, in plaats van te wachten op aparte opschoonmomenten.

Bron: [The Girl / Boy Scout Rule in Software Development (Medium)](https://medium.com)

### Schrijf een goede README.md

Goede documentatie maakt het verschil: het trekt gebruikers aan en maakt het project begrijpelijker.

Bron: [How to write a perfect readme for your GitHub project (Dev.to)](https://dev.to)

### Branching-strategie

FDND gebruikt [Git Flow](https://www.gitkraken.com/learn/git/git-flow#the-git-flow-workflow) als branching-methodiek.

**Branches archiveren**

Archiveer oude code met GitHub tags, zodat je later nog kunt terugzetten:

1. Tag de branch: `git tag archive/sprintjuly2010 sprintjuly2010`
2. Verwijder de lokale branch: `git branch -d sprintjuly2010`
3. Push de verwijdering: `git push origin :sprintjuly2010`
4. Push de tags: `git push --tags`

**Terugzetten:** `git checkout -b sprintjuly2010 archive/sprintjuly2010`

### Commits

Structuur: `<type>[optionele scope]: <omschrijving> [optionele gitmoji] <issue-nummer>`

**Commit-strategie**

Commit regelmatig zodra code het waard is om te bewaren; tijdelijke "wip"-commits (work in progress) zijn toegestaan.

Bron: [Version Control Tips (Programming Duck)](https://programmingduck.com)

**Conventional Commits**

FDND gebruikt de [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)-specificatie, afgestemd op semantic versioning.

Toegestane commit-types:

- `build:` wijzigingen aan het buildsysteem of externe dependencies
- `chore:` wijzigingen aan buildproces of hulptools/libraries
- `ci:` CI-configuratiebestanden en scripts (GitHub Actions, netlify.toml)
- `docs:` documentatiewijzigingen (README.md, Handover.md, Figma-bestanden, design rationale)
- `feat:` nieuwe feature
- `fix:` bugfix, style- of layout-correctie
- `perf:` performance-verbetering
- `refactor:` herstructurering van code zonder functionele wijziging, voor betere leesbaarheid
- `style:` leesbaarheidswijzigingen zonder functionele impact (formatting, tabs, newlines)
- `test:` toevoegen of corrigeren van tests

**Verwijs naar issues in commits**

Voeg het bijbehorende `#issue-nummer` toe aan commit messages voor traceerbaarheid.

**Gitmoji**

Optioneel: gebruik [gitmoji](https://gitmoji.dev/) om conventional commits visueel te verrijken.

Voorbeeldcommits:

```
refactor: Deduplicated marker popup creation to helper function 🧑‍💻
style: Formatting toegepast in src bestanden #91
feat: animals uit de database worden nu opgehaald en weergegeven in de dropdown #213
fix: header font maat veranderd 🐛 #394
```

Bronnen:
- [Automating Versioning and Releases Using Semantic Release (Medium)](https://medium.com)
- [Gitmoji](https://gitmoji.dev/)
- [Mastering commit messages (Dev.to)](https://dev.to)

### Semantic Versioning (work in progress)

- **MAJOR**: bij breaking changes
- **MINOR**: bij nieuwe features/functionaliteit
- **PATCH**: bij bugfixes

### Pull Requests

FDND gebruikt een [pull request template](https://github.com/fdnd-agency/.github/blob/main/pull_request_template.md), die automatisch verschijnt bij het aanmaken van een PR.

Vereisten:
- Schrijf kleine PR's.
- Review je eigen PR eerst.
- Geef context en toelichting.

Bron: [Helping others review your changes (GitHub docs)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/helping-others-review-your-changes)

### Change Log

`CHANGELOG.md` documenteert dagelijkse, opvallende wijzigingen zoals nieuwe features, bugfixes en updates, zodat de voortgang van het project te volgen is.

Voorbeeldformat:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
- Feature description

### Changed
- Modification description

### Fixed
- Bug fix description

## [1.2.0] - 2024-01-31
### Added
- New API endpoint for user authentication.
- Dark mode support in UI.

### Changed
- Updated dependencies to the latest versions.

### Fixed
- Fixed broken navigation on mobile.

## [1.1.0] - 2023-12-15
### Added
- Introduced a search bar feature.
```

---

## Design Conventies (context / achtergrond)

### Typografie

**Leesbare tekst**

- Minimaal `16px` font-size.
- Minimaal `1.5` line-height.
- 10-12 woorden / 55-75 tekens per regel.
- Minimaal 2× font-size ruimte na paragrafen.
- `letter-spacing` > 0,12× font-size.
- `word-spacing` > 0,16× font-size.

Bron: [WCAG Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

**Tekstuitlijning**

- Links uitlijnen in de meeste gevallen.
- Rechts uitlijnen voor balans/compositie.
- Center-uitlijning zelden, vooral voor headings.
- Gebruik `text-wrap: balance;` spaarzaam voor gebalanceerde headers.

Bron: [Types of web alignments](https://typographyprinciples.obys.agency/alignments/)

**Modulaire schaal voor typografie**

Gebruik een modulaire schaal voor font-sizes voor een gebalanceerde typografie op de site.

Bron: [More Meaningful Typography](https://alistapart.com/article/more-meaningful-typography/)

**Betere dark mode**

Gebruik een iets hogere `line-height` voor tekst in dark mode, vanwege de hogere lichtintensiteit.

Bron: [Dark mode typography](https://designshack.net/articles/typography/dark-mode-typography/)

### UX design best-practices

"Laws of UX" is een verzameling best practices die designers gebruiken bij het bouwen van interfaces.

Bron: [Laws of UX](https://lawsofux.com/)

### Design-strategieën

**Design en development werken samen aan design systems**

Designers en developers moeten nauw samenwerken bij het maken en benoemen van design tokens. (Bron: Brad Frost)

**Verken in Figma, valideer in de browser**

Ontwerp niet elke component-variant in Figma; verken de belangrijkste breakpoints daar en werk verder in de browser met responsive CSS-features (`:has()`, container queries, `clamp()`, `auto-fit`, `anchor-position`, etc.) om tussenliggende breakpoints te valideren. (Bron: Ahmed Shadeed)

### Figma

**Variables in Figma**

Figma-variabelen zijn van het type color, number, string of boolean. Stem deze af op CSS root-properties (`:root` in `global.css`), zoals spacing, page-padding en border-radius, om code en design op elkaar te laten aansluiten. Wijzigingen in beide werken automatisch door.

- *Variabele aanmaken*: instellingen staan rechts in het paneel; onderaan kies je het type (color, number, string, boolean).
- *Collections*: maak meerdere collections aan voor de organisatie.
- *Scope*: variabelen kun je scopen zodat ze alleen bij relevante properties verschijnen (bijv. een border-radius-variabele alleen bij corner radius).
- *Variabelen toepassen*: klik op het property-dropdown-menu en klik op het hexagon-icoon om variabelen toe te passen (weergegeven in collection-volgorde). ⚠️ Properties met een toegewezen variabele hebben een donkerdere achtergrond.

**Styles**

Figma-styles gelden voor tekst, kleur, effect of layout grid en zijn zichtbaar in het rechterpaneel. Verschil met variables: styles bevatten alle property-attributen, variables slechts één waarde. 💡 Tip: voeg variabelen toe aan styles (bijv. font-size als number- of font-family als string-variabele in text styles), passend bij het gebruik in `global.css`.

**Aparte pagina's voor content, componenten, inspiratie**

- *Content*: website-design en wireflow-plaatsing met componenten uit de assets library.
- *Componenten*: alle website-componenten, gestructureerd volgens **Atomic Design**-principes met duidelijke sectiekoppen, zodat Figma-design en code op elkaar aansluiten.
- *Inspiratie*: brainstormideeën, coole websites en moodboards; wireframe-schetsen gelabeld per iteratie met titel en/of datum.

---

*Gebaseerd op [docs.fdnd.nl/conventies.html](https://docs.fdnd.nl/conventies.html) — FDND, gepubliceerd onder GNU General Public License. Zie de bron voor de meest actuele versie.*
