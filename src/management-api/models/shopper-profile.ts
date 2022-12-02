export type ShopperProfileParam = {
  limit?: number
  page?: number
}

export type ShopperProfileData = {
  id?: string
  customer_id?: number
  created_at?: string
  updated_at?: string
}

export type ShopperProfileCreateData = Pick<ShopperProfileData, 'customer_id'>

export type ShopperProfileDeleteParam = {
  'id:in'?: string[]
}

export type SegmentShopperProfileData = ShopperProfileData & {
  description?: string
}