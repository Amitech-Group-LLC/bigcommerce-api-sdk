import { DateFormat } from './date-format'

export type TimeZone = {
  name: string
  raw_offset: number
  dst_offset: number
  dst_correction: boolean
  date_format: DateFormat
}
