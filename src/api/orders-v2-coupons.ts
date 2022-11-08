import { OrderV2CouponData, OrderV2FilterParam } from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2Coupons {
  public async list(
    orderId: number,
    params: OrderV2FilterParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<OrderV2CouponData[]> {
    return await http
      .get(`/v2/orders/${orderId}/coupons`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2Coupons()
