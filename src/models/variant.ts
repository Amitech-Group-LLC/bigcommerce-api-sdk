export type VariantOptionValue = {
  option_display_name: string
  label: string
  id: number
  option_id: number
}

export type Variant = {
  cost_price: number | null
  price: number  | null
  sale_price: number  | null
  retail_price: number  | null
  weight: number | null
  width: number | null
  height: number | null
  depth: number | null
  is_free_shipping: boolean
  fixed_cost_shipping_price: number | null
  purchasing_disabled: boolean
  purchasing_disabled_message: string
  upc: string | null
  inventory_level: number | null
  inventory_warning_level: number | null
  bin_picking_number: string | null
  id: number
  product_id: number
  sku: string
  sku_id: number | null
  option_values: VariantOptionValue[]
  calculated_price: number
}

export type VariantUpdate = {
  cost_price: number | null
  price: number | null
  sale_price: number | null
  retail_price: number | null
  weight: number | null
  width: number | null
  height: number | null
  depth: number | null
  is_free_shipping: boolean
  fixed_cost_shipping_price: number | null
  purchasing_disabled: boolean
  purchasing_disabled_message: string
  upc: string | null
  inventory_level: number | null
  inventory_warning_level: number | null
  bin_picking_number: string | null
  id: number
}
