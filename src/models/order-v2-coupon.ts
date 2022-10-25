export type OrderV2CouponsData = {
  id?: number
  coupon_id?: number
  order_id?: number
  code?: string | null
  amount?: string | number
  type?: number
  discount?: number
}

export type OrderV2CouponsParams = {
  limit?: number
  page?: number
}
