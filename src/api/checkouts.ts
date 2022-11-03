import { ChekoutIncludeParams, CheckoutData } from '../models/checkout'
import { DataResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Checkouts {
  public async get(
    checkoutId: string,
    include?: ChekoutIncludeParams,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<CheckoutData>> {
    return await http
      .get(`/v3/checkouts/${checkoutId}`, { ...requestOptions, params: { include } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update(
    checkoutId: string,
    customer_message: string,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<CheckoutData>> {
    return await http
      .put(`/v3/checkouts/${checkoutId}`, { ...requestOptions, data: { customer_message } })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Checkouts()
