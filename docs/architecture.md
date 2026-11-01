# Architecture and contribution conventions

## Responsibility boundaries

| Location | Responsibility |
| --- | --- |
| `src/App.js` | Compose the background, router, and navigation |
| `src/routing/AppRoutes.js` | Map URLs to pages, including existing aliases and development routes |
| `src/components/RouteTransition.js` | Animate changes between routed pages |
| `src/pages/` | Compose page sections and read route parameters |
| `src/components/project/` | Render a project's hero, narrative, metadata, and resources |
| `src/components/navigation/` | Render desktop/mobile navigation using shared links and logo |
| `src/hooks/` | Own stateful behavior and browser effects |
| `src/utils/portfolioSettings.js` | Read and normalize persisted settings |
| `src/data/projects/` | Own one project's content per file, plus an authoring template |
| `src/data/projects.js` | Register projects and expose lookup/list exports |
| `src/data/projectModel.js` | Supply defaults for optional project fields |
| `src/data/projectSelectors.js` | Select and order completed showcase entries |
| `src/styles/` | Component and page styling; global tokens remain in `src/index.css` |
| `src/stories/` | Storybook examples, outside the application route tree |

Keep each file focused on one responsibility, or two closely related ones. A small helper beside its only consumer is appropriate; function count alone is not a useful reason to create another module. Extract a component when a section has its own responsibility or is reused, and extract a hook when lifecycle/state logic obscures presentation.

## Shared behavior

Use `ResourceLink` for links to application paths or external resources. It keeps application paths in React Router and gives external links consistent tab/security attributes. `ProjectResourceLinks` renders project resource collections with the same policy at every placement. `NavbarButton` handles primary navigation's active state and button styling.

`usePortfolioSettings` owns preference state and persistence. `useAppearanceEffects` applies the body data attributes consumed by CSS and selects the existing browser-specific effect mode. `useNavigationState` coordinates menu animation, settings visibility, and dismissal for both responsive layouts. The desktop/mobile settings panels remain mounted according to the existing responsive CSS contract; only the visible panel takes focus.

## Content rules

Each project has one canonical object. Do not reintroduce slug-based override objects in a second file. The registry adds optional defaults without overwriting authored fields. Keep draft visibility separate from the status message shown on a detail page. Missing artifacts remain explicitly labeled placeholders.

## Making changes

1. Put content in data files, interaction/lifecycle behavior in hooks, and presentation in components.
2. Reuse an existing component or policy before introducing another abstraction. Avoid generic frameworks for a single use case.
3. Preserve route paths, CSS hooks, accessible labels, and preference storage keys during structural refactors.
4. Document non-obvious constraints and public data fields; avoid comments that merely restate JSX.
5. Add regression tests for changes to selection, routing, persistence, and interaction behavior. Run the tests and production build before shipping.

Unused legacy card, carousel, intro, social-link, and test-image/text modules were removed after checking their references. Existing reachable development routes and Storybook examples remain available.
