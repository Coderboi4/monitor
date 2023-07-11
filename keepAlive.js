const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 3000 || 8080;
mongoose.set('strictQuery', true);

app.all('/', (req, res) => {
  res.send(`Hello world`);
  res.end();
});

function keepAlive() {
  app.listen(port, () => {
    console.log("24/7 KeepAlive Server is online!")
  });
}
module.exports = keepAlive;

/**
|-----------------------------------------|
  * @INFO
  * KeepAlive.js Coded by ᴍᴀᴀʀᴀᴋᴀᴍ#0001
  * @INFO
  * Work for Milanio development| https://discord.gg/milanio
|-----------------------------------------|
*/