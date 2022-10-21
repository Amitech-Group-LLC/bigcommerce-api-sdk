import { BillingAddressCustomFields } from './checkout'

export type CheckoutConsignmentData = {
  address: CheckoutConsignmentAddress
  line_items: CheckoutConsignmentLineItems
}

export type CheckoutConsignmentAddress = {
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

export type CheckoutConsignmentLineItems = {
  item_id: string
  quantity: number
}

export type CheckoutConsignmentIncludeParam = 'consignments.available_shipping_options'
