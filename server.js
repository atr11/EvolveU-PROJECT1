require('./model/locationDetails') // initialize all of the location descriptions
//require('./model/userStats') // initialize user statistics

const locationRoutes = require('./routes/sitesRouter')

const express = require('express')
const app = express()
const PORT = 3000

app.use('/location', locationRoutes)

app.delete('/clearstats', (request,response) => {
  console.log("clearing stats now...")
  response.redirect('/location/Start')
}) 

//Whenever game is STARTED, call app.POST to create STATS record
//Whenever game is QUIT or Ended, use app.DELETE to delete stats record
//The POST and DELETE requests will be simulated through requested
//HTML 'href' anchors at the time games are started or ended.

/*
app.use(express.json())

//POST
app.post('/', (request, response) => {
  const dataFromUser = (request.body)  //this is in JSON format, needs parsing
  response.send("creating Stats page..." + dataFromUser)  
})

*/

app.get('/', (request, response) => {
  response.redirect('/location/Start')
})

app.listen(PORT, function() {
  console.log(`7 Wonders game is now listening at http://localhost:${PORT}`)
})




//TONY CODE:
//app.post('/api/contact/create', async (req, res) => {
//  let firstName = req.body.firstName
//  let lastName= req.body.lastName
//  let phoneNumber= req.body.phoneNumber
//  let contactId = await contacts.createContact(firstName, lastName, phoneNumber)
//  res.send("Created contact with id " + contactId)
//})

//app.delete('/api/contact/:contactId', async (req, res) => { 
//  let contactId = req.params.contactId
//  let deleteResult = await contacts.deleteContact(contactId)
//  res.send("Record deleted: " + deleteResult)
//}) 

//app.get('/api/contact/searchByNameFragment', async (req, res) => {
//  console.log("Search by name fragment")
//  const nameFragment = req.query.nameFragment
//  console.log(nameFragment)
//  const result = await contacts.searchByNameFragment(nameFragment)  
//  res.send(result)
//}) 

//app.put()

