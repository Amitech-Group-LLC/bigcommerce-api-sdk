import { Customer, CreateData, UpdateData, CustomerFilter } from '../models/customer'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomersV3 {
  public async list(
    filterParams: CustomerFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Customer[]>> {
    return await http
      .get('/v3/customers', {
        ...requestOptions,
        params: filterParams
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async createMany<TData extends CreateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Customer[]>> {
    return await http 
      .post('/v3/customers', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async updateMany<TData extends UpdateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<Customer[]>> {
    return await http 
      .put('/v3/customers', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    params: {
      'id:in': number[]
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http 
      .delete('/v3/customers', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomersV3()
