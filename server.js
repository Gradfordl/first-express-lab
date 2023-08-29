const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Listening on port 3000, SUCCESS");
});

//====================GREETINGS=================================
app.get("/greeting/:name", (req, res) => {
  res.send(`Hello ${req.params.name}! It's so nice to see you!`);
});

//===================TIP CALCULATOR=============================

app.get("/tip/:total/:tip", (req, res) => {
  let tipCalc = parseInt(req.params.tip) / 100;
  res.send(`Suggested tip amount is $${parseInt(req.params.total) * tipCalc}`);
});

//=====================MAGIC 8 BALL ============================

const quotes = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:quote", (req, res) => {
  const rdmQuote = Math.floor(Math.random() * quotes.length);
  res.send(`<h1>${req.params.quote}</h1> 
    <p>${quotes[rdmQuote]}</p>`);
});
