import { CookieConsentData } from '../models/cookie-consent'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CookieConsents {
  public async set<TData extends CookieConsentData>(
    data: TData
  ): Promise<undefined> {
    return await http
      .post('/api/storefront/consent', { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CookieConsents()
