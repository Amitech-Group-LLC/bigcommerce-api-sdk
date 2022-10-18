import { CustomerAddressData, CustomerAddressParams, CreateData, UpdateData } from '../models/customer-address'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerAddresses {
  public async list(
    filterParams: CustomerAddressParams = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerAddressData[]>> {
    return await http
      .get('/v3/customers/addresses', {
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
  ): Promise<Result<CustomerAddressData[]>> {
    return await http
      .post('/v3/customers/addresses', { 
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

  public async update<TData extends UpdateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerAddressData[]>>  {
    return await http
      .put('/v3/customers/addresses', {
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

  public async delete(
    params: {
      'id:in': number[]
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http 
      .delete('/v3/customers/addresses', { 
        ...requestOptions, 
        params,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
 }

export default new CustomerAddresses()
