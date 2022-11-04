export type CustomTemplateAssociation = {
  id?: number
  channel_id?: number
  entity_type?: 'product' | 'category' | 'brand' | 'page'
  entity_id?: number
  file_name?: string
  is_valid?: boolean
  date_created?: string
  date_modified?: string
}

export type CustomTemplateAssociationPut = {
  id?: number
  channel_id: number
  entity_type: 'product' | 'category' | 'brand' | 'page'
  entity_id: number
  file_name: string
}

export type CustomTemplateAssociationFilter = {
  channel_id?: number
  'entity_id:in'?: string
  is_valid?: boolean
  limit?: number
  page?: number
  type?: 'product' | 'category' | 'brand' | 'page'
}
