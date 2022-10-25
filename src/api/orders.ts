import { OrderData } from '../models/order'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Orders {
  public async get(
    order_id: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrderData>> {
    return await http
      .get(`/v2/orders/${order_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Orders()
