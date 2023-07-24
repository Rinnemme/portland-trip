let foodObjects = []
let barObjects = []
let sceneryObjects = []
let funObjects = []

const sceneryContainer = document.getElementById("scenery-container")
const sceneryModal = document.getElementById("scenery-modal")
const sceneryModalHeading = document.getElementById("scenery-modal-heading")
const sceneryModalLink = document.getElementById("scenery-modal-link")
const sceneryModalDistance = document.getElementById("scenery-modal-distance")
const sceneryModalDescription = document.getElementById("scenery-modal-description")
const sceneryModalFirst = document.getElementById("scenery-modal-first")
const sceneryModalSecond = document.getElementById("scenery-modal-second")
const sceneryModalThird = document.getElementById("scenery-modal-third")


function closeModal(element) {
    element.classList.remove("visible")
}

function foodObject(name, link, distance, image, description) {
    this.name = name
    this.link = link
    this.distance = distance
    this.image = image
    this.description = description
    foodObjects.push(this)
}

function barObject(name, link, distance, image, description) {
    this.name = name
    this.link = link
    this.distance = distance
    this.image = image
    this.description = description
    barObjects.push(this)
}

function sceneryObject(name, link, distance, image, description, first, second, third) {
    this.name = name
    this.link = link
    this.distance = distance
    this.image = image
    this.description = description
    this.first = first
    this.second = second
    this.third = third
    sceneryObjects.push(this)
}

function funObject(name, link, distance, image, description, first, second, third) {
    this.name = name
    this.link = link
    this.distance = distance
    this.image = image
    this.description = description
    this.first = first
    this.second = second
    this.third = third
    funObjects.push(this)
}

const sauvieIsland = new funObject(`Sauvie island`, `https://www.travelportland.com/culture/sauvie-island/`, `22 miles`, `https://cdn.shopify.com/s/files/1/1159/3118/files/8X4A0017.jpg?v=1530892332`, `Natural playgrounds don’t come much bigger than Sauvie Island — at 24,000 acres, the Manhattan-size isle is one of the largest river islands in the country and sits at the confluence of the Willamette and Columbia Rivers just 10 miles northwest of downtown Portland. And from one end to the other, families can find an entire day’s worth of adventures; it’s a hot spot for fruits and veggies, as well as a paradise for bird-watchers, beach-goers, bicyclists and kayakers.`, `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2b/c3/a7/sauvie-island-wildlife.jpg?w=1200&h=-1&s=1`, `https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/722YBNIBEFGDPMIZNPHAB7LK2Y.jpg`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_scale,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1571420742/www.travelportland.com/Sauvie-Island-Photo-by-Clayton-Cotterell-for-Travel-Oregon-aspect-ratio-5x3-1/Sauvie-Island-Photo-by-Clayton-Cotterell-for-Travel-Oregon-aspect-ratio-5x3-1.jpg`)
const forestPark = new funObject(`Forest Park`, `https://www.portland.gov/parks/forest-park`, `14 miles`, `https://westcoastwayfarers.com/wp-content/uploads/2022/01/Forest-Park-in-Portland-scaled.jpg`, `Forest Park, at 5,200 acres, provides critical refuge for hundreds of native wildlife and plant species and acts as an important air and water filter. With more than 80 miles of trails, it also provides invaluable access to nature, exercise, and educational opportunities for the region.`, `https://www.koin.com/wp-content/uploads/sites/10/2022/06/GettyImages-470173722.jpg?w=2560&h=1440&crop=1`, `https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1200,w_1600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/0617-forest-park-stone-house_w82t7g.jpg`, `https://lnt.org/wp-content/uploads/2018/10/forest-park.jpg`)
const macleayPark = new funObject(`Macleay Park`, `https://www.alltrails.com/parks/us/oregon/macleay-city-park--2`, `7 miles`, `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/e3/f1/3e/macleay-trail.jpg?w=1200&h=-1&s=1`, `The nearly 140-acre park has deep ravines shaded by large Douglas-fir and western red cedar trees. Macleay Park also contains the lower portion of Balch Creek, which has a small population of native cutthroat trout. Park trails connect to Forest Park and Audubon Society of Portland wildlife sanctuaries.`, `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/28/c0/2d/macleay-park.jpg?w=1200&h=-1&s=1`, `https://hikingproject.com/assets/photos/hike/7010891_medium_1554399469.jpg?cache=1689378504`, `https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTk0NDk0ODMvNThlNjM2ZGQ2NGIyNjdlYjQwOGIwZjMzZjE1NzAzNDQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==`)
const laurelhurstPark = new funObject(`Laurelhurst Park`, `https://www.portland.gov/parks/laurelhurst-park`, `1 mile`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1646255777/www.travelportland.com/mktg-20220301-laurelhurst-park-01/mktg-20220301-laurelhurst-park-01.jpg`, `This 31-acre (12.5 ha) park really does have something for everybody to enjoy. The central lawn is the perfect spot for an afternoon picnic, with public restrooms and drinking fountains located just across a paved pathway looping through the park. Along the pathway, you’ll find a kids’ playground, a scenic duck pond and tennis and basketball courts.`, `https://i.ytimg.com/vi/9a6HHY0K9fo/maxresdefault.jpg`, `https://i.redd.it/ol0qyaewfr041.jpg`, `https://prioritymovingservices.com/wp-content/uploads/2020/02/Laurelhurst-Park-Portland.jpg`)
const columbiaGorge = new funObject(`Columbia River Gorge Waterfalls`, `https://www.ridecatbus.org/columbia-gorge-express/`, `25 miles`, `https://carsonridgecabins.com/wp-content/uploads/2017/05/Multnomah-Falls.jpg`, `Fed by glaciers and swollen by snowmelt and prodigious winter rains, the waterfalls of the Columbia River Gorge National Scenic Area — an 80-mile-long (129 km) swath carved out by ancient floodwaters — plunge from sheer cliffs, hidden slot canyons and rock grottos rimmed by massive trees and moss in a thousand shades of emerald and jade. In all, 90 major cascades flow here, alongside countless other smaller falls.`, `https://www.territorysupply.com/wp-content/uploads/2019/05/waterfall-hikes-columbia-river-gorge.jpg`, `https://www.themandagies.com/wp-content/uploads/2022/06/Horsetail-Falls-Columbia-River-Gorge-Waterfalls-The-Mandagie-6-1500x1001.jpg`, `https://www.fototripper.com/wp-content/uploads/2017/06/columbia-river-gorge-waterfall-gavin-hardcastle-fototripper.jpg`)
const multnomahFalls = new funObject(`Multnomah Falls Express Tour`, `https://www.getyourguide.com/oregon-l951/from-portland-multnomah-falls-tour-by-bus-with-park-permit-t432555/`, `7 miles`, `https://cdn.getyourguide.com/img/tour/550e20338a0de.jpeg/145.jpg`, `Explore the most-visited natural recreation site in the Pacific Northwest on this tour the Multnomah Falls from Portland. Spend an hour of free time where you can capture pictures of the scenic Multnomah Creek Bridge and have time to visit the Multnomah Falls Lodge. Hop aboard a comfortable and climate-controlled bus at the centrally-located Benson Hotel in Portland. Lean back and relax in a plush seat and take in views of the stunning Columbia River Gorge on the way to the falls. Listen to fascinating stories about the area with live narration along the way. `, `https://cdn.getyourguide.com/img/tour/63497c8cbf178.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/63497b398b574.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/63497b39d7449.jpeg/145.jpg`)
const mtTabor = new funObject(`Mt Tabor`, `https://www.travelportland.com/attractions/mount-tabor-park/`, `1 mile`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1640818795/www.travelportland.com/mktg-fu-20211220-Winter-Wonder-01/mktg-fu-20211220-Winter-Wonder-01.jpg`, `If you want to explore a little piece of nature in the city, then escape to Portland, Oregon's Mount Tabor Park! Walk the trails of the mountain through lush evergreens, check out the unique cinder cone of Mt. Tabor, or let the kids play in the beautiful wooded park.`, `https://image.oregonlive.com/home/olive-media/pgfull/img/oregonian/photo/2016/04/01/-196832b117cca1cc.jpg`, `https://www.tripsavvy.com/thmb/vrrAD2rEJy38ViUI1YfEaHABAPA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PDX_MtTaborPark5-f116a636649440d9904eff36f477d338.jpg`, `https://lh3.googleusercontent.com/W9FaDG3WUHb40uiSH8zmBp0HrmSC5BMApmAycbngnknGQKps1XZzNmgqaL2x0l-mr56uNpqm7qFcX-Tmi3FiKzwJ7OeKeJZRECleQZ0FlqllDyo330sxCksIG1Pn7TpPWwNFSaDX`)
const roseGarden = new funObject(`International Rose Garden`, `https://www.portlandpf.org/rose-test-garden`, `5 miles`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1571420733/www.travelportland.com/AA_Parks_RoseGarden_TravelPortland-1/AA_Parks_RoseGarden_TravelPortland-1.jpg`, `The International Rose Test Garden at Washington Park is owned and managed by Portland Parks & Recreation. The site is popular around the globe and is the oldest, continuously operated public rose test garden in the United States.  The picturesque garden was established to serve as a testing ground for new rose varieties. Today, awash in fragrance, it is one of the top free attractions in the state of Oregon. Some 10,000 roses  consisting of more than 610 different varieties, await each season. `, `https://media.cntraveler.com/photos/5c019bf28acb3b6fd9b86b9f/16:9/w_2560,c_limit/CW0C97.jpg`, `https://www.portland.gov/sites/default/files/styles/facebook/public/2020-04/international-rose-test-garden.jpg?itok=hqaAtNaW`, `https://thumb.spokesman.com/xHwAixpUDOyfX6yqstMa8bvcNo4=/2500x1405/smart/media.spokesman.com/photos/2014/06/08/tra_08portland3.jpg`)
const hoytArboretum = new funObject(`Hoyt Arboretum`, `https://www.hoytarboretum.org/`, `9 miles`, `https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/293116604_472523874873779_4757786087764200565_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=pvueBsHaEGAAX_UQJ0W&_nc_ht=scontent-bos5-1.xx&oh=00_AfD6exGR2FDh_B8-TDOIUlb0jKLEiqVDsqXMrmrY4NeCrA&oe=64C1B3DD`, `Founded in 1928 to conserve endangered species and educate the community, Hoyt Arboretum encompasses 190 ridge-top acres and 12 miles of hiking trails just minutes from downtown Portland. Home to 2,300 species of trees and shrubs from six continents, Hoyt Arboretum is a place of beauty and serenity no matter the season.`, `https://i0.wp.com/ourbiglittleadventures.com/wp-content/uploads/2020/02/Hoyt-Arboretum-Cover.jpg?resize=1160%2C608&ssl=1`, `https://www.onlyinyourstate.com/wp-content/uploads/2019/09/46650546_2107323852653013_6741016102387580928_o.jpg`, `https://dionnekrausphotography.com/wp-content/uploads/2020/08/Redwood-Deck-Elopement-Wedding-Hoyt-Arboretum-1948x1300.jpg`)
const washingtonPark = new funObject(`Washington Park`, `https://explorewashingtonpark.org/`, `9 miles`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_576,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_576/v1605805648/www.travelportland.com/mktg-20192506-Rose-Garden-0015/mktg-20192506-Rose-Garden-0015.jpeg`, `Portland’s signature westside park isn’t just loaded with big trees and picnic tables. Located a mere two miles west of downtown and accessible by MAX light rail, 410-acre Washington Park offers up a zoo, two museums, a spectacular rose garden, one of the most authentic Japanese gardens in the world, all bordered by Forest Park — at 5,100 acres, one of the country’s premier urban wildernesses. `, `https://travel.usnews.com/images/JPLDesignsaerial-view-nature.jpg`, `https://a.travel-assets.com/findyours-php/viewfinder/images/res70/347000/347811-Washington-Park-Portland.jpg`, `https://topbrunchspots.com/wp-content/uploads/2022/05/AF1QipOmcI0Pb5thgA5QfoTcGUCiP22H2LPEFDkhvys7w1600-h1000-k-no.jpeg`)
const eagleCreek = new funObject(`Eagle Creek`, `https://www.oregon.com/recreation/hike-eagle-creek`, `24 miles`, `https://cdn.backpacker.com/wp-content/uploads/2022/03/GettyImages-1144254865-scaled-e1648682179412.jpg`, `The Eagle Creek Trail is one of Oregon's most spectacular paths, passing half a dozen major waterfalls. The trail is also an engineering marvel. To maintain an easy grade through this rugged canyon, the builders blasted ledges out of sheer cliffs, bridged a colossal gorge and even chipped a tunnel through solid rock behind 120-foot Tunnel Falls.`, `https://thegorgeguide.com/wp-content/uploads/2021/08/USA-Oregon-Punchbowl-Falls-Tams-2.jpg`, `https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/HXVFYPLIMBDYNB5NUT3TW2LVVQ.JPGG`, `https://i.ytimg.com/vi/T5DzGrDp5Xw/maxresdefault.jpg`)
const japaneseGarden = new funObject(`Portland Japanese Garden`, `https://japanesegarden.org/`, `8 miles`, `https://www.travelportland.com/wp-content/uploads/2021/05/mktg-20182804-japanese-garden-0043-scaled.jpg`, `The Garden sits nestled in the hills of Portland, Oregon’s iconic Washington Park, overlooking the city and providing a tranquil, urban oasis for locals and travelers alike. Designed in 1963, it encompasses 12 acres with eight separate garden styles, and includes an authentic Japanese Tea House, meandering streams, intimate walkways, and a spectacular view of Mt. Hood. This is a place to discard worldly thoughts and concerns and see oneself as a small but integral part of the universe.`, `https://pdxmovers.com/wp-content/uploads/2019/10/shutterstock_227120155.jpg`, `https://japanesegarden.org/wp-content/uploads/2020/12/Moon-Bridge-edit-web.jpg`, `https://lh3.googleusercontent.com/p/AF1QipPt0YAAihY9m7HIx_CW3KFFGDwbUkktjMBl1xiv=s680-w680-h510`)
const lanSuGarden = new funObject(`Lan Su Chinese Garden`, `https://lansugarden.org/`, `5 miles`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1640195255/www.travelportland.com/TP_Winter_Flow2.2_64664067cc/TP_Winter_Flow2.2_64664067cc.jpg`, `Opening in September 2000, Lan Su Chinese Garden is one of Portland's greatest treasures and most interesting sites to see while visiting Portland. A result of a collaboration between the cities of Portland and Suzhou, our sister city in China's Jiangsu province that's famous for its beautiful Ming dynasty gardens, Lan Su was built by Chinese artisans from Suzhou and is one the most authentic Chinese gardens outside of China.`, `https://www.oregonlive.com/resizer/2SdEtGu4KGsCxnYg_Y33tTmF66s=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NFUYHDTYVVFSZDL4RXOR3JRMUY.jpg`, `https://upload.wikimedia.org/wikipedia/commons/9/94/Lan_Su_Chinese_Garden_-_Portland%2C_Oregon_-_DSC01435.jpg`, `https://journeyaroundtheglobe.files.wordpress.com/2014/10/img_1969-elem.jpg`)
const crystalSprings = new funObject(`Crystal Springs Rhododendron Garden`, `https://www.crystalspringsgardenpdx.org/`, `5 miles`, `https://portlandlivingonthecheap.com/lotc-cms/wp-content/uploads/2022/05/crystal-1.jpg`, `A unique 9.5-acre garden, Crystal Springs contains an outstanding collection of rare species and hybrid rhododendrons, azaleas, and other lesser-known ericaceous plants, as well as many companion plants and unusual trees.`, `https://images.squarespace-cdn.com/content/v1/5d1ecfd8522a2b0001f05d23/5f15c88e-ddea-4fd1-88b3-81b32e6ee5d7/IMG_4674.jpg?format=1500w`, `https://www.travelportland.com/wp-content/uploads/2021/10/mktg-20191606-Crystal-Springs-0004-scaled.jpg`, `https://images.squarespace-cdn.com/content/v1/52f3f666e4b0c5c8957ccc9f/1620838173191-ZYBKEWE76UWLVYGZMIVU/crystal-springs-rhododendron-elopement-portland-008.JPG`)
const powellButte = new funObject(`Powell Butte Nature Park`, `https://www.portland.gov/parks/powell-butte-nature-park`, `9 miles`, `https://www.hikeoregon.net/uploads/2/9/0/0/29006543/view-of-mt-hood-from-powell-butte_orig.jpg`, `Powell Butte, an extinct cinder cone volcano, rises near the headwaters of Johnson Creek - an urban creek with remnant populations of native salmon and steelhead. The park is comprised of 611 acres of meadowland and forest.`, `https://media.oregonlive.com/oregonian/photo/2016/04/20/-cc41007328754658.jpg`, `https://media.oregonlive.com/oregonian/photo/2016/04/20/-474c09e74f339bf6.jpg`, `https://upload.wikimedia.org/wikipedia/commons/7/7b/Powell_Butte.jpg`)


function generateCards() {
    funObjects.forEach(object => {
        const newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.name = object.name
        newCard.style.backgroundImage = `url(${object.image})`
        newCard.addEventListener("click", function() {loadSceneryModal(this)})
        const newCardContent = document.createElement("p")
        newCardContent.textContent = `${object.name}`
        newCard.appendChild(newCardContent)
        sceneryContainer.appendChild(newCard)
    })
}

function loadSceneryModal(element) {
    for (let i=0; i<funObjects.length; i++) {
        if (funObjects[i].name === element.name) {
            sceneryModalHeading.textContent = funObjects[i].name
            sceneryModalLink.href = funObjects[i].link
            sceneryModalDistance.textContent = funObjects[i].distance
            sceneryModalDescription.textContent = funObjects[i].description
            sceneryModalFirst.src = funObjects[i].first
            sceneryModalSecond.src = funObjects[i].second
            sceneryModalThird.src = funObjects[i].third
        }
    }
    sceneryModal.classList.add("visible")
}