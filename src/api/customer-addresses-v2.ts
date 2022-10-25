import { CustomerV2Address, CustomerCount } from '../models/customer'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerV2Addresses {
  public async list(
    customerId: number,
    params: {
      limit?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerV2Address[]>> {
    return await http
      .get(`/v2/customers/${customerId}/addresses`, {
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

  public async create<TData extends CustomerV2Address>(
    customerId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerV2Address[]>> {
    return await http
      .post(`/v2/customers/${customerId}/addresses`, {
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
    customerId: number,
    params: {
      limit?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/customers/${customerId}/addresses`, {
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

  public async get(
    customerId: number,
    customerAddressId: number,
    params: {
      limit?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerV2Address>> {
    return await http
      .get(`/v2/customers/${customerId}/addresses/${customerAddressId}`, {
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

  public async update<TData extends CustomerV2Address>(
    customerId: number,
    customerAddressId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerV2Address[]>> {
    return await http
      .put(`/v2/customers/${customerId}/addresses/${customerAddressId}`, {
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
    customerAddressId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/customers/${customerId}/addresses/${customerAddressId}`, {
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
    customerId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerCount>> {
    return await http
      .get(`/v2/customers/${customerId}/addresses/count`, {
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

export default new CustomerV2Addresses()
