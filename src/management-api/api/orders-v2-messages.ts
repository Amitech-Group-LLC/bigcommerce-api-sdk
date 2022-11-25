import { OrdersV2MessageData, OrdersV2MessageParam } from '../models/orders-v2'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2Messages {
  public async list(
    orderId: number,
    params: OrdersV2MessageParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2MessageData[]>> {
    return await http
      .get(`/v2/orders/${orderId}/messages`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }
}

export default new OrdersV2Messages()
