export type ShippingMethodCarrierOptionUSDSDeliveryService =
  | 'PriorityExpress'
  | 'PriorityMailExpressInternational'
  | 'FirstClassPackageInternationalService'
  | 'Priority'
  | 'PriorityMailInternational'
  | 'First'
  | 'ParcelSelect'
  | 'MediaMail'

export type ShippingMethodCarrierOptionUSDSPackagingType =
  | 'FlatRateLegalEnvelope'
  | 'FlatRatePaddedEnvelope'
  | 'Parcel'
  | 'SmallFlatRateBox'
  | 'MediumFlatRateBox'
  | 'LargeFlatRateBox'
  | 'FlatRateEnvelope'
  | 'RegionalRateBoxA'
  | 'RegionalRateBoxB'

export type ShippingMethodCarrierOptionFedExDeliveryService =
  | 'PRIORITY_OVERNIGHT'
  | 'STANDARD_OVERNIGHT'
  | 'FIRST_OVERNIGHT'
  | 'FEDEX_2_DAY'
  | 'FEDEX_EXPRESS_SAVER'
  | 'INTERNATIONAL_PRIORITY'
  | 'INTERNATIONAL_ECONOMY'
  | 'INTERNATIONAL_FIRST'
  | 'FEDEX_1_DAY_FREIGHT'
  | 'FEDEX_2_DAY_FREIGHT'
  | 'FEDEX_3_DAY_FREIGHT'
  | 'FEDEX_GROUND'
  | 'GROUND_HOME_DELIVERY'
  | 'INTERNATIONAL_PRIORITY_FREIGHT'
  | 'INTERNATIONAL_ECONOMY_FREIGHT'
  | 'EUROPE_FIRST_INTERNATIONAL_PRIORITY'

export type ShippingMethodCarrierOptionUPSDeliveryService =
  | '2nd_Day_Air'
  | '2nd_Day_Air_AM'
  | '3_Day_Select'
  | 'Expedited'
  | 'Express'
  | 'Express_Plus'
  | 'Express_Saver'
  | 'Express_Early_AM'
  | 'Ground'
  | 'Next_Day_Air'
  | 'Next_Day_Air_Early_AM'
  | 'Next_Day_Air_Saver'
  | 'Saver'
  | 'Standard'
  | 'Today_Dedicated_Courier'
  | 'Today_Express'
  | 'Today_Express_Saver'
  | 'Today_Intercity'
  | 'Today_Standard'
  | 'Worldwide_Expedited'
  | 'Worldwide_Express'
  | 'Worldwide_Express_Plus'
  | 'Worldwide_Express_Saver'
  | 'Worldwide_Saver'

export type ShippingMethodCarrierOptionCanadaDeliveryService =
  | 'DOM.RP'
  | 'DOM.EP'
  | 'DOM.XP'
  | 'DOM.XP.CERT'
  | 'DOM.PC DOM.LIB'
  | 'USA.EP'
  | 'USA.PW.ENV'
  | 'USA.PW.PAK'
  | 'USA.PW.PARCEL'
  | 'USA.SP.AIR'
  | 'USA.TP'
  | 'USA.TP.LVM'
  | 'USA.XP'
  | 'INT.XP'
  | 'INT.IP.AIR'
  | 'INT.IP.SURF'
  | 'INT.PW.ENV'
  | 'INT.PW.PAK'
  | 'INT.PW.PARCEL'
  | 'INT.SP.AIR'
  | 'INT.SP.SURF'
  | 'INT.TP'

export type ShippingMethodCarrierOptionAustraliaDeliveryService =
  | 'AUS_LETTER_REGULAR_SMALL'
  | 'AUS_LETTER_REGULAR_Large'
  | 'AUS_LETTER_EXPRESS_SMALL'
  | 'AUS_LETTER_EXPRESS_MEDIUM'
  | 'AUS_LETTER_EXPRESS_LARGE'
  | 'AUS_PARCEL_REGULAR'
  | 'AUS_PARCEL_REGULAR_SATCHEL_500G'
  | 'AUS_PARCEL_REGULAR_SATCHEL_3KG'
  | 'AUS_PARCEL_REGULAR_SATCHEL_5KG'
  | 'AUS_PARCEL_EXPRESS'
  | 'AUS_PARCEL_EXPRESS_SATCHEL_500G'
  | 'AUS_PARCEL_EXPRESS_SATCHEL_3KG'
  | 'AUS_PARCEL_EXPRESS_SATCHEL_5KG'
  | 'AUS_PARCEL_COURIER'
  | 'AUS_PARCEL_COURIER_SATCHEL_MEDIUM'
  | 'INT_PARCEL_COR_OWN_PACKAGING'
  | 'INT_PARCEL_EXP_OWN_PACKAGING'
  | 'INT_PARCEL_STD_OWN_PACKAGING'
  | 'INT_PARCEL_AIR_OWN_PACKAGING'
  | 'INT_PARCEL_SEA_OWN_PACKAGING'

export type ShippingMethodCarrierOptionRoyalMailDeliveryService =
  | 'SpecialDelivery1pm'
  | 'SpecialDelivery9am'
  | 'SpecialDelivery1pmSaturday'
  | 'SpecialDelivery9amSaturday'
  | 'SignedForFirstClass'
  | 'SignedForSecondClass'
  | 'Express9'
  | 'Express10'
  | 'ExpressAM'
  | 'Express24'
  | 'Express48'
  | 'StandardFirstClass'
  | 'StandardSecondClass'
  | 'InternationalStandard'
  | 'InternationalTracked'
  | 'InternationalEconomy'

export type ShippingMethodCarrierOptionZoom2UDeliveryService =
  | '3_hour'
  | 'Same_day'
  | 'VIP'

export type ShippingMethod = {
  id?: number
  name?: string
  type?:
    | 'perorder'
    | 'peritem'
    | 'weight'
    | 'total'
    | 'auspost'
    | 'canadapost'
    | 'endicia'
    | 'usps'
    | 'fedex'
    | 'royalmail'
    | 'upsready'
  settings?: {
    rate?: number
  }
  enabled?: boolean
  handling_fees?: {
    fixed_surcharge?: number
  } | {
    percentage_surcharge?: number
  }
  is_fallback?: boolean
}

export type ShippingMethodPost = {
  name?: string
  type?:
    | 'perorder'
    | 'peritem'
    | 'weight'
    | 'total'
    | 'auspost'
    | 'canadapost'
    | 'endicia'
    | 'usps'
    | 'fedex'
    | 'royalmail'
    | 'upsready'
  settings?:
    | {
        rate?: number
      }
    | ShippingMethodPostUSPS
    | ShippingMethodPostFedEx
    | ShippingMethodPostUPS
    | ShippingMethodPostCanada
    | ShippingMethodPostAustralia
    | ShippingMethodPostRoyalMail
    | ShippingMethodPostZoom2U
  enabled?: boolean
  handling_fees?: {
    fixed_surcharge?: number
  }
  is_fallback?: boolean
}

export type ShippingMethodPostUSPS = {
  carrier_options?: {
    delivery_services?: ShippingMethodCarrierOptionUSDSDeliveryService[]
    packaging_type?: ShippingMethodCarrierOptionUSDSPackagingType
    show_transit_time?: boolean
  }
}

export type ShippingMethodPostFedEx = {
  carrier_options?: {
    delivery_services?: ShippingMethodCarrierOptionFedExDeliveryService[]
    dropoff_type?:
      | 'REGULAR_PICKUP'
      | 'REQUEST_COURIER'
      | 'DROP_BOX'
      | 'BUSINESS_SERVICE_CENTER'
      | 'STATION'
    packaging_type?:
      | 'FEDEX_ENVELOPE'
      | 'FEDEX_PAK'
      | 'FEDEX_BOX'
      | 'FEDEX_TUBE'
      | 'FEDEX_10KG_BOX'
      | 'FEDEX_25KG_BOX'
      | 'YOUR_PACKAGING'
    packing_method?: 'SEPARATE' | 'COMBINED'
    rate_type?: 'NONE' | 'LIST'
    include_package_value?: boolean
    destination_type?: 'residential' | 'business'
  }
}

export type ShippingMethodPostUPS = {
  carrier_options?: {
    delivery_services?: ShippingMethodCarrierOptionUPSDeliveryService[]
    packaging_type?:
      | '21'
      | '24'
      | '25'
      | '30'
      | '01'
      | '02'
      | '03'
      | '04'
      | '2a'
      | '2b'
      | '2c'
    packing_method?: 'separate' | 'combined'
    include_package_value?: boolean
    destination_type?: 'residential' | 'business'
    show_transit_time?: boolean
  }
}

export type ShippingMethodPostCanada = {
  carrier_options?: {
    delivery_services?: ShippingMethodCarrierOptionCanadaDeliveryService[]
  }
}

export type ShippingMethodPostAustralia = {
  carrier_options?: {
    delivery_services?: ShippingMethodCarrierOptionAustraliaDeliveryService[]
  }
}

export type ShippingMethodPostRoyalMail = {
  carrier_options?: {
    delivery_services?: ShippingMethodCarrierOptionRoyalMailDeliveryService[]
  }
}

export type ShippingMethodPostZoom2U = {
  carrier_options?: {
    delivery_services?: ShippingMethodCarrierOptionZoom2UDeliveryService[]
  }
}

export type ShippingCarierEndiciaConnection = {
  account_id?: string
  pass_phrase?: string
}

export type ShippingCarierFedExConnection = {
  key?: string
  password?: string
  account_number?: string
  meter_number?: string
}

export type ShippingCarier = {
  carrier_id?: 'string'
  connection?:
    | {
        auth_key?: string
        test_mode?: boolean
      }
    | ShippingCarierEndiciaConnection
    | ShippingCarierFedExConnection
}

export type ShippingCarierDelete = {
  carrier_id?: 'string'
}

export type ShippingZoneLocation = {
  id?: number
  zip?: string
  country_iso2?: string
  state_iso2?: string
}

export type ShippingZone = {
  id?: number
  name?: string
  type?: 'zip' | 'country' | 'state' | 'global'
  locations?: ShippingZoneLocation[]
  free_shipping?: {
    enabled?: boolean
    minimum_sub_total?: string
    exclude_fixed_shipping_products?: boolean
  }
  handling_fees?: {
    display_separately?: boolean
    fixed_surcharge?: string
    percentage_surcharge?: string
  }
  enabled?: boolean
}

export type ShippingZonePost = {
  name: string
  type: 'zip' | 'country' | 'state' | 'global'
  locations?: ShippingZoneLocation[]
  free_shipping?: {
    enabled?: boolean
    minimum_sub_total?: string
    exclude_fixed_shipping_products?: boolean
  }
  handling_fees?: {
    display_separately?: boolean
    fixed_surcharge?: string
    percentage_surcharge?: string
  }
  enabled?: boolean
}

export type ShippingZonePut = {
  id?: number
  name: string
  type?: 'zip' | 'country' | 'state' | 'global'
  locations?: ShippingZoneLocation[]
  free_shipping?: {
    enabled?: boolean
    minimum_sub_total?: string
    exclude_fixed_shipping_products?: boolean
  }
  handling_fees?: {
    display_separately?: boolean
    fixed_surcharge?: string
    percentage_surcharge?: string
  }
  enabled?: boolean
}

export type ShippingCustomInformation = {
  product_id?: number
  country_of_origin?: string
  commodity_description?: string
  international_shipping?: boolean
  hs_codes?: {
    CA?: string
    AU?: string
    ALL?: string
  }
  created_at?: string
  updated_at?: string
}

export type ShippingCustomInformationPut = {
  product_id: number
  country_of_origin: string
  commodity_description: string
  international_shipping: boolean
  hs_codes: {
    CA?: string
    AU?: string
    ALL?: string
  }
}
