export type ScriptData = ScriptDefaultData & {
  name: string
}

export type ScriptResult = ScriptDefaultData & {
  uuid?: string
  date_created?: string
  date_modified?: string
}

export type ScriptDefaultData = {
  description?: string
  html?: string
  src?: string
  auto_uninstall?: boolean
  load_method?: ScriptLoadMethod
  location?: ScriptLocation
  visibility?: ScriptVisibility
  kind?: ScriptKind
  api_client_id?: string
  consent_category?: ScriptConsentCategory
  enabled?: boolean
  channel_id?: number
}

export type ScriptLoadMethod = 'default' | 'async' | 'defer'
export type ScriptLocation = 'head' | 'footer'
export type ScriptVisibility = 'storefront' | 'all_pages' | 'checkout' | 'order_confirmation'
export type ScriptKind = 'src' | 'script_tag'
export type ScriptConsentCategory = 'essential' | 'functional' | 'analytics' | 'targeting'
export type ScriptConsentDirection = 'asc' | 'desc'
export type ScriptConsentSort = 'name' | 'description' | 'date_created' | 'date_modified'

export type ScriptParams = {
  direction?: ScriptConsentDirection
  limit?: number
  page?: number
  sort?: ScriptConsentSort
  'channel_id:in'?: any[]
}

export type ScriptDeleteData = {
  status?: number
  title?: string
  type?: string
  instance?: string
}
