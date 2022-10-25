import { CustomerV2Password, CustomerV2Result } from '../models/customer'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerV2Passwords {
  public async validate<TData extends CustomerV2Password>(
    customerId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerV2Result>> {
    return await http
      .post(`/v2/customers/${customerId}/validate`, {
        ...requestOptions,
        data,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
 }

export default new CustomerV2Passwords()
