const location = require('./locationList')
//Remember Structure: {siteId, description, costOfTurn, injuryName, PhotoName, WonderYN, options} 
location.structureScenario("Start", 
`Welcome to the game, World Tour: 7 Wonders! You are an amateur 
photographer and want to take pictures of all officially
recognized "7 Wonders of the World" (new, not ancient).

You will begin in Calgary and must fly your way to various
locations around the world to take the appropriate pictures,
and then return safely back to Calgary.`,0,"","","N",
[
    { option: "If you are ready to play now, click on", label: "PLAY NOW", location: "CalgaryStart"}
])

location.structureScenario("CalgaryStart", 
`You begin the game in Calgary, home of the Calgary Stampede and the most talented
Full Stack Developers in the world!`,0,"","","N",
[
    { option: "If you want to explore Calgary, click on", label: "TOUR THE SIGHTS", location: "CalgarySights"},
    { option: "If you want to fly to Toronto, click on", label: "TORONTO", location: "Toronto"},
    { option: "If you want to fly to Vancouver, click on", label: "VANCOUVER", location: "Vancouver"}
])

location.structureScenario("CalgarySights", 
`This is a STUB for CalgarySights`,1,"","","N",
[
    { option: "Option Stub", label: "", location: "Calgary"},
])

location.structureScenario("Calgary", 
`You are in Calgary. Back in the comfort of your home, you reflect
on life and wonder whether or not you have enough photos.
Have you had enough of travelling, or do you want to keep going?`,1,"","","N",
[
    { option: "If you are finished with your adventure, click on", label: "FINISHED", location: "End"},
    { option: "If you want to explore Calgary, click on", label: "TOUR THE SIGHTS", location: "CalgarySights"},
    { option: "If you want to fly to Toronto, click on", label: "TORONTO", location: "Toronto"},
    { option: "If you want to fly to Vancouver, click on", label: "VANCOUVER", location: "Vancouver"},
])

location.structureScenario("Toronto", 
`This is a STUB for Toronto`,1,"","","N",
[
    { option: "Option Stub", label: "", location: "Start"},
])

location.structureScenario("Vancouver", 
`This is a STUB for Vancouver`,1,"","","N",
[
    { option: "Option Stub", label: "", location: "Start"},
])

location.structureScenario("InjuryWarning", 
`Ouch! Your injury has put your trip in jeopardy. Three injuries
will force you to end your trip and send you packing for home.
Be sure to take care out there!`,0,"","","N",
[
    { option: "To keep going, click on", label: "CONTINUE", location: "PreviousLocation"},
])

location.structureScenario("Quit", 
`Exhausted from your travels, you decide that you've seen enough and
want nothing more than to settle down and live amongst the locals. You
live many years in obscurity, always wondering if perhaps you should
have continued your journey.<br>
Thanks for playing the game!`,0,"","","N",
[
    { option: "If you would like to play again, click on", label: "PLAY AGAIN", location: "Start"},
])

location.structureScenario("InjuryEnd", 
`Oh no! You have now suffered your 3rd injury and cannot afford another
visit to the hospital. After much soul-searching you decide that you've
had enough and just want to go home. Perhaps when your wounds have
healed you might give it another try.<br>
Thanks for playing the game!`,0,"","","N",
[
    { option: "If you would like to play again, click on", label: "PLAY AGAIN", location: "Start"},
])

location.structureScenario("End", 
`In spite of the many perils and pitfalls during your travels you have 
managed to find your way back home and are eager to show off 
the many photos you have taken. Congratulations, you finished the game!`,0,"","","N",
[
    { option: "If you would like to play again, click on", label: "PLAY AGAIN", location: "Start"},
])

