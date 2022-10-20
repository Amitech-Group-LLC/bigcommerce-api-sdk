export type ChekoutIncludeParams = 
  'cart.line_items.physical_items.options' | 
  'cart.line_items.digital_items.options' |
  'consignments.available_shipping_options' |
  'promotions.banners'

export type CheckoutData = {
  id?: string
  cart?: CheckoutCart
  billing_address?: CheckoutBillingAddress
  consignments?: CheckoutConsignments[]
  taxes?: CheckoutTax[]
  coupons?: CheckoutCoupons[]
  order_id?: string
  shipping_cost_total_inc_tax?: number
  shipping_cost_total_ex_tax?: number
  handling_cost_total_inc_tax?: number
  handling_cost_total_ex_tax?: number
  tax_total?: number
  subtotal_inc_tax?: number
  subtotal_ex_tax?: number
  grand_total?: number
  created_time?: string
  updated_time?: string
  customer_message?: string
  promotions?: CheckoutPromotion[]
}

export type CheckoutCart = {
  id?: string
  customer_id?: number
  email?: string
  currency?: {
    code?: string
  }
  base_amount?: number
  channel_id?: number
  discount_amount?: number
  cart_amount_inc_tax?: number
  cart_amount_ex_tax?: number
  coupons?: CheckoutCoupons[]
  discounts?: CheckoutDiscounts[]
  line_items?: CheckoutLineItems
  created_time?: string
  updated_time?: string
}

export type CheckoutCoupons = {
  code: string
  id?: string
  coupon_type?: string
  discounted_amount?: number
}

export type CheckoutDiscounts = {
  id?: string
  discounted_amount?: number
}

export type CheckoutLineItems = {
  physical_items: LineItemsPhysicalItems[]
  digital_items: Omit<LineItemsPhysicalItems, 'gift_wrapping'>[]
  gift_certificates: LineItemsGiftCertificates[]
  custom_items?: CustomItems[]
}

export type LineItemsPhysicalItems = {
  quantity: number
  id?: string
  variant_id?: number
  product_id?: number
  sku?: string
  name?: string
  url?: string
  is_taxable?: boolean
  image_url?: string
  discounts?: CheckoutDiscounts[]
  discount_amount?: number
  coupon_amount?: number
  original_price?: number
  list_price?: number
  sale_price?: number
  extended_list_price?: number
  extended_sale_price?: number
  is_require_shipping?: boolean
  is_mutable?: boolean
  parent_id?: number
  gift_wrapping?: GiftWrapping
}

export type GiftWrapping = {
  name?: string
  message?: string
  amount?: number
  amount_as_integer?: number
}

export type LineItemsGiftCertificates = {
  theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl'
  amount: number
  sender: ContactEntity
  recipient: ContactEntity
  id?: string
  name?: string
  taxable?: boolean
  message?: string
}

export type ContactEntity = {
  name?: string
  email?: string
}

export type CustomItems = {
  quantity: number
  id?: string
  extended_list_price?: number
  list_price?: number
  sku?: string
  name?: string
  image_url?: string
}

export type CheckoutBillingAddress = {
  first_name?: string
  last_name?: string
  email?: string
  company?: string
  address1?: string
  address2?: string
  city?: string
  state_or_province?: string
  state_or_province_code?: string
  country_code?: string
  postal_code?: string
  phone?: string
  custom_fields?: BillingAddressCustomFields[]
  id?: string
}

export type BillingAddressCustomFields = {
  field_id?: string
  field_value?: string
}

export type CheckoutConsignments = {
  id?: string
  shippingAddress?: object
  address?: CheckoutBillingAddress
  available_shipping_options?: AvailableShippingOption[]
  selected_shipping_option?: AvailableShippingOption
  coupon_discounts?: CouponDiscounts[]
  discounts?: Omit<CheckoutDiscounts, 'discounted_amount'>[]
  shipping_cost_inc_tax?: number
  shipping_cost_ex_tax?: number
  handling_cost_inc_tax?: number
  handling_cost_ex_tax?: number
  line_item_ids?: string[]
}

export type AvailableShippingOption = {
  description?: string
  id?: string
  type?: string
  image_url?: string
  cost?: number
  transit_time?: string
  additional_description?: string
}

export type CouponDiscounts = {
  code?: string
  amount?: number
}

export type CheckoutTax = {
  name?: string
  amount?: number
}

export type CheckoutPromotion = {
  banners?: PromotionBanner[]
}

export type PromotionBanner = {
  id?: string
  type?: string
  page?: string[]
  text?: string
}
