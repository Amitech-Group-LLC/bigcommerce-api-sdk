import { CheckoutConsignmentData, CheckoutConsignmentIncludeParam } from '../models/checkout-consignment'
import { CheckoutData } from '../models/checkout'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutConsignments {
  public async add<TData extends CheckoutConsignmentData>(
    checkoutId: string,
    data: TData[],
    params: {
      include?: CheckoutConsignmentIncludeParam,
    },
    requestOptions: RequestOptions = {}
  ): Promise<Result<CheckoutData>> {
    return await http
      .post(`/v3/checkouts/${checkoutId}/consignments`, {...requestOptions, data, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutConsignments()
