import KiriminWa from '../src';

const instance = new KiriminWa('YOUR_API_KEY');

const uid = 'WHATSAPP_UID'; // Check sendWhatsapp.ts

instance.whatsapp.get(uid).then((res) => {
  const response = res.data;

  if (response) {
    switch (response.whats_log.status) {
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