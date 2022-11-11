export type Country = {
  id?: number
  country?: string
  country_iso2?: string
  country_iso3?: string
  states?: {
    url?: string
    resource?: string
  }
}

export type CountryFilter = {
  limit?: number
  page?: number
  country?: string
  country_iso2?: string
  country_iso3?: string
}

export type Count = {
  count?: number
}

export type StateFilter = {
  limit?: number
  page?: number
  state?: string
  state_abbreviation?: string
}

export type State = {
  id?: number
  state?: string
  state_abbreviation?: string
  country_id?: number
}
