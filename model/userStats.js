let statsList = []

async function createNewStats(){
let statRecordID = statsList.length
let newBlankStatsRecord = {
    recordID:statRecordID,
    cameraRoll:[],
    turnCount:0,
    injuryList:[],
    currentLocation:"",
    numberWondersFound:0,
}
statsList.push(newBlankStatsRecord)
console.log("Attempted to ADD new Stats Record! ID=" + statRecordID)
console.log("statsList looks like: ")
console.log(statsList)
console.log("newBlankStatsRecord looks like:")
console.log(newBlankStatsRecord)
console.log("newBlankStatsRecord.turnCount = " + newBlankStatsRecord.turnCount)
return statRecordID
} 

async function findStatsRecordByID(recordNum) {
    console.log("just entered the findStatusRecordByID function")
    if (statsList.length > 0) {
        let statsRecord = statsList[recordNum]
        if (!statsRecord) {
            throw new Error("Record # " + recordNum + " does not exist!")
            console.log("Unable to find Stats Record # " + recordNum)
        }
        return statsRecord
    }
    return
}

async function deleteStatsRecord(recordToDelete) {
    statsList.splice(recordToDelete,1)
    console.log("Deleted Stats Record! ID=" + recordToDelete)
    return recordToDelete
}

module.exports = {
  createNewStats,
  findStatsRecordByID,
  deleteStatsRecord, 
}
