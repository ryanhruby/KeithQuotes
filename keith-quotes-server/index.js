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

var numbers = [
  "+14026814485",
  "+14027696011",
  "+14028007618",
  "+14026998121",
  "+14023047125",
  "+19139075948",
  "+14028020212",
  "+16605410202",
  "+16128026214",
  "+18126050116",
  "+14023805165",
  "+14022011809",
  "+14022094668",
  "+14026010106",
  "+14023144546",
];

app.post("/send/message1", (req, res) => {
  res.header("Content-Type", "application/json");
  numbers.map(number => { 
    return client.messages
    .create({
      username: "jacobitz.vivian@cox.net",
      body: "Keith's first quote: \"I didn't think there was water in Nebraska City.\"",
      from: process.env.TWILIO_NUMBER,
      to: number,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  });
});

app.post("/send/message2", (req, res) => {
  res.header("Content-Type", "application/json");
  numbers.map(number => { 
    return client.messages
    .create({
      username: "jacobitz.vivian@cox.net",
      body: "Keith's second quote: \"I reject the concept of empathy.\"",
      from: process.env.TWILIO_NUMBER,
      to: number,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  });
});

app.post("/send/message3", (req, res) => {
  res.header("Content-Type", "application/json");
  numbers.map(number => { 
    return client.messages
    .create({
      username: "jacobitz.vivian@cox.net",
      body: "Keith's third quote: \"Work your way up? Work hard? That's bullshit!\"",
      from: process.env.TWILIO_NUMBER,
      to: number,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  });
});

app.post("/send/message4", (req, res) => {
  res.header("Content-Type", "application/json");
  numbers.map(number => { 
    return client.messages
    .create({
      username: "jacobitz.vivian@cox.net",
      body: "Keith's fourth quote: \"My morals are flexible.\"",
      from: process.env.TWILIO_NUMBER,
      to: number,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  });
});

app.post("/send/message5", (req, res) => {
  res.header("Content-Type", "application/json");
  numbers.map(number => { 
    return client.messages
    .create({
      username: "jacobitz.vivian@cox.net",
      body: "Keith's fifth quote: \"If you compete for a single man, you're competing against every other girl... If you compete for a married man, it's only one girl.\"",
      from: process.env.TWILIO_NUMBER,
      to: number,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
