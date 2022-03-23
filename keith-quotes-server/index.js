//node index.js to run the backend locally

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
const port = 3001;
app.use(cors());
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
      to: "+14026814485",
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
