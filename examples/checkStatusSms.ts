import KiriminWa from '../src';

const instance = new KiriminWa('YOUR_API_KEY');

const uid = 'SMS_UID'; // Check sendSms.ts

instance.sms.get(uid).then((res) => {
  const response = res.data;

  if (response) {
    switch (response.sms_logs.status) {
      case 'Pending':
        // Do Something
        break;
      case 'Success':
        // Do Something
        break;
      case 'Fail':
        // Do Something
        break;
      case 'Schedule':
        // Do Something
        break;
    }
  }
})