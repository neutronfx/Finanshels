import type { ClickIds, UTMParams } from './utm'

export interface LeadFormValues {
  name: string
  email: string
  phone: string
  company: string
}

export interface LeadPayload extends LeadFormValues {
  lead_id: string
  captured_at: string
  utm: UTMParams
  click_ids: ClickIds
  page_url: string
  session_id: string
}
