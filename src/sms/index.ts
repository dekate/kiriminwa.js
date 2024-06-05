import { AxiosInstance, AxiosResponse } from "axios";

export type SendSmsRequest = {
  number: string
  body: string
  sms_type: 'plain' | 'unicode'
}

export type SmsLog = {
  uid: string
  number: string
  status: 'Pending' | 'Fail' | 'Success' | 'Schedule'
  created_at: string
}

export type SmsResponse = {
  status: 'success' | 'error'
  sms_logs: SmsLog[]
  message?: string
}

export type SmsGetResponse = Omit<SmsResponse, 'sms_logs'> & {
  sms_logs: SmsLog
}

export default class Sms {
  private client: AxiosInstance

  public constructor(axios: AxiosInstance) {
    this.client = axios
  }

  public async send(data: SendSmsRequest | SendSmsRequest[]): Promise<AxiosResponse<SmsResponse, any>> {
    const requestData = (Array.isArray(data)) ? data : [data];
    return this.client.post<SmsResponse>('/sms/send', {
      contact: requestData
    })
  }

  public async get(uid: string): Promise<AxiosResponse<SmsGetResponse, any>> {
    return this.client.get<SmsGetResponse>(`/sms/get/${uid}`)
  }
}