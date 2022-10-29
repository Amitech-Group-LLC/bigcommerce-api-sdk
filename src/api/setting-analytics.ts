import { SettingAnalitic, SettingAnaliticPut } from '../models/setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class SettingAnalitics {
  public async list(
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingAnalitic[]>> {
    return await http
      .get(`/v3/settings/analytics`, {
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

  public async get(
    analyticId: number,
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingAnalitic>> {
    return await http
      .get(`/v3/settings/analytics/${analyticId}`, {
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

  public async update<TData extends SettingAnaliticPut>(
    analyticId: number,
    data: TData,
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingAnalitic>> {
    return await http
      .put(`/v3/settings/analytics/${analyticId}`, {
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

export default new SettingAnalitics()
