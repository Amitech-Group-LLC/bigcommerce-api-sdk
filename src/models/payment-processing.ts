export type PaymentMethodSupportedInstrument = {
  instrument_type:
    | 'VISA'
    | 'MASTERCARD'
    | 'DISCOVER'
    | 'AMEX'
    | 'DINERS_CLUB'
    | 'JCB'
    | 'DANKORT'
    | 'MAESTRO'
    | 'STORED_CARD'
  verification_value_required?: boolean
}

export type PaymentProcessMethod = {
  id: string
  name: string
  test_mode: boolean
  type: string
  stored_instruments?: {
    type: string
    brand: string
    expiry_month: number
    expiry_year: number
    issuer_identification_number: string
    last_4: string
    token: string
    is_default: boolean
  }
  supported_instruments: PaymentMethodSupportedInstrument[]
}

export type PaymentTokenPost = {
  id: number
  is_recurring?: boolean
}

export type PaymentToken = {
  id: string
}

export type PaymentProcessPost = {
  payment: {
    instrument: {
      type?: string
      cardholder_name?: string
      number?: string
      expiry_month?: number
      expiry_year?: number
      verification_value?: string
      issue_month?: number
      issue_year?: number
      issue_number?: number
    }
    payment_method_id: string
    save_instrument?: boolean
  }
}

export type PaymentProcess = {
  id?: string
  transaction_type?: string
  status?: string
}
