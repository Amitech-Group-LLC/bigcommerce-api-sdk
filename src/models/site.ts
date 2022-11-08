export type SiteData = {
  id?: number
  url?: string
  channel_id?: number
  created_at?: string
  updated_at?: string
  ssl_status?: 'dedicated' | 'shared'
  urls?: SiteUrl[]
  is_checkout_url_customized?: boolean
}

export type SiteUrl = {
  url?: string
  type?: 'primary' | 'canonical' | 'checkout'
  created_at?: string
  updated_at?: string
}

export type SiteBodyData = Pick<SiteData, 'url' | 'channel_id'>
export type SiteUpdateData = Pick<SiteData, 'url'>


export type SiteParam = {
  'channel_id:in'?: number
  limit?: number
  page?: number
  'url_type:in'?: string
}

export type SiteRouteParam = {
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

export type SiteCertificateData = {
  status?: 'shared' | 'dedicated'
  installed_certificate?: SiteCertificateCertificateInfo
}

export type SiteCertificateCertificateInfo = {
  common_name?: string
  subject_alternative_names?: string[]
  validity_not_before?: string
  validity_not_after?: string
  signing_algorithm?: string
  issuer?: string
  certificate?: string
  intermediate_certificates?: string
}

export type SiteCertificateUpsertData = {
  url?: string
  certificate?: SiteCertificateCertificateWrite
}

export type SiteCertificateCertificateWrite = {
  certificate?: string
  private_key?: string
  intermediate_certificates?: string
}
