export type CurrentCustomerData = {
  customer?: CustomerObject
  iss?: string
  sub?: string
  iat?: number
  exp?: number
  version?: number
  aud?: string
  application_id?: string
  store_hash?: string
  operation?: string
}

export type CustomerObject = {
  id?: number
  email?: string
  group_id?: string
}

export type CurrentCustomerParam = {
  app_client_id: string
}
