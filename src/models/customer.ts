export type Customer = {
  email: string,
  first_name: string,
  last_name: string,
  company: string,
  phone: string,
  registration_ip_address: string,
  notes: string,
  tax_exempt_category: string,
  customer_group_id: number,
  id: number,
  date_modified: string,
  date_created: string,
  address_count?: number,
  attribute_count?: number,
  authentication: {
    force_password_reset: boolean
  }
  addresses?: Address[],
  attributes?: Attribute[],
  form_fields?: FormField[],
  store_credit_amounts?: StoreCreditAmount[],
  accepts_product_review_abandoned_cart_emails: boolean,
  origin_channel_id: number,
  channel_ids: number[]
}

export type CreateData = {
  email: string,
  first_name: string,
  last_name: string,
  company?: string,
  phone?: string,
  notes?: string,
  tax_exempt_category?: string,
  customer_group_id?: number,
  authentication?: {
    force_password_reset?: boolean,
    new_password?: string
  }
  addresses?: CreateAddress[],
  attributes?: Pick<Attribute, 'attribute_id' | 'attribute_value'>[],
  store_credit_amounts?: StoreCreditAmount[],
  accepts_product_review_abandoned_cart_emails?: boolean,
  origin_channel_id?: number,
  channel_ids?: number[],
  form_fields?: Omit<FormField, 'customer_id'>[]
}

export type UpdateData = {
  email?: string,
  first_name?: string,
  last_name?: string,
  company?: string,
  phone?: string,
  registration_ip_address?: string
  notes?: string,
  tax_exempt_category?: string,
  customer_group_id?: number,
  id: string,
  authentication?: {
    force_password_reset?: boolean,
    new_password?: string
  }
  store_credit_amounts?: StoreCreditAmount[],
  accepts_product_review_abandoned_cart_emails?: boolean,
  origin_channel_id?: number,
  channel_ids?: number[],
  form_fields?: Omit<FormField, 'customer_id'>[]
}

export type Address = {
  first_name: string,
  last_name: string,
  company?: string,
  address1: string,
  address2?: string,
  city: string,
  state_or_province: string,
  postal_code: string,
  country_code: string,
  phone?: string,
  address_type?: string,
  customer_id: number,
  id: number,
  country?: string,
  form_fields?: Omit<FormField, 'customer_id'>[]
}

export type CreateAddress = {
  first_name: string,
  last_name: string,
  company?: string,
  address1: string,
  address2?: string,
  city: string,
  state_or_province?: string,
  postal_code?: string,
  country_code: string,
  phone?: string,
  address_type?: string,
  form_fields?: Omit<FormField, 'customer_id'>[]
}

export type Attribute = {
  attribute_id?: number,
  attribute_value?: string,
  customer_id?: number,
  date_created?: string,
  date_modified?: string,
  id?: number
}

export type FormField = {
  name: string,
  value: string | number | string[],
  customer_id: number
}

export type StoreCreditAmount = {
  amount?: number
}