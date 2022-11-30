import { CurrentCustomerData, CurrentCustomerParam } from '../models/current-customer'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CurrentCustomers {
  public async get(
    params: CurrentCustomerParam
  ): Promise<CurrentCustomerData> {
    return await http
      .get('/api/storefront/customer/current.jwt', { params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CurrentCustomers()
