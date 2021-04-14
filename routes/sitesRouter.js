const express = require('express')

const sites = require('../model/locationList')
const showSiteDetails = require('../view/showSiteDetails')

let router = express.Router()

router.get('/:siteId', async (request, response) => {
    let siteId = request.params.siteId
    try {
        let site = await sites.findLocationById(siteId)
        
        response.type('html')
        response.send(showSiteDetails(site, "http://localhost:3000"))
        
        //response.send("I really like this.<br>Isn't it cool?<br> byebye!<br><br> <a href='/Calgary'>CLICKHERE</a>")

        //response.write(showSiteDetails(site, "http://localhost:3000"))
        //response.end()

        //response.write(site.description + "\n\n")
        //if (site.options.length > 0) {
        //    site.options.forEach((option) => {
        //        response.write(option.option + "\n")
        //    })
        //}
        //response.write("\n")
        //response.end()
    }
    catch (error) {
        console.log(error)
        response.status(404).send("Scene " + siteID + " not found.\n")
        response.send("Scene " + siteId + " not found.\n")
    }
})

module.exports = router

/* function showSiteDetails(location, baseUrl) {
    let details = location.description + "\n\n"
    if (location.options.length > 0) {
        location.options.forEach((option) => {
            details += "\n" + option.option + " go to: "+baseUrl+"/location/"+option.location+"\n\n"
        })
    }
    return details
}

*/

