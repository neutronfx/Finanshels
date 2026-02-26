# Task 1 Tracked Events

All events are emitted through `useTracking` and include `event_id`, `event_time`, `page_url`, `session_id`, and captured attribution (`utm`, `click_ids`) when available.

## Core Events and Trigger Points
- `page_view`
  - Fires on initial app load (`src/App.tsx`).

- `cta_click_lead_form`
  - Fires when user clicks a lead-form anchor CTA:
    - Hero primary CTA (`cta_id: hero_lead_form_cta`)
    - Inline strip lead CTA (`cta_id: inline_lead_form_cta`)

- `cta_click_whatsapp_inline`
  - Fires on inline WhatsApp CTAs (`cta_id: hero_inline_whatsapp`).

- `cta_click_whatsapp_floating`
  - Fires on floating WhatsApp button (`cta_id: floating_whatsapp`).

- `cta_click_call`
  - Fires on call CTAs (`cta_id: hero_call_cta`).

- `cta_click_sticky_mobile`
  - Fires on mobile sticky CTA actions:
    - Call (`cta_id: sticky_call`)
    - WhatsApp (`cta_id: sticky_whatsapp`)

- `form_submit_attempt`
  - Fires when lead form submit is attempted (`cta_id: lead_form_submit`).

- `form_submit_success`
  - Fires after successful validated submit (`lead_id` attached).

- `qualified_lead`
  - Fires after successful form submit (`lead_id` attached).

- `thank_you_view`
  - Fires when thank-you state is shown after successful submit (`lead_id` attached).

## Notes
- `paid_conversion` exists in the event type contract for downstream use but is not triggered in Task 1 UI flow.
