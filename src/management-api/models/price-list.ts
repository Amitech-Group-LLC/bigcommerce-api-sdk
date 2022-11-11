export type PriceFilter = {
  date_created?: string
  'date_created:max'?: string
  'date_created:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  id?: number
  'id:in'?: number[]
  limit?: number
  name?: string
  'name:like'?: string[]
  page?: number
}

export type PriceAssigmentFilter = {
  channel_id?: number
  'channel_id:in'?: number[]
  customer_group_id?: number
  'customer_group_id:in'?: number[]
  id?: number
  'id:in'?: number[]
  limit?: number
  page?: number
  price_list_id?: number
  'price_list_id:in'?: number[]
}

export type PriceAssigmentDeleteFilter = {
  channel_id?: number
  'channel_id:in'?: number[]
  customer_group_id?: number
  id?: number
  price_list_id?: number
}

export type PriceAssigment = {
  id?: number
  customer_group_id?: number
  price_list_id?: number
  channel_id?: number
}

export type PriceAssigmentDelete = {
  status?: number
  title?: string
  type?: string
  instance?: string
}

export type Price = {
  id?: number
  name: string
  date_created?: string
  date_modified?: string
  active?: boolean
}

export type PricePost = {
  name: string
  active?: boolean
}

export type PriceRecordFilter = {
  calculated_price?: number
  'calculated_price:max'?: number
  'calculated_price:min'?: number
  currency?: string
  'currency:in'?: string[]
  date_created?: string
  'date_created:max'?: string
  'date_created:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  include?: 'bulk_pricing_tiers' | 'sku'
  limit?: number
  map_price?: number
  'map_price:max'?: number
  'map_price:min'?: number
  page?: number
  price?: number
  'price:max'?: number
  'price:min'?: number
  'product_id:in'?: string
  retail_price?: number
  'retail_price:max'?: number
  'retail_price:min'?: number
  sale_price?: number
  'sale_price:max'?: number
  'sale_price:min'?: number
  sku?: string
  'sku:in'?: string[]
  'variant_id:in'?: number
}

export type PriceRecordBulkPrice = {
  quantity_min?: number
  quantity_max?: number
  type?: 'fixed' | 'price' | 'percent'
  amount?: number
}

export type PriceRecord = {
  price_list_id?: number
  variant_id?: number
  price?: number
  sale_price?: number
  retail_price?: number
  map_price?: number
  calculated_price?: number
  date_created?: string
  date_modified?: string
  currency?: string
  product_id?: number
  sku?: string
  bulk_pricing_tiers?: PriceRecordBulkPrice[]
}

export type PriceRecordPut = {
  variant_id?: number
  sku?: string
  currency?: string
  price?: number
  sale_price?: number
  retail_price?: number
  map_price?: number
  bulk_pricing_tiers?: PriceRecordBulkPrice[]
}

export type PriceRecordCurrencyPut = {
  sku?: string
  price?: number
  sale_price?: number
  retail_price?: number
  map_price?: number
  bulk_pricing_tiers?: PriceRecordBulkPrice[]
}

export type PriceRecordResult = {
  status?: number
  title?: string
  type?: string
  instance?: string
}
