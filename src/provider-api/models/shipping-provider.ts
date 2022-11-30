export type ShippingProviderRequestData = {
  base_options: ShippingProviderBaseOprion
  zone_options?: object
  connection_options?: object
}

export type ShippingProviderRequest = {
  quote_id: string
  messages: ShippingProviderMessage[]
  carrier_quotes: ShippingProviderCarrierQuote[]
}

export type ShippingProviderValidateData = {
  connection_options: object
}

export type ShippingProviderValidate = {
  valid?: boolean
  messages?: ShippingProviderMessage[]
}

export type ShippingProviderMessage = {
  text: string
  type: 'INFO' | 'WARNING' | 'ERROR'
}

export type ShippingProviderCarrierQuote = {
  carrier_info: ShippingProviderCarrierInfo
  quotes: RateQuoteObject[]
}

export type RateQuoteObject = {
  code: string
  display_name: string
  cost: RateQuoteObjectCost
  messages?: ShippingProviderMessage[]
  description?: string
  rate_id?: string
  discounted_cost?: RateQuoteObjectCost
  dispatch_date?: string
  transit_time?: RateQuoteTransitTime
}

export type RateQuoteTransitTime = {
  units?: 'BUSINESS_DAYS' | 'DAYS' | 'HOURS'
  duration?: number
}

export type RateQuoteObjectCost = {
  currency: string
  amount: number
}

export type ShippingProviderCarrierInfo = {
  code: string
  display_name: string
}

export type ShippingProviderBaseOprion = {
  origin: ShippingProviderAddress
  destination: ShippingProviderAddress
  items: ShippingProviderItem[]
  customer?: CustomerDetail
  cart_id?: string
  store_id: string
  request_context?: RequestContext
}

export type ShippingProviderAddress = {
  street_1?: string
  street_2?: string
  zip: string
  city?: string
  state_iso2?: string
  country_iso2: string
  address_type?: 'RESIDENTIAL' | 'COMMERCIAL'
}

export type ShippingProviderItem = {
  sku?: string
  variant_id?: string
  product_id?: string
  name?: string
  length?: DimensionValue
  width?: DimensionValue
  height?: DimensionValue
  weight?: WeightValue
  discounted_price?: MoneyValue
  declared_value?: MoneyValue
  quantity?: number
  attributes?: ItemAttribute[]
}

export type DimensionValue = {
  units: 'cm' | 'in'
  value: number
}

export type WeightValue = {
  units: 'oz' | 'g'
  value: number
}

export type MoneyValue = {
  currency: string
  amount: number
}

export type ItemAttribute = {
  key?: string
  value?: string
  namespace?: string
  resource_type?: 'product' | 'variant'
  resource_id?: string
  attribute_type?: 'metafield'
}

export type CustomerDetail = {
  customer_groups?: CustomerDetailGroup[]
  customer_id?: number
}

export type CustomerDetailGroup = {
  customer_group_id?: number
  customer_group_name?: string
}

export type RequestContext = {
  reference_values?: ReferenceValue[]
}

export type ReferenceValue = {
  name?: string
  value?: string
}
