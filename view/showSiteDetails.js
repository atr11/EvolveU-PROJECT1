function showSiteDetails(location, userStats, baseUrl) {
    let details = "'World Tour: 7 Wonders'  .......  Click on <a href='" + baseUrl + "/location/Quit'>QUIT</a> to exit the game at any time.<br><br>"
    details += "# Turns Taken: " + userStats.turnCount + "<br>"
    details += "Injuries: " + userStats.injuryList + "<br>"
    details += "Photos: " + userStats.cameraRoll + "<br>"
    details += "Wonders Captured: " + userStats.numberWondersFound + "<br><br>" 
    details += "++++++++++++++++++++++++++++++++++++++++++++++++++" + "<br>"
    details += location.description + "<br>"
    details += "++++++++++++++++++++++++++++++++++++++++++++++++++" + "<br><br>"
    if (location.siteId === "End"){
        if (userStats.numberWondersFound > 6){
            details += "CONGRATULATIONS, you've successfully completed the race!!!<br>"
            details += "You took only " + userStats.turnCount + " turns, you should be proud." 
        } else {
            details += "As you scroll through the photos on your camera, you notice "
            details += "that you missed capturing " + (7 - userStats.numberWondersFound)
            details += " of the Wonders. Still, you are proud of what you've accomplished "
            details += "and are eager to go back and visit the ones you missed." 
        }
    }

    if (location.options.length > 0) {
        location.options.forEach((option) => {
            details += option.option + ":  "
            details += " <a href='" + baseUrl + "/location/" + option.location + "'>" + option.label + "</a>.<br><br>" 
            // details += " go to: "+baseUrl+"/location/"+option.location+"\n\n"
        })
    }
    return details
}

module.exports = showSiteDetails
