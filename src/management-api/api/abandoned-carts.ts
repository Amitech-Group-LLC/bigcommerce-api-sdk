import { AbandonedCart } from '../models/abandoned-cart'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class AbandonedCarts {
  public async get(
    token: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCart>> {
    return await http
      .get(`/v3/abandoned-carts/${token}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new AbandonedCarts()
