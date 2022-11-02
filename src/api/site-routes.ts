import { SiteRouteParams, SiteRouteData, SiteRouteCreateData, SiteRouteUpdateData } from '../models/site'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class SiteRoutes {
  public async list(
    siteId: number,
    params: SiteRouteParams = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SiteRouteData[]>> {
    return await http
      .get(`/v3/sites/${siteId}/routes`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends SiteRouteCreateData>(
    siteId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<SiteRouteData>> {
    return await http
      .post(`/v3/sites/${siteId}/routes`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async updateMany<TData extends SiteRouteData>(
    siteId: number,
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SiteRouteData[]>> {
    return await http
      .put(`/v3/sites/${siteId}/routes`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    siteId: number,
    routeId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<SiteRouteData>> {
    return await http
      .get(`/v3/sites/${siteId}/routes/${routeId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends SiteRouteUpdateData>(
    siteId: number,
    routeId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<SiteRouteData>> {
    return await http
      .put(`/v3/sites/${siteId}/routes/${routeId}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    siteId: number,
    routeId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/sites/${siteId}/routes/${routeId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new SiteRoutes()
