const express = require("express");

const app = express();

app.get("/greeting/:name", (req, res) => {
    res.send(`Hello ${req.params.name}! It's so nice to see you!`);
})

app.listen(3000, () => {
    console.log("Listening on port 3000, SUCCESS");
  });