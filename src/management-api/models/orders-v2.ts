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
  external_id?: any
  external_merchant_id?: any
  external_source?: any
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
  payment_method?: OrderPaymentMethod
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

export type OrderUpdateData = OrderDefaultData & {
  products?: (OrderCatalogProduct | OrderCustomProduct)[]
  billing_address?: Omit<OrderBillingAddress, 'form_fields'>
}

export type OrderCreateData = OrderDefaultData & {
  products: (OrderCatalogProduct | OrderCustomProduct)[]
  billing_address: Omit<OrderBillingAddress, 'form_fields'>
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

export type OrderParam = {
  cart_id?: string
  channel_id?: number
  customer_id?: number
  email?: string
  is_deleted?: boolean
  limit?: number
  max_date_created?: string
  max_date_modified?: string
  max_id?: number
  max_total?: number
  min_date_created?: string
  min_date_modified?: string
  min_id?: number
  min_total?: number
  page?: number
  payment_method?: 'Manual' | 'Cash on Delivery' | 'Credit Card' | 'Test Payment Gateway' | 'Pay In Store'
  sort?: OrderSortParams
  status_id?: number
}

export type OrderSortParams = 'id:asc' |
  'id:desc' | 
  'customer_id:asc' |
  'customer_id:desc' |
  'date_created:asc' |
  'date_created:desc' |
  'date_modified:asc' |
  'date_modified:desc' |
  'status_id:asc' |
  'status_id:desc' |
  'channel_id:asc' |
  'channel_id:desc' |
  'external_id:asc' |
  'external_id:desc' |
  'id' |
  'customer_id' |
  'date_created' |
  'date_modified' |
  'status' |
  'channel_id' |
  'external_id'

export type OrderDefaultData = {
  shipping_addresses?: OrderShippingAddress
  base_handling_cost?: string
  base_shipping_cost?: string
  base_wrapping_cost?: string
  channel_id?: number
  customer_id?: number
  customer_message?: string
  date_created?: string
  default_currency_code?: string
  discount_amount?: string
  ebay_order_id?: string
  external_id?: any
  external_merchant_id?: any
  external_source?: any
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
  tax_provider_id?: OrderPaymentMethod
  customer_locale?: string
  external_order_id?: string
  total_ex_tax?: string
  total_inc_tax?: string
  wrapping_cost_ex_tax?: string
  wrapping_cost_inc_tax?: string
}

export type OrderPaymentMethod = 'Credit Card' | 'Cash' | 'Test Payment Gateway' | 'Manual'

export type OrderV2CouponData = {
  id?: number
  coupon_id?: number
  order_id?: number
  code?: string | null
  amount?: string | number
  type?: 0 | 1 | 2 | 3 | 4 | 5
  discount?: number
}

export type OrderV2FilterParam = {
  limit?: number
  page?: number
}

export type OrdersV2MessageData = {
  id?: number
  order_id?: number
  staff_id?: number
  customer_id?: number
  type?: string
  subject?: string
  message?: string
  status?: string
  is_flagged?: boolean
  date_created?: string
  customer?: object
}

export type OrdersV2MessageParam = {
  customer_id?: number
  is_flagged?: boolean
  limit?: number
  max_date_created?: string
  max_id?: number
  min_date_created?: string
  min_id?: number
  page?: number
  status?: 'read' | 'unread'
}

export type OrdersV2ProductData = {
  id?: number
  order_id?: number
  product_id?: number
  order_address_id?: number
  name?: string
  sku?: string
  type?: 'physical' | 'digital'
  base_price?: string
  price_ex_tax?: string
  price_inc_tax?: string
  price_tax?: string
  base_total?: string
  total_ex_tax?: string
  total_inc_tax?: string
  total_tax?: string
  quantity?: number
  base_cost_price?: string
  cost_price_inc_tax?: string
  cost_price_ex_tax?: string
  weight?: number | string
  cost_price_tax?: string
  is_refunded?: boolean
  refunded_amount?: string
  return_id?: number
  wrapping_name?: string
  base_wrapping_cost?: string | number
  wrapping_cost_ex_tax?: string
  wrapping_cost_inc_tax?: string
  wrapping_cost_tax?: string
  wrapping_message?: string
  quantity_shipped?: number
  event_name?: string
  event_date?: string
  fixed_shipping_cost?: string
  ebay_item_id?: string
  ebay_transaction_id?: string
  option_set_id?: number
  parent_order_product_id?: number
  is_bundled_product?: boolean
  bin_picking_number?: string
  applied_discounts?: OrderV2ProductAppliedDiscounts[]
  product_options?: OrderV2ProductOptions[]
  external_id?: string
  upc?: string
  variant_id?: number
  name_customer?: string
  name_merchant?: string
  gift_certificate_id?: number
}

export type OrderV2ProductAppliedDiscounts = {
  id?: string
  amount?: string
  name?: string
  code?: string | null
  target?: 'order' | 'product'
}

export type OrderV2ProductOptions = {
  id?: number
  option_id?: number
  order_product_id?: number
  product_option_id?: number
  display_name?: string
  display_value?: string
  value?: string
  type?: 'Checkbox' | 'Date field' | 'File Upload' | 'Multi-line text field' | 'Multiple choice' | 'Product Pick List' | 'Swatch' | 'Text field'
  name?: string
  display_style?: string
  display_name_customer?: string
  display_name_merchant?: string
  display_value_customer?: string
  display_value_merchant?: string
}

export type OrdersV2ShipmentData = {
  id?: number
  order_id?: number
  customer_id?: number
  order_address_id?: number
  date_created?: string
  tracking_number?: string
  shipping_method?: string
  shipping_provider?: 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq'
  tracking_carrier?: string
  tracking_link?: string
  comments?: string
  billing_address?: Omit<OrderBillingAddress, 'form_fields'>
  shipping_address?: OrderShippingAddress
  items?: ShipmentsItems[]
}

export type ShipmentsItems = {
  order_product_id?: number
  product_id?: number
  quantity?: number
}

export type ShipmentsCreateData = ShipmentsDefaultData & {
  order_address_id: number
  items: Omit<ShipmentsItems, 'product_id'>[]
}

export type ShipmentsUpdateData = ShipmentsDefaultData & {
  order_address_id?: number
}

export type ShipmentsDefaultData = {
  tracking_number?: string
  shipping_method?: string
  shipping_provider?: 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq'
  tracking_carrier?: string
  comments?: string
}

export type ShipmentsCountData = {
  count?: number
}

export type OrdersV2ShippingAddressData = {
  id?: number
  order_id?: number
  items_total?: number
  items_shipped?: number
  base_cost?: string
  cost_ex_tax?: string
  cost_inc_tax?: string
  cost_tax?: string
  cost_tax_class_id?: number
  base_handling_cost?: string
  handling_cost_ex_tax?: string
  handling_cost_inc_tax?: string
  handling_cost_tax?: string
  handling_cost_tax_class_id?: number
  shipping_zone_id?: number
  shipping_zone_name?: string
  form_fields?: OrdersV2ShippingAddressFormField[]
  shipping_quotes?: OrdersV2ShippingAddressShippingQuotes
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

export type OrdersV2ShippingAddressFormField = {
  name?: string
  value?: string
}

export type OrdersV2ShippingAddressShippingQuotes = {
  url?: string
  resource?: string
}

export type OrdersV2ShippingQuotesData = {
  id?: string
  uuid?: string
  timestamp?: string
  shipping_provider_id?: string
  shipping_provider_quote?: any[]
  provider_code?: string
  carrier_code?: string
  rate_code?: string
  rate_id?: string
  method_id?: string
}

export type OrdersV2StatusData = {
  id?: number
  name?: string
  system_label?: string
  custom_label?: string
  system_description?: string
  order?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
}

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

export type OrdersV2TaxParam = {
  details?: string
  limit?: number
  page?: number
}

