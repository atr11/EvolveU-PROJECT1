# EvolveU Project 1 - MEDIUM - Art Treleaven

"World Tour: 7 Wonders"

This is an Express based game written in JS, designed to be played using
a web browser (ex. Chrome, Safari, FireFox).

-GETTING STARTED-
Location of Project: https://github.com/atr11/EvolveU-Project1
Once you have cloned this repository to your computer,
use a terminal (bash) to navigate to the correct folder
and then perform the following commands:

=> npm install

=> npm start

```
Once the Express server starts and begins to 'listen',
use your favorite web browser to play the game by
entering the following URL in the address bar: 

http://localhost:3000 

Have Fun!

-GAME DESCRIPTION-
You are an amateur photographer and have entered a
'scavenger hunt' contest to take pictures of all
officially recognized "7 Wonders of the World"
(New, not Ancient) in the least possible amount of
time. You will begin in Calgary and must fly your
way to various locations around the world to take
the appropriate pictures, and then return back to
Calgary with pictures of all 7 Wonders on your camera.
Each action you take will cost you one 'turn' (a
flight between cities, sight-seeing, taking a picture).
Each city has a limited number of destinations that are
possible. See how quickly you can accomplish the task,
by taking as few 'turns' as possible! Don't be afraid
to take risks, but beware of potential dangers and the
risk of getting injured. Three injuries will put an
end to your epic road trip!
===

++++++++++++++++++++++++++++++++++++++++++++++

DEMONSTRATION OF HTTP METHODS

GET
Example 1: Listing ALL statistics records
 =>$ curl http://localhost:3000/stats/list
Example 2: Listing a specific statistics record by ID
 =>$ curl http://localhost:3000/stats/list/0
Example 3: Playing the game
 =>$ curl http://localhost:3000/location/Start

POST
Example 1: Creating a brand new BLANK statistics record
 =>$ curl -X POST http://localhost:3000/stats/createnew
Example 2: Creating a new user-defined statistics record
 =>$ curl -H "Content-Type: application/json" -X POST -d '{"cameraRoll":["Picture1","Picture2"],"turnCount":1,"injuryList":["concussed","brokenhand"],"numberWondersFound":7}' http://localhost:3000/stats/createspecific 

DELETE
Example 1: Delete a specific statistics record by ID
 =>$ curl -X DELETE http://localhost:3000/stats/remove/0

PATCH (Update)
Example 1: Update all fields for a specific statistics record
 =>$ curl -H "Content-Type: application/json" -X PATCH -d '{"cameraRoll":["Picture1","Picture2"],"turnCount":1,"injuryList":["concussed","brokenfoot"],"numberWondersFound":7}' http://localhost:3000/stats/modify/0
Example 2: Update SOME fields for a specific statistics record  
 =>$ curl -H "Content-Type: application/json" -X PATCH -d '{"cameraRoll":["Picture1","Picture2","Picture3"],"numberWondersFound":4}' http://localhost:3000/stats/modify/0 

++++++++++++++++++++++++++++++++++++++++++++++
#######################################################

CREDITS

Tony Enerson, for his skyrim CYOA demo, which provided the
basis for the scene/location logic in this game.

Top notch peer support from the Cohort6 gang!

Endless web pages and blogs offering tips, especially StackOverflow and W3Schools.

Many descriptions of the cities and places mentioned in
this game were copied directly from the following
sources:
 - Google Maps
 - Lonely Planet
 - Trip Advisor
 - Wikipedia


