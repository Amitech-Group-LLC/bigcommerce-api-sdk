import { CheckoutOrderData } from '../models/checkout'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CheckoutOrders {
  public async create(
    checkoutId: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutOrderData>> {
    return await http
      .post(`/v3/checkouts/${checkoutId}/orders`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutOrders()
