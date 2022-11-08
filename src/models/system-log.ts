export type SystemLogParam = {
  'id:in'?: string
  limit?: number
  module?: 'export+only' | 'email+message' | 'theme+download' | 'order+status' | 'optimized+checkout'
  'module:not'?: string
  page?: number
  severity?: 1 | 2 | 3 | 4
  'severity:max'?: number
  'severity:min'?: number
  type?: 'general' | 'payment' | 'shipping' | 'tax' | 'notification' | 'emailintegration' | 'ordersettings' | 'design'
  'type:not'?: string
}

export type SystemLogData = {
  id?: number
  type?: string
  module?: string
  severity?: string
  summary?: string
  message?: string
  date_created?: string
}
