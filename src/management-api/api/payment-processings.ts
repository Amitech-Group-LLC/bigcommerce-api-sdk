import { PaymentProcessMethod, PaymentTokenPost, PaymentToken, PaymentProcessPost, PaymentProcess } from '../models/payment-processing'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class PaymentProcessings { 
  public async list(
    params: {
        checkout_id?: string
        order_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<PaymentProcessMethod[]>> {
    return await http
      .get(`/v3/payments/methods`, {
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

  public async create<TData extends PaymentTokenPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<PaymentToken>> {
    return await http
      .post(`/v3/payments/access_tokens`, {
        ...requestOptions,
        data,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async process<TData extends PaymentProcessPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<PaymentProcess> {
    return await http
      .post(`/payments`, {
        ...requestOptions,
        data,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new PaymentProcessings()
