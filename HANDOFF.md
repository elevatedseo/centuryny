# Century NY Astro rebuild — developer handoff

This is the clean Astro rebuild of Century NY.

## Requirements

- Node.js 22.12 or newer
- npm

## Setup

1. Extract the ZIP.
2. Open PowerShell or Terminal inside the extracted folder.
3. Run:

```sh
npm install
npm run check
npm run build
npm run dev
```

4. Open <http://localhost:4321/>.

On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm`.

## Security and asset provenance

The previous WordPress installation was compromised. Do not reintroduce WordPress PHP, plugins, themes, scripts, database exports, or unreviewed files.

Website-ready assets are in `public/`. Additional reviewed media is under `incoming-media/reviewed/`. Raw media is intentionally excluded from this handoff. Reference screenshots were not present when this package was created.

This static Astro project has no database. Page content and structured records live in `src/`.

## Current verification

Run `npm run check` and `npm run build` after extracting. The configured production URL is <https://centuryny.com/> and routes use trailing slashes.
