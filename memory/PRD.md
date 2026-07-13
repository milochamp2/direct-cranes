# Direct Cranes Hire — Website PRD

## Original Problem Statement
Awwwards Site-of-the-Day level 3D cranes business website, rebranded to **Direct Cranes Hire** — complete crane hire & lifting solutions across Melbourne (VIC), Brisbane (QLD) and South Australia (SA). Kinetic 3D hero, real product-style crane imagery (spotlighted), numbered manifesto chapters, editorial marquee, Framer Motion + Lenis smooth scrolling.

## User Design Choices (June 2026)
- **Reference 1 (Japan sticker image):** font + color theme — cream (#F2EDE3), vermillion (#E14A21), ink black (#16120F), retro-bold sticker aesthetic (thick ink outlines, hard offset shadows)
- **Reference 2 (DIRECT crane renders):** cranes presented as spotlighted studio renders on jet-black backgrounds with red spec-card grids (100T spec sheet style)
- Overall site: **mostly cream/light with a little dark mix** (user choice b)
- **NO Request-a-Quote form** (user explicitly removed it)
- Language: English

## Architecture
- React (CRA + craco) frontend only — **NO backend, NO database**
- Tailwind CSS, Framer Motion, Lenis smooth scroll, React Three Fiber (3D hero crane), react-router-dom v7
- Fonts: Cabinet Grotesk (display), Michroma (wide brand), Manrope (body), IBM Plex Mono (labels)
- 6 AI-generated crane renders hosted on static.prod-images.emergentagent.com (URLs in `src/lib/site-data.js` → IMG)

## Routes (restructured June 13, 2026 per user request)
Nav has exactly 7 pages: Mobile Cranes, Tower Cranes, Helicopter Lifting, Heavy Haulage, Lift Studies, Locations, About Us.
- `/` Home (Hero + Marquee + Manifesto + 5-service grid + dark Fleet teaser + Industries + Locations teaser + About teaser)
- `/mobile-cranes` (embeds AT-100, FR-25, SL-250 spec sheets), `/tower-cranes` (TWR-65), `/helicopter-lifting` (HELI), `/heavy-haulage` (HT-45), `/lift-studies` (no machines)
- `/locations` (VIC/QLD/SA blocks), `/about` (story, stats, values, contact cards: phone/email/depots)
- REMOVED: /fleet, /projects, /contact, /service-areas, /services/:slug — all unknown routes redirect to `/`
- Contact info lives on About Us (user choice); spec sheets folded into service pages (user choice)

## Key Files
- `src/lib/site-data.js` — ALL content (brand, 5 SERVICES with machines[], FLEET specs, areas, values)
- `src/App.js` — router (routes generated from SERVICES) + Lenis + ScrollToTop
- `src/pages/` — Home, ServicePage (slug prop, embeds SpecSheet), LocationsPage, AboutPage
- `src/components/site/` — Navbar (7 flat links + mobile menu), Hero, Crane3D, SpecSheet, Marquee, Manifesto, Services, Fleet, Industries, Locations, About, Footer, Reveal
- `src/index.css` — sticker classes (.sticker, .text-sticker), seigaiha wave pattern, marquee, grain

## Completed (June 13, 2026)
- Full Japan-palette redesign (cream/vermillion/ink, sticker aesthetic) — tested 100% (iteration_1)
- 6 studio crane renders generated (Gemini image) with DIRECT branding
- Site restructure to user's exact 7-page list; fleet spec sheets folded into service pages; Contact/Fleet/Projects pages removed
- Tested: iteration_2 — 100% pass (53 checks: all 7 pages, spec sheets, redirects, mobile nav)
- Iconic thumbs-up photo (user asset: IMG.iconic, customer-assets g6vjiy80_image.png) featured on home About section (tilted polaroid + badge) and About Us page (full-width with badges)
- Real depot addresses + Google Maps embeds (no API key, maps?q=&output=embed) on Locations page; addresses + directions links on About depot cards and footer:
  - VIC: 132 Bayfield Road East, Bayswater North VIC 3153
  - QLD: 27 Transport St, Yatala QLD 4207
  - SA: 70 London Rd, Mile End South SA 5031
- Verified via screenshots: maps render with correct pins, photo displays on both pages

## Backlog
- P2: Real project photos/case studies if user supplies them
- P2: SEO meta per route (react-helmet), Open Graph image
- P2: Google Maps embeds for depots on contact page
- P3: Deployment when user requests
