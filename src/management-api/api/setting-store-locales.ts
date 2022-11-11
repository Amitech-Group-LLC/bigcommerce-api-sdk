import { SettingLocale } from '../models/setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class SettingStoreLocales {
  public async get(
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingLocale>> {
    return await http
      .get(`/v3/settings/store/locale`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends SettingLocale>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingLocale>> {
    return await http
      .put(`/v3/settings/store/locale`, {
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

export default new SettingStoreLocales()
