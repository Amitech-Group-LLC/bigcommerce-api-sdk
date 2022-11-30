import { CheckoutData } from '../models/checkout'
import { DataResult } from '../models/result'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutStoreCredits {
  public async add(
    checkoutId: string
  ): Promise<DataResult<CheckoutData>> {
    return await http
      .post(`/api/storefront/checkouts/${checkoutId}/store-credit`, {})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async remove(
    checkoutId: string
  ): Promise<object> {
    return await http
      .delete(`/api/storefront/checkouts/${checkoutId}/store-credit`, {})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutStoreCredits()
