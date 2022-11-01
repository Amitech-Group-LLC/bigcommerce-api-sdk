export type CategoruDefaultProductSortParam =
  | 'use_store_settings'
  | 'featured'
  | 'newest'
  | 'best_selling'
  | 'alpha_asc'
  | 'alpha_desc'
  | 'avg_customer_review'
  | 'price_asc'
  | 'price_desc'

export type Category = {
  id?: number
  parent_id: number
  name: string
  description?: string
  views?: number
  sort_order?: number
  page_title?: string
  meta_keywords?: string[]
  meta_description?: string
  layout_file?: string
  image_url?: string
  is_visible?: true
  search_keywords?: string
  default_product_sort?: CategoruDefaultProductSortParam
  custom_url?: {
    url?: string
    is_customized?: boolean
  }
}

export type CategoryFilter = {
  exclude_fields?: Array<keyof Category>
  id?: number
  'id?:greater'?: number[]
  'id?:in'?: number[]
  'id?:less'?: number[]
  'id?:max'?: number[]
  'id?:min'?: number[]
  'id?:not_in'?: number[]
  include_fields?: Array<keyof Category>
  is_visible?: boolean
  keyword?: string
  limit?: number
  name?: string
  'name?:like'?: []
  page?: number
  page_title?: string
  'page_title?:like'?: string[]
  parent_id?: number
  'parent_id?:greater'?: number[]
  'parent_id?:in'?: number[]
  'parent_id?:less'?: number[]
  'parent_id?:max'?: number[]
  'parent_id?:min'?: number[]
}

export type CategoryBatchFilter = {
  'category_id:in'?: string
  'category_id:not_in'?: string
  'category_uuid:in'?: string
  'category_uuid:not_in'?: string
  exclude_fields?: Array<keyof Category>
  include_fields?: Array<keyof Category>
  is_visible?: boolean
  keyword?: string
  limit?: number
  name?: string
  'name:like'?: string
  page?: number
  page_title?: string
  'page_title:like'?: string
  'parent_id:in'?: string
  'parent_id:not_in'?: string
  'tree_id:in'?: string
  'tree_id:not_in'?: string
}

export type CategoryBatch = {
  id?: number
  parent_id?: number
  name?: string
  description?: string
  views?: number
  sort_order?: number
  page_title?: string
  search_keywords?: string
  meta_keywords?: string[]
  meta_description?: string
  layout_file?: string
  is_visible?: boolean
  image_url?: string
  default_product_sort?: CategoruDefaultProductSortParam
  url?: {
    path?: string
    is_customized?: boolean
  }
}

export type CategoryBatchPost = {
  tree_id: number
  parent_id: number
  name?: string
  description?: string
  views?: number
  sort_order?: number
  page_title?: string
  search_keywords?: string
  meta_keywords?: string[]
  meta_description?: string
  layout_file?: string
  is_visible?: boolean
  image_url?: string
  url?: {
    path?: string
    is_customized?: boolean
  }
  default_product_sort?: CategoruDefaultProductSortParam
}

export type CategoryBatchUpdate = {
  tree_id: number
  category_id: number
  category_uuid?: string
  parent_id?: number
  name?: string
  description?: string
  views?: number
  sort_order?: number
  page_title?: string
  search_keywords?: string
  meta_keywords?: string[]
  meta_description?: string
  layout_file?: string
  is_visible?: boolean
  image_url?: string
  url?: {
    path?: string
    is_customized?: boolean
  }
  default_product_sort?: CategoruDefaultProductSortParam
}

export type CategoryBatchMeta = {
  total: number
  success: number
  failed: number
}

export type CategoryBatchDelete = {
  'category_id:in': string
  'category_uuid:in': string
  'parent_id:in': string
  'tree_id:in': string
}

export type CategoryBatchError = {
  status: number
  title: string
  type: string
  errors: {
    property1: string
    property2: string
  }
}

export type CategoryMetafieldFilter = {
  exclude_fields?: Array<keyof CategoryMetafield>
  id?: number
  'id:greater'?: number[]
  'id:in'?: number[]
  'id:less'?: number[]
  'id:max'?: number[]
  'id:min'?: number[]
  'id:not_in'?: number[]
  include_fields?: Array<keyof CategoryMetafield>
  key?: string
  limit?: number
  namespace?: string
  page?: number
}

export type CategoryMetafield = {
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
