import { FormFieldData, FormFieldParam } from '../models/form-field'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class FormFields {
  public async get(
    params: FormFieldParam = {}
  ): Promise<FormFieldData> {
    return await http
      .get('/api/storefront/form-fields', { params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new FormFields()
