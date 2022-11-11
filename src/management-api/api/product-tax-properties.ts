import { ProductTaxPropertyParam, ProductTaxPropertyData } from '../models/tax-property'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductTaxProperties {
  public async list(
    params: ProductTaxPropertyParam,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductTaxPropertyData[]>> {
    return await http
      .get('/v3/tax/products/properties', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async updateMany<TData extends ProductTaxPropertyData>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductTaxPropertyData[]>> {
    return await http
      .put('/v3/tax/products/properties', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    params: ProductTaxPropertyParam,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete('/v3/tax/products/properties', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ProductTaxProperties()
