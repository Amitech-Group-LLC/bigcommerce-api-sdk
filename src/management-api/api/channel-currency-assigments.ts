import { ChannelCurrencyAssigment, ChannelCurrencyAssigmentPost, ChannelCurrencyAssigmentSinglePost } from '../models/channel'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ChannelCurrencyAssigments {
  public async list(
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelCurrencyAssigment[]>> {
    return await http
      .get(`/v3/channels/currency-assignments`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createMany<TData extends ChannelCurrencyAssigmentPost>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelCurrencyAssigment[]>> {
    return await http
      .post(`/v3/channels/currency-assignments`, {
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

  public async updateMany<TData extends ChannelCurrencyAssigmentPost>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelCurrencyAssigment[]>> {
    return await http
      .put(`/v3/channels/currency-assignments`, {
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

  public async get(
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelCurrencyAssigment>> {
    return await http
      .get(`/v3/channels/${channelId}/currency-assignments`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends ChannelCurrencyAssigmentSinglePost>(
    channelId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelCurrencyAssigment>> {
    return await http
      .post(`/v3/channels/${channelId}/currency-assignments`, {
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

  public async update<TData extends ChannelCurrencyAssigmentSinglePost>(
    channelId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ChannelCurrencyAssigment>> {
    return await http
      .put(`/v3/channels/${channelId}/currency-assignments`, {
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
    channelId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<number>> {
    return await http
      .put(`/v3/channels/${channelId}/currency-assignments`, {
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

export default new ChannelCurrencyAssigments()
