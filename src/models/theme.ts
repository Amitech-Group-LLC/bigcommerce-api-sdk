export type ThemeData = {
  variations?: ThemeVariation[]
  uuid?: string
  name?: string
  is_private?: boolean
}

export type ThemeVariation = {
  description?: string
  external_id?: string
  name?: string
  uuid?: string
}

export type ThemeUploadData = {
  file: File
}

export type ThemeUpload = {
  job_id?: string
}

export type ThemeActionData = {
  which?: 'original' | 'last_activated' | 'last_created'
}

export type ThemeActionActivateData = {
  variation_id: string
  which: 'original' | 'last_activated' | 'last_created'
}

export type ThemeConfigurationParam = {
  limit?: number
  page?: number
  'site_id:in': number[]
  'channel_id:in'?: number[]
  'uuid:in'?: string[]
  variation_uuid: string
}

export type ThemeConfigurationData = {
  uuid?: string
  theme_uuid?: string
  variation_id?: string
  settings?: object
  date_created?: string
  site_id?: number
}

export type ThemeConfigurationValidateData = {
  variation_id?: string
  settings?: object
}