export type CheckoutDiscountsData = {
  cart: {
    discounts: DiscountsData[]
  }
}

export type DiscountsData = {
  discounted_amount: number
  name?: string
}
