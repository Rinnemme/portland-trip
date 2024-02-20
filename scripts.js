const foodObjects = []
const barObjects = []
const activityObjects = []
const sceneryObjects = []

const container = document.getElementById("container")
const modal = document.getElementById("modal")
const modalHeading = document.getElementById("modal-heading")
const modalLink = document.getElementById("modal-link")
const modalDistance = document.getElementById("modal-distance")
const modalDescription = document.getElementById("modal-description")
const modalFirst = document.getElementById("modal-first")
const modalSecond = document.getElementById("modal-second")
const modalThird = document.getElementById("modal-third")
const modalWindow = document.getElementById("modal-window")

function cardObject(name, link, distance, image, description, first, second, third, targetArray) {
    this.name = name
    this.link = link
    this.distance = distance
    this.image = image
    this.description = description
    this.first = first
    this.second = second
    this.third = third
    targetArray.push(this)
}

function loadModal(element, array) {
    for (let i=0; i<array.length; i++) {
        if (array[i].name === element.name) {
            modalHeading.textContent = array[i].name
            modalLink.href = array[i].link
            modalDistance.textContent = array[i].distance
            modalDescription.textContent = array[i].description
            modalFirst.src = array[i].first
            modalSecond.src = array[i].second
            modalThird.src = array[i].third
        }
    }
    modal.classList.add("visible")
}

function closeModal(event) {
    if (event.target!==modalWindow && event.target!==modalHeading
        & event.target!==modalLink && event.target!==modalDistance
        && event.target!==modalDescription && event.target!==modalFirst
        && event.target!==modalSecond && event.target!==modalThird) {
        modal.classList.remove("visible")
    }
    else {return}
}

document.onkeydown = (event) => {
    if (event.key === "Escape") {
        closeModal(event)
    }
}

function generateCards(array) {
    array.forEach(object => {
        const newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.name = object.name
        newCard.style.backgroundImage = `url(${object.image})`
        newCard.addEventListener("click", function() {loadModal(this, array)})
        const newCardContent = document.createElement("p")
        newCardContent.textContent = `${object.name}`
        newCard.appendChild(newCardContent)
        container.appendChild(newCard)
    })
}

const portlandMercado = new cardObject(`Portland Mercado Food Trucks`, `https://www.portlandmercado.org/`, `3.4 miles`, `img/food/portlandMercado.jpeg`, `Bridging diverse cultures through food, art, and entertainment within our community of permanent businesses, at our public market and Comcast Plaza, our small business support programming, and incubator kitchen. Portland Mercado is open from 11 am-8 pm seven days a week!`, `img/food/portlandMercado-1.jpeg`, `img/food/portlandMercado-2`, `img/food/portlandMercado-3.jpeg`, foodObjects)
const porqueNo = new cardObject(`¿Por que no?`, `https://porquenotacos.square.site/home`, `1.4 miles`, `img/food/porqueNo-0.jpeg`, `¿Por Qué No? is a counter service restaurant and we take orders and seat people on a first-come, first-served basis. To eat at the restaurant, you will wait in line, order at the counter and then, once you’ve ordered and gotten a number, choose a table. Servers will bring your food to your table. Water and housemade salsas are self-serve.`, `img/food/porqueNo-1.jpeg`, `img/food/porqueNo-2.jpeg`, `img/food/porqueNo-3.jpeg`, foodObjects)
const cartopiaCart = new cardObject(`Cartopia Food Cart Pods`, `https://www.cartopiafoodcarts.com/`, `5.0 miles`, `img/food/cartopiaCart-0.jpeg`, `Portland's original Southeast Hawthorne Boulevard food cart pod and beer garden; landmark of the city's vibrant food cart scene since 2008.`, `img/food/cartopiaCart-1.jpeg`, `img/food/cartopiaCart-2.jpeg`, `img/food/cartopiaCart-3.jpeg`, foodObjects)
const heyLove = new cardObject(`Hey Love`, `https://www.heylovepdx.com/`, `3.5 miles`, `img/food/heyLove-0.jpeg`, `In here, it’s summer all year round. The walls are lush with overgrown plants & local art. The music is rich and soulful—and usually at least a few decades old. The food is bold and bright with a hearty nod to nostalgia. The drinks are vibrant, a little bit sexy and always fun. Hey Love is a top-notch cocktail lounge, a community meeting hall, a hidden garden and a house party, all wrapped into one. `, `img/food/heyLove-1.jpeg`, `img/food/heyLove-2.jpeg`, `img/food/heyLove-3.jpeg`, foodObjects)
const rontoms = new cardObject(`Rontoms`, `http://www.rontoms.net/`, `3.6 miles`, `img/food/rontoms-0.jpeg`, `Hip, rustic-industrial hangout with a patio, fireplaces & Ping-Pong, plus drinks, pub grub & bands.`, `img/food/rontoms-1.jpeg`, `img/food/rontoms-2.jpeg`, `img/food/rontoms-3.jpeg`, foodObjects)
const fireMountain = new cardObject(`Fire on the Mountain`, `https://www.portlandwings.com/`, `2.3 miles`, `img/food/fireMountain-0.jpeg`, `We’re not just famous for our wings! Try our sandwiches, vegan wings, awesome salads, or a "serious legit" pizza at our Fremont location. Our fries are hand-cut. Our bacon is the thickest we can find. Our ranch and blue cheese is made in house daily. We bread every fried pickle and onion ring by hand. And of course: our wings are always sustainably sourced and cooked fresh to order.`, `img/food/fireMountain-1.jpg`, `img/food/fireMountain-2.jpeg`, `img/food/fireMountain-3.jpeg`, foodObjects)
const tusk = new cardObject(`Tusk`, `https://www.tuskpdx.com/`, `1.9 miles`, `img/food/tusk-0.jpeg`, `Bright, airy and full of good vibes as far as the eye can see, Tusk is a beacon of flavor and rock-fused fantasy in Southeast Portland. Drawing on the flavors of Mediterranean cuisine, Tusk highlights the freshest seasonal produce of the Pacific Northwest.`, `img/food/tusk-1.jpeg`, `img/food/tusk-2.jpeg`, `img/food/tusk-3.jpeg`, foodObjects)
const paaDee = new cardObject(`Paadee`, `https://www.paadeepdx.com/`, `1.8 miles`, `img/food/paaDee-0.jpeg`, `The Thai phrase “paa dee” literally means “to bring good things”. The concept is simple – to provide good things is to walk the path of happiness. PaaDee aspires to bring to Portland our favorite Thai dishes and to bring the spotlight to Thai comfort food.`, `img/food/paaDee-1.jpeg`, `img/food/paaDee-2.jpeg`, `img/food/paaDee-3.jpeg`, foodObjects)
const tinShed = new cardObject(`Tin Shed Garden`, `https://www.tinshedgardencafe.com/`, `4.4 miles`, `img/food/tinShed-0.jpeg`, `We pride ourselves on providing not just high-quality, responsibly sourced tasty food and drinks, but also maintaining meaningful connections with our guests, staff and the community. We buy organic and local whenever possible and our meat comes from animals that were treated humanely. We supply local, free-range chicken, without hormones or antibiotics.  We supply local, grass-fed beef and wild-caught Alaskan salmon. Click the “Menu” button below to take a peek at all of our delicious options.`, `img/food/tinShed-1.jpeg`, `img/food/tinShed-2.jpeg`, `img/food/tinShed-3.jpeg`, foodObjects)
const basilisk = new cardObject(`Basilisk`, `https://basiliskpdx.com/`, `2.0 miles`, `img/food/basilisk-0.jpeg`, `Basilisk is the much-improved fried chicken concept that replaced Vietnamese grab-n’-go spot Rua. The fried chicken here is dynamite (both in sandwich form, and as a plate), with a heavily heavy-battered, crackle-crisp crust that yields to tender dark meat.`, `img/food/basilisk-1.jpeg`, `img/food/basilisk-2.jpeg`, `img/food/basilisk-3.jpeg`, foodObjects)
const nicholas = new cardObject(`Nicholas`, `https://www.nicholasrestaurant.com/`, `4.9 miles`, `img/food/nicholas-0.jpeg`, `Local family owned Mediterranean/Lebanese restaurant. The baba ganoush is fantastic!`, `img/food/nicholas-1.jpeg`, `img/food/nicholas-2.jpg`, `img/food/nicholas-3.jpeg`, foodObjects)
const luce = new cardObject(`Luce`, `https://www.luceportland.com/`, `2.1 miles`, `img/food/luce-0.jpeg`, `Petite, low-key Italian restaurant and grocery serving housemade pastas & seasonal entrees. Order widely from the resolutely seasonal menu and a parade of toothsome dishes will arrive at your table—roasted beets, crispy arancini, lemon-scented cappelletti in brodo, carrot-ricotta ravioli with herb butter, charred octopus and potato salad with parsley and olives, and more.`, `img/food/luce-1.jpg`, `img/food/luce-2.jpeg`, `img/food/luce-3.jpeg`, foodObjects)
const ox = new cardObject(`Ox *`, `https://oxpdx.com/`, `4.8 miles`, `img/food/ox-0.jpeg`, `The name OX pays homage to the work animal that pulls the plough, tilling the soil and replenishing the land’s ability to produce its fruits, vegetables, and grains. Showcasing prime local meats and fish, OX also features seasonal produce in distinctive preparations. OX harnesses the culinary talent of Portland chefs Greg Denton and Gabrielle Quiñónez Denton in a friendly and comfortable neighborhood restaurant with an energetic vibe and creative menu designed to appeal to the palate of the Pacific Northwest.`, `img/food/ox-1.jpeg`, `img/food/ox-2.jpeg`, `img/food/ox-3.jpeg`, foodObjects)
const cityGrill = new cardObject(`Portland City Grill *`, `https://www.portlandcitygrill.com/`, `4.7 miles`, `img/food/cityGrill-0.jpeg`, `Take in the sweeping city and landscape views. Sip a standout wine or craft cocktail. 20 years and counting, Portland City Grill maintains its commitment to serving fresh, locally sourced seafood and exceptionally prepared steaks influenced by classic island Asian and Northwest flavors. Our attentive staff will make you feel at home – in our rarefied air 30 floors above Portland.`, `img/food/cityGrill-1.jpeg`, `img/food/cityGrill-2.jpeg`, `img/food/cityGrill-3.jpeg`, foodObjects)
const departure = new cardObject(`Departure *`, `https://www.departureportland.com/`, `4.6 miles`, `img/food/departure-0.jpeg`, `From street food-styled starters and meal-sized classics, to rice and noodle specialties to ethically-sourced sushi, Departure Portland embraces the bounty of the Pacific Northwest to deliver the fiery flavors of the Far East. Whether steamed or stir-fried, smoked or sautéed, each dish leads guests to another stage along Departure’s culinary adventure.`, `img/food/departure-1.jpeg`, `img/food/departure-2.jpeg`, `img/food/departure-3.jpeg`, foodObjects)
const lePigeon = new cardObject(`Le Pigeon *`, `https://www.lepigeon.com/`, `3.6 miles`, `img/food/lePigeon-0.png`, `Chef Gabriel Rucker won two James Beard Awards for his first restaurant, and with good reason: Le Pigeon is a tiny gem of a place that serves seasonal French-inspired food with a kick. The East Burnside institution is bold and adventurous, but most importantly approachable, making it a local favorite and a national destination for over a decade. `, `img/food/lePigeon-1.jpeg`, `img/food/lePigeon-2.jpeg`, `img/food/lePigeon-3.jpeg`, foodObjects)
const andina = new cardObject(`Andina *`, `https://www.andinarestaurant.com/`, `4.9 miles`, `img/food/andina-0.jpeg`, `Peruvian cuisine is an unfinished story thousands of years in its unfolding.  In our food, drink, and hospitality, we hope to contribute a few compelling lines to that story. Sourcing our ingredients both locally in Oregon and in direct trade with a community of organic farmers in Chincha, Peru, we celebrate a country incredibly rich in its cultural and natural history. `, `img/food/andina-1.jpeg`, `img/food/andina-2.jpeg`, `img/food/andina-3.jpeg`, foodObjects)
const laurelhurstMarket = new cardObject(`Laurelhurst Market *`, `https://www.laurelhurstmarket.com/`, `1.5 miles`, `img/food/laurelhurstMarket-0.jpeg`, `Laurelhurst Market is a steakhouse and butcher shop located in the beautiful neighborhood of Laurelhurst in Portland. Our team of expert chefs and butchers craft everything in-house, from pâté to hand-stuffed sausages to smoked ham hocks. We take pride in sourcing only the highest quality ingredients and upholding the highest standards of animal welfare and food safety.`, `img/food/laurelhurstMarket-1.jpeg`, `img/food/laurelhurstMarket-2.jpeg`, `img/food/laurelhurstMarket-3.jpeg`, foodObjects)

const whiskeyLibrary = new cardObject(`Multnomah Whisky Library`, `https://mwlpdx.com/`, `5 miles`, `img/bars/whiskeyLibrary-0.jpg`, `From the bartender who creates the perfect cocktail or combs the shelves for a rare bottle, to the chef offering a thoughtfully curated menu - we undertake to honor our collection of spirits through education, shared experience, and classic hospitality.`, `img/bars/whiskeyLibrary-1.jpeg`, `img/bars/whiskeyLibrary-2.jpeg`, `img/bars/whiskeyLibrary-3.jpeg`, barObjects)
const tropicale = new cardObject(`Tropicale`, `https://www.tropicale.co/`, `1.7 miles`, `img/bars/tropicale-0.jpeg`, `Tropicale is the newly opened cocktail bar with Caribbean and Latin American small plates in the Kerns neighborhood of Portland, Oregon. With this brick-and-mortar space, owner Alfredo Climaco found a permanent oasis for his popular cocktails and zero proof drinks, both longtime attractions at the Portland Night Market and city street fairs.`, `img/bars/tropicale-1.jpeg`, `img/bars/tropicale-2.jpg`, `img/bars/tropicale-3.jpeg`, barObjects)
const rumClub = new cardObject(`Rum Club`, `https://rumclubpdx.com/`, `3.6 miles`, `img/bars/rumClub-0.jpeg`, `Rum Club serves Hemingway-class cocktails at reasonable prices (all $8) in a tiny triangular room almost completely filled by a horseshoe bar topped in glowing African mahogany. The bar encourages long, pisco-soaked conversations that drift on and on until the 2 am last call, so fortify your stomach with a stream of deviled-ham sandwiches ($5) and pickled eggs (beet- or turmeric-flavored, $1) and settle in.`, `img/bars/rumClub-1.jpeg`, `img/bars/rumClub-2.jpeg`, `img/bars/rumClub-3.jpeg`, barObjects)
const paydirt = new cardObject(`Paydirt`, `https://www.paydirtbar.com/`, `1.8 Miles`, `img/bars/paydirt-0.jpeg`, `Craft beers, many whiskeys & a range of hard-to-find aperitifs are served at this casual bar.`, `img/bars/paydirt-1.jpg`, `img/bars/paydirt-2.jpeg`, `img/bars/paydirt-3.jpeg`, barObjects)
const ravenManor = new cardObject(`Raven's Manor`, `https://www.ravensmanorexperience.com/`, `4.6 miles`, `img/bars/ravenManor-0.jpeg`, `Welcome to Raven's Manor: The haunted manor themed bar with an interactive mixology experience like no other! Come on in for a taste of our dangerously delicious drinks and light fare. Explore the many horrors of this haunted manor and maybe you'll be lucky enough to live to tell the tale....`, `img/bars/ravenManor-1.jpeg`, `img/bars/ravenManor-2.jpg`, `img/bars/ravenManor-3.jpeg`, barObjects)
const halePele = new cardObject(`Hale Pele`, `https://www.halepele.com/`, `2.2 miles`, `img/bars/halePele-0.jpeg`, `Hale Pele - "House of the Volcano Goddess" - is a glimmering pearl in Portland's sea of food & cocktail culture. We proudly feature remarkable classic and contemporary exotic cocktails made with fresh juices, premium spirits, and house-made syrups.`, `img/bars/halePele-1.jpeg`, `img/bars/halePele-2.jpeg`, `img/bars/halePele-3.jpeg`, barObjects)
const myWay = new cardObject(`My Way Lounge`, `http://www.mywaypdx.com/`, `3.5 miles`, `img/bars/myWay-0.jpeg`, `A relaxed Portland bar with a neon aesthetic, serving colorful cocktails and providing various casino-like games for entertainment. `, `img/bars/myWay-1.jpeg`, `img/bars/myWay-2.jpeg`, `img/bars/myWay-3.jpeg`, barObjects)
const angelFace = new cardObject(`Angel Face`, `https://www.angelfaceportland.com/`, `1.8 Miles`, `img/bars/angelFace-0.jpeg`, `Bartenders prepare drinks to each patron's flavor preferences at this polished European-style haunt.`, `img/bars/angelFace-1.jpeg`, `img/bars/angelFace-2.jpeg`, `img/bars/angelFace-3.jpeg`, barObjects)
const scotchLodge = new cardObject(`Scotch Lodge`, `https://www.scotchlodge.com/`, `3.5 Miles`, `img/bars/scotchLodge-0.jpeg`, `Scotch Lodge is a cocktail bar for whisky lovers curated by Tommy Klus, with a playfully modern pacific northwest inspired menu from chef Tim Artale.`, `img/bars/scotchLodge-1.jpeg`, `img/bars/scotchLodge-2.jpeg`, `img/bars/scotchLodge-3.jpeg`, barObjects)
const arborHall = new cardObject(`Arbor Hall`, `https://arborhallpdx.com/`, `1.7 Miles`, `img/bars/arborHall-0.jpg`, `Neighborhood cocktail bar. Deep menu of classic, modern and house drinks, with over 500 spirits to choose from. We strive to deliver great libations with a high standard of hospitality, table service, and indoor and outdoor seating. `, `img/bars/arborHall-1.png`, `img/bars/arborHall-2.png`, `img/bars/arborHall-3.png`, barObjects)
const greenRoom = new cardObject(`The Green Room`, `https://mwlpdx.com/the-green-room/`, `5.0 Miles`, `img/bars/greenRoom-0.jpeg`, `A light and bright cocktail bar located beneath the Multnomah Whisk{e}y Library, The Green Room is a place to celebrate the beauty of the natural world and explore how to tread more lightly through sustainable practices and good stewardship.`, `img/bars/greenRoom-1.jpeg`, `img/bars/greenRoom-2.jpeg`, `img/bars/greenRoom-3.jpeg`, barObjects)
const lulu = new cardObject(`LULU`, `https://lulubarpdx.com/`, `4.4 Miles`, `img/bars/lulu-0.jpeg`, `Contemporary bar featuring a wood-dominated interior & a menu of Vietnamese food & fried chicken.`, `img/bars/lulu-1.jpeg`, `img/bars/lulu-2.jpeg`, `img/bars/lulu-3.jpeg`, barObjects)

const paddlePub = new cardObject(`Paddle Pub`, `https://paddlepub.com/portland/`, `5 miles`, `img/activities/paddlePub-0.jpeg`, `Paddle Pub is a fun cycleboat & party boat. Like a booze cruise, but more fun. Join this journey of unlimited fun with friends, family, or co-workers!! It’s a 14-person pedal-powered pontoon boat, with a USCG certified master captain at the helm. Perfect for pub crawls, birthday celebrations, bachelor/bachelorette parties, company outings, sightseeing, themed nights out- the possibilities are endless! A minimum of 6 pedalers is necessary to power the Paddle Pub. There is an onboard motor and bathroom as well.`, `img/activities/paddlePub-1.jpeg`, `img/activities/paddlePub-2.jpeg`, `img/activities/paddlePub-3.jpeg`, activityObjects)
const aerialTram = new cardObject(`Portland Aerial Tram`, `http://www.gobytram.com/`, `7 miles`, `img/activities/aerialTram-0.jpeg`, `The Tram has a panoramic view of the city and surrounding region most any day or night. A colorful sunrise or sunset, while never guaranteed, is particularly scenic. To view Mount Hood and Mount Saint Helens, visit when the sky is relatively clear. `, `img/activities/aerialTram-1.jpeg`, `img/activities/aerialTram-2.jpeg`, `img/activities/aerialTram-3.jpeg`, activityObjects)
const groundKontrol = new cardObject(`Ground Kontrol`, `https://groundkontrol.com/`, `4 miles`, `img/activities/groundKontrol-0.jpeg`, `Ground Kontrol Classic Arcade features over 120 arcade & pinball machines along with a full bar & food menu.`, `img/activities/groundKontrol-1.jpeg`, `img/activities/groundKontrol-2.jpeg`, `img/activities/groundKontrol-3.jpeg`, activityObjects)
const soulOfTheCity = new cardObject(`Soul of the City Walking Tour`, `https://www.getyourguide.com/portland-oregon-l1024/portland-oregon-soul-of-the-city-walking-tour-t436829?_pc=1,10`, `5 miles`, `img/activities/soulOfTheCity-0.jpeg`, `Explore the cultural district and park blocks of Portland on this walking tour. Discover what makes Portland walkable, passionate, and full of activism with your certified tour guide.`, `img/activities/soulOfTheCity-1.jpeg`, `img/activities/soulOfTheCity-2.jpeg`, `img/activities/soulOfTheCity-3.jpeg`, activityObjects)
const bikeTour = new cardObject(`Essential Portland: 2-Hour Guided Bike Tour`, `https://www.getyourguide.com/portland-oregon-l1024/portland-2-hour-guided-bike-tour-t403436/`, `4 miles`, `img/activities/bikeTour-0.jpeg`, `Hit the road and explore the sights and streets of Portland like a local on this guided bike tour. Visit Old Town, pedal the Waterfront Esplanade, cruise the Green Park Block and Pearl District with experienced guides and comfortable rides.`, `img/activities/bikeTour-1.jpeg`, `img/activities/bikeTour-2.jpeg`, `img/activities/bikeTour-3.jpeg`, activityObjects)
const ghostTour = new cardObject(`Ghosts, Poltergeists, and Psychopaths Walking Tour`, `https://www.getyourguide.com/portland-oregon-l1024/portland-downtown-ghost-tour-t318317?partner=true&_pc=1,14&date_from=2023-09-03`, `4 miles`, `img/activities/ghostTour-0.jpeg`, `Take an eerie evening walking tour around Portland, visiting locations that have been made famous by paranormal researchers, television programs, and nationally recognized "Top Ten Most Haunted” lists.`, `img/activities/ghostTour-1.jpeg`, `img/activities/ghostTour-2.jpeg`, `img/activities/ghostTour-3.jpeg`, activityObjects)
const bookStore = new cardObject(`Powell's bookstore`, `https://www.powells.com/locations/powells-city-of-books`, `4 miles`, `img/activities/bookStore-0.jpeg`, `Powell’s City of Books is the largest used and new bookstore in the world, occupying an entire city block and housing approximately one million books. Located in downtown Portland’s Pearl District, the City of Books has nine color-coded rooms and over 3,500 different sections, offering something for every interest, including an incredible selection of out-of-print and hard-to-find titles.`, `img/activities/bookStore-1.jpeg`, `img/activities/bookStore-2.jpg`, `img/activities/bookStore-3.jpeg`, activityObjects)
const hopskotchArt = new cardObject(`Hopskotch Art Gallery`, `https://letshopscotch.com/`, `5 miles`, `img/activities/hopskotchArt-0.jpeg`, `Hopscotch is an immersive and experiential brand that brings together artists in collaborative environments to create unique, impactful, and distinct shared experiences. We believe art can be a vessel to tell stories and illuminate important messages of the past, present, and future.`, `img/activities/hopskotchArt-1.jpeg`, `img/activities/hopskotchArt-2.jpeg`, `img/activities/hopskotchArt-3.jpg`, activityObjects)
const kingPins = new cardObject(`King Pins`, `https://mykingpins.com/portland/`, `5 miles`, `img/activities/kingPins-0.jpeg`, `Our state-of-the-art electronic scoring system, surround sound entertainment, bumpers and ramps to help kids guarantee a fun time for all ages. With ambient lighting, music videos on high-definition screens and lane-side food and beverage service, you are sure to have a great time!`, `img/activities/kingPins-1.jpeg`, `img/activities/kingPins-2.jpeg`, `img/activities/kingPins-3.jpeg`, activityObjects)
const oregonZoo = new cardObject(`Oregon Zoo`, `https://www.oregonzoo.org/`, `9 miles`, `img/activities/oregonZoo-0.jpeg`, `The Oregon Zoo connects communities to the wonder of wildlife to create a better future for all. We are a hub for science, conservation, education and animal well-being delivering the highest quality of care to 165 species and subspecies. `, `img/activities/oregonZoo-1.jpg`, `img/activities/oregonZoo-2.jpeg`, `img/activities/oregonZoo-3.jpeg`, activityObjects)
const skyZone = new cardObject(`Sky Zone Trampoline Park`, `https://www.skyzone.com/gresham`, `12 miles`, `img/activities/skyZone-0.jpeg`, `Our parks are full of one-of-a-kind attractions designed to push your limits, allow you to fly higher, laugh harder and have tons of fun. With the widest selection of activities around, Sky Zone is sure to have something for everyone.`, `img/activities/skyZone-1.jpeg`, `img/activities/skyZone-2.jpeg`, `img/activities/skyZone-3.jpeg`, activityObjects)
const portlandArt = new cardObject(`Portland Art Museum`, `https://portlandartmuseum.org/`, `5 miles`, `img/activities/portlandArt-0.jpeg`, `Founded in late 1892, the Portland Art Museum is among the oldest art museums in the United States and the oldest in the Pacific Northwest. The Museum is internationally recognized for its permanent collection and ambitious special exhibitions, drawn from the Museum’s holdings and the world’s finest public and private collections.`, `img/activities/portlandArt-1.jpeg`, `img/activities/portlandArt-2.jpeg`, `img/activities/portlandArt-3.jpeg`, activityObjects)
const oaksAmusement = new cardObject(`Oaks Amusement Park`, `https://www.oakspark.com/`, `9 miles`, `img/activities/oaksAmusement-0.jpg`, `Oaks Park has been "where the fun never ends" since 1905 and is among the oldest continually operating amusement parks in America. "The Oaks" first opened its gates to eager visitors on May 30, 1905, as a way of boosting ridership on the area's emerging interurban transportation system. Arriving via streetcar, visitors to the park were thrilled by exotic animals, nightly fireworks, a bathhouse, death-defying amusement rides, and that latest of inventions, electric lights! Oaks Park is proud to have offered safe, wholesome, family fun to our neighbors for over a century. Today when visitors walk through our gates they are delighted by a uniquely Portland blend of modern thrills and turn-of-the-century charm on a midway that has delighted generations of Northwesterners.`, `img/activities/oaksAmusement-1.jpeg`, `img/activities/oaksAmusement-2.jpeg`, `img/activities/oaksAmusement-3.jpeg`, activityObjects)
const soakingPool = new cardObject(`McMenamins Kennedy School Soaking Pool`, `https://www.mcmenamins.com/to-do/relax-play/soak-swim`, `4 miles`, `img/activities/soakingPool-0.jpeg`, `This heated communal soaking pool is located within the McMenamins Kennedy School Hotel, and is available to the public by free online one-hour reservations (and complimentary to hotel guests). Grab a drink from the hotel if you like, and relax in the skin-smoothing water!`, `img/activities/soakingPool-1.jpeg`, `img/activities/soakingPool-2.jpeg`, `img/activities/soakingPool-3.jpeg`, activityObjects)

const sauvieIsland = new cardObject(`Sauvie Island`, `https://www.travelportland.com/culture/sauvie-island/`, `22 miles`, `img/scenery/sauvieIsland-0.jpeg`, `Natural playgrounds don’t come much bigger than Sauvie Island — at 24,000 acres, the Manhattan-size isle is one of the largest river islands in the country and sits at the confluence of the Willamette and Columbia Rivers just 10 miles northwest of downtown Portland. And from one end to the other, families can find an entire day’s worth of adventures; it’s a hot spot for fruits and veggies, as well as a paradise for bird-watchers, beach-goers, bicyclists and kayakers.`, `img/scenery/sauvieIsland-1.jpeg`, `img/scenery/sauvieIsland-2.jpeg`, `img/scenery/sauvieIsland-3.jpeg`, sceneryObjects)
const forestPark = new cardObject(`Forest Park`, `https://www.portland.gov/parks/forest-park`, `14 miles`, `img/scenery/forestPark-0.jpeg`, `Forest Park, at 5,200 acres, provides critical refuge for hundreds of native wildlife and plant species and acts as an important air and water filter. With more than 80 miles of trails, it also provides invaluable access to nature, exercise, and educational opportunities for the region.`, `img/scenery/forestPark-1.jpeg`, `img/scenery/forestPark-2.jpeg`, `img/scenery/forestPark-3.jpeg`, sceneryObjects)
const macleayPark = new cardObject(`Macleay Park`, `https://www.alltrails.com/parks/us/oregon/macleay-city-park--2`, `7 miles`, `img/scenery/macleayPark-0.jpeg`, `The nearly 140-acre park has deep ravines shaded by large Douglas-fir and western red cedar trees. Macleay Park also contains the lower portion of Balch Creek, which has a small population of native cutthroat trout. Park trails connect to Forest Park and Audubon Society of Portland wildlife sanctuaries.`, `img/scenery/macleayPark-1.jpeg`, `img/scenery/macleayPark-2.jpeg`, `img/scenery/macleayPark-3.jpeg`, sceneryObjects)
const laurelhurstPark = new cardObject(`Laurelhurst Park`, `https://www.portland.gov/parks/laurelhurst-park`, `1 mile`, `img/scenery/laurelhurstPark-0.jpeg`, `This 31-acre (12.5 ha) park really does have something for everybody to enjoy. The central lawn is the perfect spot for an afternoon picnic, with public restrooms and drinking fountains located just across a paved pathway looping through the park. Along the pathway, you’ll find a kids’ playground, a scenic duck pond and tennis and basketball courts.`, `img/scenery/laurelhurstPark-1.jpeg`, `img/scenery/laurelhurstPark-2.jpeg`, `img/scenery/laurelhurstPark-3.jpeg`, sceneryObjects)
const columbiaGorge = new cardObject(`Columbia River Gorge Waterfalls`, `https://www.ridecatbus.org/columbia-gorge-express/`, `25 miles`, `img/scenery/columbiaGorge-0.jpeg`, `Fed by glaciers and swollen by snowmelt and prodigious winter rains, the waterfalls of the Columbia River Gorge National Scenic Area — an 80-mile-long (129 km) swath carved out by ancient floodwaters — plunge from sheer cliffs, hidden slot canyons and rock grottos rimmed by massive trees and moss in a thousand shades of emerald and jade. In all, 90 major cascades flow here, alongside countless other smaller falls.`, `img/scenery/columbiaGorge-1.jpeg`, `img/scenery/columbiaGorge-2.jpeg`, `img/scenery/columbiaGorge-3.jpeg`, sceneryObjects)
const multnomahFalls = new cardObject(`Multnomah Falls Express Tour`, `https://www.getyourguide.com/oregon-l951/from-portland-multnomah-falls-tour-by-bus-with-park-permit-t432555/`, `7 miles`, `img/scenery/multnomahFalls-0.jpeg`, `Explore the most-visited natural recreation site in the Pacific Northwest on this tour the Multnomah Falls from Portland. Spend an hour of free time where you can capture pictures of the scenic Multnomah Creek Bridge and have time to visit the Multnomah Falls Lodge. Hop aboard a comfortable and climate-controlled bus at the centrally-located Benson Hotel in Portland. Lean back and relax in a plush seat and take in views of the stunning Columbia River Gorge on the way to the falls. Listen to fascinating stories about the area with live narration along the way. `, `img/scenery/multnomahFalls-1.jpeg`, `img/scenery/multnomahFalls-2.jpeg`, `img/scenery/multnomahFalls-3.jpeg`, sceneryObjects)
const mtTabor = new cardObject(`Mt. Tabor`, `https://www.travelportland.com/attractions/mount-tabor-park/`, `1 mile`, `img/scenery/mtTabor-0.jpeg`, `If you want to explore a little piece of nature in the city, then escape to Portland, Oregon's Mount Tabor Park! Walk the trails of the mountain through lush evergreens, check out the unique cinder cone of Mt. Tabor, or let the kids play in the beautiful wooded park.`, `img/scenery/mtTabor-1.jpeg`, `img/scenery/mtTabor-2.jpeg`, `img/scenery/mtTabor-3.png`, sceneryObjects)
const roseGarden = new cardObject(`International Rose Garden`, `https://www.portlandpf.org/rose-test-garden`, `5 miles`, `img/scenery/roseGarden-0.jpeg`, `More than 10,000 individual rose bushes bloom in the International Rose Test Garden (IRTG) from late May through October, representing over 610 different rose varieties. The majority of roses in the Garden are commercially available. About 10 to 20 varieties are replaced each year with some of the best new roses released onto the market. Roses bloom from late May to October depending on the weather. `, `img/scenery/roseGarden-1.jpeg`, `img/scenery/roseGarden-2.jpeg`, `img/scenery/roseGarden-3.jpeg`, sceneryObjects)
const hoytArboretum = new cardObject(`Hoyt Arboretum`, `https://www.hoytarboretum.org/`, `9 miles`, `img/scenery/hoytArboretum-0.jpeg`, `Founded in 1928 to conserve endangered species and educate the community, Hoyt Arboretum encompasses 190 ridge-top acres and 12 miles of hiking trails just minutes from downtown Portland. Home to 2,300 species of trees and shrubs from six continents, Hoyt Arboretum is a place of beauty and serenity no matter the season.`, `img/scenery/hoytArboretum-1.jpeg`, `img/scenery/hoytArboretum-2.jpeg`, `img/scenery/hoytArboretum-3.jpeg`, sceneryObjects)
const washingtonPark = new cardObject(`Washington Park`, `https://explorewashingtonpark.org/`, `9 miles`, `img/scenery/washingtonPark-0.jpeg`, `Portland’s signature westside park isn’t just loaded with big trees and picnic tables. Located a mere two miles west of downtown and accessible by MAX light rail, 410-acre Washington Park offers up a zoo, two museums, a spectacular rose garden, one of the most authentic Japanese gardens in the world, all bordered by Forest Park — at 5,100 acres, one of the country’s premier urban wildernesses. `, `img/scenery/washingtonPark-1.jpeg`, `img/scenery/washingtonPark-2.jpeg`, `img/scenery/washingtonPark-3.jpeg`, sceneryObjects)
const eagleCreek = new cardObject(`Eagle Creek`, `https://www.oregon.com/recreation/hike-eagle-creek`, `24 miles`, `img/scenery/eagleCreek-0.jpeg`, `The Eagle Creek Trail is one of Oregon's most spectacular paths, passing half a dozen major waterfalls. The trail is also an engineering marvel. To maintain an easy grade through this rugged canyon, the builders blasted ledges out of sheer cliffs, bridged a colossal gorge and even chipped a tunnel through solid rock behind 120-foot Tunnel Falls.`, `img/scenery/eagleCreek-1.jpeg`, `img/scenery/eagleCreek-2.jpeg`, `img/scenery/eagleCreek-3.jpeg`, sceneryObjects)
const japaneseGarden = new cardObject(`Portland Japanese Garden`, `https://japanesegarden.org/`, `8 miles`, `img/scenery/japaneseGarden-0.jpeg`, `The Garden sits nestled in the hills of Portland, Oregon’s iconic Washington Park, overlooking the city and providing a tranquil, urban oasis for locals and travelers alike. Designed in 1963, it encompasses 12 acres with eight separate garden styles, and includes an authentic Japanese Tea House, meandering streams, intimate walkways, and a spectacular view of Mt. Hood. This is a place to discard worldly thoughts and concerns and see oneself as a small but integral part of the universe.`, `img/scenery/japaneseGarden-1.jpeg`, `img/scenery/japaneseGarden-2.jpeg`, `img/scenery/japaneseGarden-3.jpeg`, sceneryObjects)
const lanSuGarden = new cardObject(`Lan Su Chinese Garden`, `https://lansugarden.org/`, `5 miles`, `img/scenery/lanSuGarden-0.jpg`, `Opening in September 2000, Lan Su Chinese Garden is one of Portland's greatest treasures and most interesting sites to see while visiting Portland. A result of a collaboration between the cities of Portland and Suzhou, our sister city in China's Jiangsu province that's famous for its beautiful Ming dynasty gardens, Lan Su was built by Chinese artisans from Suzhou and is one the most authentic Chinese gardens outside of China.`, `img/scenery/lanSuGarden-1.jpeg`, `img/scenery/lanSuGarden-2.jpeg`, `img/scenery/lanSuGarden-3.jpeg`, sceneryObjects)
const crystalSprings = new cardObject(`Crystal Springs Rhododendron Garden`, `https://www.crystalspringsgardenpdx.org/`, `5 miles`, `img/scenery/crystalSprings-0.jpeg`, `A unique 9.5-acre garden, Crystal Springs contains an outstanding collection of rare species and hybrid rhododendrons, azaleas, and other lesser-known ericaceous plants, as well as many companion plants and unusual trees.`, `img/scenery/crystalSprings-1.jpeg`, `img/scenery/crystalSprings-2.jpeg`, `img/scenery/crystalSprings-3.jpeg`, sceneryObjects)
const powellButte = new cardObject(`Powell Butte Nature Park`, `https://www.portland.gov/parks/powell-butte-nature-park`, `9 miles`, `img/scenery/powellButte-0.jpeg`, `Powell Butte, an extinct cinder cone volcano, rises near the headwaters of Johnson Creek - an urban creek with remnant populations of native salmon and steelhead. The park is comprised of 611 acres of meadowland and forest.`, `img/scenery/powellButte-1.jpeg`, `img/scenery/powellButte-2.jpeg`, `img/scenery/powellButte-3.jpeg`, sceneryObjects)