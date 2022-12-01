export type PromotionFilter = {
  channels?: number[]
  limit: number
  code?: string
  currency_code?: string
  direction?: 'asc' | 'desc'
  id?: number
  name?: string
  page?: number
  redemption_type?: 'automatic' | 'coupon'
  sort?: 'id' | 'name' | 'priority' | 'start_date'
  status?: string
}

export type CartValueAction = {
  cart_value?: {
    discount:
      | {
          fixed_amount?: string
        }
      | {
          percentage_amount?: string
        }
  }
}

export type CartItemActionNotItemMatcher = {
  not?:
    | {
        brands?: number[]
      }
    | {
        categories?: number[]
      }
    | {
        products?: number[]
      }
    | {
        variants?: number[]
      }
    | {
        product_option?: {
          type: string
          name: string
          values: string[]
        }
      }
}

export type CartItemActionItem =
  | {
      brands?: number[]
    }
  | {
      categories?: number[]
    }
  | {
      products?: number[]
    }
  | {
      variants?: number[]
    }
  | {
      product_option?: {
        type: string
        name: string
        values: string[]
      }
    }

export type CartItemAction = {
  cart_items?: {
    discount:
      | {
          fixed_amount?: string
        }
      | {
          percentage_amount?: string
        }
    as_total: boolean
    items: CartItemActionItem | CartItemActionNotItemMatcher
    include_items_considered_by_condition?: boolean
    exclude_items_on_sale?: boolean
    strategy?:
      | 'LEAST_EXPENSIVE'
      | 'LEAST_EXPENSIVE_ONLY'
      | 'MOST_EXPENSIVE'
      | 'MOST_EXPENSIVE_ONLY'
    quantity?: number
  }
}

export type Action = {
  gift_item?: {
    quantity: number
    product_id?: number
    variant_id?: number
  }
}

export type FixedPriceSetAction = {
  fixed_price_set?: {
    quantity: number
    fixed_price: string
    items: CartItemActionItem | CartItemActionNotItemMatcher
    strategy?:
      | 'LEAST_EXPENSIVE'
      | 'LEAST_EXPENSIVE_ONLY'
      | 'MOST_EXPENSIVE'
      | 'MOST_EXPENSIVE_ONLY'
    exclude_items_on_sale?: boolean
  }
}

export type ShippingAction = {
  shipping?: {
    free_shipping?: boolean
    zone_ids: string | number[]
  }
}

export type AutomaticPromotionRuleCondition = {
  cart?: {
    items?: CartItemActionItem | CartItemActionNotItemMatcher
    minimum_spend?: string
    minimum_quantity?: number
  }
}

export type Rule = {
  action: CartItemAction | Action | FixedPriceSetAction | ShippingAction
  apply_once?: boolean
  stop?: boolean
  condition?:
    | {
        not?: AutomaticPromotionRuleCondition
      }
    | AutomaticPromotionRuleCondition
}

export type AutomaticPromotionNotification = {
  content: string
  type: 'UPSELL' | 'ELIGIBLE' | 'APPLIED'
  locations: 'HOME_PAGE' | 'PRODUCT_PAGE' | 'CART_PAGE' | 'CHECKOUT_PAGE'
}

export type CountryRuleInfo = {
  iso2_country_code: string
}

export type AutomaticPromotionShippingAddress = {
  countries: CountryRuleInfo[]
}

export type WeekDays =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

export type CustomerSegment =
  | {
      id: string[]
    }
  | {
      not: {
        id: string[]
      }
    }

export type AutomaticPromotion = {
  id?: number
  redemption_type: 'AUTOMATIC' | 'COUPON'
  name: string
  channels?: Required<Pick<AutomaticPromotion, 'id'>>[]
  customer?: {
    group_ids?: number[]
    minimum_order_count?: number
    excluded_group_ids?: number[]
    segments?: CustomerSegment
  }
  rules: Rule[]
  current_uses?: number
  max_uses?: number
  status?: 'ENABLED' | 'DISABLED' | 'INVALID'
  start_date?: string
  end_date?: string
  stop?: boolean
  can_be_used_with_other_promotions?: boolean
  currency_code?: string
  notifications?: AutomaticPromotionNotification[]
  shipping_address?:
    | {
        not: AutomaticPromotionShippingAddress
      }
    | AutomaticPromotionShippingAddress
  schedule?: {
    week_frequency: number
    week_days: WeekDays[]
    daily_start_time: string
    daily_end_time: string
  }
}

export type CouponPromotion = AutomaticPromotion & {
  coupon_overrides_automatic_when_offering_higher_discounts?: boolean
}

export type Promotion = AutomaticPromotion | CouponPromotion

export type PromotionPost = Omit<Promotion, 'id'>

export type Coupon = {
  id?: number
  code: string
  current_uses?: number
  max_uses?: number
  max_uses_per_customer?: number
  created?: string
}

export type CouponPost = Omit<Coupon, 'id' | 'current_uses' | 'created'>
