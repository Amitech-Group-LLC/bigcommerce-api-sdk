export type CustomerConsentData = {
  allow?: CustomerConsentValues[]
  deny?: CustomerConsentValues[]
  updated_at?: string
}

export type CustomerConsentValues = 'essential' | 'functional' | 'analytics' | 'targeting'
