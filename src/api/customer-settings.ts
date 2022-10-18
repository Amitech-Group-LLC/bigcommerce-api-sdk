import { CustomerSettingData } from '../models/customer-setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerSettings {
  public async get(
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerSettingData>> {
    return await http
      .get('/v3/customers/settings', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerSettings()
