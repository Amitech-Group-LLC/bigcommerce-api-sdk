export type TaxPropertyData = {
  id?: number
  code?: string
  display_name?: string
  description?: string
  created_at?: string
  updated_at?: string
}

export type TaxPropertyParam = {
  'id:in'?: string
}

export type TaxPropertyUpdateData = Pick<TaxPropertyData, 'code' | 'display_name' | 'description'> & {
  id: number
}

export type TaxPropertyCreateData = {
  code: string
  display_name: string
  description?: string
}

export type TaxPropertyDeleteParam = {
  'id:in': string
}
