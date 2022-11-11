import { SettingStorefrontRobot } from '../models/setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class SettingStorefrontRobots {
  public async get(
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingStorefrontRobot>> {
    return await http
      .get(`/v3/settings/storefront/robotstxt`, {
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

  public async update<TData extends SettingStorefrontRobot>(
    data: TData,
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingStorefrontRobot>> {
    return await http
      .put(`/v3/settings/storefront/robotstxt`, {
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

export default new SettingStorefrontRobots()
