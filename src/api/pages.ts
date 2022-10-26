import { Page, PageFilter, PagePost, PageManyPut, PagePut } from '../models/page'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Pages {
  public async list(
    filterParams: PageFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Page[]>> {
    return await http
      .get(`/v3/content/pages`, {
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

  public async create<TData extends PagePost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Page>> {
    return await http
      .post(`/v3/content/pages`, {
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

  public async updateMany<TData extends PageManyPut>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Page[]>> {
    return await http
      .put(`/v3/content/pages`, {
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

  public async deleteMany(
    params: {
      'id:in': string
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/content/pages`, {
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
    pageId: number,
    filterParams: PageFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Page[]>> {
    return await http
      .get(`/v3/content/pages/${pageId}`, {
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

  public async update<TData extends PagePut>(
    pageId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Page[]>> {
    return await http
      .put(`/v3/content/pages/${pageId}`, {
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
    pageId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Page[]>> {
    return await http
      .delete(`/v3/content/pages/${pageId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Pages()
