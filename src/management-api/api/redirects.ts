import { RedirectFilter, Redirect, RedirectPut } from '../models/redirect'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Redirects {
  public async list(
    filterParams: RedirectFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Redirect[]>> {
    return await http
      .get(`/v3/storefront/redirects`, {
        ...requestOptions,
        params: filterParams,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async upsert<TData extends RedirectPut>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Redirect[]>> {
    return await http
      .put(`/v3/storefront/redirects`, {
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

  public async delete(
    params: {
        'id:in': number[]
        site_id?: number
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/storefront/redirects`, {
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
}

export default new Redirects()
