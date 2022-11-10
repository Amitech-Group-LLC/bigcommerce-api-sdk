import { 
  WidgetTemplateData, 
  WidgetTemplateCreateData, 
  WidgetTemplateParam, 
  WidgetTemplateRenderData,
  WidgetTemplateRender,
  WidgetTemplateQueryParam,
  WidgetTemplateUpdateData
} from '../models/widget'
import { Result, ListResult, DataResult } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class WidgetTemplates {
  public async create<TData extends WidgetTemplateCreateData>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WidgetTemplateData>> {
    return await http
      .post('/v3/content/widget-templates', { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list(
    params: WidgetTemplateParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<ListResult<WidgetTemplateData[]>> {
    return await http
      .get('/v3/content/widget-templates', { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async render<TData extends WidgetTemplateRenderData>(
    uuid: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<DataResult<WidgetTemplateRender>> {
    return await http
      .post(`/v3/content/widget-templates/${uuid}/preview`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    uuid: string,
    params: WidgetTemplateQueryParam = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<WidgetTemplateData>> {
    return await http
      .get(`/v3/content/widget-templates/${uuid}`, { ...requestOptions, params })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends WidgetTemplateUpdateData>(
    uuid: string,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<WidgetTemplateData>> {
    return await http
      .put(`/v3/content/widget-templates/${uuid}`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    uuid: string,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/content/widget-templates/${uuid}`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new WidgetTemplates()
