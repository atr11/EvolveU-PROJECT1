let locations = {}

async function structureScenario(siteId, description, costOfTurn, injuryName, PhotoName, WonderYN, options) {
    if (!options) {
        options = []
    }
    locations[siteId] = {
        siteId, 
        description, 
        costOfTurn,
        injuryName,
        PhotoName,
        WonderYN,
        options,
    }
}

async function findLocationById(siteId) {
    let site = locations[siteId]
    if (!site) {
        throw new Error("Location " + siteId + " does not exist!")
    }
    return site
}


module.exports = {
    structureScenario,
    findLocationById
}