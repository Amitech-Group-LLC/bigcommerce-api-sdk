export type OrdersV2MessageData = {
  id?: number
  order_id?: number
  staff_id?: number
  customer_id?: number
  type?: string
  subject?: string
  message?: string
  status?: string
  is_flagged?: boolean
  date_created?: string
  customer?: object
}

export type OrdersV2MessageParams = {
  customer_id?: number
  is_flagged?: boolean
  limit?: number
  max_date_created?: string
  max_id?: number
  min_date_created?: string
  min_id?: number
  page?: number
  status?: string
}
