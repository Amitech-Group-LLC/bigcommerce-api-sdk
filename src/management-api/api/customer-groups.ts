import { CustomerV2Group, CustomerCount, CustomerV2GroupPost } from '../models/customer'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CustomersV2Groups {
  public async list(
    params: {
      is_default?: boolean
      is_group_for_guests?: boolean
      limit?: number
      name?: string
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<CustomerV2Group[]> {
    return await http
      .get(`/v2/customer_groups`, {
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

  public async create<TData extends CustomerV2GroupPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerV2Group> {
    return await http
      .post(`/v2/customer_groups`, {
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
      .delete(`/v2/customer_groups`, {
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
    customerGroupId: number,
    params: {
      is_default?: boolean
      limit?: number
      name?: string
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<CustomerV2Group> {
    return await http
      .get(`/v2/customer_groups/${customerGroupId}`, {
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

  public async update<TData extends CustomerV2Group>(
    customerGroupId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerV2Group> {
    return await http
      .put(`/v2/customer_groups/${customerGroupId}`, {
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
    customerGroupId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/customer_groups/${customerGroupId}`, {
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
      .get(`/v2/customer_groups/count`, {
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

export default new CustomersV2Groups()
