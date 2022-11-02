import {
  AbandonedCartEmail,
  AbandonedCartEmailPost,
  AbandonedCartEmailTemplate,
} from '../models/abandoned-cart'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class AbandonedCartEmails {
  public async list(
    params: {
      channel_id?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartEmail[]>> {
    return await http
      .get(`/v3/marketing/abandoned-cart-emails`, {
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

  public async create<TData extends AbandonedCartEmailPost>(
    params: {
      channel_id?: number
    } = {},
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartEmail>> {
    return await http
      .post(`/v3/marketing/abandoned-cart-emails`, {
        ...requestOptions,
        data,
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
    emailId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartEmail>> {
    return await http
      .get(`/v3/marketing/abandoned-cart-emails/${emailId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends AbandonedCartEmailPost>(
    emailId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartEmail>> {
    return await http
      .put(`/v3/marketing/abandoned-cart-emails/${emailId}`, {
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
    emailId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/marketing/abandoned-cart-emails/${emailId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getDefault(
    requestOptions: RequestOptions = {}
  ): Promise<Result<AbandonedCartEmailTemplate>> {
    return await http
      .get(`/v3/marketing/abandoned-cart-emails/default`, {
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

export default new AbandonedCartEmails()
