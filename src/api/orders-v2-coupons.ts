import { OrderV2CouponsData, OrderV2CouponsParams } from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2Coupons {
  public async list<TParams extends OrderV2CouponsParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<OrderV2CouponsData[]> {
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

export default new OrdersV2Coupons()
