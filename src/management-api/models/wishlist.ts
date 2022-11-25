export type WishlistParam = {
  customer_id?: number
  limit?: number
  page?: number
}

export type WishlistData = {
  id?: number
  customer_id?: number
  name?: string
  is_public?: boolean
  token?: string
  items?: WishlistDataItem[]
}

export type WishlistDataItem = {
  id?: number
  product_id?: number
  variant_id?: number
}

export type WishlistCreateData = {
  customer_id: number
  is_public?: boolean
  name?: string
  items: Omit<WishlistDataItem, 'id'>[]
}

export type WishlistUpdateData = {
  customer_id: number
  is_public?: boolean
  name?: string
  items: WishlistDataItem[]
}

export type WishlistAddData = {
  items: Omit<WishlistDataItem, 'id'>[]
}
