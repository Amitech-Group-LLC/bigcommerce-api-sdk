import { CustomerConsentData, UpdateCustomerConsentData } from '../models/customer'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CustomerConsent {
  public async get(
    customerId: number,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerConsentData> {
    return await http
      .get(`/v3/customers/${customerId}/consent`, {...requestOptions})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends UpdateCustomerConsentData>(
    customerId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerConsentData> {
    return await http
      .put(`/v3/customers/${customerId}/consent`, {...requestOptions, data})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerConsent()
