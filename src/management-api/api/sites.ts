import { SiteData, SiteBodyData, SiteParam, SiteUpdateData } from '../models/site'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class Sites {
  public async create<TData extends SiteBodyData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SiteData>> {
    return await http
      .post('/v3/sites', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list(
    params: SiteParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SiteData[]>> {
    return await http
      .get('/v3/sites', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    siteId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SiteData>> {
    return await http
      .get(`/v3/sites/${siteId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends SiteUpdateData>(
    siteId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SiteData>> {
    return await http
      .put(`/v3/sites/${siteId}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    siteId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/sites/${siteId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Sites()
