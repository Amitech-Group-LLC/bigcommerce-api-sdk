import { StoreContentQueryParam, StoreContentRedirect, StoreContentRedirectCount } from '../models/store-content'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class StoreContentRedirects {
  public async list(
    params: StoreContentQueryParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentRedirect[]> {
    return await http
      .get('/v2/redirects', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends StoreContentRedirect>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentRedirect> {
    return await http
      .post('/v2/redirects', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete('/v2/redirects', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    id: number,
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentRedirect> {
    return await http
      .get(`/v2/redirects/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends StoreContentRedirect>(
    id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentRedirect> {
    return await http
      .put(`/v2/redirects/${id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    id: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/redirects/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getCount(
    requestOptions: RequestOptions = {}
  ): Promise<StoreContentRedirectCount> {
    return await http
      .get('/v2/redirects/count', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new StoreContentRedirects()
