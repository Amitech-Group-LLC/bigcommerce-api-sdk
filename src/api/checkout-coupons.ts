import { CheckoutCouponData, CheckoutData } from '../models/checkout'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutCoupons {
  public async add<TData extends CheckoutCouponData>(
    checkoutId: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutData>> {
    return await http
      .post(`/v3/checkouts/${checkoutId}/coupons`, { ...requestOptions, data})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    checkoutId: string,
    couponCode: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutData>> {
    return await http
      .delete(`/v3/checkouts/${checkoutId}/coupons/${couponCode}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutCoupons()
