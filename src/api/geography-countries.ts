import { Country, CountryFilter, Count } from '../models/geography'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class GeographyCountries {
  public async list(
    params: CountryFilter = {},
    requestOptions: RequestOptions = {}
  ): Promise<Result<Country[]>> {
    return await http
      .get(`/v2/countries`, {
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

  public async get(
    countryId: number,
    requestOptions: RequestOptions = {}
  ): Promise<Result<Country>> {
    return await http
      .get(`/v2/countries/${countryId}`, {
        ...requestOptions,
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async getCount(
    requestOptions: RequestOptions = {}
  ): Promise<Result<Count>> {
    return await http
      .get(`/v2/countries/count`, {
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

export default new GeographyCountries()
