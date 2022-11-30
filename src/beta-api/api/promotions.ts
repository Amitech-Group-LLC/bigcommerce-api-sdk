import {
    Promotion,
    PromotionFilter
  } from '../models/promotion'
  import { Result } from '../models/result'
  import { RequestOptions } from '../models/request-options'
  import http from '../utils/http-clients'
  import { BigcommerceApiError } from '../utils/error'
  
  class Promotions {
    public async list(
      params: PromotionFilter,
      requestOptions: RequestOptions = {}
    ): Promise<Result<Promotion[]>> {
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
  }
  
  export default new Promotions()
  