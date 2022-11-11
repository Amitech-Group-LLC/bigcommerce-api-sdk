import { PaymentMethod } from '../models/payment-method'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class PaymentMethods {
  public async list(
    params: {
      limit?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<PaymentMethod[]> {
    return await http
      .get(`/v2/payments/methods`, {
        ...requestOptions,
        params,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new PaymentMethods()
