import { MarketingGiftCertificate, MarketingGiftCertificatePost, MarketingGiftCertificatePut } from '../models/marketing'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class MarketingGiftCertificates {
  public async list(
    params: {
      code?: string
      from_email?: string
      from_name?: string
      limit?: number
      max_id?: number
      min_id?: number
      order_id?: number
      page?: number
      to_email?: string
      to_name?: string
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<MarketingGiftCertificate[]>> {
    return await http
      .get(`/v2/gift_certificates`, {
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

  public async create<TData extends MarketingGiftCertificatePost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<MarketingGiftCertificate>> {
    return await http
      .post(`/v2/gift_certificates`, {
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

  public async deleteMany(
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/gift_certificates`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async get(
    certificateId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<MarketingGiftCertificate>> {
    return await http
      .get(`/v2/gift_certificates/${certificateId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends MarketingGiftCertificatePut>(
    certificateId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<Result<MarketingGiftCertificate>> {
    return await http
      .put(`/v2/gift_certificates/${certificateId}`, {
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
    certificateId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/gift_certificates/${certificateId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new MarketingGiftCertificates()
