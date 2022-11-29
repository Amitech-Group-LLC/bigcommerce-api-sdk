export enum ConsentCategories {
  Functional = 2,
  Analytics = 3,
  Targeting = 4,
}

export type CookieConsentData = {
  allow: ConsentCategories[]
  deny: ConsentCategories[]
}
