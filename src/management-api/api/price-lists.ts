import { PriceFilter, Price, PricePost } from '../models/price-list'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class PriceLists {
  public async list(
    filterParams: PriceFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Price[]>> {
    return await http
      .get(`/v3/pricelists`, {
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

  public async create<TData extends PricePost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Price>> {
    return await http
      .get(`/v3/pricelists`, {
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
        id?: number
        name?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/pricelists`, {
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
    priceListId: number,
    params: {
        id?: number
        limit?: number
        name?: string
        page?: number
        date_created?: string
        date_modified?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Price>> {
    return await http
      .get(`/v3/pricelists/${priceListId}`, {
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

  public async update<TData extends PricePost>(
    priceListId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Price>> {
    return await http
      .put(`/v3/pricelists/${priceListId}`, {
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
    priceListId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/pricelists/${priceListId}`, {
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

export default new PriceLists()
