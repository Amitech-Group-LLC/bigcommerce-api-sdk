import { OrdersV2StatusData } from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2Status {
  public async list(
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2StatusData[]> {
    return await http
      .get('/v2/order_statuses' , { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async get(
    status_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2StatusData> {
    return await http
      .get(`/v2/order_statuses/${status_id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }
}

export default new OrdersV2Status()
