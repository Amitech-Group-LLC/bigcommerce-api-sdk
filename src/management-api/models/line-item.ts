import { AppliedDiscount } from './discount'
import { CartCoupon } from './coupon'

export type Option = {
  name?: string
  value?: string
  nameId?: number
  valueId?: number
}

export type OptionSelection = Option & {
  option_id?: number
  option_value?: number
}

export type LinePhysicalItem = {
  id?: string
  variant_id: number
  product_id: number
  sku?: string
  name?: string
  url?: string
  quantity: number
  is_taxable?: boolean
  image_url?: string
  discounts?: AppliedDiscount[]
  coupons?: CartCoupon[]
  discount_amount?: number
  coupon_amount?: number
  original_price?: number
  list_price?: number
  sale_price?: number
  extended_list_price?: number
  extended_sale_price?: number
  options?: Option[]
  is_require_shipping?: boolean
  gift_wrapping?: {
    name?: string
    message?: string
    amount?: number
  }
}

export type LineDigitalItem = {
  id?: string
  variant_id?: number
  product_id?: number
  sku?: string
  name?: string
  url?: string
  quantity?: number
  is_taxable?: boolean
  image_url?: string
  discounts?: AppliedDiscount[]
  coupons?: CartCoupon[]
  discount_amount?: number
  coupon_amount?: number
  original_price?: number
  list_price?: number
  sale_price?: number
  extended_list_price?: number
  extended_sale_price?: number
  options?: Option[]
  download_file_urls?: string[]
  download_page_url?: string
  download_size?: string
}

export type CustomItem = {
  id?: string
  sku?: string
  name?: string
  quantity?: string
  list_price?: string
}
