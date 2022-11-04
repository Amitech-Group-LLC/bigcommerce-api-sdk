export type AbandonedCart = {
  cart_id: string
}

export type AbandonedCartSetting = {
  enable_notification?: boolean
  email_customer_until_cart_is_recovered?: boolean
  marketing_emails_require_customer_consent?: boolean
  email_merchant_when_cart_is_converted?: boolean
  email_merchant_when_cart_is_abandoned?: boolean
  merchant_email_address?: string
  merchant_abandoned_cart_email_frequency_type?: 'digest' | 'individual'
  merchant_abandoned_cart_digest_email_frequency?: number
}

export type AbandonedCartSettingPost = {
  enable_notification?: boolean
  email_customer_until_cart_is_recovered: boolean
  marketing_emails_require_customer_consent: boolean
  email_merchant_when_cart_is_converted: boolean
  email_merchant_when_cart_is_abandoned: boolean
  merchant_email_address: string
  merchant_abandoned_cart_email_frequency_type: 'digest' | 'individual'
  merchant_abandoned_cart_digest_email_frequency: number
}

export type AbandonedCartEmailTemplateTransaction = {
  locale: string
  keys: {
    hello_phrase: string
  }
  additionalProperties?: string
}

export type AbandonedCartEmailTemplate = {
  subject: string
  body: string
  translations: AbandonedCartEmailTemplateTransaction[]
}

export type AbandonedCartEmail = {
  id?: number
  notify_at_minutes?:
    | 60
    | 120
    | 180
    | 240
    | 300
    | 360
    | 420
    | 480
    | 540
    | 600
    | 660
    | 720
    | 780
    | 840
    | 900
    | 960
    | 1020
    | 1080
    | 1140
    | 1200
    | 1260
    | 1320
    | 1380
    | 1440
    | 2880
    | 4320
    | 5760
    | 7200
    | 8640
    | 10080
    | 11520
    | 12960
    | 14400
  coupon_code?: string
  template?: AbandonedCartEmailTemplate
  is_active?: boolean
  sent_num?: number
}

export type AbandonedCartEmailPost = Omit<AbandonedCartEmail, 'sent_num' | 'id'>

export type AbandonedCartTemplateSetting = {
  use_global: boolean
}
