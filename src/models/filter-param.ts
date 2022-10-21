export type FilterParam<T> = {
  include_fields?: Array<keyof T>
  exclude_fields?: Array<keyof T>
}

export type ProductFilterParam<T> = FilterParam<T> & {
  limit?: number
  page?: number
  key?: string
  namespace?: string
  status?: number
}
