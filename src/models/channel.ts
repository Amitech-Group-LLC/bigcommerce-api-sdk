export type ChannelStatusParam = 'prelaunch' | 'active' | 'inactive' | 'connected' | 'disconnected' | 'archived' | 'deleted' | 'terminated'

export type ChannelTypeParam = 'marketplace' | 'marketing' | 'pos' | 'storefront'

export type ChannelSiteSslStatusParam = 'dedicated' | 'shared'

export type ChannelSiteUrlTypeParam = 'primary' | 'canonical' | 'checkout'

export type ChannelListingStateParam = 'active' | 'disabled' | 'error' | 'pending' | 'pending_disable' | 'pending_delete' | 'partially_rejected' | 'queued' | 'rejected' | 'submitted' | 'deleted'

export type ChannelMenuAppSectionParam = 'storefront_settings' | 'social' | 'carousel' | 'domains' | 'currencies' | 'notifications'

export type ChannelMetafieldPermissionParam = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access'

export type ChannelFilter = {
  available?: boolean
  date_created?: string
  'date_created:max'?: string
  'date_created:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  include?: 'currencies'
  limit?: number
  page?: number
  'platform:in'?: string[]
  'status:in'?: ChannelStatusParam[]
  'type:in'?: ChannelTypeParam[]
}

export type Channel = {
  config_meta?: {
    app?: {
      id?: number
      sections?: {
        title?: string
        query_path?: string
      }
    }
  }
  id?: number
  icon_url?: string
  is_listable_from_ui?: boolean
  is_visible?: boolean
  date_created?: string
  external_id?: string
  type?: ChannelTypeParam
  platform?: string
  date_modified?: string
  name?: string
  status?: ChannelStatusParam
}

export type ChannelPost = {
  config_meta?: {
    app?: {
      id?: number
      sections?: {
        title?: string
        query_path?: string
      }
    }
  }
  type: ChannelTypeParam
  platform: string
  name: string
  status?: ChannelStatusParam
  is_listable_from_ui?: boolean
  is_visible?: boolean
  external_id?: string
}

export type ChannelPut = {
  config_meta?: {
    app?: {
      id?: number
      sections?: {
        title?: string
        query_path?: string
      }
    }
  }
  name?: string
  status?: ChannelStatusParam
  is_listable_from_ui?: boolean
  is_visible?: boolean
  external_id?: string
}

export type ChannelActiveTheme = {
  active_theme_uuid: string
  active_theme_configuration_uuid: string
  active_theme_version_uuid: string
  saved_theme_configuration_uuid: string
}

export type ChannelCurrencyAssigment = {
  channel_id?: number
  enabled_currencies?: string[]
  default_currency?: string
}

export type ChannelCurrencyAssigmentPost = {
  channel_id: number
  enabled_currencies: string[]
  default_currency: string
}

export type ChannelCurrencyAssigmentSinglePost = {
  enabled_currencies: string[]
  default_currency: string
}

export type ChannelListingFilter = {
  after?: number
  date_created?: string
  'date_created:max'?: string
  'date_created:min'?: string
  date_modified?: string
  'date_modified:max'?: string
  'date_modified:min'?: string
  limit?: number
  'product_id:in'?: number[]
}

export type ChannelListingVariant = {
  channel_id?: number
  product_id?: number
  variant_id?: number
  state?: ChannelListingStateParam
  name?: string
  date_created?: string
  date_modified?: string
}

export type ChannelListing = {
  channel_id?: number
  listing_id?: number
  product_id?: number
  state?: ChannelListingStateParam
  name?: string
  description?: string
  date_created?: string
  date_modified?: string
  variants?: ChannelListingVariant[]
}

export type ChannelListingPostVariant = {
  product_id: number
  variant_id: number
  external_id?: string
  state: ChannelListingStateParam
  name?: string
  description?: string
}

export type ChannelListingPost = {
  product_id: number
  external_id?: number
  state: ChannelListingStateParam
  name?: string
  description?: string
  variants: ChannelListingPostVariant[]
}

export type ChannelListingPut = {
  product_id: number
  external_id?: number
  listing_id: number
  state: ChannelListingStateParam
  name?: string
  description?: string
  variants: ChannelListingPostVariant[]
}

export type ChannelSiteUrl = {
  url?: string
  type?: ChannelSiteUrlTypeParam
  created_at?: string
  updated_at?: string
}

export type ChannelSite = {
  id?: number
  url?: string
  channel_id?: number
  created_at?: string
  updated_at?: string
  ssl_status?: ChannelSiteSslStatusParam
  urls?: ChannelSiteUrl[]
  is_checkout_url_customized?: boolean
}

export type ChannelMenuCustomAppSection = {
  title?: string
  query_path?: string
}

export type ChannelMenu = {
  bigcommerce_protected_app_sections?: ChannelMenuAppSectionParam[]
  custom_app_sections?: ChannelMenuCustomAppSection[]
}

export type ChannelMetafield = {
  id?: number
  permission_set?: ChannelMetafieldPermissionParam
  namespace?: string
  key?: string
  value?: string
  description?: string
  resource_type?: 'category' | 'brand' | 'product' | 'variant'
  resource_id?: number
  date_created?: string
  date_modified?: string
}

export type ChannelMetafieldPost = {
  namespace: string
  key: string
  value: string
  permission_set: ChannelMetafieldPermissionParam
  description?: string
}

export type ChannelMetafieldPut = {
  namespace?: string
  key?: string
  value?: string
  permission_set?: ChannelMetafieldPermissionParam
  description?: string
}
