# Shenbaga Balaji — Portfolio

Personal portfolio site for Shenbaga Balaji, Data Scientist / Analytics Engineer.

## Overview

A dark, data-viz inspired portfolio built with Next.js (App Router) and Tailwind CSS.
Sections: Hero, About, Projects, Experience, Skills, Credentials, Contact.
Fully responsive, dark-mode by default, no external API keys or environment variables
required.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- next/font (Manrope, Inter, IBM Plex Mono)

## Local Setup

```
npm install
npm run dev
```

Open http://localhost:3000 in your browser. To create a production build:

```
npm run build
npm start
```

## Project Structure

```
app/
  layout.js       Root layout, fonts, metadata
  page.js         Page composition
  globals.css     Tailwind + design tokens
components/
  Nav.jsx
  Hero.jsx
  About.jsx
  Projects.jsx
  Experience.jsx
  Skills.jsx
  Credentials.jsx
  Contact.jsx
  Footer.jsx
```

## Content

All content is sourced from the candidate's resume, edited for clarity and recruiter
impact.
