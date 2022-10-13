export type Result<TResult, TMeta = object> = {
  data: TResult
  meta: TMeta
}

type Meta = {
  pagination: {
    total: number
    count: number
    per_page: number
    current_page: number
    total_pages: number
    links: {
      previous?: string
      current?: string
      next?: string
    }
  }
}

export type ListResult<TData, TMeta = Meta> = Result<TData, TMeta>