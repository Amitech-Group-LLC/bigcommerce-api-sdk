import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class Products {
  public async get(
    data: object
  ):Promise<object> {
    return await http
      .post({ data: data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new Products()
