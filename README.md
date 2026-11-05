# AI Career Atlas

A research-backed field guide to emerging AI careers, built with **VitePress**.

🌐 **Website: [AI Career Atlas](https://seafelsayed.github.io/ai-career-atlas/)**

Repository: [seafelsayed/ai-career-atlas](https://github.com/seafelsayed/ai-career-atlas)

## What is inside

- Six role profiles: Forward Deployed Engineer, Applied AI Engineer, Applied AI Architect, AI Evaluation Engineer, AI Research Engineer, and AI Deployment Manager.
- A comparison guide, practical learning paths, and portfolio ideas.
- Employer sources, review dates, and clear distinctions between evidence and editorial advice.
- Local search, mobile navigation, and light/dark themes.

Research reviewed November 5, 2026. This is a curated guide, not a live job board or a forecast of hiring growth.

## Develop locally

Use Node.js 22 or newer.

```sh
npm ci
npm run docs:dev
```

```sh
npm run docs:build
npm run docs:preview
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever `main` changes. In repository **Settings → Pages**, select **GitHub Actions** as the source. The site base is `/ai-career-atlas/`.

The website URL is **https://seafelsayed.github.io/ai-career-atlas/**. A successful Pages deployment is required before this URL serves the site.

## Contributing

Edit Markdown in `docs/`. Include a primary source and review date for role claims, distinguish interpretation from employer statements, and run `npm run docs:build` before submitting changes. See [research methodology](docs/research.md).
