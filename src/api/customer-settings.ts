import { CustomerSettingData } from '../models/customer'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerSettings {
  public async get(
    requestOptions: RequestOptions = {}
  ): Promise<CustomerSettingData> {
    return await http
      .get('/v3/customers/settings', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends CustomerSettingData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerSettingData> {
    return await http
      .put('/v3/customers/settings', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerSettings()
