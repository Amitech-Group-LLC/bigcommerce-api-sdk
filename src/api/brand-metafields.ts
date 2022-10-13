import { BrandFilterParam, BrandMetafield } from '../models/brand'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class BrandMetafields {
  public async list(
    brand_id: number,
    filterParams: BrandFilterParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<BrandMetafield[]>> {
    return await http
      .get(`/v3/catalog/brands/${brand_id}/metafields`, {
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

  public async create<TData extends BrandMetafield>(
    brand_id: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<BrandMetafield>> {
    return await http
      .post(`/v3/catalog/brands/${brand_id}/metafields`, {
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
    urlParams: {
      brand_id: number
      metafield_id: number
    },
    params: {
      include_fields?: string
      exclude_fields?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<BrandMetafield>> {
    return await http
      .get(
        `/v3/catalog/brands/${urlParams.brand_id}/metafields/${urlParams.metafield_id}`,
        {
          ...requestOptions,
          params: { ...params },
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
    urlParams: {
      brand_id: number
      metafield_id: number
    },
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<BrandMetafield>> {
    return await http
      .put(
        `/v3/catalog/brands/${urlParams.brand_id}/metafields/${urlParams.metafield_id}`,
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
    urlParams: {
      brand_id: number
      metafield_id: number
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(
        `/v3/catalog/brands/${urlParams.brand_id}/metafields/${urlParams.metafield_id}`,
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
