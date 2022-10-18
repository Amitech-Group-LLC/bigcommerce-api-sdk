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

export type CreateData = {
  name: string
  type: string
}