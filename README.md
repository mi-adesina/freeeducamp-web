# FreeEduCamp — Landing Page (v0.2)

A free educational platform helping students build mastery through
consistency, practice, and community. This repo is the **landing
page**: brand introduction + waitlist signup only. No auth, profiles,
streaks, points, ranks, leaderboards, question engines, or backend APIs
are implemented yet — see "Scope" below.

**v0.2** refines the messaging to feel more credible and
mission-driven (less "competition app," more "free education for
every student"), and adds a Subjects section, a founder story, and a
"Built For" trust strip. See "What changed in v0.2" below.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- [lucide-react](https://lucide.dev/) for icons
- No backend, no database, no auth

## Folder structure

```
freeeducamp/
├── app/
│   ├── layout.tsx        # Root layout: fonts, <html>/<body>, SEO metadata
│   ├── page.tsx           # Home page: composes all sections in order
│   └── globals.css        # Tailwind layers + base accessibility defaults
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky nav, responsive (desktop + mobile menu)
│   │   └── Footer.tsx        # Brand, tagline, contact, quick links, copyright
│   ├── sections/
│   │   ├── Hero.tsx          # Headline, tagline, CTAs, "learning loop" visual
│   │   ├── Mission.tsx       # Our Mission + 4 supporting pillars
│   │   ├── Subjects.tsx      # NEW — "Subjects at Launch" card grid
│   │   ├── Features.tsx      # "Coming Soon" feature card grid
│   │   ├── Vision.tsx        # "Why FreeEduCamp?" + highlighted vision statement
│   │   ├── FounderStory.tsx  # NEW — "Why I Started FreeEduCamp" testimonial
│   │   ├── TrustSignals.tsx  # NEW — "Built For" students/parents/teachers strip
│   │   └── Waitlist.tsx      # Waitlist form (client component, local state)
│   └── ui/
│       ├── Button.tsx        # Shared button/link CTA, 3 variants
│       ├── Container.tsx     # Max-width + padding wrapper for sections
│       ├── SectionHeading.tsx# Kicker + title + description pattern
│       └── FeatureCard.tsx   # Icon + title + description card (reused by
│                              # both Subjects and Features)
├── lib/
│   └── types.ts             # WaitlistEntry / WaitlistFormErrors types
├── public/                 # Static assets (empty for now)
├── tailwind.config.ts       # Brand color/type/shadow design tokens
└── package.json
```

**Why this structure:** `components/layout` holds chrome that appears on
every page (nav, footer). `components/sections` holds the one-off blocks
that make up the home page — each section is self-contained and only
used once. `components/ui` holds small, reusable primitives with no
knowledge of page content, so they could be reused if a second page is
added later. `lib` is for shared types/utilities that aren't
React components.

## What changed in this pass

- **Hero** — description copy updated to lead with "free educational
  resources" rather than "learning platform."
- **Subjects** *(new)* — six subject cards (Mathematics, Further
  Mathematics, Physics, Chemistry, Biology, English Language), placed
  between Mission and Features. Reuses `FeatureCard`.
- **Features** — "Weekly Challenges" now uses a `Target` icon instead of
  `Swords`, and the Leaderboards description was rewritten to emphasize
  friendly progress tracking instead of competition.
- **Vision** — added a visually prominent, dark-card callout with the
  long-term "students across Africa" vision statement.
- **FounderStory** *(new)* — a personal, testimonial-style section
  ("Why I Started FreeEduCamp") with a pull-quote and themed tags for
  accessibility, affordability, long-term growth, and Africa-wide reach.
- **TrustSignals** *(new)* — a short "Built For" strip (Students,
  Parents, Teachers) directly above the Waitlist section.
- **Waitlist** — the "N signups recorded this session" counter has been
  removed entirely (no replacement stats). Submissions still validate
  client-side and log to the console with the same `TODO(api)` marker;
  they're kept in local state internally, just no longer displayed.
- **Navbar / Footer** — both now include a **Subjects** link, and the
  footer adds a "Quick Links" label, a short mission line, and a Home
  link.
- **SEO** — page title/description updated (`FreeEduCamp | Learn.
  Practice. Master.`), Open Graph and Twitter metadata kept in sync.

## Scope

**Included:** brand landing page, responsive nav, hero, mission,
subjects, "coming soon" features grid, vision, founder story, trust
signals, and a client-side waitlist form with validation.

**Not included (intentionally):** authentication, user profiles,
streaks, points/ranks, leaderboards, a question engine, or any backend
API. The waitlist form validates input and logs submissions to the
browser console with a `TODO(api)` comment marking exactly where a real
`POST /api/waitlist` call should be added later (see
`components/sections/Waitlist.tsx`).

## Running locally

Requires Node.js 18.17+ (Next.js 14 minimum) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the app
# http://localhost:3000
```

Other useful commands:

```bash
npm run build   # Production build
npm run start   # Run the production build locally
npm run lint    # Run ESLint
```

## Deploying to Vercel

The project is a stock Next.js App Router app, so it deploys to Vercel
with no extra configuration.

**Option A — Vercel dashboard**
1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset "Next.js" is auto-detected — leave build/output
   settings as default.
4. Click **Deploy**.
5. Once live, add `freeeducamp.org` under **Project → Settings →
   Domains** and point your DNS (A/CNAME records, as instructed by
   Vercel) at it.

**Option B — Vercel CLI**

```bash
npm install -g vercel
vercel        # deploys a preview
vercel --prod # deploys to production
```

No environment variables are required, since there is no backend or
third-party API integration yet.
