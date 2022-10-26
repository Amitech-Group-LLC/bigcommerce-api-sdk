import { MarketingCoupon, MarketingCouponPost, Count } from '../models/marketing'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class MarketingCoupons {
  public async list(
    params: {
      code?: string
      exclude_type?: 'per_item_discount' | 'percentage_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'promotion'
      id?: string
      limit?: number
      max_id?: number
      min_id?: number
      name?: string
      page?: number
      type?: 'per_item_discount' | 'percentage_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'promotion'
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<MarketingCoupon[]>> {
    return await http
      .get(`/v2/coupons`, {
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

  public async create<TData extends MarketingCouponPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<MarketingCoupon>> {
    return await http
      .post(`/v2/coupons`, {
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
      'id:in'?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/coupons`, {
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

  public async update<TData extends MarketingCouponPost>(
    couponId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<MarketingCoupon>> {
    return await http
      .put(`/v2/coupons/${couponId}`, {
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
    couponId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/coupons/${couponId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getCouponCount(
    requestOptions: RequestOptions = {}
  ): Promise<Result<Count>> {
    return await http
      .get(`/v2/coupons/count`, {
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

export default new MarketingCoupons()
