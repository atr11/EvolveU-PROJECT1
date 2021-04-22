let locations = {}

function structureScenario(siteId, description, costOfTurn, injuryName, photoName, wonderYN, options) {
    if (!options) {
        options = []
    }
    locations[siteId] = {
        siteId, 
        description, 
        costOfTurn,
        injuryName,
        photoName,
        wonderYN,
        options,
    }
}

function findLocationById(siteId) {
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