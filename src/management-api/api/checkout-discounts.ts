import { CheckoutDiscountData, CheckoutData } from '../models/checkout'
import { DataResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CheckoutDiscounts {
  public async add<TData extends CheckoutDiscountData>(
    checkoutId: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<CheckoutData>> {
    return await http
      .post(`/v3/checkouts/${checkoutId}/discounts`, { ...requestOptions, data})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutDiscounts()
