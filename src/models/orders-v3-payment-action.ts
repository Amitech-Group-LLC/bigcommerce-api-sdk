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
