import { CustomerAttributeParams, CustomerAttributeData, CreateData } from '../models/customer-attribute'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerAttributes {
  public async list(
    filterParams: CustomerAttributeParams = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerAttributeData[]>> {
    return await http
      .get('/v3/customers/attributes', {
        ...requestOptions,
        params: filterParams,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends CreateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerAttributeData[]>> {
    return await http
      .post('/v3/customers/attributes', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

}

export default new CustomerAttributes()
