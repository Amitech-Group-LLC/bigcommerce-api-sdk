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
