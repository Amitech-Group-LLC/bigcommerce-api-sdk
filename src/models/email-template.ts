export type EmailTemplateTransaction = {
  locale?: string
  keys?: {
    reset_password?: string
  }
  subject?: string
}

export type EmailTemplate = {
  type_id?:
    | 'abandoned_cart_email'
    | 'account_details_changed_email'
    | 'combined_order_status_email'
    | 'createaccount_email'
    | 'createguestaccount_email'
    | 'giftcertificate_email'
    | 'invoice_email'
    | 'ordermessage_notification'
    | 'return_confirmation_email'
    | 'return_statuschange_email'
    | 'product_review_email'
    | 'account_reset_password_email'
  body?: string
  translations?: EmailTemplateTransaction[]
}
