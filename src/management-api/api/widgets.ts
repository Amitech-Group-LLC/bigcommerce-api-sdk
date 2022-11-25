import { WidgetQueryParam, WidgetData, WidgetCreateData, WidgetGetAllParam, WidgetUpdateData } from '../models/widget'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Widgets {
  public async getWidgetsBySearch(
    params: WidgetQueryParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<WidgetData[]>> {
    return await http
      .get('/v3/content/widgets/search', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends WidgetCreateData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WidgetData>> {
    return await http
      .post('/v3/content/widgets', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list(
    params: WidgetGetAllParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<WidgetData[]>> {
    return await http
      .get('/v3/content/widgets', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    uuid: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WidgetData>> {
    return await http
      .get(`/v3/content/widgets/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends WidgetUpdateData>(
    uuid: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WidgetData>> {
    return await http
      .put(`/v3/content/widgets/${uuid}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    uuid: string,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/content/widgets/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Widgets()
