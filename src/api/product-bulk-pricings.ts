import { ProductBulkPricing } from '../models/product'
import { FilterParam, ProductFilterParam } from '../models/filter-param'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductBulkPricings {
  public async list(
    itemId: number,
    params: ProductFilterParam<ProductBulkPricing> = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<ProductBulkPricing[]>> {
    return await http
      .get(`/v3/catalog/products/${itemId}/bulk-pricing-rules`, {
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

  public async create<TData extends ProductBulkPricing>(
    itemId: number,
    data: TData[],
    params: {
      limit?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductBulkPricing>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/bulk-pricing-rules`, {
        ...requestOptions,
        data,
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
    itemId: number,
    bulkPricingRuleId: number,
    params: FilterParam<ProductBulkPricing> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductBulkPricing>> {
    return await http
      .get(
        `/v3/catalog/products/${itemId}/bulk-pricing-rules/${bulkPricingRuleId}`,
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

  public async update<TData extends ProductBulkPricing>(
    itemId: number,
    bulkPricingRuleId: number,
    data: TData,
    params: FilterParam<ProductBulkPricing> = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductBulkPricing>> {
    return await http
      .put(
        `/v3/catalog/products/${itemId}/bulk-pricing-rules/${bulkPricingRuleId}`,
        { ...requestOptions, data, params }
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
    bulkPricingRuleId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(
        `/v3/catalog/products/${itemId}/bulk-pricing-rules/${bulkPricingRuleId}`,
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

export default new ProductBulkPricings()
