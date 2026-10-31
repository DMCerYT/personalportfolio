# Adding and editing projects

## Add a project

1. Save the cover and screenshots in `src/assets/project-assets/playpeek/`.
2. Import them in `src/data/siteAssets.js` and include their names in the exported `siteAssets` object.
3. Create `src/data/projects/playpeek.js`. Copy the object from `projectTemplate.js` in the same folder, or start with this minimal entry:

```js
import { siteAssets } from '../siteAssets';

const playPeek = {
  slug: 'playpeek',
  title: 'PlayPeek',
  summary: 'Describe the product and the problem it addresses.',
  image: siteAssets.playPeekCover, // Register this asset first.
  imageAlt: 'Describe the application preview',
  featured: false,
  isUnderConstruction: false,
  skills: ['Your actual tools and disciplines'],
  process: ['Describe your contribution and a key decision.'],
  outcomes: ['Describe a concrete deliverable or supported finding.'],
  links: [],
};

export default playPeek;
```

4. Register the object in `src/data/projects.js`:

```js
import playPeek from './projects/playpeek';

// Include it in the existing array; keep the other entries.
export const projects = [/* existing entries */, playPeek].map(createProject);
```

The project now appears at `/projects/playpeek`; no new route or page component is required. Repeat with a unique slug for a block-based programming project.

## Fields and display behavior

| Field | Behavior |
| --- | --- |
| `slug` | Unique lowercase, hyphenated URL identifier; changing it changes the public URL |
| `title`, `summary`, `image`, `imageAlt` | Shared card and detail-page introduction |
| `discipline` | Optional discipline label |
| `featured` | Includes a completed project on the homepage |
| `isUnderConstruction` | Hides a draft from listings; its direct URL remains accessible |
| `isPageUnderConstruction` | Shows a status message on the detail page; does not hide the listing |
| `skills`, `process`, `outcomes` | Arrays used for skills, process, and deliverables |
| `links` | Array of `{ label, href }` objects; use actual destinations or an empty array |
| `details` | Expandable narrative sections, each with `title`, `summary`, `paragraphs`, `images`, and optional `isVisible: false` |

Each details section displays up to three images. Each image uses `{ src, alt, caption }`. Optional arrays default to empty arrays through `createProject`.

## Full case-study layout

Add these fields to the same project object to enable the structured narrative:

- `problem`: the user problem; a nonempty value enables the narrative layout.
- `contribution`: your responsibilities versus the team's work.
- `decision`: a single paragraph string, or an ordered array of paragraph strings and image blocks (see below).
- `evidence`: what you built, observed, or evaluated; distinguish findings from assumptions.
- `nextStep`: a proposed improvement or future evaluation.
- `artifacts`: an array of `{ title, src, alt, caption }` objects.

The existing `process` array becomes the narrative's ordered research/process list. An artifact without `src` displays a clearly labeled placeholder. Add real screenshots and explanatory captions before treating a study as finished.

## Multiple decision paragraphs and screenshots

Use an array for `decision`. Each string renders as a separate, always-visible paragraph in the same decisions section. Screenshots and supporting evidence go in `artifacts`, displayed after the paragraphs with titles and captions:

```js
decision: [
  'Explain the first decision and why you made it.',
  'Describe a constraint, the alternatives, and the tradeoff.',
  'Explain what the screenshots below demonstrate.',
],
artifacts: [
  {
    title: 'Implemented interface',
    src: '/images/projects/playpeek/interface.png',
    alt: 'Describe what is visible in the screenshot',
    caption: 'Explain how this screen demonstrates the decision.',
  },
  {
    title: 'Before and after',
    src: '/images/projects/playpeek/comparison.png',
    alt: 'Original and revised interfaces shown side by side',
    caption: 'Describe what changed and the evidence behind the change.',
  },
],
```

Save these example images at `public/images/projects/playpeek/interface.png` and `public/images/projects/playpeek/comparison.png` first. Public image URLs start with `/images/`, not `/public/images/`. Alternatively, import bundled images through `siteAssets.js` and use their `siteAssets` values as `src`.

Existing string values still work. The decisions section has no three-image limit; that limit applies only to expandable `details` sections. Use captions to connect each artifact to a decision or finding. This change applies to `decision`; the other narrative fields still accept single strings.

### Place graphics between paragraphs

Mix paragraph strings with image objects in the same `decision` array. The renderer preserves their order:

```js
decision: [
  'This is the first paragraph.',
  {
    type: 'image',
    title: 'First decision',
    src: '/images/projects/playpeek/first.png',
    alt: 'Describe the first graphic',
    caption: 'Explain how this graphic supports the first paragraph.',
  },
  'This is the second paragraph.',
  'This is the third paragraph.',
  {
    type: 'image',
    title: 'Third decision',
    src: '/images/projects/playpeek/third.png',
    alt: 'Describe the third graphic',
    caption: 'Explain the evidence behind the third paragraph.',
  },
],
artifacts: [],
```

Save the example graphics at `public/images/projects/playpeek/first.png` and `public/images/projects/playpeek/third.png`, or use registered `siteAssets` values for bundled images. Image blocks use `type: 'image'`, `src`, and descriptive `alt` text, plus optional `title` and `caption`. Without `src`, the block shows a labeled placeholder; provide a title for that placeholder.

Use `artifacts` only for an additional gallery at the end. When moving an existing artifact inline, remove it from `artifacts` to avoid displaying it twice. Existing paragraph-only decision arrays still render normally.

## Modify or reorder projects

Edit `src/data/projects/<slug>.js` for all of that project's content. The previous `caseStudies.js` override layer has been consolidated into these files, so editing a summary no longer silently loses to another file.

Projects in `SHOWCASE_ORDER` in `src/data/projectSelectors.js` appear first in that order. New slugs follow them in registry order. Add a slug to that list only when you want to curate its position. Featured projects follow the same ordering.

To remove a project completely, remove its registry import and array entry. Setting `isUnderConstruction: true` only removes it from listings.

## Verify

Run `npm start`, then inspect `/projects`, the project's URL, and the homepage if featured. Check images, links, and mobile layout. Run `CI=true npm test -- --watchAll=false` and `npm run build` before publishing. The catalog tests check unique slugs, renderable collections, and required narrative fields.
