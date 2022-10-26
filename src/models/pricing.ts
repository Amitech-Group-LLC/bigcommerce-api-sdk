export type PricingProductPostOption = {
  option_id?: number
  value_id?: number
}

export type PricingProductPostItem = {
  product_id?: number
  variant_id?: number
  options?: PricingProductPostOption[]
}

export type PricingProductPrice = {
  as_entered?: number
  entered_inclusive?: boolean
  tax_exclusive?: number
  tax_inclusive?: number
}

export type PricingProductBulkPrice = {
  minimum?: number
  maximum?: number
  discount_amount?: number
  discount_type?: 'price' | 'percent' | 'fixed'
}

export type PricingProductPost = {
  channel_id: number
  currency_code: string
  customer_group_id: number
  items: PricingProductPostItem[]
}

export type PricingProduct = {
  product_id?: number
  variant_id?: number
  options?: PricingProductPostOption[]
  retail_price?: PricingProductPrice[]
  sale_price?: PricingProductPrice[]
  minimum_advertised_price?: PricingProductPrice[]
  price?: PricingProductPrice[]
  calculated_price?: PricingProductPrice[]
  price_range?: {
    minimum?: PricingProductPrice
    maximum?: PricingProductPrice
  }
  retail_price_range?: {
    minimum?: PricingProductPrice
    maximum?: PricingProductPrice
  }
  bulk_pricing?: PricingProductBulkPrice[]
}
