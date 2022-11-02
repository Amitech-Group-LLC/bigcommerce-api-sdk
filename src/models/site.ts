export type SiteData = {
  id?: number
  url?: string
  channel_id?: number
  created_at?: string
  updated_at?: string
  ssl_status?: 'dedicated' | 'shared'
  urls?: SiteUrls[]
  is_checkout_url_customized?: boolean
}

export type SiteUrls = {
  url?: string
  type?: 'primary' | 'canonical' | 'checkout'
  created_at?: string
  updated_at?: string
}

export type SiteBodyData = Pick<SiteData, 'url' | 'channel_id'>
export type SiteUpdateData = Pick<SiteData, 'url'>


export type SiteParams = {
  'channel_id:in'?: number
  limit?: number
  page?: number
  'url_type:in'?: string
}
