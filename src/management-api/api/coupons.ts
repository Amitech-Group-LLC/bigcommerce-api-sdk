import { Coupon, CouponPost } from '../models/promotion'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Coupons {
  /**
   * @beta functions
   */

  public async list(
    promotionId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Coupon[]>> {
    return await http
      .get(`/v3/promotions/${promotionId}/codes`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  /**
   * @beta functions
   */

  public async deleteMany(
    promotionId: number,
    params: {
      'id:in': number[]
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/promotions/${promotionId}/codes`, {
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

  /**
   * @beta functions
   */

  public async create<TData extends CouponPost>(
    promotionId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Coupon>> {
    return await http
      .post(`/v3/promotions/${promotionId}/codes`, {
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

  /**
   * @beta functions
   */

  public async delete(
    promotionId: number,
    codeId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/promotions/${promotionId}/codes/${codeId}`, {
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

export default new Coupons()
