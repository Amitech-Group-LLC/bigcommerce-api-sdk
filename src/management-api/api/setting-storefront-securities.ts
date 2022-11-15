import { SettingStorefrontSecurity } from '../models/setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class SettingStorefrontSecurities {
  public async get(
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingStorefrontSecurity>> {
    return await http
      .get(`/v3/settings/storefront/security`, {
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

  public async update<TData extends SettingStorefrontSecurity>(
    data: TData,
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingStorefrontSecurity>> {
    return await http
      .put(`/v3/settings/storefront/security`, {
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

export default new SettingStorefrontSecurities()
