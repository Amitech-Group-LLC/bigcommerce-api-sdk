export type Currency = {
  id?: number
  is_transactional?: boolean
  is_default?: boolean
  last_updated?: string
  country_iso2?: string
  currency_code: string
  currency_exchange_rate: string
  auto_update?: boolean
  token_location: string
  token: string
  decimal_token: string
  thousands_token: string
  decimal_places: number
  name: string
  enabled?: boolean
}
