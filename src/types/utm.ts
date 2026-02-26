export type UTMKey =
  | 'utm_source'
  | 'utm_medium'
  | 'utm_campaign'
  | 'utm_term'
  | 'utm_content'
  | 'utm_id'
  | 'utm_source_platform'
  | 'utm_creative_format'
  | 'utm_marketing_tactic'

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  utm_id?: string
  utm_source_platform?: string
  utm_creative_format?: string
  utm_marketing_tactic?: string
}

export interface ClickIds {
  gclid?: string
  fbclid?: string
  ttclid?: string
}

export interface AttributionContext {
  utm: UTMParams
  click_ids: ClickIds
  session_id: string
}
