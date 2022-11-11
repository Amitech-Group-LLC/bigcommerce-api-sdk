import { SettingEmailStatus } from '../models/setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class SettingEmailStatuses {
  public async list(
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingEmailStatus>> {
    return await http
      .get(`/v3/settings/email-statuses`, {
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

  public async update<TData extends SettingEmailStatus>(
    data: TData,
    params: {
        channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingEmailStatus>> {
    return await http
      .put(`/v3/settings/email-statuses`, {
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

export default new SettingEmailStatuses()
