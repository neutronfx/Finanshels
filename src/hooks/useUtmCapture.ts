import { useState } from 'react'
import type { AttributionContext, ClickIds, UTMKey, UTMParams } from '../types/utm'

const STORAGE_KEY = 'finanshels_attribution_context'
const SESSION_ID_KEY = 'finanshels_session_id'

const UTM_KEYS: UTMKey[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'utm_source_platform',
  'utm_creative_format',
  'utm_marketing_tactic',
]

const CLICK_ID_KEYS: Array<keyof ClickIds> = ['gclid', 'fbclid', 'ttclid']

const parseAttributionFromSearch = (search: string): Pick<AttributionContext, 'utm' | 'click_ids'> => {
  const params = new URLSearchParams(search)
  const utm: UTMParams = {}
  const click_ids: ClickIds = {}

  UTM_KEYS.forEach((key) => {
    const value = params.get(key)
    if (value) {
      utm[key] = value
    }
  })

  CLICK_ID_KEYS.forEach((key) => {
    const value = params.get(key)
    if (value) {
      click_ids[key] = value
    }
  })

  return { utm, click_ids }
}

const readStoredContext = (): Partial<AttributionContext> => {
  const raw = window.sessionStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return {}
  }

  try {
    return JSON.parse(raw) as Partial<AttributionContext>
  } catch {
    return {}
  }
}

const getSessionId = (): string => {
  const storedId = window.sessionStorage.getItem(SESSION_ID_KEY)
  if (storedId) {
    return storedId
  }

  const sessionId = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `session-${Date.now()}`
  window.sessionStorage.setItem(SESSION_ID_KEY, sessionId)
  return sessionId
}

const getContext = (): AttributionContext => {
  if (typeof window === 'undefined') {
    return {
      utm: {},
      click_ids: {},
      session_id: 'server',
    }
  }

  const stored = readStoredContext()
  const fromUrl = parseAttributionFromSearch(window.location.search)
  const context: AttributionContext = {
    utm: {
      ...(stored.utm ?? {}),
      ...fromUrl.utm,
    },
    click_ids: {
      ...(stored.click_ids ?? {}),
      ...fromUrl.click_ids,
    },
    session_id: getSessionId(),
  }

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context))
  return context
}

export const useUtmCapture = (): AttributionContext => {
  const [context] = useState<AttributionContext>(() => getContext())
  return context
}
