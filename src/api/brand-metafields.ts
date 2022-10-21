import { BrandFilter, BrandMetafield } from '../models/brand'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class BrandMetafields {
  public async list(
    itemId: number,
    filterParams: BrandFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<BrandMetafield[]>> {
    return await http
      .get(`/v3/catalog/brands/${itemId}/metafields`, {
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

  public async create<TData extends BrandMetafield>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<BrandMetafield>> {
    return await http
      .post(`/v3/catalog/brands/${itemId}/metafields`, {
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

  public async get(
    itemId: number,
    metafieldId: number,
    params: {
      include_fields?: string | string[]
      exclude_fields?: string | string[]
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<BrandMetafield>> {
    return await http
      .get(
        `/v3/catalog/brands/${itemId}/metafields/${metafieldId}`,
        {
          ...requestOptions,
          params,
        }
      )
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends BrandMetafield>(
    itemId: number,
    metafieldId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<BrandMetafield>> {
    return await http
      .put(
        `/v3/catalog/brands/${itemId}/metafields/${metafieldId}`,
        { ...requestOptions, data }
      )
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    itemId: number,
    metafieldId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(
        `/v3/catalog/brands/${itemId}/metafields/${metafieldId}`,
        { ...requestOptions }
      )
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new BrandMetafields()
