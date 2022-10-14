import { Customer, CreateData, UpdateData } from '../models/customer'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Customers {
  public async list(
    filterParams: {
      'company:in'?: string[]
      'customer_group_id:in'?: string[]
      date_created?: string
      'date_created:max'?: string
      'date_created:min'?: string
      date_modified?: string
      'date_modified:max'?: string
      'date_modified:min'?: string
      'email:in'?: string
      'id:in'?: number[]
      include?: 'addresses' | 'storecredit' | 'attributes' | 'formfields' | 'shopper_profile_id' | 'segment_ids'
      limit?: number
      'name:in'?: string[]
      'name:like'?: string[]
      page?: number
      'registration_ip_address:in'?: number[]
      sort?: 'date_created:asc' | 'date_created:desc' | 'last_name:asc' | 'last_name:desc' | 'date_modified:asc' | 'date_modified:desc'
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Customer[]>> {
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
  ): Promise<Result<Customer[]>> {
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
  ): Promise<Result<Customer[]>> {
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

export default new Customers()
