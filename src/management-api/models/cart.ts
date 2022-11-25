import { LineItem, OptionSelection, CustomItem } from './line-item'
import { AppliedDiscount } from './discount'
import { AppliedCoupon } from './coupon'
import { PromotionsObject } from './promotion'
import { GiftCertificate } from './gift-certificate'

export enum CartInclude {
  RedirectUrls = 'redirect_urls',
  PhysicalItemsOptions = 'line_items.physical_items.options',
  DigitalItemsOptions = 'line_items.digital_items.options',
  PromotionsBanners = 'promotions.banners'
}

export type CartPostVariant = {
  quantity: number
  product_id: number
  list_price?: number
  variant_id: number
  name?: string
}

export type CartPostModifier = {
  quantity: number
  product_id: number
  list_price?: number
  name?: string
  option_selections: OptionSelection[]
}

export type CartPostCustomItem = {
  sku: string
  name: string
  quantity: number
  list_price: number
}

export type CartPostData = {
  customer_id: number
  line_items: (CartPostVariant | CartPostModifier)[]
  custom_items?: CartPostCustomItem[]
  channel_id?: number
  currency?: {
    code: string
  }
  locale?: string
  gift_certificates?: GiftCertificate[]
}

export type CartRedirectUrls = {
  cart_url: string
  checkout_url: string
  embedded_checkout_url: string
}

export type Cart = {
  id: string
  parent_id: string
  customer_id: number
  email: string
  currency: {
    code: string
  }
  tax_included: number
  base_amount: number
  discount_amount: number
  cart_amount: number
  coupons: AppliedCoupon[]
  discounts: AppliedDiscount[]
  line_items: {
    physical_items: LineItem[]
    digital_items: LineItem[]
    gift_certificates: GiftCertificate[]
    custom_items: CustomItem[]
  }
  created_time: string
  updated_time: string
  channel_id: number
  locale: string
  promotions?: PromotionsObject
  redirect_urls?: CartRedirectUrls
}

export type CartAddLineItem = Pick<CartPostData, 'line_items' | 'custom_items' | 'gift_certificates'>
export type CartUpdateLineItem = Pick<CartPostData, 'custom_items' | 'gift_certificates'> & { line_item: CartPostData | CartPostVariant }
