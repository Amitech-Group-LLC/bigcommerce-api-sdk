import { OrdersV2ShippingQuotesData } from '../models/orders-v2'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2ShippingAddressesQuotes {
  public async get(
    orderId: number,
    shippingAddressId: number,
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV2ShippingQuotesData> {
    return await http
      .get(`/v2/orders/${orderId}/shipping_addresses/${shippingAddressId}/shipping_quotes`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2ShippingAddressesQuotes()
