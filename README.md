# Finanshels Assessment App (Task 1)

Single-page React + TypeScript landing page for **Corporate Tax Filing** conversion assessment.

## Requirements covered
- Mobile-first responsive layout
- Mandatory CTAs:
  - inline WhatsApp CTA
  - floating WhatsApp CTA
  - call CTA
  - sticky mobile footer CTA
- Lead form with validation (name, email, phone, company)
- Success/thank-you state
- UTM + click-id capture and persistence
- CTA-level tracking hooks with typed event payloads

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Key files
- `src/App.tsx` - root composition and CTA tracking wiring
- `src/components/*` - page sections and CTA components
- `src/hooks/useUtmCapture.ts` - attribution context capture
- `src/hooks/useTracking.ts` - typed tracking hooks
- `src/lib/analytics.ts` - tracking abstraction
- `src/lib/validators.ts` - form validation schema
- `src/config/contact.ts` - CTA contact placeholders
- `TASK1_COMPONENTS.md` - brief component structure explanation (submission deliverable)
- `TASK1_TRACKED_EVENTS.md` - tracked events list and trigger mapping (submission deliverable)

## Deployment
Deployed on Vercel from repo root `app/`.
