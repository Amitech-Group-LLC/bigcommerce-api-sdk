export type Customer = {
  email: string
  first_name: string
  last_name: string
  company: string
  phone: string
  registration_ip_address: string
  notes: string
  tax_exempt_category: string
  customer_group_id: number
  id: number
  date_modified: string
  date_created: string
  address_count?: number
  attribute_count?: number
  authentication: {
    force_password_reset: boolean
  }
  addresses?: Address[]
  attributes?: Attribute[]
  form_fields?: FormField[]
  store_credit_amounts?: StoreCreditAmount[]
  accepts_product_review_abandoned_cart_emails: boolean
  origin_channel_id: number
  channel_ids: number[]
}

export type CustomerV2FormField = {
  name?: string
  value?: string
}

export type CustomerV2 = {
  id?: number
  date_created?: string
  date_modified?: string
  _authentication?: {
    force_reset?: boolean
    password?: string
    password_confirmation?: string
  }
  company?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  store_credit?: string
  registration_ip_address?: string
  customer_group_id?: number
  notes?: string
  tax_exempt_category?: string
  accepts_marketing?: boolean
  addresses?: {
    url?: string
    resource?: string
  }
  form_fields?: CustomerV2FormField[]
  reset_pass_on_login?: boolean
}

export type CustomerV2Response = Omit<CustomerV2, 'id' | 'date_created' | 'date_modified'>

export type CustomerV2UpdatePassword = {
  password?: string
}

export type CustomerV2ConfirmPassword = {
  password?: string
  password_confirmation?: string
}

export type CustomerV2ForceResetPassword = {
  force_reset?: boolean
}

export type CustomerV2Post = {
  _authentication?:
    | CustomerV2UpdatePassword
    | CustomerV2ConfirmPassword
    | CustomerV2ForceResetPassword
  company?: string
  first_name?: string
  last_name?: string
  phone?: string
  date_modified?: string
  store_credit?: number
  registration_ip_address?: string
  customer_group_id?: number
  notes?: string
  tax_exempt_category?: string
}

export type CustomerFilter = {
  'company:in'?: string[]
  'customer_group_id:in'?: string[]
  date_created?: string
  'date_created:max'?: string
  'date_created:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  'email:in'?: string
  'id:in'?: number[]
  include?:
    | 'addresses'
    | 'storecredit'
    | 'attributes'
    | 'formfields'
    | 'shopper_profile_id'
    | 'segment_ids'
  limit?: number
  'name:in'?: string[]
  'name:like'?: string[]
  page?: number
  'registration_ip_address:in'?: number[]
  sort?:
    | 'date_created:asc'
    | 'date_created:desc'
    | 'last_name:asc'
    | 'last_name:desc'
    | 'date_modified:asc'
    | 'date_modified:desc'
}

export type CustomerV2Filter = {
  company?: string
  customer_group_id?: number
  email?: string
  first_name?: string
  last_name?: string
  max_date_created?: string
  max_date_modified?: string
  max_id?: number
  min_date_created?: string
  min_date_modified?: string
  min_id?: number
  phone?: string
  store_credit?: string
  tax_exempt_category?: string
}

export type CustomerCount = {
  count?: number
}

export type CustomerV2GroupDiscountRule = {
  type?: 'price_list' | 'all' | 'category' | 'product'
  method?: 'percent' | 'fixed' | 'price'
  amount?: string
  price_list_id?: number
}

export type CustomerV2Group = {
  id?: number
  name?: string
  is_default?: boolean
  category_access?: {
    type?: 'all' | 'specific' | 'none'
    categories?: number[]
  }
  discount_rules?: CustomerV2GroupDiscountRule[]
  is_group_for_quests?: boolean
}

export type CustomerV2GroupPost = Omit<CustomerV2Group, 'id'>

export type CustomerV2Address = {
  id?: number
  country_iso2?: string
  customer_id?: number
  first_name: string
  last_name: string
  company?: string
  street_1: string
  street_2?: string
  city: string
  state: string
  zip: string
  country: string
  phone: string
  address_type?: string
}

export type CustomerV2Password = {
  password?: string
}

export type CustomerV2Result = {
  success?: boolean
}

export type CreateData = {
  email: string
  first_name: string
  last_name: string
  company?: string
  phone?: string
  notes?: string
  tax_exempt_category?: string
  customer_group_id?: number
  authentication?: {
    force_password_reset?: boolean
    new_password?: string
  }
  addresses?: CreateAddress[]
  attributes?: Pick<Attribute, 'attribute_id' | 'attribute_value'>[]
  store_credit_amounts?: StoreCreditAmount[]
  accepts_product_review_abandoned_cart_emails?: boolean
  origin_channel_id?: number
  channel_ids?: number[]
  form_fields?: Omit<FormField, 'customer_id'>[]
}

export type UpdateData = {
  email?: string
  first_name?: string
  last_name?: string
  company?: string
  phone?: string
  registration_ip_address?: string
  notes?: string
  tax_exempt_category?: string
  customer_group_id?: number
  id: string
  authentication?: {
    force_password_reset?: boolean
    new_password?: string
  }
  store_credit_amounts?: StoreCreditAmount[]
  accepts_product_review_abandoned_cart_emails?: boolean
  origin_channel_id?: number
  channel_ids?: number[]
  form_fields?: Omit<FormField, 'customer_id'>[]
}

export type Address = {
  first_name: string
  last_name: string
  company?: string
  address1: string
  address2?: string
  city: string
  state_or_province: string
  postal_code: string
  country_code: string
  phone?: string
  address_type?: string
  customer_id: number
  id: number
  country?: string
  form_fields?: Omit<FormField, 'customer_id'>[]
}

export type CreateAddress = {
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
  form_fields?: Omit<FormField, 'customer_id'>[]
}

export type Attribute = {
  attribute_id?: number
  attribute_value?: string
  customer_id?: number
  date_created?: string
  date_modified?: string
  id?: number
}

export type FormField = {
  name: string
  value: string | number | string[]
  customer_id: number
}

export type StoreCreditAmount = {
  amount?: number
}

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

export type CustonerAttributeValuesParams = {
  'attribute_id:in'?: number[]
  'customer_id:in'?: number[]
  date_created?: string
  'date_created:max'?: string
  'date_created:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  limit?: number
  name?: string
  page?: number
}

export type CustonerAttributeValuesData = {
  attribute_id: number
  attribute_value: string
  id?: number
  customer_id: number
  date_modified?: string
  date_created?: string
}

export type UpsertData = {
  id?: number
  attribute_id: number
  value: string
  customer_id: number
}

export type CustomerAttributeParams = {
  date_created?: string
  'date_created:max'?: string
  'date_created:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  name?: string
  'name:like'?: string
  type?: string
  limit?: number
  page?: number
}

export type CustomerAttributeData = {
  name: string
  type: string
  id: number
  date_modified?: string
  date_created?: string
}

export type CreateAttributeData = {
  name: string
  type: string
}

export type UpdateAttributeData = {
  name: string
  id: number
}

export type CustomerConsentData = {
  allow?: CustomerConsentValues[]
  deny?: CustomerConsentValues[]
  updated_at?: string
}

export type CustomerConsentValues =
  | 'essential'
  | 'functional'
  | 'analytics'
  | 'targeting'

export type UpdateCustomerConsentData = Omit<CustomerConsentData, 'updated_at'>

export type CustomerFormFieldParams = {
  address_id?: number
  customer_id?: number
  field_name?: string
  field_type?:
    | 'checkboxes'
    | 'date'
    | 'multiline'
    | 'numbers'
    | 'password'
    | 'radiobuttons'
    | 'text'
    | 'picklist'
  limit?: number
  page?: number
}

export type CustomerFormFieldValue = {
  name: string
  value: string | number | string[]
  customer_id: number
}

export type CustomerAddressFormFieldValue = {
  name: string
  value: string | number | string[]
  address_id: number
}

export type CustomerFormFieldData =
  | CustomerFormFieldValue
  | CustomerAddressFormFieldValue

export type CustomerSettingData = {
  privacy_settings?: {
    ask_shopper_for_tracking_consent?: boolean
    policy_url?: string
  }
  customer_group_settings?: {
    guest_customer_group_id?: number
    default_customer_group_id?: number
  }
}

export type CustomerSettingsPerChannelData = {
  privacy_settings?: {
    ask_shopper_for_tracking_consent?: boolean
    policy_url?: string
  }
  customer_group_settings?: {
    guest_customer_group_id?: number
    default_customer_group_id?: number
  }
  allow_global_logins?: boolean
}

export type UpdateCustomerSettingsPerChannelData = Omit<
  CustomerSettingsPerChannelData,
  'allow_global_logins'
>

export type StoredInstrumentsData =
  | CardInstrument
  | PayPalAccountInstrument
  | BankAccountInstrument

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

export type CustomerValidateCredentialData = {
  email: string
  password: string
  channel_id?: number
}

export type CustomerValidateCredential = {
  customer_id?: number | null
  is_valid?: boolean
}
