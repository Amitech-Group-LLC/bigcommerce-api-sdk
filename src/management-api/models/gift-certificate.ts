export type GiftCertificate = {
  name: string
  theme: 'Birthday' | 'Celebration' | 'Christmas' | 'General' | 'Girl'
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
  message?: string
}
