import {
  WebhookPost,
  Webhook,
  WebhookFilter,
  WebhookData,
} from '../models/webhook'
import { Result, ListResult, Meta } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Webhooks {
  public async create<TData extends WebhookPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Webhook, Meta>> {
    return await http
      .post(`/v3/hooks`, {
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

  public async list(
    params: WebhookFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<WebhookData>> {
    return await http
      .get(`/v3/hooks`, {
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
    itemId: number,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<WebhookData>> {
    return await http
      .get(`/v3/hooks/${itemId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends WebhookPost>(
    itemId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WebhookData, Meta>> {
    return await http
      .put(`/v3/hooks/${itemId}`, {
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
    itemId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WebhookData, Meta>> {
    return await http
      .delete(`/v3/hooks/${itemId}`, {
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

export default new Webhooks()
