export type Page = {
  email?: string
  meta_title?: string
  feed?: string
  link?: string
  contact_fields?: 'fullname' | 'phone' | 'companyname' | 'orderno'
  meta_keywords?: string
  meta_description?: string
  search_keywords?: string
  url?: string
  channel_id?: number
  name: string
  is_visible?: boolean
  parent_id?: number
  sort_order?: number
  type: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog'
  is_homepage?: boolean
  is_customers_only?: boolean
}

export type PagePost = Page & {
  body?: string
}

export type PageManyPut = {
  name?: string
  is_visible?: boolean
  parent_id?: number
  sort_order?: number
  type: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog'
  is_homepage?: boolean
  is_customers_only?: boolean
  id: number
  email?: string
  meta_title?: string
  body?: string
  feed?: string
  link?: string
  contact_fields?: 'fullname' | 'phone' | 'companyname' | 'orderno'
  meta_keywords?: string
  meta_description?: string
  search_keywords?: string
  url?: string
  channel_id?: number
}

export type PagePut = {
  name?: string
  is_visible?: boolean
  parent_id?: number
  sort_order?: number
  type?: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog'
  is_homepage?: boolean
  is_customers_only?: boolean
  email?: string
  meta_title?: string
  body?: string
  feed?: string
  link?: string
  contact_fields?: 'fullname' | 'phone' | 'companyname' | 'orderno'
  meta_keywords?: string
  meta_description?: string
  search_keywords?: string
  url?: string
  channel_id?: number
}

export type PageFilter = {
  channel_id?: number
  'id:in'?: string
  limit?: number
  name?: string
  'name:like'?: string
  page?: number
}
