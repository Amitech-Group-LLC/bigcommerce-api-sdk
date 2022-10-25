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
  billing_address?: ShipmentsBillingAddress
  shipping_address?: ShipmentsShippingAddress
  items?: ShipmentsItems[]
}

export type ShipmentsBillingAddress = {
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

export type ShipmentsShippingAddress = {
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

export type ShipmentsItems = {
  order_product_id?: number
  product_id?: number
  quantity?: number
}

export type ShipmentsParams = {
  limit?: number
  page?: number
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
