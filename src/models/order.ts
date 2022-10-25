export type OrderData = {
  id?: number
  date_modified?: string
  date_shipped?: string
  cart_id?: string
  status?: string
  subtotal_tax?: string
  shipping_cost_tax?: string
  shipping_cost_tax_class_id?: number
  handling_cost_tax?: string
  handling_cost_tax_class_id?: number
  wrapping_cost_tax?: string
  wrapping_cost_tax_class_id?: number
  payment_status?: 'authorized' |
    'captured' |
    'capture pending' |
    'declined' |
    'held for review' |
    'paid' |
    'partially refunded' |
    'pending' |
    'refunded' |
    'void' |
    'void pending'
  store_credit_amount?: string
  gift_certificate_amount?: string
  currency_id?: number
  currency_code?: string
  currency_exchange_rate?: string
  default_currency_id?: number
  default_currency_code?: string
  store_default_currency_code?: string
  store_default_to_transactional_exchange_rate?: string
  coupon_discount?: string
  shipping_address_count?: number
  is_email_opt_in?: boolean
  order_source?: string
  products?: OrderProducts
  shipping_addresses?: OrderProducts
  coupons?: OrderProducts
  status_id?: number
  billing_address?: OrderBillingAddress
  base_handling_cost?: string
  base_shipping_cost?: string
  base_wrapping_cost?: string
  channel_id?: number
  customer_id?:  number
  customer_message?: string
  date_created?: string
  discount_amount?: string
  ebay_order_id?: string
  external_id?: string ///////////////
  external_merchant_id?: string ///////////////
  geoip_country?: string
  geoip_country_iso2?: string
  handling_cost_ex_tax?: string
  handling_cost_inc_tax?: string
  ip_address?: string
  ip_address_v6?: string
  is_deleted?: boolean
  items_shipped?: number
  items_total?: number
  order_is_digital?: boolean
  payment_method?: string
  payment_provider_id?: string | number
  refunded_amount?: string
  shipping_cost_ex_tax?: string
  shipping_cost_inc_tax?: string
  staff_notes?: string
  subtotal_ex_tax?: string
  subtotal_inc_tax?: string
  tax_provider_id?: string
  customer_locale?: string
  external_order_id?: string
  total_ex_tax?: string
  total_inc_tax?: string
  wrapping_cost_ex_tax?: string
  wrapping_cost_inc_tax?: string
}

export type OrderProducts = {
  url?: string
  resource?: string
}

export type OrderBillingAddress = {
  form_fields?: OrderFormFields[]
  first_name?: string
  last_name?: string
  company?: string
  street_1?: string
  street_2?: string
  city?: string
  state?: string
  zip: string
  country?: string
  country_iso2?: string
  phone?: string
  email?: string
}

export type OrderFormFields = {
  name?: string
  value?: string
}

export type OrderUpdateData = {
  products?: (OrderCatalogProduct | OrderCustomProduct)[]
  shipping_addresses?: OrderShippingAddress
  base_handling_cost?: string
  base_shipping_cost?: string
  base_wrapping_cost?: string
  billing_address?: Omit<OrderBillingAddress, 'form_fields'>
  channel_id?: number
  customer_id?: number
  customer_message?: string
  date_created?: string
  default_currency_code?: string
  discount_amount?: string
  ebay_order_id?: string
  external_id?: string ///////////////
  external_merchant_id?: string /////////
  external_source?: string //////////
  geoip_country?: string
  geoip_country_iso2?: string
  handling_cost_ex_tax?: string
  handling_cost_inc_tax?: string
  ip_address?: string
  ip_address_v6?: string
  is_deleted?: boolean
  items_shipped?: number
  items_total?: number
  order_is_digital?: boolean
  payment_method?: 'Credit Card' | 'Cash' | 'Test Payment Gateway' | 'Manual'
  payment_provider_id?: string | number
  refunded_amount?: string
  shipping_cost_ex_tax?: string
  shipping_cost_inc_tax?: string
  staff_notes?: string
  status_id?: number
  subtotal_ex_tax?: string
  subtotal_inc_tax?: string
  tax_provider_id?: 'BasicTaxProvider' | 'AvaTaxProvider' | ''
  customer_locale?: string
  external_order_id?: string
  total_ex_tax?: string
  total_inc_tax?: string
  wrapping_cost_ex_tax?: string
  wrapping_cost_inc_tax?: string
}

export type OrderCatalogProduct = {
  id?: number
  product_id?: number
  name?: string
  name_customer?: string
  name_merchant?: string
  product_options?: ProductOptions[]
  quantity?: number
  price_inc_tax?: number
  price_ex_tax?: number
  upc?: string
  variant_id?: number
  wrapping_id?: number
  wrapping_name?: string
  wrapping_message?: string
  wrapping_cost_ex_tax?: number
  wrapping_cost_inc_tax?: number
}

export type ProductOptions = {
  id?: number
  value?: string
  display_name?: string
  display_name_customer?: string
  display_name_merchant?: string
  display_value?: string
  display_value_merchant?: string
  display_value_customer?: string
}

export type OrderCustomProduct = {
  name: string
  name_customer?: string
  name_merchant?: string
  quantity: number
  price_ex_tax: number
  price_inc_tax: number
  sku?: string
  upc?: string
  id?: number
}

export type OrderShippingAddress = {
  first_name?: string
  last_name?: string
  company?: string
  street_1?: string
  street_2?: string
  city?: string
  state?: string
  zip?: string
  country?: string
  country_iso2?: string
  phone?: string
  email?: string
  shipping_method?: string
}

export type GetCountOrderData = {
  statuses?: CountOrderStatus[]
  count?: number
}

export type CountOrderStatus = {
  id?: number
  name?: string
  system_label?: string
  custom_label?: string
  system_description?: string
  count?: number
  sort_order?: number
}