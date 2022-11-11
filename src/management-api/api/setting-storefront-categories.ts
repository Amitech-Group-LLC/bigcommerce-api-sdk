import { SettingStorefrontCategory } from '../models/setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class SettingStorefrontCategories {
  public async get(
    params: {
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingStorefrontCategory>> {
    return await http
      .get(`/v3/settings/storefront/category`, {
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

  public async update<TData extends SettingStorefrontCategory>(
    data: TData,
    params: {
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingStorefrontCategory>> {
    return await http
      .put(`/v3/settings/storefront/category`, {
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

export default new SettingStorefrontCategories()
