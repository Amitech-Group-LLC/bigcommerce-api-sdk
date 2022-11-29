import { CheckoutData, CheckoutSpamProtectionData } from '../models/checkout'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutSpamProtections {
  public async checkout<TData extends CheckoutSpamProtectionData>(
    checkoutId: string,
    data: TData
  ): Promise<CheckoutData> {
    return await http
      .post(`/api/storefront/checkouts/${checkoutId}/spam-protection`, { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutSpamProtections()
