export type TaxSettingData = {
  tax_entered_with_prices?: boolean
  price_display_settings?: PriceDisplaySetting
  fallback_strategy?: 'FIXED' | 'BASIC' | 'DISABLE'
}

export type PriceDisplaySetting = {
  show_inclusive_in_control_panel?: boolean
  invoice_price_display_strategy?: 'ZONE' | 'INCLUSIVE' | 'EXCLUSIVE'
}
