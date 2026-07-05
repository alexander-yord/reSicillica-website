# ReSilica

ReSilica is a polished, single-page landing site for an early-stage Bulgarian clean-tech initiative focused on photovoltaic panel recycling and future recovery of critical materials.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local Vite dev server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal.

## Build for production

```bash
npm run build
```

## GitHub Pages deployment

1. Update the GitHub Pages base path in [vite.config.ts](vite.config.ts) to `/your-repo-name/` if you are deploying from a GitHub repository with a different name.
2. Build the site:
   ```bash
   npm run build
   ```
3. Publish the contents of the generated `dist/` folder to the `gh-pages` branch, or connect GitHub Pages to the `dist/` output from a deployment workflow.

A simple workflow is to:

```bash
npm run build
npx gh-pages -d dist
```

If you prefer GitHub Actions, keep the build output in the `dist/` folder and deploy that folder.

## Replace the founder image

The founder portrait is currently served from [public/founder-alex.jpeg](public/founder-alex.jpeg). Replace it with a real image later by updating that file or swapping the image path in [src/components/Team.tsx](src/components/Team.tsx).

## Brand configuration

The central brand settings live in [src/brand.ts](src/brand.ts). Change the company name, email, or tagline there to update the site in one place.
