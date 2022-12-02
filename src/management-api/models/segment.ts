export type SegmentQueryParam = {
  'id:in'?: string[]
  limit?: number
  page?: number
}

export type SegmentData = {
  id?: string
  name?: string
  description?: string
  created_at?: string
  updated_at?: string
}

export type SegmentCreateData = Pick<SegmentData, 'name' | 'description'>

export type SegmentUpdateData = SegmentCreateData & {
  id: string
}

export type SegmentDeleteParam = Pick<SegmentQueryParam, 'id:in'>
