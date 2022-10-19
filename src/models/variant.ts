export type VariantOptionValue = {
  option_display_name?: string
  label?: string
  id?: number
  option_id?: number
}

export type Variant = {
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
  id?: number
  product_id?: number
  sku?: string
  sku_id?: number
  option_values?: VariantOptionValue[]
  calculated_price?: number
}

export type VariantUpdate = {
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
  id?: number
}
