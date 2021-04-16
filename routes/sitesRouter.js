const express = require('express')
const sites = require('../model/locationList')
const userStatsObj = require('../model/userStats')
const showSiteDetails = require('../view/showSiteDetails')

let router = express.Router()

router.get('/:siteId', async (request, response) => {
    let siteId = request.params.siteId
    let userID = 0
    
    try {
        let site = await sites.findLocationById(siteId)
        let statsRecord = await userStatsObj.findStatsRecordByID(userID)
        if (siteId === "Start"){ //Reset/create new stats
            console.log("Starting new game!")
            console.log("statsRecord = " + statsRecord)
            if (statsRecord){
                console.log("statsRecord = " + statsRecord)
                console.log("Old Stats Record exists, attempting to delete it.")
                let recordDeleted= await userStatsObj.deleteStatsRecord(statsRecord.recordID)
            }
            console.log("About to create new Stat List! userID = " + userID)
            userID = await userStatsObj.createNewStats()
            statsRecord = await userStatsObj.findStatsRecordByID(userID)
        }
    
        console.log("site.costOfTurn = " + site.costOfTurn)
        if(site.costOfTurn === 1){
            //update TurnCount, increment by 1
            console.log("We need to update the TurnCount!")
            statsRecord.turnCount += 1
            console.log("Turn count is now = " + statsRecord.turnCount)
        }

        response.type('html')
        response.send(showSiteDetails(site, statsRecord,"http://localhost:3000"))
    }
    catch (error) {
        console.log(error)
        response.status(404).send("Location " + siteID + " not found.\n")
        response.send("Location " + siteId + " not found.\n")
    }
})

module.exports = router
