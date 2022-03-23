const accountSid = "ACf7aabced2a6fd9e9c72f2b57d8127981";
const authToken = "9e62e6ab0b7d8dec708eae112516cde3";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    username: "jacobitz.vivian@cox.net",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+12087470934",
    to: "+14026814485",
  })
  .then((message) => console.log(message.sid));
