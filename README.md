# HawkTok

HawkTok is a premier TikTok marketing agency that transforms DTC brands into influencers, And make them 7 figure Brands through strategic content creation and buyer-focused marketing.

"We only focus on our prey — and our prey is the buyer." HawkTok specializes in calculated marketing built on understanding psychology, positioning, and the buyer's perspective.

## Tech Stack

- **PNPM**: Package manager
- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server integrated with Vite dev server
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/           # Custom components
│   ├── ui/               # Pre-built UI component library
│   ├── AboutSection.tsx  # About section with benefits
│   ├── HeroSection.tsx   # Hero with logo and CTA
│   ├── ServicesSection.tsx # Services offered
│   └── ...               # Other sections
├── App.tsx               # App entry point with SPA routing
└── global.css            # TailwindCSS theming and global styles

server/                   # Express API backend
├── index.ts              # Main server setup
└── routes/               # API handlers

shared/                   # Types used by both client & server
└── api.ts                # Shared API interfaces

public/                   # Static assets
├── HAWKTOK-logo.svg      # Company logo
└── BRANDS/               # Brand assets

netlify/                  # Netlify functions
└── functions/
    └── api.ts
```

## Key Features

- **Buyer-Focused Marketing**: Content designed around the buyer's psychology and emotions
- **Affiliate Partnerships**: High-converting scripts and positioning for brand partners
- **Expert-Led**: Experienced team that has scaled multiple brands to six figures
- **Results-Driven**: Leadership approach focused on measurable outcomes
- **Content That Sells**: Stories that stop the scroll and drive action
- **Speed & Precision**: Fast delivery without compromising quality

## Development Commands

```bash
pnpm dev        # Start dev server (client + server)
pnpm build      # Production build
pnpm start      # Start production server
pnpm test       # Run Vitest tests
```

## Deployment

This project is configured for deployment on Netlify with serverless functions.

