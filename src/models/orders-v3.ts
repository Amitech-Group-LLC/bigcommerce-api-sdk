export type OrdersV3MetafieldParams = {
  direction?: 'asc' | 'desc'
  key?: string
  limit?: number
  namespace?: string
  page?: number
}

export type OrdersV3MetafieldCreateData = {
  permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access'
  namespace: string
  key: string
  value: string
  description?: string
}

export type OrdersV3MetafieldData = {
  permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access'
  namespace?: string
  key?: string
  value?: string
  description?: string
  resource_type?: string
  resource_id?: number
  id?: number
  date_created?: string
  date_modified?: string
}

export type OrdersV3PaymentActionsCreateDefaultData = {}

export type OrdersV3PaymentActionsCreateData = {
  order_id: number
  items: (AmountBoundItem | QuantityBoundItem | TaxExemptItem)[]
}

export type AmountBoundItem = {
  item_type?: 'SHIPPING' | 'HANDLING'
  item_id?: number
  amount?: number
  reason?: string
}

export type QuantityBoundItem = {
  item_type?: 'PRODUCT' | 'GIFT_WRAPPING'
  item_id?: number
  quantity?: number
  reason?: string
}

export type TaxExemptItem = {
  item_type?: 'ORDER'
  amount?: number
  reason?: string
}

export type OrdersV3PaymentActionsRefundQuote = {
  order_id?: number
  total_refund_amount?: number
  total_refund_tax_amount?: number
  rounding?: number
  adjustment?: number
  tax_inclusive?: boolean
  refund_methods?: RefundOptions[]
} 

export type RefundOption = {
  provider_id?: string
  provider_description?: string
  amount?: number
  offline?: boolean
  offline_provider?: boolean
  offline_reason?: string
}

export type RefundOptions = RefundOption[]

export type OrdersV3PaymentActionsRefund = {
  items: (AmountBoundItem | QuantityBoundItem | TaxExemptItem)[]
  reason?: string
  payments: RefundPayments[]
  merchant_calculated_override?: MerchantCalculatedOverride
}

export type RefundPayments = {
  provider_id?: string
  amount?: number
  offline?: boolean
}

export type MerchantCalculatedOverride = {
  total_amount: number
  total_tax: number
}

export type OrdersV3PaymentActionsRefundData = {
  id?: number
  order_id?: number
  user_id?: number
  created?: string
  reason?: string
  total_amount?: number
  total_tax?: number
  uses_merchant_override_values?: boolean
  items?: RefundItem[]
  payments?: RefundPayment[]
}

export type RefundItem = {
  item_type?: 'PRODUCT' | 'GIFT_WRAPPING' | 'SHIPPING' | 'HANDLING' | 'ORDER'
  item_id?: number
  reason?: string
  quantity?: number
  requested_amount?: number
}

export type RefundPayment = {
  id?: number
  provider_id?: string
  amount?: number
  offline?: boolean
  is_declined?: boolean
  declined_message?: string
}

export type OrdersV3PaymentActionsParams = {
  'created:max'?: string
  'created:min'?: string
  'id:in'?: number[]
  limit?: number
  'order_id:in'?: number[]
  page?: number
}

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

export type OrdersV3SettingParams = Omit<OrdersV3SettingData, 'meta'>

export type OrdersV3TransactionData = {
  event: 'purchase' | 'authorization' | 'capture' | 'refund' | 'void' | 'pending' | 'settled'
  method: OrdersV3TransactionMethod
  amount: number
  currency: string
  gateway: OrdersV3TransactionGateway
  gateway_transaction_id?: string
  date_created?: string
  test?: boolean
  status?: 'ok' | 'error'
  fraud_review?: boolean
  reference_transaction_id?: number
  offline?: {
    display_name?: string
  }
  custom?: {
    payment_method?: string
  }
  payment_method_id?: string
  id?: number
  order_id?: string
  payment_instrument_token?: string
  avs_result?: OrdersV3TransactionAVSResult
  cvv_result?: OrdersV3TransactionCVVResult
  credit_card?: OrdersV3TransactionCreditCard
  gift_certificate?: OrdersV3TransactionGiftCertificate
  store_credit?: {
    remaining_balance?: number
  }
}

export type OrdersV3TransactionMethod = 'credit_card' | 
  'electronic_wallet' | 
  'gift_certificate' | 
  'store_credit' | 
  'apple_pay_card' |
  'apple_pay_token' | 
  'token' |
  'custom' | 
  'offsite' |
  'offline' |
  'nonce'

export type OrdersV3TransactionGateway = '2checkout' |
  'adyen' |
  'amazon' |
  'authorizenet' |
  'bankdeposit' |
  'braintree' |
  'cheque' |
  'cod' |
  'custom' |
  'firstdatagge4' |
  'giftcertificate' |
  'hps' |
  'instore' |
  'klarna' |
  'migs' |
  'moneyorder' |
  'nmi' |
  'paypalexpress' |
  'paypalpaymentsprous' |
  'paypalpaymentsprouk' |
  'plugnpay' |
  'qbmsv2' |
  'securenet' |
  'square' |
  'storecredit' |
  'stripe' |
  'testgateway' |
  'usaepay'

export type OrdersV3TransactionAVSResult = {
  code?: string
  message?: string
  street_match?: string
  postal_match?: string
}

export type OrdersV3TransactionCVVResult = {
  code?: string
  message?: string
}

export type OrdersV3TransactionCreditCard = {
  card_type?: OrdersV3TransactionCardType
  card_iin?: string
  card_last4?: string
  card_expiry_month?: number
  card_expiry_year?: number
}

export type OrdersV3TransactionCardType = 'alelo' |
  'alia' |
  'american_express' |
  'cabal' |
  'carnet' |
  'dankort' |
  'diners_club' |
  'discover' |
  'elo' |
  'forbrugsforeningen' |
  'jcb' |
  'maestro' |
  'master' |
  'naranja' |
  'sodexo' |
  'unionpay' |
  'visa' |
  'vr'

export type OrdersV3TransactionGiftCertificate = {
  code?: string
  original_balance?: number
  starting_balance?: number
  remaining_balance?: number
  status?: 'active' | 'pending' | 'disabled' | 'expired'
}
