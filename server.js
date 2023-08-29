const express = require("express");

const app = express();

app.get("/greeting/:name", (req, res) => {
    res.send(`Hello ${req.params.name}! It's so nice to see you!`);
})

app.listen(3000, () => {
    console.log("Listening on port 3000, SUCCESS");
  });

//===========================================================

app.get("/tip/:total/:tip", (total, tipPercentage) => {
    let tipCalc = parseInt(total.params.tip) / 100
    tipPercentage.send(`Suggested tip amount is $${parseInt(total.params.total) * tipCalc}`)
})

//===========================================================