export type StorefrontApiToken = {
  token?: string
}

export type StorefrontApiTokenData = {
  allowed_cors_origins?: string[]
  channel_id: number
  expires_at: number
}

export type StorefrontCustomerApiTokenData = {
  channel_id: number
  expires_at: number
}
