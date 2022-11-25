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
  id: string
  coupon_type: CouponType
}
