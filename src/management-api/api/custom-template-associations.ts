import {
  CustomTemplateAssociationFilter,
  CustomTemplateAssociation,
  CustomTemplateAssociationPut,
} from '../models/custom-template-association'
import { ListResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomTemplateAssociations {
  public async list(
    filterParams: CustomTemplateAssociationFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<CustomTemplateAssociation[]>> {
    return await http
      .get(`/v3/storefront/custom-template-associations`, {
        ...requestOptions,
        params: filterParams,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async upsertMany<TData extends CustomTemplateAssociationPut>(
    data: TData[],
    requestOptions: RequestOptions = {}
  ): Promise<object> {
    return await http
      .put(`/v3/storefront/custom-template-associations`, {
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

  public async delete(
    params: {
      channel_id?: number
      'entity_id:in'?: number
      type?: 'product' | 'category' | 'brand' | 'page'
      'id:in'?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/storefront/custom-template-associations`, {
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

export default new CustomTemplateAssociations()
