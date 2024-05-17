const express = require("express");

const app = express();

const flightData = require("./db/penerbangan.json");
const orderData = require("./db/order.json");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const flight = flightData;
  res.render("pages/index", {
    flights: flight,
  });
});

app.listen(5000, () => {
  console.log("App listening to Port 5000");
});
