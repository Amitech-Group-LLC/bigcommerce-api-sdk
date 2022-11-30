import { EmailSubscription, EmailSubscriptionData } from '../models/email-subscription'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class EmailSubscriptions {
  public async create<TData extends EmailSubscriptionData>(
    data: TData
  ): Promise<EmailSubscription> {
    return await http
      .post('/api/storefront/subscriptions', { data })
      .catch(ex => {
        if (ex.response) {
          throw new BigcommerceApiError(ex)
        }
        throw ex
      })
  }
}

export default new EmailSubscriptions()
