export type CustomerSettingsPerChannelData = {
  privacy_settings?: {
    ask_shopper_for_tracking_consent?: boolean
    policy_url?: string
  }
  customer_group_settings?: {
    guest_customer_group_id?: number
    default_customer_group_id?: number
  }
  allow_global_logins?: boolean
}
