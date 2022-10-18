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
