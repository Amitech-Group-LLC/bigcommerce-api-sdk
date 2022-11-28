export type CartQueryParam = {
  include?: 'lineItems.physicalItems.options' 
    | 'lineItems.digitalItems.options' 
    | 'lineItems.digitalItems.options,lineItems.physicalItems.options'
  }

export type CartData = {
  id?: string
  customerId?: number
  email?: string
  currency?: {
    code?: string
  }
  isTaxIncluded?: boolean
  baseAmount?: number
  discountAmount?: number
  cartAmount?: number
  coupons?: CartCoupon[]
  discounts?: CartDiscount[]
  lineItems?: CartLineItem
  createdTime?: string
  updatedTime?: string
  locale?: string
}

export type CartCoupon = {
  code: string
  couponType?: 0 | 1 | 2 | 3 | 4 | 5
  discountedAmount?: number
  id?: string
}

export type CartDiscount = {
  discountedAmount?: number
  id?: number
}

export type CartLineItem = {
  customItems?: CartCustomItem[]
  digitalItems?: CartDigitalItem[]
  giftCertificates?: CartGiftCertificate[]
  physicalItems?: CartPhysicalItem[]
}

export type CartCustomItem = {
  extendedListPrice?: number
  id?: string
  listPrice?: number
  name?: string
  quantity?: number
  sku?: string
}

export type CartDigitalItem = {
  options?: CartOption[]
  brand?: string
  couponAmount?: number
  discountAmount?: number
  discounts?: CartDiscount[]
  extendedListPrice?: number
  extendedSalePrice?: number
  id?: string
  imageUrl?: string
  isTaxable?: boolean
  listPrice?: number
  originalPrice?: number
  name?: string
  parentId?: string | number
  productId?: number
  quantity: number
  salePrice?: number
  sku?: string
  url?: string
  variantId?: number
}

export type CartOption = {
  name?: string
  nameId?: number
  value?: string
  valueId?: number
}

export type CartGiftCertificate = {
  amount: number
  id?: string
  isTaxable?: boolean
  message?: string
  name?: string
  recipient: CartRecipient
  sender: CartRecipient
  theme: string
}

export type CartRecipient = {
  email?: string
  name?: string
}

export type CartPhysicalItem = {
  options?: CartOption[]
  brand?: string
  couponAmount?: number
  discountAmount?: number
  discounts?: CartDiscount[]
  extendedListPrice?: number
  extendedSalePrice?: number
  id?: string
  imageUrl?: string
  isTaxable?: boolean
  listPrice?: number
  originalPrice?: number
  name?: string
  parentId?: number
  productId?: number
  quantity: number
  salePrice?: number
  sku?: string
  url?: string
  variantId?: number
  giftWrapping?: CartGiftWrapping
  isShippingRequired?: boolean
}

export type CartGiftWrapping = {
  amount?: number
  message?: string
  name?: string
}

export type CartCreateData = CartCreateRequestObject1 | CartCreateRequestObject2 | CartCreateRequestObject3

export type CartCreateRequestObject1 = {
  lineItems: (CartCreateLineItemSimpleProduct | CartCreateLineItemWithVariant | CartCreateLineItemDefault)[]
  locale?: string
}

export type CartCreateLineItemDefault = {
  productId: number
  quantity: number
  variantId: number
  optionSelections: CartCreateLineItemOption[]
}

export type CartCreateLineItemOption = {
  optionId?: number
  optionValue?: string | number | object
}

export type CartCreateLineItemSimpleProduct = Pick<CartCreateLineItemDefault, 'productId' | 'quantity'>

export type CartCreateLineItemWithVariant = Omit<CartCreateLineItemDefault, 'optionSelections'>

export type CartCreateRequestObject2 = {
  giftCertificates: CartCreateGiftCertificate[]
  locale: string
}

export type CartCreateGiftCertificate = {
  amount: number
  message: string
  name: string
  quantity: number
  recipient: CartRecipient
  sender: CartRecipient
  theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl'
}

export type CartCreateRequestObject3 = {
  lineItems: (CartCreateLineItemSimpleProduct | CartCreateLineItemWithVariant | CartCreateLineItemDefault)[]
  giftCertificates: CartCreateGiftCertificate
  locale: string
}

export type CartItemLineItem = Omit<CartCreateRequestObject1, 'locale'> | Omit<CartCreateRequestObject2, 'locale'> | Omit<CartCreateRequestObject3, 'locale'>

export type CartCurrenciesData = {
  currencyCode: string
}
