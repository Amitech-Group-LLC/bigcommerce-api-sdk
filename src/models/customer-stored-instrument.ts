export type StoredInstrumentsData = CardInstrument | PayPalAccountInstrument | BankAccountInstrument

export type CardInstrument = {
  type?: string
  token?: string
  is_default?: boolean
  brand?: string
  expiry_month?: number
  expiry_year?: number
  issuer_identification_number?: string
  last_4?: string
  billing_address?: BillingAddress
}

export type BillingAddress = {
  first_name?: string
  last_name?: string
  email?: string
  company?: string
  address1?: string
  address2?: string
  city?: string
  postal_code?: string
  state_or_province?: string
  state_or_province_code?: string
  country_code?: string
  phone?: string
}

export type PayPalAccountInstrument = {
  type?: string
  token?: string
  is_default?: boolean
  email?: string
}

export type BankAccountInstrument = {
  type?: string
  token?: string
  is_default?: boolean
  masked_account_number?: string
  issuer?: string
}
