const express = require('express');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv').config();

const app = express()

// static files from React

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/darksky', (req, res) => {
  axios.get(`https://api.darksky.net/forecast/${process.env.darkSkyKey}/${req.query.lat},${req.query.lng}?exclude=minutely,flags`).then(response => {
    const weather = response.data
    res.send(weather)
  })
    .catch(e => {
      console.log(`error`, e)
    })
})
// https://api.mapbox.com/geocoding/v5/mapbox.places/${query}?access_token=${process.env.mapboxKey}
app.get('/api/geocode', (req, res) => {
  axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${req.query.query}.json`, {
    params: {
      access_token: process.env.mapboxKey,
      autocomplete: true,
      types: 'place,country,postcode,region',
      language: 'en'
    }
  }).then(response => {
    console.log(response.data);
    res.send(response.data)
  }).catch(e => {
    console.error(e)
  })
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000

app.listen(port)

console.log(`app listening on port ${port}`);
