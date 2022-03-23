import { environment } from "./environment";

const client = require("twilio")(
  environment.account_sid,
  environment.auth_token
);

        // var twilio = require("twilio");
      
        // var client = new twilio(environment.account_sid, environment.auth_token);
      
        // client.messages
        // .create({
        //   to: '+14027696011',
        //   from: process.env.TWILIO_NUMBER,
        //   body: message
        // })
        // .catch(error => console.error(error));