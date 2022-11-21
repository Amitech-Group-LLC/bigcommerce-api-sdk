export type FormFieldData = {
  customerAccount?: FormFieldDefaultData[]
  shippingAddress?: FormFieldDefaultData[]
  billingAddress?: FormFieldDefaultData[]
}

export type FormFieldDefaultData = {
  id?: string
  name?: string
  custom?: boolean
  label?: string
  required?: boolean
  default?: string
  type?: 'integer' | 'string' | 'array' | 'date'
  fieldType?: 'checkbox' | 'text' | 'date' | 'multiline' | 'radio' | 'dropdown'
  min?: string
  max?: string
  maxLength?: number
  secret?: boolean
  options?: FormFieldOption
}

export type FormFieldOption = {
  helperLabel?: string
  items?: FormFieldItem[]
}

export type FormFieldItem = {
  label?: string
  value?: string
}

export type FormFieldParam = {
  filter?: 'customerAccount' | 'shippingAddress' | 'billingAddress'
}
