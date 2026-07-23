# Ashil Kumar — Angular Developer Portfolio

Premium dark-first portfolio for **Ashil Kumar**, Angular & Frontend Developer.

## Stack

- Angular 21 (standalone components)
- TypeScript
- Signals
- SCSS architecture
- RxJS (scroll tracking)
- Angular Router

## Run locally

```bash
cd ashil-portfolio
npm install
npm start
```

Open `http://localhost:4200/`.

## Build

```bash
npm run build
```

Output: `dist/ashil-portfolio/`

## Customize

Update personal links and content in:

- `src/app/data/portfolio.data.ts` — profile, skills, experience, projects, socials
- `public/Ashil_Kumar_Resume.pdf` — add your resume PDF (see `public/RESUME_README.txt`)

## Features

- Sticky navbar with scroll blur + active section indicator
- Dark / light theme (persisted in `localStorage`)
- Hero with Angular-focused visual
- Skills, experience timeline, filtered projects
- “Why Angular?” architecture visualization
- Process, value props, validated contact form
- Scroll-reveal animations with `prefers-reduced-motion` support
- SEO metadata + custom favicon
