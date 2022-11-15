import { PricingProductPost, PricingProduct } from '../models/pricing'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Pricings {
  public async list<TData extends PricingProductPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<PricingProduct[]>> {
    return await http
      .post(`/v3/pricing/products`, {
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
}

export default new Pricings()
