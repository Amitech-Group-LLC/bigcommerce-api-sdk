import { CustomerFormFieldParams, CustomerFormFieldData } from '../models/customer-form-field-value'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerFormFieldValues {
  public async list(
    params: CustomerFormFieldParams = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<CustomerFormFieldData[]>> {
    return await http
      .get('/v3/customers/form-field-values', {...requestOptions, params})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerFormFieldValues()
