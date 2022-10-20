export type Tree = {
  id: number
  name: string
  channels: number[]
}

export type CategoryTree = {
  id: number
  parent_id: number
  depth: number
  path: number[]
  name: string
  is_visible: boolean
  children: CategoryTree[] | null
}

export type CategoryTreeFilter = {
  'channel_id:in'?: string
  'id:in'?: string
}
