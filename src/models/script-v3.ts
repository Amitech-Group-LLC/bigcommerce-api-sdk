export type ScriptsV3Data = ScriptsV3DefaultData & {
  name: string
}

export type ScriptsV3Result = ScriptsV3DefaultData & {
  uuid?: string
  date_created?: string
  date_modified?: string
}

export type ScriptsV3DefaultData = {
  description?: string
  html?: string
  src?: string
  auto_uninstall?: boolean
  load_method?: ScriptsV3LoadMethod
  location?: ScriptsV3Location
  visibility?: ScriptsV3Visibility
  kind?: ScriptsV3Kind
  api_client_id?: string
  consent_category?: ScriptsV3ConsentCategory
  enabled?: boolean
  channel_id?: number
}

export type ScriptsV3LoadMethod = 'default' | 'async' | 'defer'
export type ScriptsV3Location = 'head' | 'footer'
export type ScriptsV3Visibility = 'storefront' | 'all_pages' | 'checkout' | 'order_confirmation'
export type ScriptsV3Kind = 'src' | 'script_tag'
export type ScriptsV3ConsentCategory = 'essential' | 'functional' | 'analytics' | 'targeting'
export type ScriptsV3ConsentDirection = 'asc' | 'desc'
export type ScriptsV3ConsentSort = 'name' | 'description' | 'date_created' | 'date_modified'

export type ScriptsV3Params = {
  direction?: ScriptsV3ConsentDirection
  limit?: number
  page?: number
  sort?: ScriptsV3ConsentSort
  'channel_id:in'?: any[]
}
