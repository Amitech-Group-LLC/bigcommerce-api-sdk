export type Brand = {
  id?: number
  name: string
  page_title?: string
  meta_keywords?: string[]
  meta_description?: string
  image_url?: string
  search_keywords?: string
  custom_url?: {
    url: string
    is_customized: boolean
  }
}

export type BrandFilter = {
  id?: number
  include_fields?: Array<keyof BrandFilter>
  exclude_fields?: Array<keyof Omit<BrandFilter, 'id'>>
  limit?: number
  name?: string
  page?: number
  page_title?: string
  'id:greater'?: number[]
  'id:in'?: number[]
  'id:less'?: number[]
  'id:max'?: number[]
  'id:min'?: number[]
  'id:not_in'?: number[]
}

export type BrandMetafield = {
  permission_set:
    | 'app_only'
    | 'read'
    | 'write'
    | 'read_and_sf_access'
    | 'write_and_sf_access'
  namespace: string
  key: string
  value: string
  description?: string
  resource_type?: 'category' | 'brand' | 'product' | 'variant'
  resource_id?: number
  id?: number
  date_created?: string
  date_modified?: string
}
