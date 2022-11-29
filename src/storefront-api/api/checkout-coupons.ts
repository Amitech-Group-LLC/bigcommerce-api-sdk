import { CheckoutData, CheckoutCouponData } from '../models/checkout'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutCoupons {
  public async add<TData extends CheckoutCouponData>(
    checkoutId: string,
    data: TData
  ): Promise<CheckoutData> {
    return await http
      .post(`/api/storefront/checkouts/${checkoutId}/coupons`, { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    checkoutId: string,
    couponCode: string
  ): Promise<CheckoutData> {
    return await http
      .delete(`/api/storefront/checkouts/${checkoutId}/coupons/${couponCode}`, {})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutCoupons()
