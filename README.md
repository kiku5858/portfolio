# Kiran Kumari - Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev
```

## Build for deployment
```bash
npm run build
```
Upload the `dist` folder to Netlify (drag and drop), or connect the GitHub repo
with build command `npm run build` and publish directory `dist`.

## Edit your content
All text lives in `src/data.js`: your details, skills, projects, journey.
Add your live and GitHub links for each project there. Colors are in `src/index.css` (`:root`).

## Change your photo
Replace `src/assets/profile.jpg` with a new square photo (keep the same file name).

## Project structure
```
src/
  data.js        all content: profile, skills, projects, certificates, journey
  index.css      theme colors (:root) and all styles
  assets/        profile photo
  hooks/         useTheme (light/dark), useTypewriter (hero demo)
  components/    one file per section, plus Reveal (scroll animation)
```
