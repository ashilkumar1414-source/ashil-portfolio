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

## Deploy (Vercel)

### One-time setup

```bash
# 1. Log in to GitHub CLI
gh auth login

# 2. Create repo + push
gh repo create ashil-portfolio --public --source=. --remote=origin --push

# 3. Log in to Vercel + deploy
npx vercel login
npx vercel --prod
```

### Later deploys

```bash
npm run deploy
```

Vercel settings (also in `vercel.json`):

- **Build command:** `npm run build`
- **Output directory:** `dist/ashil-portfolio/browser`

Or connect the GitHub repo in the [Vercel dashboard](https://vercel.com/new) for automatic deploys on push.
