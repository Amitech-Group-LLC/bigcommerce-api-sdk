export type CustomerFormFieldParams = {
  address_id?: number
  customer_id?: number
  field_name?: string
  field_type?: 'checkboxes' | 'date' | 'multiline' | 'numbers' | 'password' | 'radiobuttons' | 'text' | 'picklist'
  limit?:  number
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

export type CustomerFormFieldData = (CustomerFormFieldValue | CustomerAddressFormFieldValue)
