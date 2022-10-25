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

export type OrdersV2ShippingAddressParams = {
  limit?: number
  page?: number
}

export type OrdersV2ShippinsAddressUpdateData = {
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
