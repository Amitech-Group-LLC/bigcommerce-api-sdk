export type MarketingBanner = {
  id?: number
  date_created?: string
  item_id?: string
  name: string
  content: string
  page: 'home_page' | 'category_page' | 'brand_page' | 'search_page'
  location: 'top' | 'bottom'
  date_type: 'always' | 'custom'
  date_from?: string
  date_to?: string
  visible?: '1' | '0'
}

export type MarketingBannerPost = {
  name: string
  content: string
  page: 'home_page' | 'category_page' | 'brand_page' | 'search_page'
  location: 'top' | 'bottom'
  date_type: 'always' | 'custom'
  date_from?: string
  date_to?: string
  visible?: '1' | '0'
}

export type MarketingBannerPut = {
  item_id: string
  name: string
  content: string
  page: 'home_page' | 'category_page' | 'brand_page' | 'search_page'
  location: 'top' | 'bottom'
  date_type: 'always' | 'custom'
  date_from?: string
  date_to?: string
  visible?: '1' | '0'
}

export type Count = {
  count?: number
}

export type MarketingCoupon = {
  id: number
  name: string
  type:
    | 'per_item_discount'
    | 'percentage_discount'
    | 'per_total_discount'
    | 'shipping_discount'
    | 'free_shipping'
    | 'promotion'
  amount: string
  min_purchase?: string
  expires?: string
  enabled?: boolean
  code: string
  applies_to: {
    entity?: string
    ids?: number[]
  }
  num_uses?: number
  max_uses?: number
  max_uses_per_customer?: number
  restricted_to?: {
    countries?: string
  }
  shipping_methods?: string[]
  date_created?: string
}

export type MarketingCouponPost = {
  name: string
  type:
    | 'per_item_discount'
    | 'percentage_discount'
    | 'per_total_discount'
    | 'shipping_discount'
    | 'free_shipping'
    | 'promotion'
  amount: string
  min_purchase?: string
  expires?: string
  enabled?: boolean
  code: string
  applies_to: {
    entity?: string
    ids?: number[]
  }
  num_uses?: number
  max_uses?: number
  max_uses_per_customer?: number
  restricted_to?: {
    countries?: string
  }
  shipping_methods?: string[]
}

export type MarketingGiftCertificate = {
  to_name: string
  to_email: string
  from_name: string
  from_email: string
  amount: string
  id?: number
  customer_id?: number
  order_id?: number
  balance?: string
  purchase_date?: string
  expiry_date?: string
  template?:
    | 'Birthday'
    | 'Girl'
    | 'Boy'
    | 'Celebration'
    | 'Christmas'
    | 'General'
  message?: string
  code?: string
  status?: 'active' | 'pending' | 'disabled' | 'expired'
}

export type MarketingGiftCertificatePost = {
  to_name: string
  to_email: string
  from_name: string
  from_email: string
  amount: string
  customer_id?: number
  balance?: string
  purchase_date?: string
  expiry_date?: string
  template?:
    | 'Birthday'
    | 'Girl'
    | 'Boy'
    | 'Celebration'
    | 'Christmas'
    | 'General'
  message?: string
  code?: string
  status?: 'active' | 'pending' | 'disabled' | 'expired'
  currency_code?: string
}

export type MarketingGiftCertificatePut = {
  to_name: string
  to_email: string
  from_name: string
  from_email: string
  amount: string
  customer_id?: number
  balance?: string
  purchase_date?: string
  expiry_date?: string
  template?:
    | 'Birthday'
    | 'Girl'
    | 'Boy'
    | 'Celebration'
    | 'Christmas'
    | 'General'
  message?: string
  code?: string
  status?: 'active' | 'pending' | 'disabled' | 'expired'
}
