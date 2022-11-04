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

export type StoreContentBlogPostDeleteParam = {
  limit?: number
  page?: number
}

export type StoreContentCountData = {
  count?: number
}
