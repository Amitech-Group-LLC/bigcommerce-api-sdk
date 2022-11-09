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
