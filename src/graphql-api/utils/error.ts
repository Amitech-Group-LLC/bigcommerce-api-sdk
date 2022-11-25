export class BigcommerceApiError extends Error {
  status: number
  res: Response
  data: any 

  constructor(res) {
    super(res)
    this.name = 'BigcommerceApiError'
    this.status = res.status
    this.res = res
    this.data = res.data
  }
}
