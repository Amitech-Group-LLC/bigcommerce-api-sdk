export type TaxProvider = {
  id: string
  documents: TaxProviderDocument[]
}

export type TaxProviderData = {
  id: string
  currency_code: string
  customer: TaxProviderCustomer
  transaction_date: string
  documents: TaxProviderDataDocument[]
}

export type TaxProviderAdjustData = TaxProviderData & {
  adjust_description?: string
}

export type TaxProviderCustomer = {
  customer_id: string
  customer_group_id: string
  taxability_code?: string
}

export type TaxProviderDataDocument = {
  id: string
  billing_address?: TaxProviderDocumentAddress
  destination_address: TaxProviderDocumentAddress
  origin_address: TaxProviderDocumentAddress
  shipping: TaxProviderDocumentShipping
  handling: TaxProviderDocumentShipping
  items: TaxProviderDocumentShipping & {
    wrapping?: TaxProviderDocumentShipping | null
  }
}

export type TaxProviderDocumentAddress = {
  line1?: string
  line2?: string
  city?: string
  region_name?: string
  region_code?: string
  country_name?: string
  country_code?: string
  postal_code?: string
  company_name?: string
  type?: 'RESIDENTIAL' | 'COMMERCIAL'
}

export type TaxProviderDocumentShipping = {
  id: string
  item_code?: string
  name?: string
  price: TaxProviderDocumentShippingPrice
  quantity: number
  tax_class?: TaxProviderDocumentShippingTax
  tax_exempt?: boolean
  tax_properties?: TaxProviderDocumentShippingTaxProperty[]
  type: 'item' | 'wrapping' | 'handling' | 'shipping' | 'refund'
}

export type TaxProviderDocumentShippingPrice = {
  amount: number
  tax_inclusive: boolean
}

export type TaxProviderDocumentShippingTax = {
  code: string
  class_id: string
  name: string
}

export type TaxProviderDocumentShippingTaxProperty = {
  code: string
  value: string
}

export type TaxProviderDocument = {
  id: string
  external_id?: string
  items: TaxProviderDocumentItem[]
  shipping: TaxProviderDocumentItemWrapping
  handling: TaxProviderDocumentItemWrapping
}

export type TaxProviderDocumentItem = {
  id: string
  price: TaxProviderDocumentItemPrice
  type: 'item' | 'wrapping' | 'shipping' | 'handling' | 'refund'
  wrapping?: TaxProviderDocumentItemWrapping
}

export type TaxProviderDocumentItemPrice = {
  amount_inclusive: number
  amount_exclusive: number
  total_tax: number
  tax_rate: number
  sales_tax_summary: DocumentItemPriceTaxSummary[]
}

export type DocumentItemPriceTaxSummary = {
  name: string
  rate: number
  amount: number
  tax_class?: DocumentItemPriceTaxSummaryClass
  id?: string
}

export type DocumentItemPriceTaxSummaryClass = {
  code: string
  class_id: string
  name: string
}

export type TaxProviderDocumentItemWrapping = {
  id: string
  price: TaxProviderDocumentItemPrice
  type: 'item' | 'wrapping' | 'shipping' | 'handling' | 'refund'
}
