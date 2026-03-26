# AppSphere

AppSphere is a responsive app marketplace built with React and Vite. It lets users browse productivity-focused apps, search the full catalog, view app details with rating analytics, install apps into localStorage, and manage installed apps from a dedicated installation page.

## Technologies

- React
- React Router
- Vite
- Recharts
- Font Awesome
- CSS
- LocalStorage

## Features

- Responsive home page with hero, statistics, and trending apps
- Apps page with live search, loading state, and empty state
- App details page with install flow, chart, and not-found handling
- Installation page with uninstall flow and download sorting
- Custom 404 page
- Route reload support for SPA deployment via `_redirects`

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deployment Note

For Netlify-style SPA routing, the project includes `public/_redirects` with:

```text
/* /index.html 200
```
