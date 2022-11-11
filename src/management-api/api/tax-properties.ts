import { TaxPropertyData, TaxPropertyParam, TaxPropertyUpdateData, TaxPropertyCreateData, TaxPropertyDeleteParam } from '../models/tax-property'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class TaxProperties {
  public async list(
    params: TaxPropertyParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<TaxPropertyData[]>> {
    return await http
      .get('/v3/tax/properties', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async updateMany<TData extends TaxPropertyUpdateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<TaxPropertyData[]>> {
    return await http
      .put('/v3/tax/properties', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async createMany<TData extends TaxPropertyCreateData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<TaxPropertyData[]>> {
    return await http
      .post('/v3/tax/properties', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    params: TaxPropertyDeleteParam,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete('/v3/tax/properties', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new TaxProperties()
