import { OrderData } from '../models/order'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Orders {
  public async get(
    orderId: number
  ): Promise<OrderData> {
    return await http
      .get(`/api/storefront/orders/${orderId}`, {})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Orders()
