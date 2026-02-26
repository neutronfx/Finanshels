import type { AppEvent } from '../types/events'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

type EventSink = (event: AppEvent) => void

const eventSinks: EventSink[] = []

export const registerEventSink = (sink: EventSink) => {
  eventSinks.push(sink)
}

export const trackEvent = (event: AppEvent) => {
  if (typeof window === 'undefined') {
    return
  }

  window.dataLayer?.push({
    event: event.event_name,
    ...event,
  })

  window.dispatchEvent(
    new CustomEvent('finanshels:tracking-event', {
      detail: event,
    }),
  )

  eventSinks.forEach((sink) => sink(event))

  if (import.meta.env.DEV) {
    console.info('[tracking]', event)
  }
}
