import KiriminWa from '../src';
import { SendSmsRequest } from '../src/sms';

const instance = new KiriminWa('YOUR_API_KEY');

// single send
instance.sms.send({
  number: '628XXXXXXXXXX',
  body: 'Hello from KiriminWa!',
  sms_type: 'plain'
}).then((res) => {
  const response = res.data;

  // Save this to check the status later.
  const uid = response.sms_logs[0].uid
});

// multiple send
const data: SendSmsRequest[] = [
  {
    number: '628XXXXXXXXXX',
    body: 'Hello from KiriminWa!',
    sms_type: 'plain'
  },
  {
    number: '628XXXXXXXXXX',
    body: 'Hey from KiriminWa!',
    sms_type: 'plain'
  },
]

instance.sms.send(data).then((res) => {
  const response = res.data;
  for(const log of response.sms_logs) {
    // Save this to check the status later.
    const uid = log.uid
  }
})