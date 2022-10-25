export type OrdersV2TaxData = {
  id?: number
  order_id?: number
  order_address_id?: number
  tax_rate_id?: number
  tax_class_id?: number
  name?: string
  class?: string
  rate?: string
  priority?: number
  priority_amount?: string
  line_amount?: string
  order_product_id?: string
  line_item_type?: 'item' | 'shipping' | 'handling' | 'gift-wrapping'
}

export type OrdersV2TaxParams = {
  details?: string
  limit?: number
  page?: number
}
