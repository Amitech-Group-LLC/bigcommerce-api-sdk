import { BillingAddressCustomFields } from './checkout'

export type CheckoutBillingAddressData = {
  first_name?: string
  last_name?: string
  email: string
  company?: string
  address1?: string
  address2?: string
  city?: string
  state_or_province?: string
  state_or_province_code?: string
  country_code: string
  postal_code?: string
  phone?: string
  custom_fields?: BillingAddressCustomFields[]
}