import { CustomerAttributeParams, CustomerAttributeData, CreateAttributeData, UpdateAttributeData } from '../models/customer'
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

  public async create<TData extends CreateAttributeData>(
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

  public async update<TData extends UpdateAttributeData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerAttributeData[]>> {
    return await http
      .put('/v3/customers/attributes', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    params: {
      'id:in': number[]
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined>  {
    return await http
      .delete('/v3/customers/attributes', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerAttributes()
