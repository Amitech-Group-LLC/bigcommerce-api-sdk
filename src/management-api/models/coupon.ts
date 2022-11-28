export enum CouponType {
  PerItemDiscount,
  PercentageDiscount,
  PerTotalDiscount,
  ShippingDiscount,
  FreeShipping,
  Promotion,
}

export type AppliedCoupon = {
  code: string
  id?: string
  coupon_type?: CouponType
  discounted_amount?: number
}

export type CartCoupon = {
  coupons?: CartCouponItem
}

export type CartCouponItem = {
  coupon_code: CartCouponCode
}

export type CartCouponCode = {
  id?: number
  code?: string
  name?: string
  discountType?: 0 | 1 | 2 | 3 | 4
  discountAmount?: number
  expiresDate?: number
  totalDiscount?: number
}
