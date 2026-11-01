# Personal Portfolio

A React portfolio with data-driven project pages, CSS Modules, and persistent appearance preferences.

## Development

```sh
npm ci
npm start
```

The development server defaults to http://localhost:3000.

```sh
CI=true npm test -- --watchAll=false
npm run build
npm run storybook
```

Tests cover project content/selection, case-study rendering, navigation state, settings persistence, and shared link behavior. `npm run build` creates the deployable `build/` directory. Storybook provides isolated component examples; its starter stories are separate from application routes.

## Editing content

- [Add or edit projects](docs/project-authoring.md)
- [Complete case-study evidence](docs/design-case-studies.md)
- [Architecture and contribution conventions](docs/architecture.md)
- [Settings implementation notes](docs/settings-panel.md)

Project content lives in `src/data/projects/<slug>.js`. Register new entries in `src/data/projects.js`. Each entry supplies both its card and detail page: there is no separate case-study override file.

Homepage copy, experience, and skills live in `src/data/homeContent.js`. Contact platforms live in `src/data/socialLinks.js`. Primary navigation labels and destinations live in `src/data/navigation.js`.
