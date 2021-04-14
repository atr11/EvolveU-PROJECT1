require('./model/locationDetails') // initialize all of the location descriptions

const locationRoutes = require('./routes/sitesRouter')

const express = require('express')
const app = express()
const PORT = 3000

app.use('/location', locationRoutes)

app.get('/', (request, response) => {
  response.redirect('/location/Start')
})

app.listen(PORT, function() {
  console.log(`7 Wonders game is now listening at http://localhost:${PORT}`)
})