import { SiteCertificateData, SiteCertificateUpsertData, SiteCertificateCertificateInfo } from '../models/site'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class SiteCertificates {
  public async get(
    siteId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<SiteCertificateData>> {
    return await http
      .get(`/v3/sites/${siteId}/certificate`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async upsert<TData extends SiteCertificateUpsertData>(
    siteId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<object>> {
    return await http
      .put(`/v3/sites/${siteId}/certificate`, { ...requestOptions, data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async list(
    params: {
      'urls:in'?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<SiteCertificateCertificateInfo[]>> {
    return await http
      .get('/v3/sites/certificates', { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new SiteCertificates()
