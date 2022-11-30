import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CustomerLogis {
  public async login(
    jwtToken: string
  ): Promise<undefined> {
    return await http
      .get(`/login/token/${jwtToken}`)
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CustomerLogis()
