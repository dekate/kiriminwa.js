import { AxiosInstance, AxiosResponse } from "axios";

export type SendEmailRequest = {
  subject: string
  email: string
  message: string
  sender_name: string
  reply_to_email: string
}

export type EmailLog = {
  uid: string
  email: string
  status: 'Pending' | 'Fail' | 'Success' | 'Schedule'
  created_at: string
}

export type EmailResponse = {
  status: 'success' | 'error'
  email_logs: EmailLog[]
  message?: string
}

export type EmailGetResponse = Omit<EmailResponse, 'email_logs'> & {
  email_logs: EmailLog
}

export default class Email {
  private client: AxiosInstance

  public constructor(axios: AxiosInstance) {
    this.client = axios
  }

  public async send(data: SendEmailRequest | SendEmailRequest[]): Promise<AxiosResponse<EmailResponse, any>> {
    const requestData = (Array.isArray(data)) ? data : [data];
    return this.client.post<EmailResponse>('/email/send', {
      contact: requestData
    })
  }

  public async get(uid: string): Promise<AxiosResponse<EmailGetResponse, any>> {
    return this.client.get<EmailGetResponse>(`/email/get/${uid}`)
  }
}