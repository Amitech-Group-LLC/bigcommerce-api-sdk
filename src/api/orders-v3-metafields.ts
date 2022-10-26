import { OrdersV3MetafieldParams, OrdersV3MetafieldData } from '../models/orders-v3-metafield'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3Metafields {
  public async list<TParams extends OrdersV3MetafieldParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV3MetafieldData[]>> {
    return await http
      .get(`/v3/orders/${order_id}/metafields`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      }) 
  }
}

export default new OrdersV3Metafields()
