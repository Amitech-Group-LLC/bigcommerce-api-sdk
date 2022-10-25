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