import { ProductImageUrl } from '../models/product'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class ProductVariantImages {
  public async create(
    itemId: number,
    variantId: number,
    imageFile?: File,
    requestOptions: RequestOptions = {}
  ): Promise<Result<ProductImageUrl>> {
    return await http
      .post(`/v3/catalog/products/${itemId}/variants/${variantId}/image`, {
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

export default new ProductVariantImages()
