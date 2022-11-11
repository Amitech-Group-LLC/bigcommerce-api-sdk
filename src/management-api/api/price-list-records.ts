import { PriceRecordFilter, PriceRecord, PriceRecordPut, PriceRecordResult, PriceRecordCurrencyPut } from '../models/price-list'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class PriceListRecords {
  public async list(
    priceListId: number,
    filterParams: PriceRecordFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<PriceRecord[]>> {
    return await http
      .get(`/v3/pricelists/${priceListId}/records`, {
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

  public async upsertMany<TData extends PriceRecordPut>(
    priceListId: number,
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<PriceRecordPut[]> {
    return await http
      .put(`/v3/pricelists/${priceListId}/records`, {
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
    priceListId: number,
    params: {
      'variant_id:in'?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<PriceRecordResult> {
    return await http
      .delete(`/v3/pricelists/${priceListId}/records`, {
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

  public async listVariant(
    priceListId: number,
    variantId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<PriceRecord[]>> {
    return await http
      .get(`/v3/pricelists/${priceListId}/records/${variantId}`, {
        ...requestOptions,
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
    variantId: number,
    currencyCode: string,
    params: {
      include?: 'bulk_pricing_tiers' | 'sku'
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<PriceRecord>> {
    return await http
      .get(`/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`, {
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

  public async set<TData extends PriceRecordCurrencyPut>(
    priceListId: number,
    variantId: number,
    currencyCode: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<PriceRecord>> {
    return await http
      .put(`/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`, {
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
    variantId: number,
    currencyCode: string,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`, {
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

export default new PriceListRecords()
