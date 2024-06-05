import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Email from './email';
import Sms from './sms';
import Whatsap from './whatsapp';

export class KiriminWa {
  private client: AxiosInstance;
  email: Email;
  sms: Sms;
  whatsapp: Whatsap;

  constructor(token: string, baseURL: string = 'https://app.kiriminwa.id/api') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Api-key': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    this.email = new Email(this.client);
    this.sms = new Sms(this.client);
    this.whatsapp = new Whatsap(this.client);
  }
}

export default KiriminWa;
