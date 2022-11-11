import { SettingLogo, SettingLogoPut } from '../models/setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class SettingLogos {
  public async get(
    params: {
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingLogo>> {
    return await http
      .get(`/v3/settings/logo`, {
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

  public async update<TData extends SettingLogoPut>(
    data: TData,
    params: {
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingLogo>> {
    return await http
      .put(`/v3/settings/logo`, {
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

  public async create(
    LogoFile: File,
    params: {
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .post(`/v3/settings/logo/image`, {
        ...requestOptions,
        data: { LogoFile },
        params,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new SettingLogos()
