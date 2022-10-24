export type WebhookPost = {
  scope: string
  destination: string
  is_active?: boolean
  events_history_enabled?: boolean
  headers: {
    custom: string
  } | null
}

export type WebhookFilter = {
  limit?: number
  page?: number
  destination?: string
  is_active?: boolean
  scope?: string
}

export type Webhook = {
  scope: string
  destination: string
  is_active?: boolean
  events_history_enabled?: boolean
  headers: {
    custom: string
  }
  id?: number
  client_id?: string
  store_hash?: string
  created_at?: number
  updated_at?: number
}

export type WebhookData = {
  scope?: string
  destination?: string
  is_active?: boolean
  headers?: {
    custom: string
  } | null
  id?: number
  client_id?: string
  store_hash?: string
  created_at?: number
  updated_at?: number
}

export type WebhookEventFilter = {
  'created_at:max'?: string
  'created_at:min'?: string
  limit?: number
  page?: number
}

export type WebhookEvent = {
  scope?: string
  store_id?: string
  data?: {
    type?: string
    id?: number
  }
  hash?: string
  created_at?: number
  producer?: string
}

export type BlockedDomainReason = {
  failure_description?: string
  count?: number
  timestamp?: number
}

export type BlockedDomain = {
  destination?: string
  time_left?: number
  reasons?: BlockedDomainReason[]
}

export type WebhookAdmin = {
  emails?: string[]
  hooks_list?: WebhookData[]
  blocked_domains?: BlockedDomain[]
}
