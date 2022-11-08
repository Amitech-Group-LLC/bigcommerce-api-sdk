export type SubscriberParam = {
  date_created?: string
  date_modified?: string
  email?: string
  first_name?: string
  id?: number
  last_name?: string
  limit?: number
  order_id?: number
  page?: number
  source?: string
}

export type SubscriberData = SubscriberDefaultData & {
  email?: string
  id?: number
  date_modified?: string
  date_created?: string
}

export type SubscriberDefaultData = {
  first_name?: string
  last_name?: string
  source?: string
  order_id?: number
  channel_id?: number
}

export type SubscriberCreateData = SubscriberDefaultData & {
  email: string
}

export type SubscriberUpdateData = SubscriberDefaultData & {
  email?: string
}

export type SubscriberDeleteParam = Omit<SubscriberParam, 'id' | 'limit' | 'page'>
