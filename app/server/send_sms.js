// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACfa4f00deb9e5b377b9fa34a7f22e79c5';
const authToken = 'c2cb348bacbbb0e0dda7326ded417364';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Dit is een test!!!',
     from: '+32460207022',
     to: '+32497313223'
   })
  .then(message => console.log(message.sid));