import { SubscriberParam, SubscriberData, SubscriberCreateData, SubscriberDeleteParam, SubscriberUpdateData } from '../models/subscriber'
import { ListResult, Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class Subscribers {
  public async list(
    params: SubscriberParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<SubscriberData[]>> {
    return await http
      .get('/v3/customers/subscribers', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends SubscriberCreateData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<SubscriberData>> {
    return await http
      .post('/v3/customers/subscribers', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    params: SubscriberDeleteParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete('/v3/customers/subscribers', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    subscriberId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<SubscriberData>> {
    return await http
      .get(`/v3/customers/subscribers/${subscriberId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends SubscriberUpdateData>(
    subscriberId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<SubscriberData>> {
    return await http
      .put(`/v3/customers/subscribers/${subscriberId}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    subscriberId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/customers/subscribers/${subscriberId}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Subscribers()
