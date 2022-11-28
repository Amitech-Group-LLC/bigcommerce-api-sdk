export type CustomerData = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  acceptsMarketingEmails?: boolean
  customFields?: CustomerCustomField[]
}

export type CustomerCustomField = {
  fieldId?: string
  fieldValue?: string
}
