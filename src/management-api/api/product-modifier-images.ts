import { ImageUrl } from '../models/image'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../../utils/http-clients'
import { BigcommerceApiError } from '../../utils/error'

class ProductModifierImages {
  public async create(
    itemId: number,
    modifierId: number,
    valueId: number,
    imageFile: File,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ImageUrl>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/modifiers/${modifierId}/values/${valueId}/image`, {
        ...requestOptions,
        params: { image_file: imageFile },
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new ProductModifierImages()
