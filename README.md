# Portfolio

I started creating a sample app with [esbuild](https://esbuild.github.io/) to familiarize myself with the API, but then decided to use this site for a simple portfolio.

### Getting Started

```
npm install
```

To run the dev server:

```
npm run dev
```

#### Todo/ideas:
- setup dev server - already separated build scripts, but need to setup Koa or something similar
- deploy
- Theme-switcher:
  - update to use icons
  - have detect browser theme
- Find a fun JS library to mess around with
- Use github API to pull repos, or at least some stats to show off in a charting library
- Think of good structure for different pages
- Setup favicon
- Add photo
- ditch react-icons and handle assets with esbuild
- setup custom router

Tech used:

- [esbuild](https://esbuild.github.io/)
- [React](https://reactjs.org/)
- [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Koa](https://koajs.com/#introduction) for a development server
