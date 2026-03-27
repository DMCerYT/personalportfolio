# Personal Portfolio

This portfolio is a React app with data-driven project entries and bundled local assets.

## Local development

- Install dependencies with `npm install`
- Start the dev server with `npm start`
- Create a production build with `npm run build`
- Run the test suite with `npm test`

## Adding a new project

Project content lives in [src/data/projects.js](/Users/dmcer/webdev/portfolio/personalportfolio/src/data/projects.js). Duplicate the `newProjectTemplate` shape, fill in the content, and add the new object to the `projects` array.

If you need a new image, import it through [src/data/siteAssets.js](/Users/dmcer/webdev/portfolio/personalportfolio/src/data/siteAssets.js) first. That keeps the asset inside the React build pipeline so it gets bundled correctly for deployment.
