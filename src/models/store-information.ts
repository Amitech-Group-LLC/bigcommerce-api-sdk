import { TimeZone } from './time-zone'

export type StoreInformation = {
  id: string
  domain: string
  secure_url: string
  control_panel_base_url: string
  name: string
  first_name: string
  last_name: string
  address: string
  country: string
  phone: string
  admin_email: string
  order_email: string
  timezone: TimeZone,
  language: string
  currency: string
  currency_symbol: string
  decimal_separator: string
  thousands_separator: string
  decimal_places: number
  currency_symbol_location: string
  weight_units: string
  dimension_units: string
  dimension_decimal_places: string
  dimension_decimal_token: string
  dimension_thousands_token: string
  plan_name: string
  plan_level: string
  industry: string
  logo: {
    url: string
  }
  is_price_entered_with_tax: boolean
  active_comparison_modules: unknown[]
  features: {
    checkout_type: string
    facebook_catalog_id: string
    graphql_storefront_api_enabled: boolean
    stencil_enabled: boolean
    sitewidehttps_enabled: boolean
    multi_storefront_enabled: boolean
    shopper_consent_tracking_enabled: boolean
    wishlists_enabled: boolean
  }
  account_uuid: string
  default_channel_id: number
  default_site_id: number
  plan_is_trial: boolean
  store_id: number
  status: string
}
