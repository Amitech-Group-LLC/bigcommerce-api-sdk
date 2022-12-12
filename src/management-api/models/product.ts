export type ProductSortOrder = {
  product_id: number
  sort_order: number
}

export type ProductImage = {
  image_file?: File
  is_thumbnail?: boolean
  sort_order?: number
  description?: string
  image_url?: string
  id?: number
  product_id?: number
  url_zoom?: string
  url_standard?: string
  url_thumbnail?: string
  url_tiny?: string
  date_modified?: string
}

export type ProductBulkPricing = {
  id?: number
  quantity_min: number
  quantity_max: number
  type: 'price' | 'percent' | 'fixed'
  amount: number
}

export type ProductCustomField = {
  id?: number
  name: string
  value: string
}

export type ProductVideo = {
  title?: string
  description?: string
  sort_order?: number
  type?: 'youtube'
  video_id?: string
  id?: number
  product_id?: number
  length?: string
}

export type ProductModifierOptionValue = {
  is_default?: boolean
  label: string
  sort_order: number
  value_data?: {
    colors?: string[]
    checked_value?: boolean
  }
  adjusters?: {
    price?: {
      adjuster?: string
      adjuster_value?: number
    }
    weight?: {
      adjuster?: string
      adjuster_value?: number
    }
    image_url?: string
    purchasing_disabled?: {
      status?: boolean
      message?: string
    }
  }
  id?: number
  option_id?: number
}

export type ProductConfig = {
  default_value?: string
  checked_by_default?: boolean
  checkbox_label?: string
  date_limited?: boolean
  date_limit_mode?: 'earliest' | 'range' | 'latest'
  date_earliest_value?: string
  date_latest_value?: string
  file_types_mode?: 'specific' | 'all'
  file_types_supported?: string[]
  file_types_other?: string[]
  file_max_size?: number
  text_characters_limited?: boolean
  text_min_length?: number
  text_max_length?: number
  text_lines_limited?: boolean
  text_max_lines?: number
  number_limited?: boolean
  number_limit_mode?: 'lowest' | 'highest' | 'range'
  number_lowest_value?: number
  number_highest_value?: number
  number_integers_only?: boolean
  product_list_adjusts_inventory?: boolean
  product_list_adjusts_pricing?: boolean
  product_list_shipping_calc?: 'none' | 'weight' | 'package'
}

export type ProductModifier = {
  type:
    | 'date'
    | 'checkbox'
    | 'file'
    | 'text'
    | 'multi_line_text'
    | 'numbers_only_text'
    | 'radio_buttons'
    | 'rectangles'
    | 'dropdown'
    | 'product_list'
    | 'product_list_with_images'
    | 'swatch'
  required: boolean
  sort_order?: number
  config?: ProductConfig
  display_name?: string
  id?: number
  product_id?: number
  name?: string
  option_values: ProductModifierOptionValue[]
}

export type ProductOptionValue = {
  is_default?: boolean
  label: string
  sort_order: number
  value_data?: {
    colors?: string[]
    checked_value?: boolean
  }
  id?: number
}

export type ProductOption = {
  id?: number
  product_id?: number
  display_name?: string
  type?:
    | 'radio_buttons'
    | 'rectangles'
    | 'dropdown'
    | 'product_list'
    | 'product_list_with_images'
    | 'swatch'
  config?: ProductConfig
  sort_order?: number
  option_values: ProductOptionValue | ProductOptionValue[]
  name?: string
  image_url?: string
}

export type ProductVariantOptionValue = {
  option_display_name?: string
  label?: string
  id?: number
  option_id?: number
}

export type ProductVariant = {
  cost_price?: number
  price?: number
  sale_price?: number
  retail_price?: number
  weight?: number
  width?: number
  height?: number
  depth?: number
  is_free_shipping?: boolean
  fixed_cost_shipping_price?: number
  purchasing_disabled?: boolean
  purchasing_disabled_message?: string
  upc?: string
  inventory_level?: number
  inventory_warning_level?: number
  bin_picking_number?: string
  mpn?: string
  gtin?: string
  id?: number
  product_id?: number
  sku?: string
  sku_id?: number
  option_values?: ProductVariantOptionValue[]
  calculated_price?: number
  calculated_weight?: number
}

export type ProductCustomUrl = {
  url?: string
  is_customized?: boolean
}

export type Product = {
  id?: number
  name: string
  type: 'digital' | 'physical'
  sku?: string
  description?: string
  weight: number
  width?: number
  depth?: number
  height?: number
  price: number
  cost_price?: number
  retail_price?: number
  sale_price?: number
  map_price?: number
  tax_class_id?: number
  product_tax_code?: string
  categories?: number[]
  brand_id?: number
  inventory_level?: number
  inventory_warning_level?: number
  inventory_tracking?: 'none' | 'product' | 'variant'
  fixed_cost_shipping_price?: number
  is_free_shipping?: boolean
  is_visible?: boolean
  is_featured?: boolean
  related_products?: number[]
  warranty?: string
  bin_picking_number?: string
  layout_file?: string
  upc?: string
  search_keywords?: string
  availability_description?: string
  availability?: 'available' | 'disabled' | 'preorder'
  gift_wrapping_options_type?: 'any' | 'none' | 'list'
  gift_wrapping_options_list?: number[]
  sort_order?: number
  condition?: 'New' | 'Used' | 'Refurbished'
  is_condition_shown?: boolean
  order_quantity_minimum?: number
  order_quantity_maximum?: number
  page_title?: string
  meta_keywords?: string[]
  meta_description?: string
  view_count?: number
  preorder_release_date?: string
  preorder_message?: string
  is_preorder_only?: boolean
  is_price_hidden?: boolean
  price_hidden_label?: string
  custom_url?: ProductCustomUrl
  open_graph_type?:
    | 'product'
    | 'album'
    | 'book'
    | 'drink'
    | 'food'
    | 'game'
    | 'movie'
    | 'song'
    | 'tv_show'
  open_graph_title?: string
  open_graph_description?: string
  open_graph_use_meta_description?: boolean
  open_graph_use_product_name?: boolean
  open_graph_use_image?: boolean
  brand_name?: string
  gtin?: string
  mpn?: string
  reviews_rating_sum?: number
  reviews_count?: number
  total_sold?: number
  custom_fields: ProductCustomField[]
  bulk_pricing_rules: ProductBulkPricing[]
  images?: ProductImage[]
  videos?: ProductVideo[]
  date_created?: string
  date_modified?: string
  base_variant_id?: number
  calculated_price?: number
  options: ProductOption[]
  modifiers: ProductModifier[]
  option_set_id?: number
  option_set_display?: string
  variants: ProductVariant[]
}

export type ProductUpdate = {
  id?: number
  name: string
  type: 'digital' | 'physical'
  sku?: string
  description?: string
  weight: number
  width?: number
  depth?: number
  height?: number
  price: number
  cost_price?: number
  retail_price?: number
  sale_price?: number
  map_price?: number
  tax_class_id?: number
  product_tax_code?: string
  categories?: number[]
  brand_id?: number
  inventory_level?: number
  inventory_warning_level?: number
  inventory_tracking?: 'none' | 'product' | 'variant'
  fixed_cost_shipping_price?: number
  is_free_shipping?: boolean
  is_visible?: boolean
  is_featured?: boolean
  related_products?: number[]
  warranty?: string
  bin_picking_number?: string
  layout_file?: string
  upc?: string
  search_keywords?: string
  availability_description?: string
  availability?: 'available' | 'disabled' | 'preorder'
  gift_wrapping_options_type?: 'any' | 'none' | 'list'
  gift_wrapping_options_list?: number[]
  sort_order?: number
  condition?: 'New' | 'Used' | 'Refurbished'
  is_condition_shown?: boolean
  order_quantity_minimum?: number
  order_quantity_maximum?: number
  page_title?: string
  meta_keywords?: string[]
  meta_description?: string
  view_count?: number
  preorder_release_date?: string
  preorder_message?: string
  is_preorder_only?: boolean
  is_price_hidden?: boolean
  price_hidden_label?: string
  custom_url?: ProductCustomUrl
  open_graph_type?:
    | 'product'
    | 'album'
    | 'book'
    | 'drink'
    | 'food'
    | 'game'
    | 'movie'
    | 'song'
    | 'tv_show'
  open_graph_title?: string
  open_graph_description?: string
  open_graph_use_meta_description?: boolean
  open_graph_use_product_name?: boolean
  open_graph_use_image?: boolean
  brand_name?: string
  gtin?: string
  mpn?: string
  reviews_rating_sum?: number
  reviews_count?: number
  total_sold?: number
  custom_fields: ProductCustomField[]
  bulk_pricing_rules: ProductBulkPricing[]
  images?: ProductImage[]
  videos?: ProductVideo[]
  variants: ProductVariant[]
}

export type ProductFilter = {
  availability?: 'available' | 'disabled' | 'preorder'
  brand_id?: number
  categories?: number
  'categories:in'?: number
  condition?: 'new' | 'used' | 'refurbished'
  date_last_imported?: string
  'date_last_imported:max'?: string
  'date_last_imported:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  direction?: 'asc' | 'desc'
  exclude_fields?: Array<keyof Omit<Product, 'id'>>
  id?: number
  'id:greater'?: number[]
  'id:in'?: number[]
  'id:less'?: number[]
  'id:max'?: number[]
  'id:min'?: number[]
  'id:not_in'?: number[]
  include?: Array<
    | 'variants'
    | 'images'
    | 'custom_fields'
    | 'bulk_pricing_rules'
    | 'primary_image'
    | 'modifiers'
    | 'options'
    | 'videos'
  >
  include_fields?: Array<keyof Product>
  inventory_level?: number
  'inventory_level:greater'?: number
  'inventory_level:in'?: number
  'inventory_level:less'?: number
  'inventory_level:max'?: number
  'inventory_level:min'?: number
  'inventory_level:not_in'?: number
  inventory_low?: number
  is_featured?: 1 | 0
  is_free_shipping?: number
  is_visible?: boolean
  keyword?: string
  keyword_context?: 'shopper' | 'merchant'
  limit?: number
  name?: string
  out_of_stock?: number
  page?: number
  price?: number
  sku?: string
  'sku:in'?: string[]
  sort?:
    | 'id'
    | 'name'
    | 'sku'
    | 'price'
    | 'date_modified'
    | 'date_last_imported'
    | 'inventory_level'
    | 'is_visible'
    | 'total_sold'
  status?: number
  total_sold?: number
  type?: 'digital' | 'physical'
  upc?: string
  weight?: number
}

export type ProductPost = {
  id?: number
  name: string
  type: 'digital' | 'physical'
  sku?: string
  description?: string
  weight: number
  width?: number
  depth?: number
  height?: number
  price: number
  cost_price?: number
  retail_price?: number
  sale_price?: number
  map_price?: number
  tax_class_id?: number
  product_tax_code?: string
  categories?: number[]
  brand_id?: number
  inventory_level?: number
  inventory_warning_level?: number
  inventory_tracking?: 'none' | 'product' | 'variant'
  fixed_cost_shipping_price?: number
  is_free_shipping?: boolean
  is_visible?: boolean
  is_featured?: boolean
  related_products?: number[]
  warranty?: string
  bin_picking_number?: string
  layout_file?: string
  upc?: string
  search_keywords?: string
  availability?: 'available' | 'disabled' | 'preorder'
  availability_description?: string
  gift_wrapping_options_type?: 'any' | 'none' | 'list'
  gift_wrapping_options_list?: number[]
  sort_order?: number
  condition?: 'New' | 'Used' | 'Refurbished'
  is_condition_shown?: boolean
  order_quantity_minimum?: number
  order_quantity_maximum?: number
  page_title?: string
  meta_keywords?: string[]
  meta_description?: string
  view_count?: number
  preorder_release_date?: string
  preorder_message?: string
  is_preorder_only?: boolean
  is_price_hidden?: boolean
  price_hidden_label?: string
  custom_url?: ProductCustomUrl
  open_graph_type?:
    | 'product'
    | 'album'
    | 'book'
    | 'drink'
    | 'food'
    | 'game'
    | 'movie'
    | 'song'
    | 'tv_show'
  open_graph_title?: string
  open_graph_description?: string
  open_graph_use_meta_description?: boolean
  open_graph_use_product_name?: boolean
  open_graph_use_image?: boolean
  brand_name?: string
  gtin?: string
  mpn?: string
  reviews_rating_sum?: number
  reviews_count?: number
  total_sold?: number
  custom_fields: ProductCustomField[]
  bulk_pricing_rules: ProductBulkPricing[]
  images?: ProductImage[]
  videos?: ProductVideo[]
}

export type ProductDelete = {
  brand_id?: number
  categories?: number
  condition?: 'New' | 'Used' | 'Refurbished'
  date_last_imported?: string
  date_modified?: string
  inventory_level?: number
  is_featured?: 1 | 0
  is_visible?: boolean
  keyword?: string
  name?: string
  price?: number
  sku?: string
  total_sold?: number
  type?: string
  weight?: number
}

export type ProductComplexRuleConditionPost = {
  id?: number | null
  rule_id?: number | null
  modifier_id: number | null
  modifier_value_id: number | null
  variant_id: number | null
  combination_id?: number
}

export type ProductComplexRuleCondition = {
  id?: number
  rule_id?: number
  modifier_id: number
  modifier_value_id: number
  variant_id: number
  combination_id?: number
}

export type ProductComplexRule = {
  id?: number
  product_id?: number
  sort_order?: number
  enabled?: boolean
  stop?: boolean
  price_adjuster?: {
    adjuster?: 'relative' | 'percentage'
    adjuster_value?: number
  }
  weight_adjuster?: {
    adjuster?: 'relative' | 'percentage'
    adjuster_value?: number
  }
  purchasing_disabled?: boolean
  purchasing_disabled_message?: string
  purchasing_hidden?: boolean
  image_url?: string
  conditions: ProductComplexRuleCondition[]
}

export type ProductComplexRulePost = {
  id?: number
  product_id?: number
  sort_order?: number
  enabled?: boolean
  stop?: boolean
  price_adjuster?: {
    adjuster?: 'relative' | 'percentage' | null
    adjuster_value?: number
  }
  weight_adjuster?: {
    adjuster?: 'relative' | 'percentage' | null
    adjuster_value?: number
  }
  purchasing_disabled?: boolean
  purchasing_disabled_message?: string
  purchasing_hidden?: boolean
  image_url?: string
  conditions: ProductComplexRuleConditionPost[]
}

export type ProductMetafield = {
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

export type ProductReview = {
  title: string
  text?: string
  status?: string
  rating?: number
  email?: string
  name?: string
  date_reviewed: string
  id?: number
  product_id?: number
  date_created?: string
  date_modified?: string
}

export type ProductChannelAssigment = {
  product_id?: number
  channel_id?: number
}

export type ProductChannelFilter = {
  'channel_id:in'?: string
  limit?: number
  page?: number
  'product_id:in'?: string
}

export type ProductCategoryAssigment = {
  product_id?: number
  category_id?: number
}

export type ProductCategoryFilter = {
  'category_id:in'?: string
  limit?: number
  page?: number
  'product_id:in'?: string
}
