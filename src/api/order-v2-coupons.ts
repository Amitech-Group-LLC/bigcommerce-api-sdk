import { OrderV2CouponsData, OrderV2CouponsParams } from '../models/order-v2-coupon'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrderV2Coupons {
  public async list<TParams extends OrderV2CouponsParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrderV2CouponsData[]>> {
    return await http
      .get(`/v2/orders/${order_id}/coupons`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrderV2Coupons()
