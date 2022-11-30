import { CustomerData } from '../models/customer'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Customers {
  public async create<TData extends CustomerData>(
    data: TData
  ): Promise<undefined> {
    return await http
      .post('api/storefront/customers', { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Customers()
