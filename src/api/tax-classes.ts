import { TaxClassData } from '../models/tax-class'
import { StoreContentQueryParam } from '../models/store-content'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class TaxClasses {
  public async list(
    params: StoreContentQueryParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<TaxClassData[]> {
    return await http
      .get('/v2/tax_classes', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    id: number,
    requestOptions: RequestOptions = {}
  ): Promise<TaxClassData> {
    return await http
      .get(`/v2/tax_classes/${id}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new TaxClasses()
