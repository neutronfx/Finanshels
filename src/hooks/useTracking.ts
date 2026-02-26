import { useCallback } from 'react'
import { trackEvent } from '../lib/analytics'
import type { AppEvent, AppEventName, TrackEventOptions } from '../types/events'
import { useUtmCapture } from './useUtmCapture'

const createEventId = () => {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `event-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export const useTracking = () => {
  const attribution = useUtmCapture()

  const track = useCallback(
    (eventName: AppEventName, options: TrackEventOptions = {}) => {
      const payload: AppEvent = {
        event_name: eventName,
        event_id: createEventId(),
        event_time: new Date().toISOString(),
        page_url: typeof window !== 'undefined' ? window.location.href : '',
        session_id: attribution.session_id,
        cta_id: options.cta_id,
        lead_id: options.lead_id,
        utm: attribution.utm,
        click_ids: attribution.click_ids,
      }

      trackEvent(payload)
    },
    [attribution.click_ids, attribution.session_id, attribution.utm],
  )

  return {
    track,
    attribution,
  }
}
