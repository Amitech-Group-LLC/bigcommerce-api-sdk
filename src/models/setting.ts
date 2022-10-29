export type SettingEmailStatus = {
  abandoned_cart_email?: boolean
  account_details_changed_email?: boolean
  combined_order_status_email?: boolean
  create_account_email?: boolean
  create_guest_account_email?: boolean
  gift_certificate_email?: boolean
  invoice_email?: boolean
  order_message_notification_email?: boolean
  product_review_email?: boolean
  return_confirmation_email?: boolean
  return_statuschange_email?: boolean
}

export type SettingSearchFilter = {
  collapsed_by_default?: boolean
  display_name?: string
  display_product_count?: boolean
  id?: string
  is_enabled?: boolean
  items_to_show?: 5 | 10 | 15
  sort_by?: 'alpha' | 'option_values' | 'item_count'
  type?: 'product' | 'brand' | 'other'
}

export type SettingSearchFilterData = {
  id?: string
  name?: string
  product_count?: number
  type?: 'category' | 'brand' | 'rating' | 'product'
}

export type SettingSearchFilterContext = {
  context?: {
    category_id?: number
    channel_id?: number
  }
  data?: SettingSearchFilter[]
}

export type SettingLocale = {
  default_shopper_language: string
  shopper_language_selection_method?: 'browser' | 'default_shopper_language'
  store_country?: string
}

export type SettingStorefrontCategory = {
  category_tree_depth?: number
  default_product_sort?:
    | 'featured'
    | 'bestselling'
    | 'newest'
    | 'atoz'
    | 'ztoa'
    | 'highestprice'
    | 'lowestprice'
    | 'bestreviewed'
  listing_mode?:
    | 'current_category_only'
    | 'child_categories'
    | 'child_categories_if_category_empty'
}

export type SettingStorefrontRobot = {
  robots_txt_ssl?: string
}

export type SettingStorefrontSearch = {
  content_product_sort?: 'relevance' | 'atoz' | 'ztoa'
  default_product_sort?:
    | 'featured'
    | 'bestselling'
    | 'newest'
    | 'atoz'
    | 'ztoa'
    | 'highestprice'
    | 'lowestprice'
    | 'bestreviewed'
  product_filtering_enabled?: boolean
  search_suggest?: boolean
}

export type SettingStorefrontSecurity = {
  csp_header?: {
    enabled?: boolean
    header_value?: string
  }
  hsts: {
    enabled?: boolean
    include_preload?: boolean
    include_subdomains?: boolean
    max_age?: 'zero_seconds' | 'five_minutes' | 'one_year'
  }
  sitewide_https_enabled?: boolean
  x_frame_options_header?: {
    allowed_url?: string
    enabled?: boolean
    setting?: 'deny' | 'same_origin' | 'allow_from_url'
  }
}

export type SettingStorefrontSeo = {
  meta_description?: string
  meta_keywords?: string
  page_title?: string
  www_redirect?: 'www' | 'no-www' | 'none'
}

export type SettingStorefrontStatus = {
  down_for_maintenance_message?: string
  prelaunch_message?: string
  prelaunch_password?: string
}

export type SettingAnalitic = {
  code?: string
  enabled?: boolean
  id?: number
  name?: string
}

export type SettingAnaliticPut = {
  channel_id?: number
  code?: string
  data_tag_enabled?: boolean
  enabled?: boolean
  id?: number
  is_oauth_connected?: null
  name?: string
  version?: number
}

export type SettingCatalog = {
  auto_approve_reviews?: boolean
  enable_product_comparisons?: boolean
}

export type SettingInventory = {
  low_stock_notification_address: string[]
  out_of_stock_notification_address: string[]
}

export type SettingLogo = {
  favicon_url?: string
  logo_image_url?: string
  logo_text?: string
  type?: 'image' | 'text'
}

export type SettingLogoPut = {
  logo_text?: string
  type?: 'image' | 'text'
}

export type SettingStoreProfile = {
  store_address?: string
  store_address_type?:
    | 'Home Office'
    | 'Commercial Office'
    | 'Retail'
    | 'Warehouse'
  store_email?: string
  store_name?: string
  store_phone?: string
}

export type SettingStorefrontProduct = {
  default_preorder_message?: string
  show_add_to_cart_link?: boolean
  show_add_to_cart_qty_box?: boolean
  show_add_to_wishlist?: boolean
  show_breadcrumbs_product_pages?: 'show_one' | 'show_none'
  show_product_brand?: boolean
  show_product_price?: boolean
  show_product_rating?: boolean
  show_product_shipping?: boolean
  show_product_sku?: boolean
  show_product_weight?: boolean
}
