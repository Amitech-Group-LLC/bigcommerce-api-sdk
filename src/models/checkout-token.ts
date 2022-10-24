export type CheckoutTokenParams = {
  maxUses?: number
  ttl?: number
}

export type CheckoutTokenData = {
  checkoutToken?: string
  meta?: object
}
