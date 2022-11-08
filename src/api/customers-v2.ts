import { CustomerV2Filter, CustomerV2, CustomerV2Post, CustomerCount, CustomerV2Response } from '../models/customer'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomersV2 {
  public async list(
    filterParams: CustomerV2Filter = {},
    requestOptions: RequestOptions = {}
  ): Promise<CustomerV2[]> {
    return await http
      .get(`/v2/customers`, {
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

  public async create<TData extends CustomerV2Post>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerV2> {
    return await http
      .post(`/v2/customers`, {
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

  public async deleteMany(
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/customers`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async get(
    customerId: number,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerV2> {
    return await http
      .get(`/v2/customers/${customerId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async update<TData extends CustomerV2>(
    customerId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerV2Response> {
    return await http
      .put(`/v2/customers/${customerId}`, {
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
    customerId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/customers/${customerId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }

  public async getCount(
    requestOptions: RequestOptions = {}
  ): Promise<CustomerCount> {
    return await http
      .get(`/v2/customers/count`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })  
  }
}

export default new CustomersV2()
