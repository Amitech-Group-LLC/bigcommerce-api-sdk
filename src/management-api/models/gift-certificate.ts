export type GiftCertificate = {
  name: string
  theme: string
  amount: string
  quantity: number
  sender: {
    name: string
    email: string
  }
  recipient: {
    name: string
    email: string
  }
  message: string
}
