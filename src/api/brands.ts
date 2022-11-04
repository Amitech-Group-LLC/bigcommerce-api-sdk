import { Brand, BrandFilter } from '../models/brand'
import { FilterParam } from '../models/filter-param'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Brands {
  public async list(
    filterParams: BrandFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Brand[]>> {
    return await http
      .get(`/v3/catalog/brands`, {
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

  public async get(
    itemId: number,
    params: FilterParam<Brand> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Brand>> {
    return await http
      .get(`/v3/catalog/brands/${itemId}`, {
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

  public async create<TData extends Brand>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Brand>> {
    return await http
      .post(`/v3/catalog/brands`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    params: {
      name?: string
      page_title?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/brands`, {
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

  public async update<TData extends Brand>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Brand>> {
    return await http
      .put(`/v3/catalog/brands/${itemId}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    itemId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/brands/${itemId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Brands()
