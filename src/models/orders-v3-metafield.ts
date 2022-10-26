export type OrdersV3MetafieldParams = {
  direction?: 'asc' | 'desc'
  key?: string
  limit?: number
  namespace?: string
  page?: number
}

export type OrdersV3MetafieldData = {
  permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access'
  namespace?: string
  key?: string
  value?: string
  description?: string
  resource_type?: string
  resource_id?: number
  id?: number
  date_created?: string
  date_modified?: string
}
