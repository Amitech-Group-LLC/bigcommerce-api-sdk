import { CategoryImage } from '../models/category'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CategoryImages {
  public async create(
    itemId: number,
    imageFile: File,
    requestOptions: RequestOptions = {}
  ): Promise<Result<CategoryImage>> {
    return await http
      .post(`/v3/catalog/categories/${itemId}/image`, {
        ...requestOptions,
        params: { image_file: imageFile },
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    itemId: number,
    requestOptions: RequestOptions = {}
  ): Promise<undefined> {
    return await http
      .delete(`/v3/catalog/categories/${itemId}/image`, { ...requestOptions })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CategoryImages()
