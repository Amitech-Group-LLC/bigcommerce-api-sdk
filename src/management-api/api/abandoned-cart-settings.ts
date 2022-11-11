import { AbandonedCartSetting } from '../models/abandoned-cart'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class AbandonedCartSettings {
  public async get(
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartSetting>> {
    return await http
      .get(`/v3/abandoned-carts/settings`, {
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

export default new AbandonedCartSettings()
