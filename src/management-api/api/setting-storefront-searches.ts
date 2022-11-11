import { SettingStorefrontSearch } from '../models/setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class SettingStorefrontSearches {
  public async get(
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingStorefrontSearch>> {
    return await http
      .get(`/v3/settings/storefront/search`, {
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

  public async update<TData extends SettingStorefrontSearch>(
    data: TData,
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingStorefrontSearch>> {
    return await http
      .put(`/v3/settings/storefront/search`, {
        ...requestOptions,
        data,
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

export default new SettingStorefrontSearches()
