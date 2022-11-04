import { SettingSearchFilter, SettingSearchFilterData, SettingSearchFilterContext } from '../models/setting'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class SettingSearchFilters {
  public async listEnable(
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingSearchFilter[]>> {
    return await http
      .get(`/v3/settings/search/filters`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends SettingSearchFilter>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingSearchFilter[]>> {
    return await http
      .put(`/v3/settings/search/filters`, {
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

  public async listAvailable(
    params: {
      category_id?: number
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingSearchFilterData[]>> {
    return await http
      .get(`/v3/settings/search/filters/available`, {
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

  public async listContextual(
    params: {
      category_id?: number
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SettingSearchFilterContext[]>> {
    return await http
      .get(`/v3/settings/search/filters/contexts`, {
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

  public async upsert<TData extends SettingSearchFilterContext>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<SettingSearchFilterContext[]>> {
    return await http
      .put(`/v3/settings/search/filters/contexts`, {
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

export default new SettingSearchFilters()
