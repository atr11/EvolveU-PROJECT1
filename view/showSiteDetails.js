
function showSiteDetails(location, baseUrl) {
    let details = "'World Tour: 7 Wonders'  .......  Click on <a href='" + baseUrl + "/location/Quit'>QUIT</a> to exit the game at any time.<br><br>" 
    details += "++++++++++++++++++++++++++++++" + "<br>"
    details += location.description + "<br>"
    details += "++++++++++++++++++++++++++++++" + "<br><br>"
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

//response.send("Hello World! Click <a href='/forest'>HERE</a> to go to the FOREST.")