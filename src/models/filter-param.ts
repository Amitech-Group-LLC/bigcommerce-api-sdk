export type FilterParam<T> = {
  include_fields?: Array<keyof T>
  exclude_fields?: Array<keyof Omit<T, 'id'>>
}

export type ProductFilterParam<T> = FilterParam<T> & {
  limit?: number
  page?: number
}
