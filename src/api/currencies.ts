import { Currency } from '../models/currency'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Currencies {
  public async list(
    requestOptions: RequestOptions = {}
  ): Promise<Currency[]> {
    return await http
      .get(`/v2/currencies`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async create<TData extends Currency>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Currency> {
    return await http
      .post(`/v2/currencies`, {
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
  ): Promise<object> {
    return await http
      .delete(`/v2/currencies`, {
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
    currencyId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Currency> {
    return await http
      .get(`/v2/currencies/${currencyId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends Currency>(
    currencyId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Currency> {
    return await http
      .put(`/v2/currencies/${currencyId}`, {
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
    currencyId: number,
    requestOptions: RequestOptions = {}
  ): Promise<object> {
    return await http
      .delete(`/v2/currencies/${currencyId}`, {
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

export default new Currencies()
