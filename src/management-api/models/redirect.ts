export type RedirectFilter = {
  direction?: 'asc' | 'desc'
  'id:in'?: string[]
  include?: 'to_url'
  keyword?: string
  limit?: number
  page?: number
  site_id?: number
  sort?: 'from_path' | 'type' | 'site_id'
}

export type Redirect = {
  id?: number
  site_id?: number
  from_path?: string
  to?: {
    type?: 'product' | 'brand' | 'category' | 'page' | 'post' | 'url'
    entity_id?: number
    url?: string
  }
  to_url?: string
}

export type RedirectPut = {
    site_id: number
    from_path: string
    to?: {
      type?: 'product' | 'brand' | 'category' | 'page' | 'post' | 'url'
      entity_id?: number
      url?: string
    }
  }
