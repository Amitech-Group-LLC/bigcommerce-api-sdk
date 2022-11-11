import { TaxProviderConnectionData, TaxProviderConnectionUpdateData } from '../models/tax-provider-connection'
import { DataResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class TaxProviderConnections {
  public async get(
    providerId: string,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<TaxProviderConnectionData>> {
    return await http
      .get(`/v3/tax/providers/${providerId}/connection`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    providerId: string,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<TaxProviderConnectionData>> {
    return await http
      .delete(`/v3/tax/providers/${providerId}/connection`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends TaxProviderConnectionUpdateData>(
    providerId: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<TaxProviderConnectionData>> {
    return await http
      .put(`/v3/tax/providers/${providerId}/connection`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new TaxProviderConnections()
