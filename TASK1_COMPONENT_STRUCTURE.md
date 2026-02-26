# Task 1 Component Structure (Brief)

## Entry and Shell
- `src/main.tsx`: React entrypoint, mounts `App`.
- `src/App.tsx`: Page shell, section composition, CTA tracking handlers, nav links, and global CTA widgets.

## Landing Page Sections
- `src/components/Hero.tsx`: Hero copy, lead CTA, WhatsApp CTA, call CTA, slider, animated metrics.
- `src/components/CTAInline.tsx`: Mid-page conversion strip with lead, WhatsApp, and call CTAs.
- `src/components/Benefits.tsx`: Value proposition cards.
- `src/components/SocialProof.tsx`: “How it works” visual and trust/process blocks.
- `src/components/LeadForm.tsx`: Lead capture form (name, email, phone, company), validation, submit flow, thank-you state.
- `src/components/Footer.tsx`: Final CTA area + legal/social links.

## Persistent CTA Components
- `src/components/FloatingWhatsApp.tsx`: Floating WhatsApp button.
- `src/components/StickyMobileCTA.tsx`: Mobile sticky footer CTA bar (WhatsApp + Call).

## Tracking, Attribution, and Validation
- `src/hooks/useTracking.ts`: Normalized event payload creation + dispatch.
- `src/hooks/useUtmCapture.ts`: UTM/click-id/session capture from URL + session storage persistence.
- `src/lib/analytics.ts`: Event transport to `dataLayer`, custom browser event, and dev console.
- `src/lib/validators.ts`: `zod` form validation schema.
- `src/types/events.ts`, `src/types/utm.ts`, `src/types/lead.ts`: typed payload contracts.

## Config
- `src/config/contact.ts`: central phone and WhatsApp destination config.
