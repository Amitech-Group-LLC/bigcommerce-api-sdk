import { TaxSettingData } from '../models/tax-setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class TaxSettings {
  public async get(
    requestOptions: RequestOptions = {}
  ): Promise<Result<TaxSettingData>> {
    return await http
      .get('/v3/tax/settings', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends TaxSettingData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<TaxSettingData>> {
    return await http
      .put('/v3/tax/settings', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new TaxSettings()
