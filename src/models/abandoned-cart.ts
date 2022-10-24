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
  merchant_abandoned_cart_email_frequency_type?: string
  merchant_abandoned_cart_digest_email_frequency?: number
}

export type AbandonedCartSettingPost = {
  enable_notification?: boolean
  email_customer_until_cart_is_recovered: boolean
  marketing_emails_require_customer_consent: boolean
  email_merchant_when_cart_is_converted: boolean
  email_merchant_when_cart_is_abandoned: boolean
  merchant_email_address: string
  merchant_abandoned_cart_email_frequency_type: string
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
  notify_at_minutes?: number
  coupon_code?: string
  template: AbandonedCartEmailTemplate
  is_active?: boolean
  sent_num?: number
}

export type AbandonedCartEmailPost = {
  id?: number
  notify_at_minutes?: number
  coupon_code?: string
  template: AbandonedCartEmailTemplate
  is_active?: boolean
}

export type AbandonedCartTemplateSetting = {
  use_global: boolean
}
