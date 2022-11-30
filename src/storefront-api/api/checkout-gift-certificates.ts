import { CheckoutData, CheckoutGiftCertificateData } from '../models/checkout'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CheckoutGiftCertificates {
  public async add<TData extends CheckoutGiftCertificateData>(
    checkoutId: string,
    data: TData
  ): Promise<CheckoutData> {
    return await http
      .post(`/api/storefront/checkouts/${checkoutId}/gift-certificates`, { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }

  public async delete(
    checkoutId: string,
    giftCertificateCode: string
  ): Promise<CheckoutData> {
    return await http
      .delete(`/api/storefront/checkouts/${checkoutId}/gift-certificates/${giftCertificateCode}`, {})
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new CheckoutGiftCertificates()
