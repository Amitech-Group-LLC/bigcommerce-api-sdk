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

export type SiteRouteParams = {
  limit?: number
  page?: number
  type?: string
}

export type SiteRouteData = {
  id?: number
  type?: SiteRouteType
  matching?: string
  route?: string
}

export type SiteRouteType = 'product' |
  'brand' |
  'category' |
  'page' |
  'blog' |
  'home' |
  'cart' |
  'checkout' |
  'search' |
  'account' |
  'login' |
  'returns' |
  'static'

  export type SiteRouteCreateData = Omit<SiteRouteData, 'id'>

  export type SiteRouteUpdateData = {
    type: SiteRouteType
    matching: string
    route: string
  }
