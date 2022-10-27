export type OrdersV3SettingData = {
  notifications?: {
    order_placed?: {
      email_addresses?: string[]
    }
    forward_invoice?: {
      email_addresses?: string[]
    }
  }
  meta?: {}
}