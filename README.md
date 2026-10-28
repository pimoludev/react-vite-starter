# Pimolu UI — React + Vite Starter

A minimal, independent React starter with Vite, TypeScript, Tailwind CSS and the published Pimolu UI packages. Pimolu UI is currently a **beta**; this starter pins its packages to `0.1.0-beta.3.1`.

## Getting started

Use Node.js 22.12+ (or 24+) and npm 10 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Edit `src/App.tsx` and save to see changes immediately.

## Pimolu components and themes

The starter imports `@pimolu/web-styles/styles.css` and wraps the app in `PimoluProvider` in `src/main.tsx`. Import components directly from the installed package:

```tsx
import { Button } from '@pimolu/react'

export function Example() {
  return <Button appearance="outline">Hello Pimolu</Button>
}
```

Browse the [component catalogue](https://pimolu.com/components) and [documentation](https://pimolu.com/docs) for component APIs. The provider uses the system light/dark preference by default. Set `defaultTheme="light"` or `defaultTheme="dark"` in `src/main.tsx` to choose a starting theme, and set `defaultStylePreset` to a supported preset such as `"monochrome"` or `"glass"`. See [theming](https://pimolu.com/docs/theming) for the complete API and token customization. Tailwind utilities are available alongside Pimolu's CSS variables.

## Checks and production

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

`npm run build` also checks TypeScript and writes a static site to `dist/`. Deploy that directory to any static host. For a deployment under a subpath, set Vite's `base` in `vite.config.ts` to the public path before building.

## Use this template

On GitHub, select **Use this template** → **Create a new repository**, then clone your new repository and run the installation commands above. The template repository must have GitHub's template setting enabled by its owner.

