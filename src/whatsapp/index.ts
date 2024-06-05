import { AxiosInstance, AxiosResponse } from "axios";

export type SendWhatsapRequest = {
  number: string
  message?: string
  media?: 'image' | 'audio' | 'video' | 'document'
  url?: string
}

export type WhatsapLog = {
  uid: string
  to: string
  status: 'Pending' | 'Fail' | 'Success' | 'Schedule'
  created_at: string
}

export type WhatsapResponse = {
  status: 'success' | 'error'
  whatsapp_logs: WhatsapLog[]
  message?: string
}

export type GetWhatsapResponse = Omit<WhatsapResponse, 'whatsapp_logs'> & {
  whats_log: WhatsapLog
}

export default class Whatsap {
  private client: AxiosInstance

  public constructor(axios: AxiosInstance) {
    this.client = axios
  }

  public async send(data: SendWhatsapRequest | SendWhatsapRequest[]): Promise<AxiosResponse<WhatsapResponse, any>> {
    const requestData = (Array.isArray(data)) ? data : [data];
    return this.client.post<WhatsapResponse>('/whatsapp/send', {
      contact: requestData
    })
  }

  public async get(uid: string): Promise<AxiosResponse<GetWhatsapResponse, any>> {
    return this.client.get<GetWhatsapResponse>(`/get/whatsapp/${uid}`)
  }
}