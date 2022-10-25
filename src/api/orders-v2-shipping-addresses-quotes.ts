import { OrdersV2ShippingQuotesData } from '../models/orders-v2-shipping-addresses-quote'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV2ShippingAddressesQuotes {
  public async get(
    order_id: number,
    shipping_address_id: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<OrdersV2ShippingQuotesData>> {
    return await http
      .get(`/v2/orders/${order_id}/shipping_addresses/${shipping_address_id}/shipping_quotes`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new OrdersV2ShippingAddressesQuotes()
