import { Brand } from '../models/brand'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Brands {
  public async list(
    filterParams: {
      id?: number
      include_fields?: string
      exclude_fields?: string
      limit?: number
      name?: string
      page?: number
      page_title?: string
      'id:greater'?: number[]
      'id:in'?: number[]
      'id:less'?: number[]
      'id:max'?: number[]
      'id:min'?: number[]
      'id:not_in'?: number[]
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Brand[]>> {
    return await http
      .get(`/v3/catalog/brands`, {
        ...requestOptions,
        params: {
          id: filterParams.id,
          include_fields: filterParams.include_fields,
          exclude_fields: filterParams.exclude_fields,
          limit: filterParams.limit,
          name: filterParams.name,
          page: filterParams.page,
          page_title: filterParams.page_title,
          'id:greater': filterParams['id:greater'],
          'id:in': filterParams['id:in'],
          'id:less': filterParams['id:less'],
          'id:max': filterParams['id:max'],
          'id:min': filterParams['id:min'],
          'id:not_in': filterParams['id:not_in'],
        },
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    brand_id: number,
    params: {
      exclude_fields?: string
      include_fields?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Brand>> {
    return await http
      .get(`/v3/catalog/brands/${brand_id}`, {
        ...requestOptions,
        params: {
          ...params,
        },
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
        params: { ...params },
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends Brand>(
    brand_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Brand>> {
    return await http
      .put(`/v3/catalog/brands/${brand_id}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    brand_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/brands/${brand_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Brands()
