export type CheckoutQueryParam = {
  include?: 'cart.lineItems.physicalItems.options' |
    'cart.lineItems.digitalItems.options' |
    'cart.lineItems.physicalItems.categoryNames' |
    'cart.lineItems.digitalItems.categoryNames' |
    'cart.lineItems.customItems.categoryNames' |
    'customer' |
    'customer.customerGroup' |
    'payments' |
    'promotions' |
    'consignments.availableShippingOptions'
}

export type CheckoutData = {
  id?: string
  cart?: CheckoutCart
  billingAddress?: CheckoutBillingAddress
  consignments?: CheckoutConsignment[]
  coupons?: CheckoutCoupon[]
  orderId?: string
  shippingCostTotal?: number
  giftWrappingCostTotal?: number
  handlingCostTotal?: number
  taxTotal?: number
  taxes?: Omit<PhysicalItemGiftWrapping, 'message'>[]
  subtotal?: number
  grandTotal?: number
  giftCertificates?: CheckoutGiftCertificate[]
  createdTime?: string
  updatedTime?: string
  customerMessage?: string
  outstandingBalance?: number
  isStoreCreditApplied?: boolean
}

export type CheckoutCart = {
  id?: string
  customer_id?: number
  email?: string
  currency?: CheckoutCartCurrency
  istaxIncluded?: boolean
  baseAmount?: number
  discountAmount?: number
  cartAmount?: number
  coupons?: CheckoutCartCoupon[]
  discounts?: CheckoutCartDiscount[]
  lineItems?: CheckoutCartLineItem[]
  createdTime?: string
  updatedTime?: string
}

export type CheckoutCartCurrency = {
  name?: string
  code?: string
  symbol?: string
  decimalPlaces?: number
}

export type CheckoutCartCoupon = {
  id?: string
  code: string
  displayName?: string
  couponType?: string
  discountedAmount?: number
}

export type CheckoutCartDiscount = {
  name?: string
  discountedAmount?: number
}

export type CheckoutCartLineItem = {
  physicalItems: LineItemPhysicalItem[]
  digitalItems: LineItemDigitalItem[]
  giftCertificate?: LineItemGiftCertificate[]
  customItems?: LineItemCustomItem[]
}

export type LineItemPhysicalItem = {
  id: string
  parentId?: string
  variantId?: number
  productId?: number
  sku?: string
  name?: string
  url?: string
  quantity: number
  isTaxable?: boolean
  imageUrl?: string
  discounts?: CheckoutCartDiscount[]
  discountAmount?: number
  couponAmount?: number
  listPrice?: number
  salePrice?: number
  extendedListPrice?: number
  extendedSalePrice?: number
  type?: string
  addedByPromotion?: boolean
  isShippingRequired?: boolean
  isMutable?: boolean
  giftWrapping?: PhysicalItemGiftWrapping
}

export type PhysicalItemGiftWrapping = {
  name?: string
  message?: string
  amount?: number
}

export type LineItemDigitalItem = {
  id?: string
  parentId?: string
  variantId?: number
  productId?: number
  sku?: string
  name?: string
  url?: string
  quantity: number
  brand?: string
  isTaxable?: boolean
  imageUrl?: string
  discounts?: CheckoutCartDiscount[]
  discountAmount?: number
  couponAmount?: number
  listPrice?: number
  salePrice?: number
  extendedListPrice?: number
  extendedSalePrice?: number
  type?: string
  isMutable?: boolean
  isShippingRequired?: boolean
  downloadFileUrls?: string[]
  downloadPageUrl?: string
  downloadSize?: string
}

export type LineItemGiftCertificate = {
  id?: string
  name?: string
  theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl'
  amount: number
  taxable?: boolean
  sender: LineItemContactEntity
  recipient: LineItemContactEntity
  message?: string
  type?: string
}

export type LineItemContactEntity = {
  name?: string
  email?: string
}

export type LineItemCustomItem = {
  id?: string
  sku?: string
  name?: string
  quantity?: string
  listPrice?: string
}

export type CheckoutBillingAddress = {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  address1?: string
  address2?: string
  city?: string
  stateOrProvince?: string
  stateOrProvinceCode?: string
  countryCode: string
  postalCode?: string
  phone?: string
  customFields?: CheckoutCustomField[]
  id?: string
}

export type CheckoutCustomField = {
  fieldId?: string
  fieldValue?: string
}

export type CheckoutConsignment = {
  id?: string
  shippingAddress?: object
  address?: CheckoutBillingAddress
  availableShippingOptions?: ConsigmentShippingOptionEntity[]
  selectedShippingOption?: Omit<ConsigmentShippingOptionEntity, 'isRecommended'>
  couponDiscounts?: ConsignmentCouponDiscount[]
  discounts?: ConsignmentDiscount[]
  shippingCost?: number
  handlingCost?: number
  lineItemIds?: string[]
}

export type ConsigmentShippingOptionEntity = {
  description?: string
  id?: string
  type?: string
  imageUrl?: string
  cost?: number
  transitTime?: string
  isRecommended?: boolean
}

export type ConsignmentCouponDiscount = {
  code?: string
  amount?: number
}

export type ConsignmentDiscount = {
  id?: string
}

export type CheckoutCoupon = {
  id?: number
  code: string
  displayName?: string
  couponType?: 0 | 1 | 2 | 3 | 4 | 5
  discountedAmount?: number
}

export type CheckoutGiftCertificate = {
  balance?: number
  code?: string
  purchaseDate?: string
  remaining?: number
  used?: number
}

export type CheckoutUpdateMessage = {
  customerMessage?: string
}

export type CheckoutBillingAddressData = Omit<CheckoutBillingAddress, 'id'>

export type CheckoutLineItemData = {
  lineItem?: CheckoutCartLineItemPut
  giftCertificate?: CheckoutLineItemGiftCertificate
}

export type CheckoutCartLineItemPut = {
  quantity?: number
  productId?: number
  variantId?: number
}

export type CheckoutLineItemGiftCertificate = Omit<LineItemGiftCertificate, 'id' | 'name' | 'type'>

export type CheckoutConsigmentData = {
  shippingAddress?: object
  address: CheckoutBillingAddressData & {
    shouldSaveAddress?: boolean
  }
  lineItems: ConsignmentLineItem[]
}

export type CheckoutConsigmentQueryParam = {
  include?: 'consignments.availableShippingOptions'
}

export type ConsignmentLineItem = {
  itemId: string
  quantity: number
}

export type CheckoutConsigmentUpdateData = CheckoutConsigmentData & {
  shippingOptionId: string
}

export type CheckoutCouponData = {
  couponCode: string
}

export type CheckoutGiftCertificateData = {
  giftCertificateCode?: string
}

export type CheckoutSpamProtectionData = {
  token?: string
}
