let statsList = []

function createNewStats(){
    let statRecordID = statsList.length
    let newBlankStatsRecord = {
        recordID:statRecordID,
        cameraRoll:[],
        turnCount:0,
        injuryList:[],
        numberWondersFound:0,
    }
    statsList.push(newBlankStatsRecord)
    return statRecordID
} 

function findStatsRecordByID(recordNum) {
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

function deleteStatsRecord(recordToDelete) {
    statsList.splice(recordToDelete,1)
    console.log("Deleted Stats Record! ID=" + recordToDelete)
    return recordToDelete
}

module.exports = {
  createNewStats,
  findStatsRecordByID,
  deleteStatsRecord, 
}
