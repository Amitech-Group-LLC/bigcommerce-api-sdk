import { AppliedDiscount } from './discount'
import { AppliedCoupon } from './coupon'

export type Option = {
  name: string
  value: string
  nameId: number
  valueId: number
}

export type OptionSelection = Option & {
  option_id: number
  option_value: number
}

export type LineItem = {
  id: string
  parent_id: string | null
  variant_id: number
  product_id: number
  sku: string
  name: string
  url: string
  quantity: number
  taxable: boolean
  image_url: string
  discounts: AppliedDiscount[]
  coupons: AppliedCoupon[]
  discount_amount: number
  coupon_amount: number
  original_price: number
  list_price: number
  sale_price: number
  extended_list_price: number
  extended_sale_price: number
  is_require_shipping: boolean
  is_mutable: boolean
  options?: Option[]
}

export type CustomItem = {
  id: string
  sku: string
  name: string
  quantity: number
  list_price: number
  extended_list_price: number
  image_url: string
}
