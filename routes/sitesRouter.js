const express = require('express')
const sites = require('../model/locationList')
const userStatsObj = require('../model/userStats')
const showSiteDetails = require('../view/showSiteDetails')

let router = express.Router()


//router.post('/:statsfile', async (request, response) => {
//}

//Delete Stats record when user clicks "Quit"
//router.delete('/:statsfile', async (request, response) => {
//}

//Update stats record when...
//router.put() {
//}


router.get('/:siteId', (request, response) => {
    let siteId = request.params.siteId
    let userID = 0
    
    try {
        let site = sites.findLocationById(siteId)
        let statsRecord = userStatsObj.findStatsRecordByID(userID)
        
        if (siteId === "Start"){ //Reset/create new stats
            console.log("Starting new game!")
            if (statsRecord){
                console.log("Old Stats Record exists, attempting to delete it.")
                let recordDeleted= userStatsObj.deleteStatsRecord(statsRecord.recordID)
            }
            console.log("Attempting to create new Stats record...")
            userID = userStatsObj.createNewStats()
            statsRecord = userStatsObj.findStatsRecordByID(userID)
        }

        console.log("InjuryList has " + statsRecord.injuryList.length + " items.")
        if (statsRecord.injuryList.length > 2){  //Re-route to game's end after 3rd injury.
            site = sites.findLocationById("InjuryEnd")
        }
        
        if(site.costOfTurn > 0){
            //update TurnCount, increment by location's turnCount value.
            statsRecord.turnCount += site.costOfTurn
        }

        if(site.injuryName > ""){
            console.log("injuryName = " + site.injuryName)
            //update list of injuries
            statsRecord.injuryList.push(site.injuryName)
        }

        if(site.photoName > ""){
            if(site.wonderYN === "Y"){
                let indexOfPhotoInList = statsRecord.cameraRoll.indexOf(site.photoName)
                if(indexOfPhotoInList === -1){
                    statsRecord.numberWondersFound += 1
                }
            }
            //update list of photos in cameraRoll
            statsRecord.cameraRoll.push(site.photoName)
        }

        response.type('html')
        response.send(showSiteDetails(site, statsRecord,"http://localhost:3000"))   
    }
    catch (error) {
        console.log(error)
        response.status(404).send("Location " + siteId + " not found.\n")
        response.send("Location " + siteId + " not found.\n")
    }
})

module.exports = router
