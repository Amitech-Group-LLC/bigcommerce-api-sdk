import { Promotion, PromotionFilter, PromotionPost } from '../models/promotion'
import { Result, ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Promotions {
  /**
   * @beta functions
   */

  public async list(
    params: PromotionFilter,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Promotion[]>> {
    return await http
      .get(`/v3/promotions`, {
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

  public async create<TData extends PromotionPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Promotion>> {
    return await http
      .post(`/v3/promotions`, {
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

  public async deleteMany(
    params: {
      'id:in': number[]
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/promotions`, {
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

  public async get(
    promotionId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Promotion>> {
    return await http
      .get(`/v3/promotions/${promotionId}`, {
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

  public async update<TData extends PromotionPost>(
    promotionId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Promotion>> {
    return await http
      .put(`/v3/promotions/${promotionId}`, {
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

  public async delete(requestOptions: RequestOptions = {}): Promise<undefined> {
    return await http
      .delete(`/v3/promotions`, {
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

export default new Promotions()
