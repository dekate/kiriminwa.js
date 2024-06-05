import KiriminWa from '../src';
import { SendWhatsapRequest } from '../src/whatsapp';

const instance = new KiriminWa('YOUR_API_KEY');

// single send
instance.whatsapp.send({
  number: '628XXXXXXXXXX',
  message: 'Hello from KiriminWa!',
}).then((res) => {
  const response = res.data;

  // Save this to check the status later.
  const uid = response.whatsapp_logs[0].uid
});

// multiple send
const data: SendWhatsapRequest[] = [
  {
    number: '628XXXXXXXXXX',
    message: 'Text from KiriminWa!',
  },
  {
    number: '628XXXXXXXXXX',
    message: 'Text from KiriminWa!',
    media: 'image',
    url: 'https://example.com/image.png',
  },
  {
    number: '628XXXXXXXXXX',
    message: 'Text from KiriminWa!',
    media: 'audio',
    url: 'https://example.com/audio.mp3',
  },
  {
    number: '628XXXXXXXXXX',
    message: 'Text from KiriminWa!',
    media: 'video',
    url: 'https://example.com/video.mp4',
  },
  {
    number: '628XXXXXXXXXX',
    message: 'Text from KiriminWa!',
    media: 'document',
    url: 'https://example.com/document.pdf',
  },
]

instance.whatsapp.send(data).then((res) => {
  const response = res.data;
  for(const log of response.whatsapp_logs) {
    // Save this to check the status later.
    const uid = log.uid
  }
})