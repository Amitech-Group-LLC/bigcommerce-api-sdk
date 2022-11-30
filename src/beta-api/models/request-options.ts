import { CancelToken } from 'axios'

export type RequestOptions = {
  accessToken?: string
  cancelToken?: CancelToken
  requestType?: string
}
