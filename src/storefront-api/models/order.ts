export type OrderData = {
  orderId?: number
  cartId?: string
  currency?: OrderCurrency
  isTaxIncluded?: boolean
  baseAmount?: number
  discountAmount?: number
  giftWrappingCostTotal?: number
  orderAmount?: number
  orderAmountAsInteger?: number
  coupons?: OrderCoupon[]
  lineItems?: OrderLineItem[]
  customerId?: string
  billingAddress?: OrderBillingAddress
  status?: OrderStatus
  hasDigitalItems?: boolean
  isDownloadable?: boolean
  isComplete?: boolean
  customerMessage?: string
  shippingCostTotal?: number
  shippingCostBeforeDiscount?: number
  handlingCostTotal?: number
  customerCanBeCreated?: boolean
  taxes?: OrderTax[]
  taxTotal?: number
  channelId?: number
  consignments?: ShippingConsignment
}

export type OrderCurrency = {
  name?: string
  code?: string
  symbol?: string
  decimalPlaces?: number
}

export type OrderCoupon = {
  id?: string
  code: string
  displayName?: string
  couponType?: string
  discountedAmount?: number
}

export type OrderLineItem = {
  physicalItems: OrderLinePhysicalItem[]
  digitalItems: OrderLineDigitalItem[]
  giftCertificate: OrderLineGiftCertificate[]
}

export type OrderLinePhysicalItem = {
  id?: string
  parentId?: string
  variantId?: number
  productId?: number
  sku?: string
  name?: string
  url?: string
  quantity: number
  isTaxable?: boolean
  imageUrl?: string
  discounts?: object
  discountAmount?: number
  couponAmount?: number
  listPrice?: number
  salePrice?: number
  extendedListPrice?: number
  extendedSalePrice?: number
  type?: string
  addedByPromotion?: boolean
  isShippingRequired?: boolean
  giftWrapping?: PhysicalItemGiftWrapping
  categories?: object[]
}

export type PhysicalItemGiftWrapping = {
  name?: string
  message?: string
  amount?: number
}

export type OrderLineDigitalItem = {
  id?: string
  parentId?: string
  variantId?: number
  productId?: number
  sku?: string
  name?: string
  url?: string
  quantity: number
  isTaxable?: boolean
  imageUrl?: string
  discounts?: DigitalItemDiscount[]
  iscountAmount?: number
  couponAmount?: number
  listPrice?: number
  salePrice?: number
  extendedListPrice?: number
  extendedSalePrice?: number
  type?: string
  downloadFileUrls?: string[]
  downloadPageUrl?: string
  downloadSize?: string
  categories?: object[]
}

export type DigitalItemDiscount = {
  coupon?: number
}

export type OrderLineGiftCertificate = {
  name?: string
  quantity?: number
  isTaxable?: boolean
  amount?: number
  type?: string
}

export type OrderBillingAddress = {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  address1?: string
  address2?: string
  city?: string
  stateOrProvince?: string
  stateOrProvinceCode?: string
  country?: string
  countryCode: string
  postalCode?: string
  phone?: string
  customFields?: OrderCustomField[]
}

export type OrderCustomField = {
  fieldId?: string
  fieldValue?: string
}

export enum OrderStatus {
  InComplete = 'INCOMPLETE',
  Pending = 'PENDING',
  Shipped = 'SHIPPED',
  PartiallyShipped = 'PARTIALLY_SHIPPED',
  Refunded = 'REFUNDED',
  Cancelled = 'CANCELLED',
  Declined = 'DECLINED',
  AwaitingPayment = 'AWAITING_PAYMENT',
  AwaitingPickup = 'AWAITING_PICKUP',
  AwaitingShipment = 'AWAITING_SHIPMENT',
  Completed = 'COMPLETED',
  AwaitingFulfillment = 'AWAITING_FULFILLMENT',
  ManualVerificationRequired = 'MANUAL_VERIFICATION_REQUIRED',
  Disputed = 'DISPUTED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED'
}

export type OrderTax = {
  name?: string
  amount?: number
}

export type OrderConsignment = {
  shipping?: {}
}

export type ShippingConsignment = {
  lineItems?: ShippingConsignmentLineItem[]
  shippingAddressId?: number
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  address1?: string
  address2?: string
  city?: string
  stateOrProvince?: string
  country?: string
  countryCode?: string
  postalCode?: string
  phone?: string
  itemsTotal?: number
  itemsShipped?: number
  shippingMethod?: string
  baseCost?: number
  costExTax?: number
  costIncTax?: number
  costTax?: number
  costTaxClassId?: number
  baseHandlingCost?: number
  handlingCostExTax?: number
  handlingCostIncTax?: number
  handlingCostTax?: number
  handlingCostTaxClassId?: number
  shippingZoneId?: number
  shippingZoneName?: string
  customFields?: ShippingConsignmentCustomField[]
}

export type ShippingConsignmentLineItem = {
  id?: number
}

export type ShippingConsignmentCustomField = {
  name?: string
  value?: string
}
