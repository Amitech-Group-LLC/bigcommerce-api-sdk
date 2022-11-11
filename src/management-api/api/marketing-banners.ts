import { MarketingBanner, MarketingBannerPost, MarketingBannerPut, MarketingCount } from '../models/marketing'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class MarketingBanners {
  public async list(
    params: {
      limit?: number
      max_id?: number
      min_id?: number
      page?: number
    } = {},
    requestOptions: RequestOptions = {}
  ): Promise<MarketingBanner[]> {
    return await http
      .get(`/v2/banners`, {
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

  public async create<TData extends MarketingBannerPost>(
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<MarketingBanner> {
    return await http
      .post(`/v2/banners`, {
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
      .delete(`/v2/banners`, {
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
    bannerId: number,
    requestOptions: RequestOptions = {}
  ): Promise<MarketingBanner> {
    return await http
      .get(`/v2/banners/${bannerId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async update<TData extends MarketingBannerPut>(
    bannerId: number,
    data: TData,
    requestOptions: RequestOptions = {}
  ): Promise<MarketingBanner> {
    return await http
      .put(`/v2/banners/${bannerId}`, {
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
    bannerId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v2/banners/${bannerId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getBannerCount(
    requestOptions: RequestOptions = {}
  ): Promise<MarketingCount> {
    return await http
      .get(`/v2/banners/count`, {
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

export default new MarketingBanners()
