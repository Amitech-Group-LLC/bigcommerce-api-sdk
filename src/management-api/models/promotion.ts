type PromotionBanner = {
  id?: string
  type?: string
  page?: string[]
  text?: string
}

export type PromotionsObject = {
  banners?: PromotionBanner
}
