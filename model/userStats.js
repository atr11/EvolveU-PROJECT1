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

function createSpecificStats(pictures,turns,injuries,wondercount){
    let newStatRecordID = statsList.length
    let newStatsRecord = {
        recordID:newStatRecordID,
        cameraRoll:pictures,
        turnCount:turns,
        injuryList:injuries,
        numberWondersFound:wondercount,
    }
    statsList.push(newStatsRecord)
    return newStatRecordID
} 

function listStatsRecords() {
    return statsList
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

function updateStatsRecord(recordToUpdate,pics,numturns,injurieslist,countwonders){
    let recUpdatedYN = "N"
    //Find specific record, update its contents.
    let obj = findStatsRecordByID(recordToUpdate)
    if (obj) {
        if (pics){
            obj.cameraRoll = pics
        } 
        if (numturns){
            obj.turnCount = numturns
        } 
        if (injurieslist){
            obj.injuryList = injurieslist
        } 
        if (countwonders){
            obj.numberWondersFound = countwonders
        } 
        recUpdatedYN = "Y"
    }
    return recUpdatedYN
} 

function deleteStatsRecord(recordToDelete) {
    let recDeletedYN = "N"
    let index = statsList.findIndex(x => x.recordID == recordToDelete)
    if (index >= 0) {
        statsList.splice(index,1)
        recDeletedYN = "Y"
        console.log("After splicing statsList, it looks like this:")
        console.log(statsList)
        console.log("Successfully deleted array element " + index + " which was supposed to have recordID = " + recordToDelete)
    }
    return recDeletedYN
}

module.exports = {
  createNewStats,
  createSpecificStats,
  listStatsRecords,
  findStatsRecordByID,
  updateStatsRecord,
  deleteStatsRecord, 
}
