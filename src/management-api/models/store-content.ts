export type StoreContentBlogPostParam = {
  is_published?: string
  limit?: number
  page?: number
  published_date?: string
  tag?: string
  url?: string
}

export type StoreContentBlogPostData = DefaultBlogPostData & {
  id?: number
  title?: string
  preview_url?: string
  body?: string
  summary?: string
  published_date?: BlogPostPublishedDate
  published_date_iso8601?: string
}

export type BlogPostPublishedDate = {
  timezone_type?: number
  date?: string
  timezone?: string
}

export type DefaultBlogPostData = {
  url?: string 
  tags?: string[] 
  is_published?: boolean 
  meta_description?: string 
  meta_keywords?: string 
  author?: string 
  thumbnail_path?: string 
}

export type StoreContentBlogPostCreateParam = DefaultBlogPostData & {
  title: string
  body: string
  published_date?: string
}

export type StoreContentBlogPostCreateData = {
  title?: string
  preview_url?: string
  body?: string
  summary?: string
  published_date?: BlogPostPublishedDate
  published_date_iso8601?: string
  url?: string 
  tags?: string[] 
  is_published?: boolean 
  meta_description?: string | null
  meta_keywords?: string | null
  author?: string | null
  thumbnail_path?: string | null
}

export type StoreContentQueryParam = {
  limit?: number
  page?: number
}

export type StoreContentCountData = {
  count?: number
}

export type StoreContentBlogTagData = {
  tag?: string
  post_ids?: number[]
}

export type StoreContentPage = StoreContentPageDefaultData & {
  id?: number
  type?: StoreContentType
  name?: string
  body?: string
}

export type StoreContentPageDefaultData = {
  parent_id?: number
  contact_fields?: string
  email?: string
  url?: string
  meta_description?: string
  mobile_body?: string
  has_mobile_version?: boolean
  is_visible?: boolean
  is_homepage?: boolean
  meta_title?: string
  layout_file?: string
  sort_order?: number
  search_keywords?: string
  meta_keywords?: string
  feed?: string
  link?: string
  content_type?: 'application/json' | 'text/javascript' | 'text/html'
}

export type StoreContentType = 'page' | 'rss_feed' | 'contact_form' | 'raw' | 'link'

export type StoreContentPageData = StoreContentPageDefaultData & {
  type: StoreContentType
  name: string
  body: string
}

export type StoreContentUpdateData = StoreContentPageData & {
  id?: number
}

export type StoreContentRedirect = {
  id?: number
  path: string
  forward: {
    type?: string
    ref?: number
  }
  url?: string
}

export type StoreContentRedirectCount = {
  count?: number
}
