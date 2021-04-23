require('./model/locationDetails') // initialize all of the location descriptions
//require('./model/userStats') // initialize user statistics

const locationRoutes = require('./routes/sitesRouter')
const stats = require('./model/userStats')

const express = require('express')
const app = express()
const PORT = 3000

app.use('/location', locationRoutes)

// The express "json parser" will help us separate the body
// of the http URI into distinguishable parts. We will need
// this for our POST and PATCH methods below as this will give
// access to req.body and allow us to see the different values
// embedded within the URI.
app.use(express.json())

//When creating a SPECIFIC stats record, we expect the front-end
//to provide the values for each field.
//The CURL command to POST specific values in a new record
//will look something like this:
// =>$ curl -H "Content-Type: application/json" -X POST -d '{"cameraRoll":["Picture1","Picture2"],"turnCount":1,"injuryList":["concussed","brokenfoot"],"numberWondersFound":7}' http://localhost:3000/stats/createspecific 
app.post('/stats/createspecific', (request, response) => {
  let pictures = request.body.cameraRoll
  let turns = request.body.turnCount
  let injuries = request.body.injuryList
  let wondercount = request.body.numberWondersFound
  let newRecId = stats.createSpecificStats(pictures,turns,injuries,wondercount)
  response.send("Created new stats record with id = " + newRecId)
})

app.post('/stats/createnew', (request, response) => {
  let newRecordId = stats.createNewStats()
  response.send("Created new stats record with id = " + newRecordId)
})

//When updating a stats record, we expect the front-end
//to provide the values for each field that needs to be changed.
//The CURL command to PATCH specific values in a new record
//will look something like these:  ALL fields vs. SOME fields
// =>$ curl -H "Content-Type: application/json" -X PATCH -d '{"cameraRoll":["Picture1","Picture2"],"turnCount":1,"injuryList":["concussed","brokenfoot"],"numberWondersFound":7}' http://localhost:3000/stats/modify/0 
// =>$ curl -H "Content-Type: application/json" -X PATCH -d '{"cameraRoll":["Picture1","Picture2","Picture3"],"numberWondersFound":4}' http://localhost:3000/stats/modify/0 
app.patch('/stats/modify/:recordNum', (request,response) => {
  let recIdToChg = request.params.recordNum 
  let chgPictures = request.body.cameraRoll
  let chgTurns = request.body.turnCount
  let chgInjuries = request.body.injuryList
  let chgWondercount = request.body.numberWondersFound
  let chgResult = stats.updateStatsRecord(recIdToChg,chgPictures,chgTurns,chgInjuries,chgWondercount)
  if (chgResult === "Y") {
    response.send("Updated RecordId: " + recIdToChg)
  } else {
    response.send("Unable to find record to update!")
    }
})

app.delete('/stats/remove/:recordNum', (request,response) => {
  let recordId = request.params.recordNum
  let deletionResult = stats.deleteStatsRecord(recordId)
  if (deletionResult === "Y") {
    response.send("Deleted RecordId: " + recordId)
  } else {
      response.send("Unable to find record to delete!")
    }
})

//Retrieve list of all Stats Records
app.get('/stats/list', (request, response) => { 
  let statsList = stats.listStatsRecords() 
  response.send(statsList) 
}) 

//Retrieve stats for specific ID
app.get('/stats/list/:userID', (request, response) => { 
  let userRecID = request.params.userID
  console.log("Retrieving stats for RecordID : " + userRecID)
  let userStats = stats.findStatsRecordByID(userRecID) 
  response.send(userStats) 
}) 

app.get('/', (request, response) => {
  response.redirect('/location/Start')
})

app.listen(PORT, function() {
  console.log(`7 Wonders game is now listening at http://localhost:${PORT}`)
})

