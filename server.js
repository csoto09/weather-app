const express = require('express');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv').config();
// const request = require('request');

const app = express()

// static files from React

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/darksky', (req, res) => {
  axios.get(`https://api.darksky.net/forecast/${process.env.darkSkyKey}/${req.query.lat},${req.query.lng}?exclude=minutely,flags`).then(response => {
    console.log(req.query);

    const weather = response.data
    res.send(weather)
  })
    .catch(e => {
      res.send(e)
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000

app.listen(port)

console.log(`app listening on port ${port}`);
