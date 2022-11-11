import { CustomerValidateCredentialData, CustomerValidateCredential } from '../models/customer'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CustomerValidateCredentials {
  public async validate<TData extends CustomerValidateCredentialData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<CustomerValidateCredential> {
    return await http
      .post('/v3/customers/validate-credentials', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerValidateCredentials()
