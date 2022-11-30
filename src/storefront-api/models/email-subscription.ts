export type EmailSubscriptionData = {
  email?: string
  acceptsMarketingNewsletter?: boolean
  acceptsAbandonedCartEmails?: boolean
}

export type EmailSubscription = {
  id?: number
  email?: string
  firstName?: string
  lastName?: string
  source?: string
  orderId?: number | null
  consents?: any[]
}
