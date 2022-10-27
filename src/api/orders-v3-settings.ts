import { OrdersV3SettingData } from '../models/orders-v3-setting'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class OrdersV3Settings {
  public async getGlobal(
    requestOptions: RequestOptions = {}
  ): Promise<OrdersV3SettingData> {
    return await http
      .get('/v3/orders/settings', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }
}

export default new OrdersV3Settings()
