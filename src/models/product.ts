export type ProductSortOrder = {
  product_id: number
  sort_order: number
}

export type ProductImage = {
  image_file: File
  is_thumbnail: boolean
  sort_order: number
  description: string
  image_url: string
  id: number
  product_id: number
  url_zoom: string
  url_standard: string
  url_thumbnail: string
  url_tiny: string
  date_modified: string
}

export type ProductBulkPricing = {
  id: number
  quantity_min: number
  quantity_max: number
  type: string
  amount: number
}

export type ProductCustomField = {
  id: number
  name: string
  value: string
}

export type ProductVideo = {
  title: string
  description: string
  sort_order: number
  type: string
  video_id: string
  id: number
  product_id: number
  length: string
}

export type ProductModifierOptionValue = {
  is_default: boolean
  label: string
  sort_order: number
  value_data?: {
    colors?: string[]
    checked_value?: boolean
  }
  adjusters: {
    price: {
      adjuster: string
      adjuster_value: number
    }
    weight: {
      adjuster: string
      adjuster_value: number
    }
    image_url: string
    purchasing_disabled: {
      status: boolean
      message: string
    }
  }
  id: number
  option_id: number
}

export type ProductConfig = {
  default_value: string
  checked_by_default: boolean
  checkbox_label: string
  date_limited: boolean
  date_limit_mode: string
  date_earliest_value: string
  date_latest_value: string
  file_types_mode: string
  file_types_supported: string[]
  file_types_other: string[]
  file_max_size: number
  text_characters_limited: boolean
  text_min_length: number
  text_max_length: number
  text_lines_limited: boolean
  text_max_lines: number
  number_limited: boolean
  number_limit_mode: string
  number_lowest_value: number
  number_highest_value: number
  number_integers_only: boolean
  product_list_adjusts_inventory: boolean
  product_list_adjusts_pricing: boolean
  product_list_shipping_calc: string
}

export type ProductModifier = {
  type: string
  required: boolean
  sort_order: number
  config: ProductConfig
  display_name: string
  id: number
  product_id: number
  name: string
  option_values: ProductModifierOptionValue[]
}

export type ProductOptionValue = {
  is_default: boolean
  label: string
  sort_order: number
  value_data?: {
    colors?: string[]
    checked_value?: boolean
  }
  id: number
}

export type ProductOption = {
  id: number
  product_id: number
  display_name: string
  type: string
  config: ProductConfig
  sort_order: number
  option_values: ProductOptionValue | ProductOptionValue[]
  name?: string
  image_url?: string
}

export type ProductVariantOptionValue = {
  option_display_name: string
  label: string
  id: number
  option_id: number
}

export type ProductVariant = {
  cost_price: number
  price: number
  sale_price: number
  retail_price: number
  weight: number
  width: number
  height: number
  depth: number
  is_free_shipping: boolean
  fixed_cost_shipping_price: number
  purchasing_disabled: boolean
  purchasing_disabled_message: string
  upc: string
  inventory_level: number
  inventory_warning_level: number
  bin_picking_number: string
  mpn: string
  gtin: string
  id: number
  product_id: number
  sku: string
  sku_id: number
  option_values: ProductVariantOptionValue[]
  calculated_price: number
  calculated_weight: number
}

export type ProductCustomUrl = {
  url: string
  is_customized: boolean
}

export type Product = {
  id: number
  name: string
  type: string
  sku: string
  description: string
  weight: number
  width: number
  depth: number
  height: number
  price: number
  cost_price: number
  retail_price: number
  sale_price: number
  map_price: number
  tax_class_id: number
  product_tax_code: string
  categories: number[]
  brand_id: number
  inventory_level: number
  inventory_warning_level: number
  inventory_tracking: string
  fixed_cost_shipping_price: number
  is_free_shipping: boolean
  is_visible: boolean
  is_featured: boolean
  related_products: number[]
  warranty: string
  bin_picking_number: string
  layout_file: string
  upc: string
  search_keywords: string
  availability_description: string
  availability: string
  gift_wrapping_options_type: string
  gift_wrapping_options_list: number[]
  sort_order: number
  condition: string
  is_condition_shown: boolean
  order_quantity_minimum: number
  order_quantity_maximum: number
  page_title: string
  meta_keywords: string[]
  meta_description: string
  view_count: number
  preorder_release_date: string
  preorder_message: string
  is_preorder_only: boolean
  is_price_hidden: boolean
  price_hidden_label: string
  custom_url: ProductCustomUrl
  open_graph_type: string
  open_graph_title: string
  open_graph_description: string
  open_graph_use_meta_description: boolean
  open_graph_use_product_name: boolean
  open_graph_use_image: boolean
  brand_name: string
  gtin: string
  mpn: string
  reviews_rating_sum: number
  reviews_count: number
  total_sold: number
  custom_fields: ProductCustomField[]
  bulk_pricing_rules: ProductBulkPricing[]
  images: ProductImage[]
  videos: ProductVideo[]
  date_created: string
  date_modified: string
  base_variant_id: number
  calculated_price: number
  options: ProductOption[]
  modifiers: ProductModifier[]
  option_set_id: number
  option_set_display: string
  variants: ProductVariant[]
}

export type ProductUpdate = {
  id: number
  name: string
  type: string
  sku: string
  description: string
  weight: number
  width: number
  depth: number
  height: number
  price: number
  cost_price: number
  retail_price: number
  sale_price: number
  map_price: number
  tax_class_id: number
  product_tax_code: string
  categories: number[]
  brand_id: number
  inventory_level: number
  inventory_warning_level: number
  inventory_tracking: string
  fixed_cost_shipping_price: number
  is_free_shipping: boolean
  is_visible: boolean
  is_featured: boolean
  related_products: number[]
  warranty: string
  bin_picking_number: string
  layout_file: string
  upc: string
  search_keywords: string
  availability_description: string
  availability: string
  gift_wrapping_options_type: string
  gift_wrapping_options_list: number[]
  sort_order: number
  condition: string
  is_condition_shown: boolean
  order_quantity_minimum: number
  order_quantity_maximum: number
  page_title: string
  meta_keywords: string[]
  meta_description: string
  view_count: number
  preorder_release_date: string
  preorder_message: string
  is_preorder_only: boolean
  is_price_hidden: boolean
  price_hidden_label: string
  custom_url: ProductCustomUrl
  open_graph_type: string
  open_graph_title: string
  open_graph_description: string
  open_graph_use_meta_description: boolean
  open_graph_use_product_name: boolean
  open_graph_use_image: boolean
  brand_name: string
  gtin: string
  mpn: string
  reviews_rating_sum: number
  reviews_count: number
  total_sold: number
  custom_fields: ProductCustomField[]
  bulk_pricing_rules: ProductBulkPricing[]
  images: ProductImage[]
  videos: ProductVideo[]
  variants: ProductVariant[]
}

export type ProductFilter = {
  availability?: string
  brand_id?: number
  categories?: number
  'categories:in'?: number
  condition?: string
  date_last_imported?: string
  'date_last_imported:max'?: string
  'date_last_imported:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  direction?: string
  exclude_fields?: string
  id?: number
  'id:greater'?: number[]
  'id:in'?: number[]
  'id:less'?: number[]
  'id:max'?: number[]
  'id:min'?: number[]
  'id:not_in'?: number[]
  include?: string
  include_fields?: string
  inventory_level?: number
  'inventory_level:greater'?: number
  'inventory_level:in'?: number
  'inventory_level:less'?: number
  'inventory_level:max'?: number
  'inventory_level:min'?: number
  'inventory_level:not_in'?: number
  inventory_low?: number
  is_featured?: number
  is_free_shipping?: number
  is_visible?: boolean
  keyword?: string
  keyword_context?: string
  limit?: number
  name?: string
  out_of_stock?: number
  page?: number
  price?: number
  sku?: string
  'sku:in'?: string[]
  sort?: string
  status?: number
  total_sold?: number
  type?: string
  upc?: string
  weight?: number
}

export type ProductPost = {
  id: number
  name: string
  type: string
  sku: string
  description: string
  weight: number
  width: number
  depth: number
  height: number
  price: number
  cost_price: number
  retail_price: number
  sale_price: number
  map_price: number
  tax_class_id: number
  product_tax_code: string
  categories: number[]
  brand_id: number
  inventory_level: number
  inventory_warning_level: number
  inventory_tracking: string
  fixed_cost_shipping_price: number
  is_free_shipping: boolean
  is_visible: boolean
  is_featured: boolean
  related_products: number[]
  warranty: string
  bin_picking_number: string
  layout_file: string
  upc: string
  search_keywords: string
  availability: string
  availability_description: string
  gift_wrapping_options_type: string
  gift_wrapping_options_list: number[]
  sort_order: number
  condition: string
  is_condition_shown: boolean
  order_quantity_minimum: number
  order_quantity_maximum: number
  page_title: string
  meta_keywords: string[]
  meta_description: string
  view_count: number
  preorder_release_date: string
  preorder_message: string
  is_preorder_only: boolean
  is_price_hidden: boolean
  price_hidden_label: string
  custom_url: ProductCustomUrl
  open_graph_type: string
  open_graph_title: string
  open_graph_description: string
  open_graph_use_meta_description: boolean
  open_graph_use_product_name: boolean
  open_graph_use_image: boolean
  brand_name: string
  gtin: string
  mpn: string
  reviews_rating_sum: number
  reviews_count: number
  total_sold: number
  custom_fields: ProductCustomField[]
  bulk_pricing_rules: ProductBulkPricing[]
  images: ProductImage[]
  videos: ProductVideo[]
}

export type ProductDelete = {
  brand_id: number
  categories: number
  condition: string
  date_last_imported: string
  date_modified: string
  inventory_level: number
  is_featured: number
  is_visible: boolean
  keyword: string
  name: string
  price: number
  sku: string
  total_sold: number
  type: string
  weight: number
}

export type ProductComplexRuleConditions = {
  id: number
  rule_id: number
  modifier_id: number
  modifier_value_id: number
  variant_id: number
  combination_id: number
}

export type ProductComplexRule = {
  id: number
  product_id: number
  sort_order: number
  enabled: boolean
  stop: boolean
  price_adjuster: {
    adjuster: string
    adjuster_value: number
  }
  weight_adjuster: {
    adjuster: string
    adjuster_value: number
  }
  purchasing_disabled: boolean
  purchasing_disabled_message: string
  purchasing_hidden: boolean
  image_url: string
  conditions: ProductComplexRuleConditions[]
}

export type ProductMetafield = {
  permission_set: string
  namespace: string
  key: string
  value: string
  description: string
  resource_type: string
  resource_id: number
  id: number
  date_created: string
  date_modified: string
}

export type ProductImageUrl = {
  image_url: string
}

export type ProductReview = {
  title: string
  text: string
  status: string
  rating: number
  email: string
  name: string
  date_reviewed: string
  id: number
  product_id: number
  date_created: string
  date_modified: string
}

export type ProductChannelAssigment = {
  product_id: number
  channel_id: number
}

export type ProductChannelFilter = {
  'channel_id:in'?: string
  limit?: number
  page?: number
  'product_id:in'?: string
}

export type ProductCategoryAssigment = {
  product_id?: number
  category_id: number
}

export type ProductCategoryFilter = {
  'category_id:in'?: string
  limit?: number
  page?: number
  'product_id:in'?: string
}