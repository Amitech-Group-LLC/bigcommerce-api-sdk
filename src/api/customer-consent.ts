import { CustomerConsentData } from '../models/customer-consent'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerConsent {
  public async get(
    customerId: string,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerConsentData>> {
    return await http
      .get(`/v3/customers/${customerId}/consent`, {...requestOptions})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerConsent()
