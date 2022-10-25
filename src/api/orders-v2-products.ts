import { OrdersV2ProductsData, OrderV2ProductParams } from '../models/orders-v2-product'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrderV2Products {
  public async list<TParams extends OrderV2ProductParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2ProductsData[]>> {
    return await http
      .get(`/v2/orders/${order_id}/products`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrderV2Products()
