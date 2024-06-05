import KiriminWa from '../src';

const instance = new KiriminWa('YOUR_API_KEY');

// single send
instance.email.send({
  email: 'recepient@example.com',
  subject: 'Hello World!',
  message: 'Hello from KiriminWa!',
  sender_name: 'you',
  reply_to_email: 'me@mydomain.com',
}).then((res) => {
  const response = res.data;

  // Save this to check the status later.
  const uid = response.email_logs[0].uid
});

// multiple send
const data = [
  {
    email: 'recepient@example.com',
    subject: 'Hello World!',
    message: 'Hello from KiriminWa!',
    sender_name: 'you',
    reply_to_email: 'me@mydomain.com',
  },
  {
    email: 'recepient2@example.com',
    subject: 'Hello World!',
    message: 'Hello from KiriminWa!',
    sender_name: 'you',
    reply_to_email: 'me@mydomain.com',
  },
]

instance.email.send(data).then((res) => {
  const response = res.data;
  for(const log of response.email_logs) {
    // Save this to check the status later.
    const uid = log.uid
  }
})