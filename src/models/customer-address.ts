export type CustomerAddressParams = {
  'company:in'?: string[]
  'customer_id:in'?: number[]
  'id:in'?: number[]
  include?: 'formfields'
  limit?: number
  'name:in'?: string[]
  page?: number
}

export type CustomerAddressData = {
  address1: string
  address2?: string
  address_type?: string
  city: string
  company?: string
  country?: string
  country_code: string
  customer_id: number
  first_name: string
  id: number
  last_name: string
  phone?: string
  postal_code: string
  state_or_province: string
  form_fields?: FormFields[]
}

export type FormFields = {
  name: string
  value: string | number | string[]
  address_id: number
}

export type CreateAddressData = {
  first_name: string
  last_name: string
  company?: string
  address1: string
  address2?: string
  city: string
  state_or_province?: string
  postal_code?: string
  country_code: string
  phone?: string
  address_type?: string
  customer_id: number
  form_fields?: Omit<FormFields, 'address_id'>[]
}

export type UpdateAddressData = {
  first_name?: string
  last_name?: string
  company?: string
  address1?: string
  address2?: string
  city?: string
  state_or_province?: string
  postal_code?: string
  country_code?: string
  phone?: string
  address_type?: string
  id: number
  form_fields?: Omit<FormFields, 'address_id'>[]
}
