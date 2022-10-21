export type CustomerValidateCredentialData = {
  email: string
  password: string
  channel_id?: number
}

export type CustomerValidateCredential = {
  customer_id?: number | null
  is_valid?: boolean
}
