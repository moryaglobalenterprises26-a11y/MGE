# Morya Global Enterprises — Website

A premium company profile website for an industrial engineering, manufacturing,
fabrication, maintenance and industrial products company. Built with React,
Tailwind CSS, Framer Motion and React Router.

## Getting started

```bash
npm install
npm run dev
```

This starts a local dev server (Vite) — visit the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Project structure

```
src/
  components/     Reusable UI components (Navbar, Footer, Card, Button, etc.)
  pages/          One file per route (Home, Products, About, Contact, ...)
  data/content.js Central content store — edit copy and data here
index.html        Document shell, fonts, base SEO meta tags
tailwind.config.js Brand color palette and typography scale
```

## Replacing placeholders

Every image in the site is a bordered placeholder component
(`src/components/ImagePlaceholder.jsx`) so the layout will not shift when you
add real photography. To swap in a real image, replace the placeholder
`<div>` with an `<img>` tag (or a background image) using the same wrapper
classes for sizing.

Brochure downloads and the enquiry form (`src/pages/Contact.jsx`) are wired
as front-end placeholders — connect them to your backend, a form service
(e.g. Formspree, a serverless function), or your CRM of choice.

## Brand tokens

Colors, fonts and type scale are defined in `tailwind.config.js` exactly per
the brand brief (deep greens + gold accents, Manrope display / Inter body).
Update values there to propagate changes site-wide.

## Notes on animation

Framer Motion is used throughout for scroll reveals, hover states, animated
counters and page transitions. Reduced-motion preferences are respected via
the CSS in `src/index.css`.
