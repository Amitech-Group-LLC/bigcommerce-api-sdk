import { CustonerAttributeValuesParams, CustonerAttributeValuesData, UpsertData } from '../models/customer'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class CustomerAttributeValues {
  public async list(
    params: CustonerAttributeValuesParams = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<CustonerAttributeValuesData[]>> {
    return await http
      .get('/v3/customers/attribute-values', {...requestOptions, params})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async upsertMany<TData extends UpsertData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<CustonerAttributeValuesData[]>> {
    return await http
      .put('/v3/customers/attribute-values', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async deleteMany(
    params: {
      'id:in': number[]
    },
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete('/v3/customers/attribute-values', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerAttributeValues()
