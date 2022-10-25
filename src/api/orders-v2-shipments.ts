import { OrdersV2ShipmentData, ShipmentsParams } from '../models/orders-v2-shipment'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2Shipments {
  public async list<TParams extends ShipmentsParams>(
    order_id: number,
    params: TParams,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2ShipmentData[]>> {
    return await http
      .get(`/v2/orders/${order_id}/shipments`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }
}

export default new OrdersV2Shipments()
