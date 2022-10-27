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
