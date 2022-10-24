import { CheckoutSettingData } from '../models/checkout-setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutSettings {
  public async get(
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutSettingData>> {
    return await http
      .get('/v3/checkouts/settings', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutSettings()
