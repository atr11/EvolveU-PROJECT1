const location = require('./locationList')
//Remember Structure: {siteId, description, costOfTurn, injuryName, photoName, wonderYN, options} 


//###############################################
//Locations/scenarios for Start and Setup of Game
//###############################################

location.structureScenario("Start", 
`Welcome to the game, World Tour: 7 Wonders!<br>
You are an amateur photographer and have entered a
'scavenger hunt' RACE to take pictures of all
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
end to your epic road trip!`
,0,"","","N",
[
    { option: "If you are ready to play now, click on", label: "PLAY NOW", location: "CalgaryStart"}
])

//-----------------------

location.structureScenario("CalgaryStart", 
`You begin the game in Calgary, home of the Calgary Stampede and the most talented
Full Stack Developers in the world!
A cosmopolitan Alberta city with numerous skyscrapers, Calgary owes its rapid
growth to its status as the centre of Canada’s oil industry. However, it’s still
steeped in the western culture that earned it the nickname “Cowtown,” evident in
the Calgary Stampede, its massive July rodeo and festival that grew out of the
farming exhibitions once presented here.`
,0,"","","N",
[
    { option: "If you want to explore Calgary, click on", label: "TOUR THE SIGHTS", location: "CalgarySights"},
    { option: "If you want to fly to Toronto, click on", label: "TORONTO", location: "Toronto"},
    { option: "If you want to fly to Vancouver, click on", label: "VANCOUVER", location: "Vancouver"}
])



//###############################################
//Main destinations for flying between cities
//###############################################

location.structureScenario("Calgary", 
`You are in Calgary. Back in the comfort of your home, you reflect
on life and wonder whether or not you have enough photos.
Have you had enough of travelling, or do you want to keep going?`
,1,"","","N",
[
    { option: "If you are done and want to finish the RACE, click on", label: "FINISHED", location: "End"},
    { option: "If you want to explore Calgary, click on", label: "TOUR THE SIGHTS", location: "CalgarySights"},
    { option: "If you want to fly to Toronto, click on", label: "TORONTO", location: "Toronto"},
    { option: "If you want to fly to Vancouver, click on", label: "VANCOUVER", location: "Vancouver"},
])

//-----------------------

location.structureScenario("Vancouver", 
`Vancouver, a bustling west coast seaport in British Columbia, is among
Canada’s densest, most ethnically diverse cities. A popular filming location,
it’s surrounded by mountains, and also has thriving art, theatre and music scenes.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "VancouverSights"},
    { option: "If you want to fly to Calgary, click on", label: "CALGARY", location: "Calgary"},
    { option: "If you want to fly to Los Angeles, click on", label: "LOS ANGELES", location: "LosAngeles"},
])

//-----------------------

location.structureScenario("LosAngeles", 
`Los Angeles is a sprawling Southern California city and the center of the
nation’s film and television industry. Near its iconic Hollywood sign, studios
such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes
tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and
footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps
to stars’ homes.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "LosAngelesSights"},
    { option: "If you want to fly to Vancouver, click on", label: "VANCOUVER", location: "Vancouver"},
    { option: "If you want to fly to Mexico, click on", label: "MEXICO", location: "Mexico"},
])

//-----------------------

location.structureScenario("Mexico", 
`Cancun, a Mexican city on the Yucatan Peninsula bordering the Caribbean Sea, is
known for its beaches, numerous resorts and nightlife. It’s composed of 2 distinct
areas: the more traditional downtown area, El Centro, and Zona Hotelera, a long,
beachfront strip of high-rise hotels, nightclubs, shops and restaurants.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "MexicoSights"},
    { option: "If you want to fly to Los Angeles, click on", label: "LOS ANGELES", location: "LosAngeles"},
    { option: "If you want to fly to Brazil, click on", label: "BRAZIL", location: "Brazil"},
])

//-----------------------

location.structureScenario("Brazil", 
`Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana
and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado
and for Sugarloaf Mountain, a granite peak with cable cars to its summit.
The city is also known for its sprawling shanty towns. Its raucous Carnaval
festival, featuring parade floats, flamboyant costumes and samba dancers, is
considered the world’s largest.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "BrazilSights"},
    { option: "If you want to fly to Mexico, click on", label: "MEXICO", location: "Mexico"},
    { option: "If you want to fly to Peru, click on", label: "PERU", location: "Peru"},
])

//-----------------------

location.structureScenario("Peru", 
`Lima, the capital of Peru, lies on the country's arid Pacific coast. Though
its colonial center is preserved, it's a bustling metropolis and one of South
America’s largest cities. It's home to the Museo Larco collection of pre-Columbian
art and the Museo de la Nacion, tracing the history of Peru’s ancient civilizations.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "PeruSights"},
    { option: "If you want to fly to Brazil, click on", label: "BRAZIL", location: "Brazil"},
    { option: "If you want to fly to Australia, click on", label: "AUSTRALIA", location: "Australia"},
])

//-----------------------

location.structureScenario("Australia", 
`Sydney, capital of New South Wales and one of Australia's largest cities, is best
known for its harbourfront Sydney Opera House, Darling Harbour, and its arched
Harbour Bridge.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "AustraliaSights"},
    { option: "If you want to fly to Peru, click on", label: "PERU", location: "Peru"},
    { option: "If you want to fly to China, click on", label: "CHINA", location: "China"},
])

//-----------------------

location.structureScenario("China", 
`Beijing, China’s sprawling capital, has history stretching back 3 millennia.
Yet it’s known as much for modern architecture as its ancient sites such as the
grand Forbidden City complex, the imperial palace during the Ming and Qing
dynasties. Nearby, the massive Tiananmen Square pedestrian plaza is the site of
Mao Zedong’s mausoleum and the National Museum of China, displaying a vast
collection of cultural relics.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "ChinaSights"},
    { option: "If you want to fly to Australia, click on", label: "AUSTRALIA", location: "Australia"},
    { option: "If you want to fly to Russia, click on", label: "RUSSIA", location: "Russia"},
])

//-----------------------

location.structureScenario("Russia", 
`Moscow is Russia’s cosmopolitan capital. In its historic core is the Kremlin, a
complex that’s home to the president and tsarist treasures in the Armoury. Outside
its walls is Red Square, Russia's symbolic center. It's home to Lenin’s Mausoleum,
the State Historical Museum's comprehensive collection and St. Basil’s Cathedral,
known for its colorful, onion-shaped domes.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "RussiaSights"},
    { option: "If you want to fly to China, click on", label: "CHINA", location: "China"},
    { option: "If you want to fly to India, click on", label: "INDIA", location: "India"},
])

//-----------------------

location.structureScenario("India", 
`New Delhi is the capital of India and also the seat of all three branches
of the government of India, hosting the Rashtrapati Bhavan, Parliament House,
and the Supreme Court of India. This special city has been home to prominent
civilisations, dynasties and rulers, and is home to unique sites that are found
nowhere else on the continent.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "IndiaSights"},
    { option: "If you want to fly to Russia, click on", label: "RUSSIA", location: "Russia"},
    { option: "If you want to fly to Egypt, click on", label: "EGYPT", location: "Egypt"},
])

//-----------------------

location.structureScenario("Egypt", 
`Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is
Tahrir Square and the vast Egyptian Museum, a trove of antiquities including
royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site
of the iconic pyramids and Great Sphinx, dating to the 26th century BC.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "EgyptSights"},
    { option: "If you want to fly to India, click on", label: "INDIA", location: "India"},
    { option: "If you want to fly to Jordan, click on", label: "JORDAN", location: "Jordan"},
])

//-----------------------

location.structureScenario("Jordan", 
`Amman, the capital of Jordan, is a modern city with numerous ancient
ruins. Atop Jabal al-Qala’a hill, the historic Citadel includes the
pillars of the Roman Temple of Hercules and the 8th-century Umayyad
Palace complex, known for its grand dome. Built into a different downtown
hillside, the Roman Theater is a 6,000-capacity, 2nd-century stone amphitheater.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "JordanSights"},
    { option: "If you want to fly to Egypt, click on", label: "EGYPT", location: "Egypt"},
    { option: "If you want to fly to Greece, click on", label: "GREECE", location: "Greece"},
])

//-----------------------

location.structureScenario("Greece", 
`Athens is the capital of Greece. It was also at the heart of Ancient
Greece, a powerful civilization and empire. The city is still dominated
by 5th-century BC landmarks, including the Acropolis, a hilltop citadel
topped with ancient buildings like the Parthenon temple. The Acropolis
Museum, along with the National Archaeological Museum, preserves
sculptures, vases, jewelry and more from Ancient Greece.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "GreeceSights"},
    { option: "If you want to fly to Jordan, click on", label: "JORDAN", location: "Jordan"},
    { option: "If you want to fly to Italy, click on", label: "ITALY", location: "Italy"},
])

//-----------------------

location.structureScenario("Italy", 
`Rome is famous for having amazing foods such as spaghetti, lasagna,
pizza and gelato. This Capital of Italy is well known for historic
sites such as the Colosseum, Trevi Fountain and Vatican City. Rome
is where the Ancient Romans created systems and structures that we
still use to this day.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "ItalySights"},
    { option: "If you want to fly to Greece, click on", label: "GREECE", location: "Greece"},
    { option: "If you want to fly to France, click on", label: "FRANCE", location: "France"},
])

//-----------------------

location.structureScenario("France", 
`Paris, France's capital, is a major European city and a global center
for art, fashion, culinary arts, and culture. Its 19th-century cityscape
is crisscrossed by wide boulevards and the River Seine. Beyond such
landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame
cathedral, the city is known for its cafe culture and designer boutiques.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "FranceSights"},
    { option: "If you want to fly to Italy, click on", label: "ITALY", location: "Italy"},
    { option: "If you want to fly to New York, click on", label: "NEW YORK", location: "NewYork"},
])

//-----------------------

location.structureScenario("NewYork", 
`New York City comprises 5 boroughs sitting where the Hudson River meets
the Atlantic Ocean. At its core is Manhattan, a densely populated borough
that’s among the world’s major commercial, financial and cultural centers.
Its iconic sites include skyscrapers such as the Empire State Building and
sprawling Central Park. Broadway theater is staged in neon-lit Times Square.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "NewYorkSights"},
    { option: "If you want to fly to France, click on", label: "FRANCE", location: "France"},
    { option: "If you want to fly to Toronto, click on", label: "TORONTO", location: "Toronto"},
])

//-----------------------

location.structureScenario("Toronto", 
`Toronto, the capital of the province of Ontario, is a major Canadian city along
Lake Ontario’s northwestern shore. It's a dynamic metropolis with a core of
soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower.`
,1,"","","N",
[
    { option: "If you want to explore nearby sights, click on", label: "TOUR THE SIGHTS", location: "TorontoSights"},
    { option: "If you want to fly to New York, click on", label: "NEW YORK", location: "NewYork"},
    { option: "If you want to fly to Calgary, click on", label: "CALGARY", location: "Calgary"},
])

//-----------------------



//###############################################
//Scenarios for Sigh-Seeing in various cities
//###############################################

location.structureScenario("CalgarySights", 
`Just for fun, you decide to hike around town to see what Calgary
has to offer. While there seems to be a lot going on, you decide
that you must narrow your options down to the following, as the
clock is ticking and you need to get on with the race.`
,0,"","","N",
[
    { option: "If you want to head to the mountains and visit nearby Banff, click on", label: "BANFF", location: "CalBanff"},
    { option: "If you want to visit the Calgary Tower, click on", label: "THE TOWER", location: "CalgaryTower"},
])
location.structureScenario("CalBanff", 
`You decide to catch an airport shuttle to Banff and have a wonderful
day exploring the townsite and taking in a few nature walks. 
Founded in 1885 after the discovery of the Cave and Basin Hot Springs,
Banff is Canada's first and most famous national park, and the second
national park established in North America (the first was Yellowstone).
It is home to an outstanding variety of geological and ecological features,
like mountains, glaciers, icefields, lakes, alpine meadows, mineral hot
springs, canyons, and hoodoos. The park is also well-known for having
wildlife that is just as diverse. Visitors can encounter 53 species of
mammals, including bighorn sheep, wolves, bears (black and grizzly), elk,
coyotes, caribou, and even mountain lions. In 1984, Banff was declared a
UNESCO World Heritage Site.
However, during a hike in nearby Johnston Canyon you take a nasty fall on
the path and break your right leg. Ouch! After a quick visit to a
drop-in medical clinic, you head back to the airport.`
,1,"Broken Leg","","N",
[
    { option: "To continue, click on", label: "CONTINUE", location: "Calgary"},
])
location.structureScenario("CalgaryTower", 
`You take a taxi to beautiful downtown Calgary and the driver lets you
out at the base of the Calgary Tower. After a quick trip up the elevator,
you decide to take a photo from the top of the tower as evidence that you
are not afraid of heights. Even though this is NOT one of the Wonders of
the World, it will still make a nice addition to your photo album!`
,1,"","Calgary Tower","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Calgary"},
    { option: "If you still want to visit Banff, click on", label: "BANFF", location: "CalBanff"},
])


//-----------------------

location.structureScenario("VancouverSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Go take a walk in", label: "STANLEY PARK", location: "VanStanleyPark"},
    { option: "Get more of a rush at the", label: "CAPILANO SUSPENSION BRIDGE", location: "VanCapilanoBridge"},
])
location.structureScenario("VanStanleyPark", 
`North America's third-largest park draws eight million visitors per year, many
of whom may skate or walk past you on the Seawall, a scenic, 5.5-mile path running
along the water on the park's perimeter. It's just one of many trails among the
park's 1,000 acres, which also house an aquarium, nature center and other recreational
facilities. Eager to stretch your legs, you go on a quick hike around the park and
take a selfie. CLICK! Ah, nature!`
,1,"","Stanley Park","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Vancouver"},
    { option: "If you want to visit the other sight, click on", label: "CAPILANO SUSPENSION BRIDGE", location: "VanCapilanoBridge"},
])
location.structureScenario("VanCapilanoBridge", 
`A 15-minute drive from downtown Vancouver, the iconic Capilano Suspension Bridge
is a Vancouver landmark. Since 1889, visitors and locals alike have flocked to
this famous swinging bridge across Capilano Canyon, making it one of Canada's most
popular attractions. The bridge stretches 450 feet across, at 230 feet above
Capilano River. You can't resist taking a photo of this amazing view. Snap!`
,1,"","Capilano Suspension Bridge","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Vancouver"},
    { option: "If you want to visit the other sight, click on", label: "STANLEY PARK", location: "VanStanleyPark"},
])

//-----------------------

location.structureScenario("LosAngelesSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Visit Mickey and friends at", label: "DISNEYLAND", location: "LADisneyLand"},
    { option: "Take in some rides at", label: "UNIVERSAL STUDIOS", location: "LAUniversalStudios"},
])
location.structureScenario("LADisneyLand", 
`Disneyland California is a short drive away. Located in Anaheim, this
resort actually features two theme parks: Disneyland Park and Disney
California Adventure. Opened in 1955, Walt Disney’s original theme park,
Disneyland Park is divided into 8 themed “lands”—Main Street, U.S.A.,
Tomorrowland, Fantasyland, Mickey's Toontown, Frontierland, Critter Country,
New Orleans Square and Adventureland. Sail with pirates, explore exotic
jungles, meet fairy-tale princesses, and dive under the ocean and rocket
through the stars— all in the same day. Combine the magic of Disney with
the best that California has to offer and the result is Disney California
Adventure, a theme park that celebrates the California in style. When you
enter the gates of this park, you are transported to the land of promise,
opportunity and glamour. Disney California Adventure is a journey from the
California of yesterday to today and a tribute to this land of dreams. You
can ride the Red Car Trolley in 1920s Los Angeles, take a raft down the rapids
with a mining company on Grizzly Peak, travel down Route 66 or brave a white
knuckled roller coaster in a seaside amusement park. Whether you prefer "action,
comedy or romance," Disney California Adventure has something for everyone.
Unfortunately you only have time for one park, so you buy a ticket to
Disneyland Park and manage to snag a photo with you and Mickey Mouse.
Nicely done!`
,1,"","Mickey Mouse","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "LosAngeles"},
    { option: "If you want to visit the other sight, click on", label: "UNIVERSAL STUDIOS", location: "LAUniversalStudios"},
])
location.structureScenario("LAUniversalStudios", 
`Get ready for the ultimate Hollywood experience! Find a full day of
action-packed entertainment all in one place: thrilling theme park rides
and shows, a real working movie studio, and Los Angeles’ best shops, restaurants
and cinemas at CityWalk. Universal Studios Hollywood is a unique experience that’s
fun for the whole family. Explore Universal Studios backlot on the legendary
Studio Tour. Then face the action head on in heart-pounding rides, shows and
attractions that put you inside some of the world’s biggest movies. After taking
in a few rides, you decide to slow things down and take in a live-action
performance. Unfortunately you sat too close to the speaker and the loud noise
has perforated your eardrum, OUCH! The pain is too much, so you decide to head
back to the airport.`
,1,"Perforated Eardrum","","N",
[
    { option: "To continue, click on", label: "CONTINUE", location: "LosAngeles"},    
])

//-----------------------

location.structureScenario("MexicoSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Take a tour bus over to 'wonder'ful", label: "CHICHEN ITZA", location: "MEXChichenItza"},
    { option: "Spend a day at", label: "TULUM", location: "MEXTulum"},
])
location.structureScenario("MEXChichenItza", 
`Congratulations, you've discovered one of the 'Seven Wonders of the World!'
Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which
flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá, who
were strongly influenced by the Toltecs, a number of important monuments and
temples were built. Among the most notable is the stepped pyramid El Castillo
(“The Castle”), which rises 79 feet (24 meters) above the Main Plaza. A testament
to the Mayans’ astronomical abilities, the structure features a total of 365
steps, the number of days in the solar year. During the spring and autumnal
equinoxes, the setting sun casts shadows on the pyramid that give the appearance
of a serpent slithering down the north stairway; at the base is a stone snake head.
Life there was not all work and science, however. Chichén Itzá is home to the
largest tlachtli (a type of sporting field) in the Americas. On that field the
residents played a ritual ball game popular throughout pre-Columbian Mesoamerica.
Simply stunning. You take a selfie with your camera, of course!`
,1,"","El Castillo","Y",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Mexico"},
    { option: "If you want to visit the other sight, click on", label: "TULUM", location: "MEXTulum"},
])
location.structureScenario("MEXTulum", 
`Tulum is a town on the Caribbean coastline of Mexico’s Yucatán Peninsula. It’s
known for its beaches and well-preserved ruins of an ancient Mayan port city. Near
the ruins is the Parque Nacional Tulum, a coastal area with mangroves and cenotes
(natural limestone sinkholes). You have a wonderful time visiting the ruins, and
the beaches are so inviting that you are tempted to stay for a few days. Unfortunately
you must keep moving on if you hope to win the big race. Before you leave this amazing
place, you capture a photo with your camera. CLICK! That's a keeper!`
,1,"","Tulum Ruins","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Mexico"},
    { option: "If you want to visit the other sight, click on", label: "CHICHEN ITZA", location: "MEXChichenItza"},
])

//-----------------------

location.structureScenario("BrazilSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Join the throngs of tourists visiting", label: "CHRIST THE REDEEMER", location: "BRAChristRedeemer"},
    { option: "Go shopping and check out the scene in", label: "COPACABANA", location: "BRACopacabana"},
])
location.structureScenario("BRAChristRedeemer", 
`Congratulations, you've discovered one of the 'Seven Wonders of the World!'
Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado
in Rio de Janeiro. Its origins date to just after World War I, when some
Brazilians feared a “tide of godlessness.” Construction began on the proposed
statue in 1926 and was completed five years later. The resulting monument stands
98 feet tall—not including its base, which is about 26 feet high—and its
outstretched arms span 92 feet. It is the largest Art Deco sculpture in the world.
Christ the Redeemer is made of reinforced concrete and is covered in approximately
six million tiles. You buy a ticket on the crowded rail car to the top, climb more
steps than you would have liked, and finally arrive at the base of the statue. After
spending several minutes enjoying the view, you happily snap a selfie with your
camera. CLICK!`
,1,"","Christ the Redeemer","Y",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Brazil"},
    { option: "If you want to visit the other sight, click on", label: "COPACABANA", location: "BRACopacabana"},
])
location.structureScenario("BRACopacabana", 
`Famed for its crescent-shaped beach, Copacabana is one of Rio’s liveliest
neighborhoods, drawing a cross-section of locals and visitors to round-the-clock
activity along its sands and mosaic-tiled promenade. Amid the high-rises overlooking
the beach are the art deco Copacabana Palace hotel and imposing Copacabana Fort, home
to a military museum. Inland, laid-back sidewalk cafes and casual bars line tranquil
streets. But hey, let's be realistic here... you just wanted to visit because of the
SONG. You have a lovely time visiting, but take a nasty fall on the promenade,
cracking two vertebrae. OUCH! On the bright side, a local who has come to your rescue
also turns out to be a pilot... and they offer you a shortcut to EGYPT on a one-way
flight.`
,1,"Cracked Vertebrae","","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Brazil"},
    { option: "If you take the Egyptian pilot up on their offer, click on", label: "EGYPT ONE-WAY", location: "Egypt"},
])

//-----------------------

location.structureScenario("PeruSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Take a local commuter flight to", label: "CUSCO", location: "PERUCusco"},
    { option: "Rest for 4 hours wondering why there are so few options and then go", label: "BACK TO AIRPORT", location: "Peru"},
])
location.structureScenario("PERUCusco", 
`Cusco, a city in the Peruvian Andes and a UNESCO World Heritage Site, was once
capital of the Inca Empire, and is now known for its archaeological remains and
Spanish colonial architecture. Plaza de Armas is the central square in the old
city, with arcades, carved wooden balconies and Incan wall ruins. The baroque
Santo Domingo Convent was built on top of the Incan Temple of the Sun (Qoricancha),
and has archaeological remains of Inca stonework. Amazed by the ruins, you can't
resist a photo. CLICK! Say, did you know that Cusco is the nearest major city to
Machu Picchu? If you hope to capture a picture of that 'wonder'ful place, now is
your chance!`
,1,"","Cusco","N",
[
    { option: "To head back to the airport in Lima, click on", label: "BACK TO AIRPORT", location: "Peru"},
    { option: "To keep going and visit Machu Picchu, click on", label: "MACHU PICCHU", location: "PERUMachuPicchu"},
])
location.structureScenario("PERUMachuPicchu", 
`Congratulations, you've discovered one of the 'Seven Wonders of the World!' This
Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed
it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion
against Spanish rule. Although that claim was later disproved, the purpose of
Machu Picchu has confounded scholars. Bingham believed it was home to the “Virgins
of the Sun,” women who lived in convents under a vow of chastity. Others think that
it was likely a pilgrimage site, while some believe it was a royal retreat. What is
known is that Machu Picchu is one of the few major pre-Columbian ruins found nearly
intact. Despite its relative isolation high in the Andes Mountains, it features
agricultural terraces, plazas, residential areas, and temples.
Wait, where's your camera? Oh no, did you leave it behind on the airplane? Oh wait,
there it is, tucked in the corner of your backpack. What a relief! Taking in the
view, you position yourself for the perfect selfie, and CLICK... another Wonder
for the camera roll. When you are finished, you head back to Cusco to explore a
little longer.`
,1,"","Machu Picchu","Y",
[
    { option: "To continue, click on", label: "CUSCO", location: "PERUCusco"},
])

//-----------------------

location.structureScenario("AustraliaSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Head straight to the", label: "SYDNEY OPERA HOUSE", location: "AUSSydneyOpera"},
    { option: "Go for a stroll to the", label: "HARBOUR BRIDGE", location: "AUSSydneyHarbourBridge"},
])
location.structureScenario("AUSSydneyOpera", 
`The Sydney Opera House is one of the most-photographed buildings in the world,
known for its unique use of a series of gleaming white sail-shaped shells as its
roof structure. The iconic performing arts facility is Sydney's best-known landmark,
an architectural masterpiece, and a vibrant performance space. It's a place where
the past shapes the future, where conventions are challenged and cultures are
celebrated. Fun fact: Construction of the Opera House began in 1957 and was formally
completed in 1973, having cost $102 million. You have always wanted to visit Australia,
and now is your chance to capture another amazing photo. A friendly stranger walks up
and offers to take your picture in front of the Opera House. CLICK! You grab your camera
back before they have a chance to run off with it.`
,1,"","Sydney Opera House","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Australia"},
    { option: "If you want to visit the other sight, click on", label: "HARBOUR BRIDGE", location: "AUSSydneyHarbourBridge"},
])
location.structureScenario("AUSSydneyHarbourBridge", 
`The Sydney Harbour Bridge is an engineering marvel built over 8.5 years from
1923 to 1932. Since you're here anyway, you decide to take a closer look. Hey
wait, was that Nemo? You quickly turn your body around to catch a glimpse of
a whale in the harbor and what you THINK is a small clownfish riding on its head.
Will wonders never cease! You whip out your camera for a quick photo. CLICK! It
looks like you've captured a real life Nemo on film! As you reach the other side
of the bridge, you notice a booth with an aggressive salesman offering cheap
cruises to New Zealand and America. You pay the man $50 bucks for a ticket to
New Zealand and stand in a long line of other eager tourists waiting to disembark.
Unfortunately the ships' captains get their wires crossed, and you end up in
Los Angeles by mistake. No wonder that seemed like such a long trip for just going
to New Zealand!
There are a bunch of angry tourists here. You decide not to be one of them and
just let things be. What an adventure!`
,1,"","Nemo!","N",
[
    { option: "To continue, click on", label: "CONTINUE", location: "LosAngeles"},
])

//-----------------------

location.structureScenario("ChinaSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Go on a tour of the", label: "GREAT WALL", location: "CHNGreatWall"},
    { option: "Follow a different crowd to the", label: "FORBIDDEN CITY", location: "CHNForbiddenCity"},
])
location.structureScenario("CHNGreatWall", 
`Congratulations, you've discovered one of the 'Seven Wonders of the World!'
One of the world’s largest building-construction projects, the Great Wall of
China is widely thought to be about 5,500 miles (8,850 km) long; a disputed
Chinese study, however, claims the length is 13,170 miles (21,200 km). Work
began in the 7th century BCE and continued for two millennia. Although it's
referred to as a single “wall,” the structure actually features two parallel
walls for lengthy stretches. In addition, watchtowers and barracks dot the
bulwark. 
You have waited all your life to see this amazing structure in person, and
actually take a photo of yourself standing on the wall. The long awaited moment
has finally arrived. CLICK! Oops, did you just blink?`
,1,"","Great Wall of China","Y",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "China"},
    { option: "If you want to visit the other sight, click on", label: "FORBIDDEN CITY", location: "CHNForbiddenCity"},
])
location.structureScenario("CHNForbiddenCity", 
`The Forbidden City was the political and ritual center of China for over 500 years.
After its completion in 1420, the Forbidden City was home to 24 emperors, their
families and servants during the Ming (1368–1644) and the Qing (1644–1911) dynasties.
In the past, commoners were prohibited from entering the Forbidden City without
permission and only imperial families and invited high officials could enter (hence
the name). The Forbidden City was declared a World Heritage Site in 1987. The complex
consists of 980 buildings, encompassing 8,886 rooms and covering 7,800,000 sq ft.
It is listed by UNESCO as the largest collection of preserved ancient wooden structures
in the world. Oh, you have GOT to take a picture of THIS! CLICK.`
,1,"","Forbidden City","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "China"},
    { option: "If you want to visit the other sight, click on", label: "GREAT WALL", location: "CHNGreatWall"},
])

//-----------------------

location.structureScenario("RussiaSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Take a tour of magnificent", label: "RED SQUARE", location: "RUSRedSquare"},
    { option: "Seek culture and refinement at the", label: "BOLSHOI THEATRE", location: "RUSBolshoiTheatre"},
])
location.structureScenario("RUSRedSquare", 
`Red Square is one of the oldest and largest squares in Moscow, the capital of
Russia. Owing to its historical significance and the adjacent historical buildings,
it is regarded as one of the most famous squares in Europe and the world. It is
located in Moscow's historic centre, in the eastern walls of the Kremlin. It is the
city landmark of Moscow, with iconic buildings such as Saint Basil's Cathedral,
Lenin's Mausoleum and the GUM. In addition, it has been a UNESCO World Heritage Site
since 1990. So much amazing history here, and St Basil's makes an iconic backdrop for
your latest selfie. Say cheese! CLICK.`
,1,"","Red Square","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Russia"},
    { option: "If you want to visit the other sight, click on", label: "BOLSHOI THEATRE", location: "RUSBolshoiTheatre"},
])
location.structureScenario("RUSBolshoiTheatre", 
`The Bolshoi Theatre is a historic theatre in Moscow, which holds ballet and opera
performances. Before the October Revolution it was a part of the Imperial Theatres
of the Russian Empire along with Maly Theatre in Moscow and a few theatres in Saint
Petersburg. The Bolshoi Ballet and Bolshoi Opera are amongst the oldest and most
renowned ballet and opera companies in the world. It is by far the world's biggest
ballet company, with more than 200 dancers. The theatre is the parent company of
The Bolshoi Ballet Academy, a world-famous leading school of ballet. The main building
of the theatre, rebuilt and renovated several times during its history, is a landmark
of Moscow and Russia. You are so impressed by your tour that you attempt to do your
best dance impression of Mikhail Baryshnikov. You fail, miserably, and break your
right clavicle in the process. OUCH! You go back to the airport to consider your
options.`
,1,"Broken Clavicle","","N",
[
    { option: "To continue, click on", label: "CONTINUE", location: "Russia"},
])

//-----------------------

location.structureScenario("IndiaSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Go visit the famed", label: "TAJ MAHAL", location: "INDTajMahal"},
    { option: "Take a tour of the popular", label: "RED FORT", location: "INDRedFort"},
])
location.structureScenario("INDTajMahal", 
`Congratulations, you've discovered one of the 'Seven Wonders of the World!'
This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic
monuments and is perhaps the finest example of Mughal architecture. The Taj Mahal was
built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen
One of the Palace”), who died in 1631 giving birth to their 14th child. It took about
22 years and 20,000 workers to construct the complex, which includes an immense garden
with a reflecting pool. The mausoleum is made of white marble that features semiprecious
stones in geometric and floral patterns. You join the thousands of visitors in taking
copious amounts of video, and of course the all important selfie with your camera.
CLICK!`
,1,"","Taj Mahal","Y",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "India"},
    { option: "If you want to visit the other sight, click on", label: "RED FORT", location: "INDRedFort"},
])
location.structureScenario("INDRedFort", 
`The massive Red Fort (or Lal Qila) stands rather forlornly, a sandstone carcass of its
former self. In ages past, when Mughal Emperor Shah Jahan paraded out of the fort atop
an elephant into the streets of Old Delhi, he and the fort that he built were a
grandiose display of pomp and power. The walls of the fort extend for 2 kilometers and
vary in height from 60 ft on the river side to 110 ft on the city side. Shah Jahan began
construction of the massive fort in 1638 and it was completed in 1648. Shah Jahan never
completely moved his capital from Agra to his new city of Shahjahanabad in Delhi because
he was deposed and imprisoned in Agra Fort by his sly son Aurangzeb. The Red Fort dates
from the very peak of Mughal power. Their reign from Delhi was a short one, however;
Aurangzeb was the first and last great Mughal emperor to rule from here. The 33 ft deep
moat has been bone-dry since 1857. This will make yet another great photo for your
album. Fix your hair and smile, CLICK!`
,1,"","Red Fort","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "India"},
    { option: "If you want to visit the other sight, click on", label: "TAJ MAHAL", location: "INDTajMahal"},
])

//-----------------------

location.structureScenario("EgyptSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Head straight for the", label: "GREAT PYRAMID OF GIZA", location: "EGYPTPyramidsGiza"},
    { option: "Follow a group of tourists to the", label: "GREAT SPHINX OF GIZA", location: "EGYPTSphynx"},
])
location.structureScenario("EGYPTPyramidsGiza", 
`The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of
Cheops) is the oldest and largest of the pyramids in the Giza pyramid complex bordering
present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the
Ancient World, and the only one to remain largely intact. Even though this is not
officially recognized as one of the "NEW 7 Wonders of the World", it certainly has
honorary status.
You have dreamed of this day, and now you will have a selfie to prove that you were
here. CLICK!`
,1,"","Great Pyramid of Giza","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Egypt"},
    { option: "If you want to visit the other sight, click on", label: "GREAT SPHINX OF GIZA", location: "EGYPTSphynx"},
])
location.structureScenario("EGYPTSphynx", 
`The Great Sphinx of Giza is a limestone statue of a reclining sphinx, a mythical
creature, standing on the Giza Plateau on the west bank of the Nile in Giza, Egypt.
The face of the Sphinx is generally believed to represent the pharaoh Khafre. Cut
from the bedrock, the original shape of the Sphinx has been restored with layers of
limestone blocks. It measures 240 ft long from paw to tail, 66 ft high from the base
to the top of the head and 62 ft wide at its rear haunches. It is the oldest known
monumental sculpture in Egypt and is commonly believed to have been designed, sculpted,
and constructed by ancient Egyptians of the Old Kingdom during the reign of the pharaoh
Khafre.
Deciding you need to step back further for a better shot of this massive
sculpture, you accidentally step on another tourists foot, rupturing your achilles
tendon! Rushing to your aid, a Canadian pilot from one of the many tour companies
offers to fly you directly to Calgary for medical treatment if you wish. Is this luck,
or a curse?`
,1,"Ruptured Achilles","","N",
[
    { option: "If you ignore the pilot's offer and head back to the airport in Cairo, click on", label: "BACK TO AIRPORT", location: "Egypt"},
    { option: "If you prefer to fly with the pilot to Calgary, click on", label: "CALGARY", location: "Calgary"},
])

//-----------------------

location.structureScenario("JordanSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Visit ancient", label: "PETRA", location: "JORPetra"},
    { option: "Take in the scenery at the", label: "DEAD SEA", location: "JORDeadSea"},
])
location.structureScenario("JORPetra", 
`Congratulations, you've discovered one of the 'Seven Wonders of the World!'
The ancient city of Petra, Jordan, is located in a remote valley, nestled among
sandstone mountains and cliffs. It was purported to be one of the places where Moses
struck a rock and water gushed forth. Later the Nabataeans, an Arab tribe, made it
their capital, and during this time it flourished, becoming an important trade center,
especially for spices. Noted carvers, the Nabataeans chiseled dwellings, temples, and
tombs into the sandstone, which changed color with the shifting sun. In addition, they
constructed a water system that allowed for lush gardens and farming. At its height,
Petra reportedly had a population of 30,000. The city began to decline, however, as
trade routes shifted. A major earthquake in 363 CE caused more difficulty, and after
another tremor hit in 551, Petra was gradually abandoned. Although rediscovered in 1912,
it was largely ignored by archaeologists until the late 20th century.
You've never seen anything quite like this, so intricately carved into such a seemlingly
random and remote location. You are awe-struck as you snap another selfie. CLICK!`
,1,"","Petra","Y",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Jordan"},
    { option: "If you want to visit the other sight, click on", label: "DEAD SEA", location: "JORDeadSea"},
])
location.structureScenario("JORDeadSea", 
`The Dead Sea is one of the saltiest bodies of water on Earth, with almost 10 times
more salt than ordinary seawater. This salinity makes for a harsh environment in which
plants and animals cannot flourish, hence its name. The Dead Sea has attracted visitors
from around the Mediterranean Basin for thousands of years. It was one of the world's
first health resorts (for Herod the Great), and it has been the supplier of a wide
variety of products, from asphalt for Egyptian mummification to potash for fertilisers.
After quickly dipping your aching feet in its 'healing' waters, you feel refreshed and
snap a selfie pic for the album. CLICK!`
,1,"","Dead Sea","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Jordan"},
    { option: "If you want to visit the other sight, click on", label: "PETRA", location: "JORPetra"},
])

//-----------------------

location.structureScenario("GreeceSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Head straight to the place everyone wants to see,", label: "THE ACROPOLIS", location: "GREAcropolis"},
    { option: "Follow a group of tourists to", label: "DELPHI", location: "GREDelphi"},
])
location.structureScenario("GREAcropolis", 
`The rock of the Acropolis, crowned by the dramatic ruins of the Parthenon, is one of
the archetypal images of Western culture. The first time you see it, rising above the
traffic or from a distant hill, is extraordinary: foreign, and yet utterly familiar. As
in other Greek cities the Acropolis itself is simply the highest point of the city, and
this steep-sided, flat-topped crag of limestone, rising abruptly 100m from its
surroundings, has made it the focus of Athens during every phase of its development.
Easily defensible and with plentiful water, its initial attractions are obvious. Even
now, with no function apart from tourism, it is the undeniable heart of the city,
around which everything else clusters, glimpsed at almost every turn. As well as the
iconic Parthenon, the summit of the Acropolis is home to the Erechtheion, the Temple of
Athena Nike and the Propylaia, as well as lesser remains of many other ancient
structures. Knowing you will likely never get another chance to visit again, you eagerly
reach to snap another photo with your well-used camera. CLICK!`
,1,"","The Acropolis","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Greece"},
    { option: "If you want to visit the other sight, click on", label: "DELPHI", location: "GREDelphi"},
])
location.structureScenario("GREDelphi", 
`On the Greek mainland, Delphi is a UNESCO World Heritage site. Built on the lower
slopes of Mount Parnassus, overlooking a dramatic ravine, the site was sacred to the
ancients, who came here on pilgrimages to worship Apollo (god of light, prophecy, music,
and healing) and to ask advice from the mythical Oracle. It is made up of the crumbling
ruins of numerous temples, a theater, and stadium, dating from between the 8th century
BC and the 2nd century AD.
Taking in your surroundings, you are left gaping in awe at this large ancient
amphitheatre. The steep hillside catches you off guard, and you fall to the ground,
rolling several feet before you stop. That is, you are stopped by a large rock that has
knocked the wind out of you and left you bleeding internally with a lacerated spleen.
OUCH! No longer in the mood for a photo, you head straight back to the airport.`
,1,"Lacerated Spleen","","N",
[
    { option: "To continue, click on", label: "CONTINUE", location: "Greece"},
])

//-----------------------

location.structureScenario("ItalySights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Follow the crowds to", label: "THE COLOSSEUM", location: "ITAColosseum"},
    { option: "Take an art-appreciation tour of the", label: "SISTINE CHAPEL", location: "ITASistineChapel"},
])
location.structureScenario("ITAColosseum", 
`Congratulations, you've discovered one of the 'Seven Wonders of the World!'
The Colosseum in Rome was built in the first century by order of the Emperor Vespasian.
A feat of engineering, the amphitheater measures 620 by 513 feet and features a complex
system of vaults. It was capable of holding 50,000 spectators, who watched a variety of
events - the most notable of which were gladiator fights. In addition, water was
sometimes pumped into the Colosseum for mock naval engagements. According to some
estimates, about 500,000 people died in the Colosseum.
What an amazing feat! Aren't you glad you came all this way? Quick, take a picture
before you wake up from this dream. CLICK!`
,1,"","The Colosseum","Y",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Italy"},
    { option: "If you want to visit the other sight, click on", label: "SISTINE CHAPEL", location: "ITASistineChapel"},
])
location.structureScenario("ITASistineChapel", 
`The Sistine Chapel is a large chapel in the Vatican City. It is renowned for its
Renaissance art, especially the ceiling painted by Michelangelo, and attracts more than
5 million visitors each year.
What an amazing image to catch on film!... but you have to be sneaky because they don't
allow photos to be taken in the chapel. You'd better hope they don't catch you. CLICK!
Ssshhhh, quiet!`
,1,"","Sistine Chapel","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Italy"},
    { option: "If you want to visit the other sight, click on", label: "THE COLOSSEUM", location: "ITAColosseum"},
])

//-----------------------

location.structureScenario("FranceSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Go where everyone goes, to the", label: "EIFFEL TOWER", location: "FRAEiffelTower"},
    { option: "Visit priceless works of art at", label: "THE LOUVRE", location: "FRALouvre"},
])
location.structureScenario("FRAEiffelTower", 
`The Eiffel Tower was the main exhibit of the Paris Exposition (World's Fair) of 1889.
It was constructed to commemorate the centennial of the French Revolution and to
demonstrate France's industrial prowess to the world. You manage a quick trip to the
viewing platforms and then snap another photo for your camera roll. CLICK! Well done!`
,1,"","Eiffel Tower","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "France"},
    { option: "If you want to visit the other sight, click on", label: "THE LOUVRE", location: "FRALouvre"},
])
location.structureScenario("FRALouvre", 
`The Louvre Museum is the world's largest art museum and a historic monument in Paris,
France, and is best known for being the home of the Mona Lisa. A central landmark of
the city, it is home to approximately 38,000 objects from prehistory to the 21st
century. The museum is housed in the Louvre Palace, originally built as the Louvre
castle in the late 12th to 13th century under Philip II. Remnants of the fortress
are visible in the basement of the museum. So many amazing paintings and sculptures!
A crowd has gathered around the Mona Lisa and in an effort to get a better view, you
are elbowed in the head by another tourist and suffer a concussion. OUCH! Back to the
airport you go.`
,1,"Concussion","","N",
[
    { option: "To continue, click on", label: "CONTINUE", location: "France"},
])

//-----------------------

location.structureScenario("NewYorkSights", 
`You've decided to tour the sights, but since you are rushed for
time, your choices are limited to the following. Click a link to choose: `
,0,"","","N",
[
    { option: "Follow the crowds of tourests to the", label: "STATUE OF LIBERTY", location: "NYStatueLiberty"},
    { option: "Catch a live musical on", label: "BROADWAY", location: "NYBroadwayShow"},
])
location.structureScenario("NYStatueLiberty", 
`The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in
New York Harbor within New York City, in the United States. The copper statue, built
by Gustave Eiffel, was a gift from the people of France to the people of the United
States. The statue was dedicated on October 28, 1886. The statue is a figure of
Libertas, a robed Roman liberty goddess. She holds a torch above her head with her
right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI,
the date of the U.S. Declaration of Independence. A broken shackle and chain lie at her
feet as she walks forward, commemorating the recent national abolition of slavery.
After its dedication, the statue became an icon of freedom and of the United States,
seen as a symbol of welcome to immigrants arriving by sea. 
Of the many sites to see in New York, this is certainly one of the best. You decide to
take a photo as a keepsake of your trip. CLICK!`
,1,"","Statue of Liberty","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "NewYork"},
    { option: "If you want to visit the other sight, click on", label: "BROADWAY", location: "NYBroadwayShow"},
])
location.structureScenario("NYBroadwayShow", 
`Broadway in Manhattan is known widely as the heart of the American commercial
theatrical industry. Theatres here host a constantly changing variety of productions,
including plays and musicals. Many people believe the theatrical productions on
Broadway are the best in the world. Broadway shows are one of the most popular tourist
attractions in New York City.
Knowing this, you decide to catch a production of Hamilton! After the show, you take a
selfie in front of the theatre's marquee. CLICK!`
,1,"","Hamilton the Musical","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "NewYork"},
    { option: "If you want to visit the other sight, click on", label: "STATUE OF LIBERTY", location: "NYStatueLiberty"},
])

//-----------------------

location.structureScenario("TorontoSights", 
`You have decided to walk around and get a nice close-up look of Toronto.
While there seems to be a lot going on, you decide that you must narrow your
options down to the following, as the clock is ticking and you need to get on
with the race.`
,0,"","","N",
[
    { option: "If you want to check out Niagara Falls, click on", label: "NIAGARA FALLS", location: "NiagaraFalls"},
    { option: "If you want to take in a Raptors game, click on", label: "RAPTORS", location: "TorontoRaptors"},
])
location.structureScenario("NiagaraFalls", 
`You hop on a tour bus for a 4 hour round trip to Niagara Falls.
While you are there you manage to snap a beautiful photo on your camera.
Even though this is NOT one of the Wonders of the World, it will still make a nice
addition to your photo album!`
,1,"","Niagara Falls","N",
[
    { option: "To head back to the airport, click on", label: "BACK TO AIRPORT", location: "Toronto"},
    { option: "If you want to take in a Raptors game, click on", label: "RAPTORS", location: "TorontoRaptors"},
])
location.structureScenario("TorontoRaptors", 
`As you're strolling over to the Scotiabank Arena, you realize that
this year the Raptors are playing their home games in Tampa Florida
due to Covid-19 protocol. Frustrated, you quickly turn around with
the intent to head back and accidentally trip on the
sidewalk and twist your left knee. OUCH, you've managed to tear your
ACL! After a quick visit to a drop-in medical clinic, you get fitted
with a knee brace and limp back with your crutches to the airport.`
,1,"Torn ACL","","N",
[
    { option: "To continue, click on", label: "CONTINUE", location: "Toronto"},
])



//###############################################
//Scenarios for ending/quiting the game
//###############################################

location.structureScenario("InjuryWarning", 
`Ouch! Your injury has put your trip in jeopardy. Three injuries
will force you to end your trip and send you packing for home.
Be sure to take care out there!`
,0,"","","N",
[
    { option: "To keep going, click on", label: "CONTINUE", location: "PreviousLocation"},
])

//-----------------------

location.structureScenario("Quit", 
`Exhausted from your travels, you decide that you've seen enough and
want nothing more than to settle down and live amongst the locals. You
live many years in obscurity, always wondering if perhaps you should
have continued your journey.<br>
Thanks for playing the game!`
,0,"","","N",
[
    { option: "If you would like to play again, click on", label: "PLAY AGAIN", location: "Start"},
])

//-----------------------

location.structureScenario("InjuryEnd", 
`You have suffered your 3rd injury and have proven that your accident-prone
nature does not lend itself well to the adventurous life you are living.
After much soul-searching you decide that you've
had enough and just want to go home. Perhaps when your wounds have
healed you might give it another try. On the bright side, you can always
take up Full-Stack development in the meantime.<br>
Thanks for playing the game!`
,0,"","","N",
[
    { option: "If you would like to play again, click on", label: "PLAY AGAIN", location: "Start"},
])

//-----------------------

location.structureScenario("End", 
`In spite of the many perils and pitfalls during your travels you have 
managed to find your way back home and are eager to show off 
the many photos you have taken...`
,0,"","","N",
[
    { option: "If you would like to play again, click on", label: "PLAY AGAIN", location: "Start"},
])
