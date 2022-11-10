export type WidgetRegionParam = {
  template_file: string
}

export type WidgetRegionData = {
  name?: string
}

export type WidgetTemplateCreateData = {
  name: string
  schema?: (WidgetSchemaTab | WidgetSchemaArray | WidgetSchemaHidden)[]
  template: string
  storefront_api_query?: string
  channel_id?: number
}

export type WidgetSchemaTab = {
  type?: 'tab'
  label?: string
  sections?: WidgetSchemaTabSection[]
}

export type WidgetSchemaTabSection = {
  label?: string
  settings?: WidgetSchemaSetting[]
}

export type WidgetSchemaSetting = {
  type?: WidgetSchemaSettingType
  label?: string
  id?: string
  default?: string
  typeMeta?: WidgetSchemaSettingTypeMeta
  conditional?: WidgetSchemaConditional
}

export type WidgetSchemaSettingType = 'alignment' | 
  'boolean' |
  'boxModel' |
  'code' |
  'color' |
  'imageManager' |
  'input' |
  'number' |
  'productId' |
  'productImage' |
  'range' |
  'regexInput' |
  'select' |
  'text' |
  'toggle'

export type WidgetSchemaSettingTypeMeta = {
  selectOptions?: WidgetSchemaSettingTypeMetaSelectOption[]
}

export type WidgetSchemaSettingTypeMetaSelectOption = {
  label?: string
  value?: string
}

export type WidgetSchemaConditional = {
  key?: string
  operator?: string
  value?: any[]
}

export type WidgetSchemaArray = {
  type?: 'array'
  label?: string
  id?: string
  defaultCount?: number
  entryLabel?: string
  thumbnail?: WidgetSchemaArrayThumbnail
  schema?: (WidgetSchemaHidden | WidgetSchemaTab)[]
}

export type WidgetSchemaArrayThumbnail = {
  type?: string
  valueKey?: string
}

export type WidgetSchemaHidden = {
  type?: 'hidden'
  settings?: WidgetSchemaSetting[]
}

export type WidgetTemplateData = {
  name?: string
  schema?: (WidgetSchemaTab | WidgetSchemaArray | WidgetSchemaHidden)[]
  template?: string
  storefront_api_query?: string
  uuid?: string
  kind?: string
  date_created?: string
  date_modified?: string
  current_version_uuid?: string
  icon_name?: string
}

export type WidgetTemplateParam = {
  limit?: number
  page?: number
  widget_template_kind?: string
  'channel_id:in'?: number
}

export type WidgetTemplateRenderData = {
  widget_configuration?: object
}

export type WidgetTemplateRender = {
  html?: string
}

export type WidgetTemplateQueryParam = {
  version_uuid?: string
}

export type WidgetTemplateUpdateData = {
  name?: string
  schema?: (WidgetSchemaTab | WidgetSchemaArray | WidgetSchemaHidden)[]
  template?: string
  storefront_api_query?: string
  create_new_version?: boolean
  channel_id?: number
}