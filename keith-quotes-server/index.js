require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.post("/send/message", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
  .create({
    username: "jacobitz.vivian@cox.net",
    body: req.body,
    from: process.env.TWILIO_NUMBER,
    to: "+14027696011",
  })
  .then(() => {
    res.send(JSON.stringify({ success: true }));
  })
  .catch(err => {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  });
});