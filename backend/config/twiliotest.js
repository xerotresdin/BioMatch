require("dotenv").config({ path: __dirname + "/.env" });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                .verifications
                .create({to: 'side_nathan@hotmail.com', channel: 'email'})
                .then(verification => console.log(verification.sid));
