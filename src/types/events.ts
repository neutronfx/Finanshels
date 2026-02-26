import type { ClickIds, UTMParams } from './utm'

export type AppEventName =
  | 'page_view'
  | 'cta_click_lead_form'
  | 'cta_click_whatsapp_inline'
  | 'cta_click_whatsapp_floating'
  | 'cta_click_call'
  | 'cta_click_sticky_mobile'
  | 'form_submit_attempt'
  | 'form_submit_success'
  | 'thank_you_view'
  | 'qualified_lead'
  | 'paid_conversion'

export interface AppEvent {
  event_name: AppEventName
  event_id: string
  event_time: string
  page_url: string
  session_id: string
  lead_id?: string
  cta_id?: string
  utm?: UTMParams
  click_ids?: ClickIds
}

export interface TrackEventOptions {
  lead_id?: string
  cta_id?: string
}
