let foodObjects = []
let barObjects = []
let funObjects = []
let sceneryObjects = []

const foodContainer = document.getElementById("food-container")
const foodModal = document.getElementById("food-modal")
const foodModalHeading = document.getElementById("food-modal-heading")
const foodModalLink = document.getElementById("food-modal-link")
const foodModalDistance = document.getElementById("food-modal-distance")
const foodModalDescription = document.getElementById("food-modal-description")
const foodModalFirst = document.getElementById("food-modal-first")
const foodModalSecond = document.getElementById("food-modal-second")
const foodModalThird = document.getElementById("food-modal-third")

const container = document.getElementById("container")
const modal = document.getElementById("modal")
const modalHeading = document.getElementById("modal-heading")
const modalLink = document.getElementById("modal-link")
const modalDistance = document.getElementById("modal-distance")
const modalDescription = document.getElementById("modal-description")
const modalFirst = document.getElementById("modal-first")
const modalSecond = document.getElementById("modal-second")
const modalThird = document.getElementById("modal-third")

const barsContainer = document.getElementById("bars-container")
const barsModal = document.getElementById("bars-modal")
const barsModalHeading = document.getElementById("bars-modal-heading")
const barsModalLink = document.getElementById("bars-modal-link")
const barsModalDistance = document.getElementById("bars-modal-distance")
const barsModalDescription = document.getElementById("bars-modal-description")
const barsModalFirst = document.getElementById("bars-modal-first")
const barsModalSecond = document.getElementById("bars-modal-second")
const barsModalThird = document.getElementById("bars-modal-third")

const activitiesContainer = document.getElementById("activities-container")
const activitiesModal = document.getElementById("activities-modal")
const activitiesModalHeading = document.getElementById("activities-modal-heading")
const activitiesModalLink = document.getElementById("activities-modal-link")
const activitiesModalDistance = document.getElementById("activities-modal-distance")
const activitiesModalDescription = document.getElementById("activities-modal-description")
const activitiesModalFirst = document.getElementById("activities-modal-first")
const activitiesModalSecond = document.getElementById("activities-modal-second")
const activitiesModalThird = document.getElementById("activities-modal-third")

const sceneryContainer = document.getElementById("scenery-container")
const sceneryModal = document.getElementById("scenery-modal")
const sceneryModalHeading = document.getElementById("scenery-modal-heading")
const sceneryModalLink = document.getElementById("scenery-modal-link")
const sceneryModalDistance = document.getElementById("scenery-modal-distance")
const sceneryModalDescription = document.getElementById("scenery-modal-description")
const sceneryModalFirst = document.getElementById("scenery-modal-first")
const sceneryModalSecond = document.getElementById("scenery-modal-second")
const sceneryModalThird = document.getElementById("scenery-modal-third")

function foodObject(name, link, distance, image, description, first, second, third) {
    this.name = name
    this.link = link
    this.distance = distance
    this.image = image
    this.description = description
    this.first = first
    this.second = second
    this.third = third
    foodObjects.push(this)
}

function barObject(name, link, distance, image, description, first, second, third) {
    this.name = name
    this.link = link
    this.distance = distance
    this.image = image
    this.description = description
    this.first = first
    this.second = second
    this.third = third
    barObjects.push(this)
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

function loadFoodModal(element) {
    for (let i=0; i<foodObjects.length; i++) {
        if (foodObjects[i].name === element.name) {
            foodModalHeading.textContent = foodObjects[i].name
            foodModalLink.href = foodObjects[i].link
            foodModalDistance.textContent = foodObjects[i].distance
            foodModalDescription.textContent = foodObjects[i].description
            foodModalFirst.src = foodObjects[i].first
            foodModalSecond.src = foodObjects[i].second
            foodModalThird.src = foodObjects[i].third
        }
    }
    foodModal.classList.add("visible")
}

function loadBarsModal(element) {
    for (let i=0; i<barObjects.length; i++) {
        if (barObjects[i].name === element.name) {
            barsModalHeading.textContent = barObjects[i].name
            barsModalLink.href = barObjects[i].link
            barsModalDistance.textContent = barObjects[i].distance
            barsModalDescription.textContent = barObjects[i].description
            barsModalFirst.src = barObjects[i].first
            barsModalSecond.src = barObjects[i].second
            barsModalThird.src = barObjects[i].third
        }
    }
    barsModal.classList.add("visible")
}

function loadActivitiesModal(element) {
    for (let i=0; i<funObjects.length; i++) {
        if (funObjects[i].name === element.name) {
            activitiesModalHeading.textContent = funObjects[i].name
            activitiesModalLink.href = funObjects[i].link
            activitiesModalDistance.textContent = funObjects[i].distance
            activitiesModalDescription.textContent = funObjects[i].description
            activitiesModalFirst.src = funObjects[i].first
            activitiesModalSecond.src = funObjects[i].second
            activitiesModalThird.src = funObjects[i].third
        }
    }
    activitiesModal.classList.add("visible")
}

function loadSceneryModal(element) {
    for (let i=0; i<sceneryObjects.length; i++) {
        if (sceneryObjects[i].name === element.name) {
            sceneryModalHeading.textContent = sceneryObjects[i].name
            sceneryModalLink.href = sceneryObjects[i].link
            sceneryModalDistance.textContent = sceneryObjects[i].distance
            sceneryModalDescription.textContent = sceneryObjects[i].description
            sceneryModalFirst.src = sceneryObjects[i].first
            sceneryModalSecond.src = sceneryObjects[i].second
            sceneryModalThird.src = sceneryObjects[i].third
        }
    }
    sceneryModal.classList.add("visible")
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

function closeModal(element) {
    element.parentElement.parentElement.classList.remove("visible")
}

function generateFoodCards() {
    foodObjects.forEach(object => {
        const newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.name = object.name
        newCard.style.backgroundImage = `url(${object.image})`
        newCard.addEventListener("click", function() {loadFoodModal(this)})
        const newCardContent = document.createElement("p")
        newCardContent.textContent = `${object.name}`
        newCard.appendChild(newCardContent)
        foodContainer.appendChild(newCard)
    })
}

function generateBarCards() {
    barObjects.forEach(object => {
        const newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.name = object.name
        newCard.style.backgroundImage = `url(${object.image})`
        newCard.addEventListener("click", function() {loadBarsModal(this)})
        const newCardContent = document.createElement("p")
        newCardContent.textContent = `${object.name}`
        newCard.appendChild(newCardContent)
        barsContainer.appendChild(newCard)
    })
}

function generateActivityCards() {
    funObjects.forEach(object => {
        const newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.name = object.name
        newCard.style.backgroundImage = `url(${object.image})`
        newCard.addEventListener("click", function() {loadActivitiesModal(this)})
        const newCardContent = document.createElement("p")
        newCardContent.textContent = `${object.name}`
        newCard.appendChild(newCardContent)
        activitiesContainer.appendChild(newCard)
    })
}

function generateSceneryCards() {
    sceneryObjects.forEach(object => {
        const newCard = document.createElement("div")
        newCard.classList.add("card")
        newCard.name = object.name
        newCard.style.backgroundImage = `url(${object.image})`
        newCard.addEventListener("click", function() {loadModal(this, sceneryObjects, sceneryModal, sceneryModalHeading, sceneryModalLink, sceneryModalDistance, sceneryModalDescription, sceneryModalFirst, sceneryModalSecond, sceneryModalThird)})
        const newCardContent = document.createElement("p")
        newCardContent.textContent = `${object.name}`
        newCard.appendChild(newCardContent)
        sceneryContainer.appendChild(newCard)
    })
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

const portlandMercado = new foodObject(`Portland Mercado Food Trucks`, `https://www.portlandmercado.org/`, `3.4 miles`, `https://lh3.googleusercontent.com/p/AF1QipNbv-wZ2S9FJYrYkxNAOd2u_JdGgvqusCc1u0UD=s680-w680-h510`, `Bridging diverse cultures through food, art, and entertainment within our community of permanent businesses, at our public market and Comcast Plaza, our small business support programming, and incubator kitchen. Portland Mercado is open from 11 am-8 pm seven days a week!`, `https://images.squarespace-cdn.com/content/v1/52b0ec2fe4b09532a541e01c/1676488548641-NYLLX0P9DFZA40GAFX56/_MG_0917.jpg?format=2500w`, `https://images.squarespace-cdn.com/content/v1/52b0ec2fe4b09532a541e01c/1676488643616-Z91NU2P8CB14GEPHK3ZS/_MG_0890.jpg?format=2500w`, `https://images.squarespace-cdn.com/content/v1/52b0ec2fe4b09532a541e01c/1676488285551-HJL1PSOS6H5F7HHQOB8J/Full+Res+Taste+of+Portland-72.jpg?format=2500w`)
const porqueNo = new foodObject(`¿Por que no?`, `https://porquenotacos.square.site/home`, `1.4 miles`, `https://lh3.googleusercontent.com/p/AF1QipOm2HF3ncYUV3G2bZkNQEE5Wb4Jk1V-_rK8E1kU=s680-w680-h510`, `¿Por Qué No? is a counter service restaurant and we take orders and seat people on a first-come, first-served basis. To eat at the restaurant, you will wait in line, order at the counter and then, once you’ve ordered and gotten a number, choose a table. Servers will bring your food to your table. Water and housemade salsas are self-serve.`, `https://lh3.googleusercontent.com/p/AF1QipO9Q0rbwmcW2RyCAKSVWP7kbLDmoC5GpQXY-CUx=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNS4R_3Kh-SYyFPtoSAosJor-4pfRHZICcCOAzD=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOWWsmVqmfaoLKtzz9VAU3-5YH1Bt1U16B_8ZRs=s680-w680-h510`)
const cartopiaCart = new foodObject(`Cartopia Food Cart Pods`, `https://www.cartopiafoodcarts.com/`, `5.0 miles`, `https://lh3.googleusercontent.com/p/AF1QipN9QKxTTSFUsd3mgRt5oteoyi5kIew3TXYqPw-0=s680-w680-h510`, `Portland's original Southeast Hawthorne Boulevard food cart pod and beer garden; landmark of the city's vibrant food cart scene since 2008.`, `https://images.squarespace-cdn.com/content/v1/5de44fccc0fdd4652a74bb9f/1577829155500-NGIS5RKNBQ1X5HALASZI/Group+Shot.jpg?format=1500w`, `https://images.squarespace-cdn.com/content/v1/6483c302722a8e69d7c75133/1689702351754-VUCGW4XSHCDQJHUK7G73/image-asset.jpeg?format=750w`, `https://sgfiles.gsmcdn.com/content/uploads/sites/412/2021/10/07000901/bkk-pad-thai-dumplings-small.jpeg`)
const heyLove = new foodObject(`Hey Love`, `https://www.heylovepdx.com/`, `3.5 miles`, `https://lh3.googleusercontent.com/p/AF1QipNUWq-ZDxZXiusuQVe5v6okERk1DCEkKyDY4qEc=s680-w680-h510`, `In here, it’s summer all year round. The walls are lush with overgrown plants & local art. The music is rich and soulful—and usually at least a few decades old. The food is bold and bright with a hearty nod to nostalgia. The drinks are vibrant, a little bit sexy and always fun. Hey Love is a top-notch cocktail lounge, a community meeting hall, a hidden garden and a house party, all wrapped into one. `, `https://lh3.googleusercontent.com/p/AF1QipPHG-Wr-oCXE1mBzpj64HO3mRTboCoshjaCSywG=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMbCQwDwVcvdbxrOz2bCLXakyXMDm_NfGahUErQ=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMsEIGlcWqIVe8eDrl7bQK9n4vO4Cm2vrIjfHwh=s680-w680-h510`)
const rontoms = new foodObject(`Rontoms`, `http://www.rontoms.net/`, `3.6 miles`, `https://lh3.googleusercontent.com/p/AF1QipMUhaDGQhk6KJFwqZdU_WcclTLgS1API2uA9W5s=s680-w680-h510`, `Hip, rustic-industrial hangout with a patio, fireplaces & Ping-Pong, plus drinks, pub grub & bands.`, `https://lh3.googleusercontent.com/p/AF1QipNRprmzPgFicHCJKx6AVPkg4iQLPCpOzo0gheO7=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipO40ndMegxBUqLTxUwzNKMxtKZT39FQZO1XUV2N=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNif_PLmg8tZkwv7UTM9s-fGLwaSHb1xDFiRHzB=s680-w680-h510`)
const fireMountain = new foodObject(`Fire on the Mountain`, `https://www.portlandwings.com/`, `2.3 miles`, `https://lh3.googleusercontent.com/p/AF1QipMvkFRKl6NgpZ24XVd8FhpCt-PFu-W4jxgp3zUn=s680-w680-h510`, `We’re not just famous for our wings! Try our sandwiches, vegan wings, awesome salads, or a "serious legit" pizza at our Fremont location. Our fries are hand-cut. Our bacon is the thickest we can find. Our ranch and blue cheese is made in house daily. We bread every fried pickle and onion ring by hand. And of course: our wings are always sustainably sourced and cooked fresh to order.`, `https://lh3.googleusercontent.com/p/AF1QipO14XpOn1g2IdtkvkZwCL9lTjHEFnNuhms5544c=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipPBwgD1q11w_0LI8klY3RuYLTyainzAhxCpbgsI=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMgLhVBvRHykMgvgqAw_HMUGfmVMDHhmsq_tqVs=s680-w680-h510`)
const tusk = new foodObject(`Tusk`, `https://www.tuskpdx.com/`, `1.9 miles`, `https://lh3.googleusercontent.com/p/AF1QipOVmF5S80QVs-Je-fWq42Gz4_2rYt0EDh7j-Jzw=s680-w680-h510`, `Bright, airy and full of good vibes as far as the eye can see, Tusk is a beacon of flavor and rock-fused fantasy in Southeast Portland. Drawing on the flavors of Mediterranean cuisine, Tusk highlights the freshest seasonal produce of the Pacific Northwest.`, `https://images.squarespace-cdn.com/content/v1/5ba9207734c4e264b1f3bd87/1ad5e78d-0dc0-4b4a-8779-9f8e4d6acb5e/Steak+and+Collard+Greens.jpg?format=2500w`, `https://lh3.googleusercontent.com/p/AF1QipPP_p6pnjuFnTGRsvKZXxaq0Z8_fNMTwIkdS7A=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOab9WzZw81ZkI1tAmLuAki9neUdTcEEungPQ_N=s680-w680-h510`)
const paaDee = new foodObject(`PaaDee`, `https://www.paadeepdx.com/`, `1.8 miles`, `https://lh3.googleusercontent.com/p/AF1QipMfzs_jXlGEtnERfDJ3TbR8RdISRIya4Covp2E5=s680-w680-h510`, `The Thai phrase “paa dee” literally means “to bring good things”. The concept is simple – to provide good things is to walk the path of happiness. PaaDee aspires to bring to Portland our favorite Thai dishes and to bring the spotlight to Thai comfort food.`, `https://lh3.googleusercontent.com/p/AF1QipMczh1DD8c1bUPEcTxeJPWQL3fxxT8MOd8Oa5Ws=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNZUejKb4DwI6KbsRrPGNEisWlRhV-iFUqXHjFe=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOsHeSozKZk8fSZi7iZNk6E3i9auUCQGh2tJGAm=s680-w680-h510`)
const tinShed = new foodObject(`Tin Shed Garden`, `https://www.tinshedgardencafe.com/`, `4.4 miles`, `https://lh3.googleusercontent.com/p/AF1QipOAaJ21mVYsPHYLRlBZX7GJO6EHfMHcZDu2-eFw=s680-w680-h510`, `We pride ourselves on providing not just high-quality, responsibly sourced tasty food and drinks, but also maintaining meaningful connections with our guests, staff and the community. We buy organic and local whenever possible and our meat comes from animals that were treated humanely. We supply local, free-range chicken, without hormones or antibiotics.  We supply local, grass-fed beef and wild-caught Alaskan salmon. Click the “Menu” button below to take a peek at all of our delicious options.`, `https://lh3.googleusercontent.com/p/AF1QipMyE2uLQ9GwRR8iyB4mbBAQGhYEWh7rXc47KKmm=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNq1gz97QZiAvVrHIejdUWPDqpQVtM57-CNM615=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipPNHhrL892ru4GJXPB6Jgb1FyXsrTSw6xXJRLDL=s680-w680-h510`)
const basilisk = new foodObject(`Basilisk`, `https://basiliskpdx.com/`, `2.0 miles`, `https://lh3.googleusercontent.com/p/AF1QipOlUSA0uGFdNt3nZWZB0oofgAV4HUzaUYyAGGbq=s680-w680-h510`, `Basilisk is the much-improved fried chicken concept that replaced Vietnamese grab-n’-go spot Rua. The fried chicken here is dynamite (both in sandwich form, and as a plate), with a heavily heavy-battered, crackle-crisp crust that yields to tender dark meat.`, `https://lh3.googleusercontent.com/p/AF1QipOljWY-xW-TUh4QuOrPFYcEkHOPhHphEvdJD5-B=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipO-iYGRuVmXV6gDT2n-Mfq9BBV3L0DRCdGrKnw1=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipO19edZ2yrxhZ3Ihiji3o1044-veP2Fv54i_7xs=s680-w680-h510`)
const nicholas = new foodObject(`Nicholas`, `https://www.nicholasrestaurant.com/`, `4.9 miles`, `https://lh3.googleusercontent.com/p/AF1QipNmocj2YPjCVYuVgcYL1AokZMjsRELlwLT-8v8W=s680-w680-h510`, `Local family owned Mediterranean/Lebanese restaurant. The baba ganoush is fantastic!`, `https://lh3.googleusercontent.com/p/AF1QipNcPwUo1QHeBJJ89qhJnMf3pgMTx4SmrVHgNX6B=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNhk1sYt2AHf_C9MAMudrWsAvitMMRxYE8eaUWV=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMY6FmZIY_4hsSljN167upj3e_AuLtmzfCyTYvg=s680-w680-h510`)
const luce = new foodObject(`Luce`, `https://www.luceportland.com/`, `2.1 miles`, `https://lh3.googleusercontent.com/p/AF1QipM8AdRwLDIMT1VVg-29LAOMRMYRFfMSjY4AYQHE=s680-w680-h5100`, `Petite, low-key Italian restaurant and grocery serving housemade pastas & seasonal entrees. Order widely from the resolutely seasonal menu and a parade of toothsome dishes will arrive at your table—roasted beets, crispy arancini, lemon-scented cappelletti in brodo, carrot-ricotta ravioli with herb butter, charred octopus and potato salad with parsley and olives, and more.`, `https://lh3.googleusercontent.com/p/AF1QipMS-toujIe9aXMTbGJpe2q1z2iGe6sUmlpi-i0J=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMCiankKHy3YkDnL0vMESYRdZ0wYSQf8bYkQFI=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipM4tggQghPNLYq1AzbapySeJY1QEV0zDYrcrp1X=s680-w680-h510`)
const ox = new foodObject(`Ox *`, `https://oxpdx.com/`, `4.8 miles`, `https://lh3.googleusercontent.com/p/AF1QipPdfnKCAXoQnVh5Oamjg___6TdKgkQyr-HCfPVX=s680-w680-h510`, `The name OX pays homage to the work animal that pulls the plough, tilling the soil and replenishing the land’s ability to produce its fruits, vegetables, and grains. Showcasing prime local meats and fish, OX also features seasonal produce in distinctive preparations. OX harnesses the culinary talent of Portland chefs Greg Denton and Gabrielle Quiñónez Denton in a friendly and comfortable neighborhood restaurant with an energetic vibe and creative menu designed to appeal to the palate of the Pacific Northwest.`, `https://lh3.googleusercontent.com/p/AF1QipNOdIoOy5GPhKaBrnAbY6lwwKzVb3iahiISy3s=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOlSb_cwteTBe4zHk-UjBMZIuwuvQpvzjfLm51t=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOTpPpf3VsprVSUopMUIYFswh_tWtVa4ADjvfNV=s680-w680-h510`)
const cityGrill = new foodObject(`Portland City Grill *`, `https://www.portlandcitygrill.com/`, `4.7 miles`, `https://lh3.googleusercontent.com/p/AF1QipMc6BaEkE7rTl9w477HhIv4lOO4lSv2lo2E3y6B=s680-w680-h510`, `Take in the sweeping city and landscape views. Sip a standout wine or craft cocktail. 20 years and counting, Portland City Grill maintains its commitment to serving fresh, locally sourced seafood and exceptionally prepared steaks influenced by classic island Asian and Northwest flavors. Our attentive staff will make you feel at home – in our rarefied air 30 floors above Portland.`, `https://lh3.googleusercontent.com/p/AF1QipMJcahhDW5kWWV9Bmu0OkkQuAwiN1dvZjjTmctz=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNp-EMhl0x5PVVGN841Q-ereNXda_n8Nl80Z1OT=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMkq-T5j9X6Lqw1YmAAa-Igj3RUOX0_51hHxEHZ=s680-w680-h510`)
const departure = new foodObject(`Departure *`, `https://www.departureportland.com/`, `4.6 miles`, `https://lh3.googleusercontent.com/p/AF1QipNC6A8eFk_idDF5Fzk2HCvxte7USD2Q-xd6HH7i=s680-w680-h510`, `From street food-styled starters and meal-sized classics, to rice and noodle specialties to ethically-sourced sushi, Departure Portland embraces the bounty of the Pacific Northwest to deliver the fiery flavors of the Far East. Whether steamed or stir-fried, smoked or sautéed, each dish leads guests to another stage along Departure’s culinary adventure.`, `https://lh3.googleusercontent.com/p/AF1QipMXJ9X0CubfrMIZlaMFkowpbuxZAznyX6ScLX_P=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMnYKFQ-tb866WStSxTWI6qt9qFB68x1BxULbi4=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOgatkj1kxKz5Itv4ee4PhI3XTTWerwImZMZ_M1=s680-w680-h510`)
const lePigeon = new foodObject(`Le Pigeon *`, `https://www.lepigeon.com/`, `3.6 miles`, `https://lh3.googleusercontent.com/p/AF1QipP3LPwuc6Mvi73BEgUBerQRG6MDNAQTla65nZhs=s680-w680-h510`, `Chef Gabriel Rucker won two James Beard Awards for his first restaurant, and with good reason: Le Pigeon is a tiny gem of a place that serves seasonal French-inspired food with a kick. The East Burnside institution is bold and adventurous, but most importantly approachable, making it a local favorite and a national destination for over a decade. `, `https://lh3.googleusercontent.com/p/AF1QipMPD68sxF6eUp3IwQjBVuqvslVRQBY-XAUHVZIs=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOafCxHZXbwJwql26IjN1YqymD_sejYtzkU_uur=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOdvOYzPFx--ZK9L-dipHNVLERHD-x9x7qAd7Y=s680-w680-h510`)
const andina = new foodObject(`Andina *`, `https://www.andinarestaurant.com/`, `4.9 miles`, `https://lh3.googleusercontent.com/p/AF1QipPdPMBk4Wy--CR84LYZY3BtfRFGEi8LKWFLfKVV=s680-w680-h510`, `Peruvian cuisine is an unfinished story thousands of years in its unfolding.  In our food, drink, and hospitality, we hope to contribute a few compelling lines to that story. Sourcing our ingredients both locally in Oregon and in direct trade with a community of organic farmers in Chincha, Peru, we celebrate a country incredibly rich in its cultural and natural history. `, `https://lh3.googleusercontent.com/p/AF1QipPTyomgAiQlCyOd1MGpQEVCuzFDlVd8qB7Rf9J5=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOXva7wOD5QeEGFH6mZJ7lOn9R84TrwK5qRXfYI=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipN78bUuMiq6UUZZPSyO2GgaIGLmsOEIElg5P4FE=s680-w680-h510`)
const laurelhurstMarket = new foodObject(`Laurelhurst Market *`, `https://www.laurelhurstmarket.com/`, `1.5 miles`, `https://lh3.googleusercontent.com/p/AF1QipMEB2qrXJ3Yra4NRmSpXiQMRKRAAZGFBdGz9tBN=s680-w680-h510`, `Laurelhurst Market is a steakhouse and butcher shop located in the beautiful neighborhood of Laurelhurst in Portland. Our team of expert chefs and butchers craft everything in-house, from pâté to hand-stuffed sausages to smoked ham hocks. We take pride in sourcing only the highest quality ingredients and upholding the highest standards of animal welfare and food safety.`, `https://lh3.googleusercontent.com/p/AF1QipOPVVPiL5QcYpsT0137Yr7wGI_1X54HmgD6O0gT=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipPga941IybCYi3xoEq_3a5Y32M5mgSraCHknstN=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNkM1peC1GqIhDwG8R69OmgN4onRADeJjuahWCb=s680-w680-h510`)

const whiskeyLibrary = new barObject(`Multnomah Whisky Library`, `https://mwlpdx.com/`, `5 miles`, `https://lh3.googleusercontent.com/p/AF1QipOVW5d4u7JSmamjGB8aWaxOESLLf7RuAZGQOJss=s680-w680-h510`, `From the bartender who creates the perfect cocktail or combs the shelves for a rare bottle, to the chef offering a thoughtfully curated menu - we undertake to honor our collection of spirits through education, shared experience, and classic hospitality.`, `https://lh3.googleusercontent.com/p/AF1QipOymEoubHuidsCHnpY-9TSzc4xgdqJ05eJ2TEyX=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOnBoDj6slZjUS5wVkSXW9yyib2sVjCNQa2tMqX=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipP4DiwHuHMYaZYarxVKQ-Ij_VFh7oxYQfcwA_Jj=s680-w680-h510`)
const tropicale = new barObject(`Tropicale`, `https://www.tropicale.co/`, `1.7 miles`, `https://lh3.googleusercontent.com/p/AF1QipN_wZNeQFt5RAcWz1eEI2LL2fM5LCRZ2weAdB4i=s680-w680-h510`, `Tropicale is the newly opened cocktail bar with Caribbean and Latin American small plates in the Kerns neighborhood of Portland, Oregon. With this brick-and-mortar space, owner Alfredo Climaco found a permanent oasis for his popular cocktails and zero proof drinks, both longtime attractions at the Portland Night Market and city street fairs.`, `https://lh3.googleusercontent.com/p/AF1QipODADGpUy66EqIN2ut-NPjfVwcgycgpsvc8jfLt=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOA-ysf-h8ILY7Mk_9NN0rXaK_oY8N8E9IIjGPK=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMvIPZh0QgTfXsXni5Bam3ssceMBnLbMgHs6UmM=s680-w680-h510`)
const rumClub = new barObject(`Rum Club`, `https://rumclubpdx.com/`, `3.6 miles`, `https://lh3.googleusercontent.com/p/AF1QipPbY7XJetwmlz9H5wjUGdMS-5Fu0L2N0SS_wZ42=s680-w680-h510`, `Rum Club serves Hemingway-class cocktails at reasonable prices (all $8) in a tiny triangular room almost completely filled by a horseshoe bar topped in glowing African mahogany. The bar encourages long, pisco-soaked conversations that drift on and on until the 2 am last call, so fortify your stomach with a stream of deviled-ham sandwiches ($5) and pickled eggs (beet- or turmeric-flavored, $1) and settle in.`, `https://lh3.googleusercontent.com/p/AF1QipMicwYGkxz85Sduc9DC7UwBW1DDhERV5AqHSArJ=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOlfnTaLUPrygJeJCPN9lkAsPpp8tcny_Ushzq_=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipP3FPDLgEcZrlxhT-8xR65uCKPWR6wwE4lJVeiA=s680-w680-h510`)
const paydirt = new barObject(`Paydirt`, `https://www.paydirtbar.com/`, `1.8 Miles`, `https://lh3.googleusercontent.com/p/AF1QipOsLDwYLnyg8O-GIUCCKJzHdLJgD9OGLxME8fsR=s680-w680-h510`, `Craft beers, many whiskeys & a range of hard-to-find aperitifs are served at this casual bar.`, `https://lh3.googleusercontent.com/p/AF1QipOsLDwYLnyg8O-GIUCCKJzHdLJgD9OGLxME8fsR=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipN-HWST19Hfzcu_DJxBRpN4BtZybVsSjqnCJars=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOAT0H8xEinsbIxSWVtWFRto1komdIkwnTLARoD=s680-w680-h510`)
const ravenManor = new barObject(`Raven's Manor`, `https://www.ravensmanorexperience.com/`, `4.6 miles`, `https://lh3.googleusercontent.com/p/AF1QipNvGzQLQIKWMTAZWRu42a-ZvnOI6RSIoeYMZVf-=s680-w680-h5100`, `Welcome to Raven's Manor: The haunted manor themed bar with an interactive mixology experience like no other! Come on in for a taste of our dangerously delicious drinks and light fare. Explore the many horrors of this haunted manor and maybe you'll be lucky enough to live to tell the tale....`, `https://lh3.googleusercontent.com/p/AF1QipNvGzQLQIKWMTAZWRu42a-ZvnOI6RSIoeYMZVf-=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipO7eLATv1Hzm2JhlYkGRqTDTi4Tg2FbdkeBGhjb=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipPrmDrPSY_ylPjD7zforimVWznAwgelvyZNE98R=s680-w680-h510`)
const halePele = new barObject(`Hale Pele`, `https://www.halepele.com/`, `2.2 miles`, `https://lh3.googleusercontent.com/p/AF1QipMUMgmYJ9FJgMEW6fkxiYIKgEdmb8G2UfRPuzio=s680-w680-h510`, `Hale Pele - "House of the Volcano Goddess" - is a glimmering pearl in Portland's sea of food & cocktail culture. We proudly feature remarkable classic and contemporary exotic cocktails made with fresh juices, premium spirits, and house-made syrups.`, `https://lh3.googleusercontent.com/p/AF1QipP0dvtwVl0nHVxk1171EPXJYh1kjtDufW-OTngk=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMpMGxJFi8R_ZTCQALGLG2HxAfWe-bfe81wbC10=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOO1C3e49FKeYYr3uSdjjINEFHu0AEGQDn4Pu06=s680-w680-h510`)
const myWay = new barObject(`My Way Lounge`, `http://www.mywaypdx.com/`, `3.5 miles`, `https://lh3.googleusercontent.com/p/AF1QipN0MoMuk9pttV2jeoAMrMIcXMeagiLlC03aQ66W=s680-w680-h510`, `A relaxed Portland bar with a neon aesthetic, serving colorful cocktails and providing various casino-like games for entertainment. `, `https://lh3.googleusercontent.com/p/AF1QipONcxNi-Mc_TrVWqYStNyNr-5iE0Bt3c11osapj=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipODNyLkxZYX4EzRuUQWFo2huDy5EPEkWks2zubQ=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipPTehyFtHTK5lnum6aG5IujXct6WYbOzXT9QV-_=s680-w680-h510`)
const angelFace = new barObject(`Angel Face`, `https://www.angelfaceportland.com/`, `1.8 Miles`, `https://lh3.googleusercontent.com/p/AF1QipPwb9SSlBjasDgz_tINwn9Rl4UzjPULk7eDXCY6=s680-w680-h510`, `Bartenders prepare drinks to each patron's flavor preferences at this polished European-style haunt.`, `https://lh3.googleusercontent.com/p/AF1QipMykMmKI4-UYQ3DtQZcBjy0WdSBG2aTt1dap2TK=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMbq6ydx1jMcCV0YLHBNWR_hg2kKATMRvPAaK8=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOt5HHU2sGs4cMpOAqyPulnkObd9JA-4C0X7Hos=s680-w680-h510`)
const scotchLodge = new barObject(`Scotch Lodge`, `https://www.scotchlodge.com/`, `3.5 Miles`, `https://lh3.googleusercontent.com/p/AF1QipOF3WpammZ3MsjfPoi1WHWxQhUqP1jrZMH65AU=s680-w680-h510`, `Scotch Lodge is a cocktail bar for whisky lovers curated by Tommy Klus, with a playfully modern pacific northwest inspired menu from chef Tim Artale.`, `https://lh3.googleusercontent.com/p/AF1QipNZMCP50q2kIXTMVW6KoczsAJF1iNLo10eicAJd=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipO-MJ7O_ubmQh_vvwTfL4bS3yZJzSQg2cL5EURs=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipPMQvWhLe7Bitf7l-27Fd6VpR45USBCxy0iOMdf=s680-w680-h510`)
const arborHall = new barObject(`Arbor Hall`, `https://arborhallpdx.com/`, `1.7 Miles`, `https://montavillanet.files.wordpress.com/2022/11/arbor-hall-1.jpg?w=1024`, `Neighborhood cocktail bar. Deep menu of classic, modern and house drinks, with over 500 spirits to choose from. We strive to deliver great libations with a high standard of hospitality, table service, and indoor and outdoor seating. `, `https://i.imgur.com/F30OJHW.png`, `https://i.imgur.com/4hG5BN1.png`, `https://i.imgur.com/vkBmYD6.png`)
const greenRoom = new barObject(`The Green Room`, `https://mwlpdx.com/the-green-room/`, `5.0 Miles`, `https://lh3.googleusercontent.com/p/AF1QipOsGj8XUDb-iUNZT60_9b91EKOOUteSSK28uovX=s680-w680-h510`, `A light and bright cocktail bar located beneath the Multnomah Whisk{e}y Library, The Green Room is a place to celebrate the beauty of the natural world and explore how to tread more lightly through sustainable practices and good stewardship.`, `https://lh3.googleusercontent.com/p/AF1QipM6VDy_0fLSehpvAYqCUjp5qhvvGV9y6OUexboM=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipO_jjqEkEnxPsi84zKfFsB-iAIkHDwZ6in4zE1g=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNcYBvgrNOCMGwL95AKY5mESaP79jyr-ohieH0W=s680-w680-h510`)
const lulu = new barObject(`LULU`, `https://lulubarpdx.com/`, `4.4 Miles`, `https://lh3.googleusercontent.com/p/AF1QipPStqdGukMYi1ic98HDaBB8_YIuVR170Q0uYtFp=s680-w680-h510`, `Contemporary bar featuring a wood-dominated interior & a menu of Vietnamese food & fried chicken.`, `https://lh3.googleusercontent.com/p/AF1QipPStqdGukMYi1ic98HDaBB8_YIuVR170Q0uYtFp=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOpeVB9kUQWa1bwWE0lo1gyHtzJgjSEBad0Mjp2=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNBVSWDB2nZlTqe6XeVpXGHtnQV1o8T5zl5OMyI=s680-w680-h510`)

const aerialTram = new funObject(`Portland Aerial Tram`, `http://www.gobytram.com/`, `7 miles`, `https://www.travelportland.com/wp-content/uploads/2022/08/mktg-fr-20190316-tram-view-tilikum-crossing-02-scaled.jpg`, `The Tram has a panoramic view of the city and surrounding region most any day or night. A colorful sunrise or sunset, while never guaranteed, is particularly scenic. To view Mount Hood and Mount Saint Helens, visit when the sky is relatively clear. `, `https://images.squarespace-cdn.com/content/v1/5323979ae4b09e8c9a12c274/1579048713482-WUDKDPNN8L0I98KMIWPF/image-asset.jpeg?format=2500w`, `https://images.squarespace-cdn.com/content/v1/5323979ae4b09e8c9a12c274/1495579362146-3X448AMUSF558D25K946/IMG_1975.JPG?format=2500w`, `https://images.squarespace-cdn.com/content/v1/5323979ae4b09e8c9a12c274/b29a2379-d564-4826-954f-8eff96b38d8c/Tram_Golden_Hour_P1010518.jpg?format=2500w`)
const groundKontrol = new funObject(`Ground Kontrol`, `https://groundkontrol.com/`, `4 miles`, `https://lh3.googleusercontent.com/p/AF1QipOewEJcK3gwtHeM8vyigyZLz2-EQ2pnDObBwbg2=s680-w680-h510`, `Ground Kontrol Classic Arcade features over 120 arcade & pinball machines along with a full bar & food menu.`, `https://lh3.googleusercontent.com/p/AF1QipMlCq0H3xVEu8uzZeJIXpbEbJ2mradQz0c5stYr=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOqtN1_Cr7mS2FcgVScJzOda6EJpcnKsBbOBtEE=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOqnWMjOCckBpSyvaAq9wMt2fWzwo0bku4Gxo35=s680-w680-h510`)
const soulOfTheCity = new funObject(`Soul of the City Walking Tour`, `https://www.getyourguide.com/portland-oregon-l1024/portland-oregon-soul-of-the-city-walking-tour-t436829?_pc=1,10`, `5 miles`, `https://cdn.getyourguide.com/img/tour/6393d619afa2b.jpeg/145.jpg`, `Explore the cultural district and park blocks of Portland on this walking tour. Discover what makes Portland walkable, passionate, and full of activism with your certified tour guide.`, `https://cdn.getyourguide.com/img/tour/6393d6910c6be.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/6393d5f7243d7.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/6393d61a05677.jpeg/145.jpg`)
const bikeTour = new funObject(`Essential Portland: 2-Hour Guided Bike Tour`, `https://www.getyourguide.com/portland-oregon-l1024/portland-2-hour-guided-bike-tour-t403436/`, `4 miles`, `https://cdn.getyourguide.com/img/tour/6106eac0e0115.jpeg/145.jpg`, `Hit the road and explore the sights and streets of Portland like a local on this guided bike tour. Visit Old Town, pedal the Waterfront Esplanade, cruise the Green Park Block and Pearl District with experienced guides and comfortable rides.`, `https://cdn.getyourguide.com/img/tour/6106e9814f377.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/6106e9814f377.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/b53ac07e22631448.jpeg/145.jpg`)
const ghostTour = new funObject(`Ghosts, Poltergeists, and Psychopaths Walking Tour`, `https://www.getyourguide.com/portland-oregon-l1024/portland-downtown-ghost-tour-t318317?partner=true&_pc=1,14&date_from=2023-09-03`, `4 miles`, `https://cdn.getyourguide.com/img/tour/5dc2d8ebbe27a.jpeg/145.jpg`, `Take an eerie evening walking tour around Portland, visiting locations that have been made famous by paranormal researchers, television programs, and nationally recognized "Top Ten Most Haunted” lists.`, `https://cdn.getyourguide.com/img/tour/5dc2d8ebf24de.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/5dc2d8edb1060.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/5dc2d8eab8800.jpeg/145.jpg`)
const bookStore = new funObject(`Powell's bookstore`, `https://www.powells.com/locations/powells-city-of-books`, `4 miles`, `https://s26162.pcdn.co/wp-content/uploads/2015/06/remodeled-store-front-corner-2014-1240x827.jpg`, `Powell’s City of Books is the largest used and new bookstore in the world, occupying an entire city block and housing approximately one million books. Located in downtown Portland’s Pearl District, the City of Books has nine color-coded rooms and over 3,500 different sections, offering something for every interest, including an incredible selection of out-of-print and hard-to-find titles.`, `https://winecountry-media.s3.amazonaws.com/19015-media-Powells-City-of-Books-800x400.jpg`, `https://assets.goaaa.com/image/upload/c_fill,g_auto,w_1170,h_593,q_auto:best/v1647571139/singularity-migrated-images/powells-bookstore-via-magazine-aaa-orND21-1x2.jpg.jpg`, `https://media.cntraveler.com/photos/545279ce11d06c376c72728e/16:9/w_1280,c_limit/powells-books-portland-oregon.jpg`)
const hopskotchArt = new funObject(`Hopskotch Art Gallery`, `https://letshopscotch.com/`, `5 miles`, `https://lh3.googleusercontent.com/p/AF1QipO7ecvc0cKdc73yRHhco5Z28G1-yRgHQ0aV_q8b=s680-w680-h510`, `Hopscotch is an immersive and experiential brand that brings together artists in collaborative environments to create unique, impactful, and distinct shared experiences. We believe art can be a vessel to tell stories and illuminate important messages of the past, present, and future.`, `https://lh3.googleusercontent.com/p/AF1QipOPNzpYFT7-kwV0c6-JC41ohhp2IPqN9lB2w6ic=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMngBep1mt4TNIV84IxVqu-k0UTaMgwJpZF8T_I=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMaJ1lWoiNMUnuAMhV7BLh1qFHDZjpw8pPmHKhe=s680-w680-h510`)
const kingPins = new funObject(`King Pins`, `https://mykingpins.com/portland/`, `5 miles`, `https://lh3.googleusercontent.com/p/AF1QipOOR1Dm7u1uzh8mhdc7n3-eBp168aV1iiRbWE_O=s680-w680-h510`, `Our state-of-the-art electronic scoring system, surround sound entertainment, bumpers and ramps to help kids guarantee a fun time for all ages. With ambient lighting, music videos on high-definition screens and lane-side food and beverage service, you are sure to have a great time!`, `https://lh3.googleusercontent.com/p/AF1QipN2E6vwoqOvP9mbzCQaRFTfKOpzXfCjO0q15Lo=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMlOtZ2MbF80yesQq_GaPIx5IuEOHRPlmn9IlBw=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipPfwr2IoGu-pJvQWtsEzWRcgL1rk_k_YD8-ndW1=s680-w680-h510`)
const oregonZoo = new funObject(`Oregon Zoo`, `https://www.oregonzoo.org/`, `9 miles`, `https://lh3.googleusercontent.com/p/AF1QipPu865QHupDGyRh15Jq9YUEahdmQqNUOXRWf9XW=s680-w680-h510`, `The Oregon Zoo connects communities to the wonder of wildlife to create a better future for all. We are a hub for science, conservation, education and animal well-being delivering the highest quality of care to 165 species and subspecies. `, `https://lh3.googleusercontent.com/p/AF1QipNEtFyOuta6VCT9OrAe4pnTEvb08ikLFwRlwM7z=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipPhQSQbHhkfW_iK2kl-gJ_LYqUtPQkm-ocfDXRP=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipOZUE7VGIUvpkbEjwfv8Mm8rMl0SfiXsd1dvjdU=s680-w680-h510`)
const skyZone = new funObject(`Sky Zone Trampoline Park`, `https://www.skyzone.com/gresham`, `12 miles`, `https://www.sunherald.com/latest-news/gjebvq/picture273737150/alternates/FREE_1140/Sky%20Zone%20at%20Edgewater%20Mall`, `Our parks are full of one-of-a-kind attractions designed to push your limits, allow you to fly higher, laugh harder and have tons of fun. With the widest selection of activities around, Sky Zone is sure to have something for everyone.`, `https://img.grouponcdn.com/deal/Xpnd8iHYppjGyWWooqUFVU5B6aB/Xp-1214x728/v1/t600x362.jpg`, `https://www.skyzone.com/wp-content/uploads/2022/10/orig_2560_1573506290-1481045371-sz_hero_program_SKyMania.jpeg`, `https://www.skyzone.com/wp-content/uploads/2022/11/pqFbdzs3-scaled.jpeg`)
const portlandArt = new funObject(`Portland Art Museum`, `https://portlandartmuseum.org/`, `5 miles`, `https://lh3.googleusercontent.com/p/AF1QipNCrtyiUiM7YDw8avpyncDhqdaqbZHUaZSqx6Af=s680-w680-h510`, `Founded in late 1892, the Portland Art Museum is among the oldest art museums in the United States and the oldest in the Pacific Northwest. The Museum is internationally recognized for its permanent collection and ambitious special exhibitions, drawn from the Museum’s holdings and the world’s finest public and private collections.`, `https://lh3.googleusercontent.com/p/AF1QipPCIxebS2nEmci6xWxNUL84-1yJHP29X9CStfnm=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMX3fiys7jbgsOaaCvcyw8BKJ8XzKbc4EGyPNS_=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipMUDmx7B1N5Upw9M4mzHwZxmHeQDJbWlJllCSD9=s680-w680-h510`)
const oaksAmusement = new funObject(`Oaks Amusement Park`, `https://www.oakspark.com/`, `9 miles`, `https://lh3.googleusercontent.com/p/AF1QipNmFhWHfR6ci9F0gBBDcR8DHyzFOe-Cl4IlrW1T=s680-w680-h510`, `Oaks Park has been "where the fun never ends" since 1905 and is among the oldest continually operating amusement parks in America. "The Oaks" first opened its gates to eager visitors on May 30, 1905, as a way of boosting ridership on the area's emerging interurban transportation system. Arriving via streetcar, visitors to the park were thrilled by exotic animals, nightly fireworks, a bathhouse, death-defying amusement rides, and that latest of inventions, electric lights! Oaks Park is proud to have offered safe, wholesome, family fun to our neighbors for over a century. Today when visitors walk through our gates they are delighted by a uniquely Portland blend of modern thrills and turn-of-the-century charm on a midway that has delighted generations of Northwesterners.`, `https://patch.com/img/cdn20/users/22877259/20220610/034809/styles/patch_image/public/oaks-park-amuseument___10152840384.jpg`, `https://s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2017/01/09113506/bump_OaksPark_RollerskatingRink_07_HenryCromett_4311.jpg`, `https://lh3.googleusercontent.com/p/AF1QipNyqSaoWFYX2dtFlvc3yg6_sYksDXrcOesdX_jQ=s680-w680-h510`)
const soakingPool = new funObject(`McMenamins Kennedy School Soaking Pool`, `https://www.mcmenamins.com/to-do/relax-play/soak-swim`, `4 miles`, `https://lh3.googleusercontent.com/p/AF1QipOMfoMi6VuCxMgBvHGUztmOWwLGYOJ8kDXtRWm3=s680-w680-h510`, `This heated communal soaking pool is located within the McMenamins Kennedy School Hotel, and is available to the public by free online one-hour reservations (and complimentary to hotel guests). Grab a drink from the hotel if you like, and relax in the skin-smoothing water!`, `https://lh3.googleusercontent.com/p/AF1QipMo2CFj7vQ4KgmdGnmktShmE3twIbKQKXQAunyz=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipP5QVvS43PIv4S5fmK9xmBwLlei9E-3tf8KBnTv=s680-w680-h510`, `https://lh3.googleusercontent.com/p/AF1QipNy-41OFW_AgG7v5uB2tAcbTH5I7bDV_rRSlwDO=s680-w680-h510`)

const sauvieIsland = new sceneryObject(`Sauvie Island`, `https://www.travelportland.com/culture/sauvie-island/`, `22 miles`, `https://cdn.shopify.com/s/files/1/1159/3118/files/8X4A0017.jpg?v=1530892332`, `Natural playgrounds don’t come much bigger than Sauvie Island — at 24,000 acres, the Manhattan-size isle is one of the largest river islands in the country and sits at the confluence of the Willamette and Columbia Rivers just 10 miles northwest of downtown Portland. And from one end to the other, families can find an entire day’s worth of adventures; it’s a hot spot for fruits and veggies, as well as a paradise for bird-watchers, beach-goers, bicyclists and kayakers.`, `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2b/c3/a7/sauvie-island-wildlife.jpg?w=1200&h=-1&s=1`, `https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/722YBNIBEFGDPMIZNPHAB7LK2Y.jpg`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_scale,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1571420742/www.travelportland.com/Sauvie-Island-Photo-by-Clayton-Cotterell-for-Travel-Oregon-aspect-ratio-5x3-1/Sauvie-Island-Photo-by-Clayton-Cotterell-for-Travel-Oregon-aspect-ratio-5x3-1.jpg`)
const forestPark = new sceneryObject(`Forest Park`, `https://www.portland.gov/parks/forest-park`, `14 miles`, `https://westcoastwayfarers.com/wp-content/uploads/2022/01/Forest-Park-in-Portland-scaled.jpg`, `Forest Park, at 5,200 acres, provides critical refuge for hundreds of native wildlife and plant species and acts as an important air and water filter. With more than 80 miles of trails, it also provides invaluable access to nature, exercise, and educational opportunities for the region.`, `https://www.koin.com/wp-content/uploads/sites/10/2022/06/GettyImages-470173722.jpg?w=2560&h=1440&crop=1`, `https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1200,w_1600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/0617-forest-park-stone-house_w82t7g.jpg`, `https://lnt.org/wp-content/uploads/2018/10/forest-park.jpg`)
const macleayPark = new sceneryObject(`Macleay Park`, `https://www.alltrails.com/parks/us/oregon/macleay-city-park--2`, `7 miles`, `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/e3/f1/3e/macleay-trail.jpg?w=1200&h=-1&s=1`, `The nearly 140-acre park has deep ravines shaded by large Douglas-fir and western red cedar trees. Macleay Park also contains the lower portion of Balch Creek, which has a small population of native cutthroat trout. Park trails connect to Forest Park and Audubon Society of Portland wildlife sanctuaries.`, `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/28/c0/2d/macleay-park.jpg?w=1200&h=-1&s=1`, `https://hikingproject.com/assets/photos/hike/7010891_medium_1554399469.jpg?cache=1689378504`, `https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTk0NDk0ODMvNThlNjM2ZGQ2NGIyNjdlYjQwOGIwZjMzZjE1NzAzNDQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==`)
const laurelhurstPark = new sceneryObject(`Laurelhurst Park`, `https://www.portland.gov/parks/laurelhurst-park`, `1 mile`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1646255777/www.travelportland.com/mktg-20220301-laurelhurst-park-01/mktg-20220301-laurelhurst-park-01.jpg`, `This 31-acre (12.5 ha) park really does have something for everybody to enjoy. The central lawn is the perfect spot for an afternoon picnic, with public restrooms and drinking fountains located just across a paved pathway looping through the park. Along the pathway, you’ll find a kids’ playground, a scenic duck pond and tennis and basketball courts.`, `https://i.ytimg.com/vi/9a6HHY0K9fo/maxresdefault.jpg`, `https://i.redd.it/ol0qyaewfr041.jpg`, `https://prioritymovingservices.com/wp-content/uploads/2020/02/Laurelhurst-Park-Portland.jpg`)
const columbiaGorge = new sceneryObject(`Columbia River Gorge Waterfalls`, `https://www.ridecatbus.org/columbia-gorge-express/`, `25 miles`, `https://carsonridgecabins.com/wp-content/uploads/2017/05/Multnomah-Falls.jpg`, `Fed by glaciers and swollen by snowmelt and prodigious winter rains, the waterfalls of the Columbia River Gorge National Scenic Area — an 80-mile-long (129 km) swath carved out by ancient floodwaters — plunge from sheer cliffs, hidden slot canyons and rock grottos rimmed by massive trees and moss in a thousand shades of emerald and jade. In all, 90 major cascades flow here, alongside countless other smaller falls.`, `https://www.territorysupply.com/wp-content/uploads/2019/05/waterfall-hikes-columbia-river-gorge.jpg`, `https://www.themandagies.com/wp-content/uploads/2022/06/Horsetail-Falls-Columbia-River-Gorge-Waterfalls-The-Mandagie-6-1500x1001.jpg`, `https://www.fototripper.com/wp-content/uploads/2017/06/columbia-river-gorge-waterfall-gavin-hardcastle-fototripper.jpg`)
const multnomahFalls = new sceneryObject(`Multnomah Falls Express Tour`, `https://www.getyourguide.com/oregon-l951/from-portland-multnomah-falls-tour-by-bus-with-park-permit-t432555/`, `7 miles`, `https://cdn.getyourguide.com/img/tour/550e20338a0de.jpeg/145.jpg`, `Explore the most-visited natural recreation site in the Pacific Northwest on this tour the Multnomah Falls from Portland. Spend an hour of free time where you can capture pictures of the scenic Multnomah Creek Bridge and have time to visit the Multnomah Falls Lodge. Hop aboard a comfortable and climate-controlled bus at the centrally-located Benson Hotel in Portland. Lean back and relax in a plush seat and take in views of the stunning Columbia River Gorge on the way to the falls. Listen to fascinating stories about the area with live narration along the way. `, `https://cdn.getyourguide.com/img/tour/63497c8cbf178.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/63497b398b574.jpeg/145.jpg`, `https://cdn.getyourguide.com/img/tour/63497b39d7449.jpeg/145.jpg`)
const mtTabor = new sceneryObject(`Mt. Tabor`, `https://www.travelportland.com/attractions/mount-tabor-park/`, `1 mile`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1640818795/www.travelportland.com/mktg-fu-20211220-Winter-Wonder-01/mktg-fu-20211220-Winter-Wonder-01.jpg`, `If you want to explore a little piece of nature in the city, then escape to Portland, Oregon's Mount Tabor Park! Walk the trails of the mountain through lush evergreens, check out the unique cinder cone of Mt. Tabor, or let the kids play in the beautiful wooded park.`, `https://image.oregonlive.com/home/olive-media/pgfull/img/oregonian/photo/2016/04/01/-196832b117cca1cc.jpg`, `https://www.tripsavvy.com/thmb/vrrAD2rEJy38ViUI1YfEaHABAPA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PDX_MtTaborPark5-f116a636649440d9904eff36f477d338.jpg`, `https://lh3.googleusercontent.com/W9FaDG3WUHb40uiSH8zmBp0HrmSC5BMApmAycbngnknGQKps1XZzNmgqaL2x0l-mr56uNpqm7qFcX-Tmi3FiKzwJ7OeKeJZRECleQZ0FlqllDyo330sxCksIG1Pn7TpPWwNFSaDX`)
const roseGarden = new sceneryObject(`International Rose Garden`, `https://www.portlandpf.org/rose-test-garden`, `5 miles`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1571420733/www.travelportland.com/AA_Parks_RoseGarden_TravelPortland-1/AA_Parks_RoseGarden_TravelPortland-1.jpg`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1571420733/www.travelportland.com/AA_Parks_RoseGarden_TravelPortland-1/AA_Parks_RoseGarden_TravelPortland-1.jpg`, `https://media.cntraveler.com/photos/5c019bf28acb3b6fd9b86b9f/16:9/w_2560,c_limit/CW0C97.jpg`, `https://www.portland.gov/sites/default/files/styles/facebook/public/2020-04/international-rose-test-garden.jpg?itok=hqaAtNaW`, `https://thumb.spokesman.com/xHwAixpUDOyfX6yqstMa8bvcNo4=/2500x1405/smart/media.spokesman.com/photos/2014/06/08/tra_08portland3.jpg`)
const hoytArboretum = new sceneryObject(`Hoyt Arboretum`, `https://www.hoytarboretum.org/`, `9 miles`, `https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/293116604_472523874873779_4757786087764200565_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=pvueBsHaEGAAX_UQJ0W&_nc_ht=scontent-bos5-1.xx&oh=00_AfD6exGR2FDh_B8-TDOIUlb0jKLEiqVDsqXMrmrY4NeCrA&oe=64C1B3DD`, `Founded in 1928 to conserve endangered species and educate the community, Hoyt Arboretum encompasses 190 ridge-top acres and 12 miles of hiking trails just minutes from downtown Portland. Home to 2,300 species of trees and shrubs from six continents, Hoyt Arboretum is a place of beauty and serenity no matter the season.`, `https://i0.wp.com/ourbiglittleadventures.com/wp-content/uploads/2020/02/Hoyt-Arboretum-Cover.jpg?resize=1160%2C608&ssl=1`, `https://www.onlyinyourstate.com/wp-content/uploads/2019/09/46650546_2107323852653013_6741016102387580928_o.jpg`, `https://dionnekrausphotography.com/wp-content/uploads/2020/08/Redwood-Deck-Elopement-Wedding-Hoyt-Arboretum-1948x1300.jpg`)
const washingtonPark = new sceneryObject(`Washington Park`, `https://explorewashingtonpark.org/`, `9 miles`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_576,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_576/v1605805648/www.travelportland.com/mktg-20192506-Rose-Garden-0015/mktg-20192506-Rose-Garden-0015.jpeg`, `Portland’s signature westside park isn’t just loaded with big trees and picnic tables. Located a mere two miles west of downtown and accessible by MAX light rail, 410-acre Washington Park offers up a zoo, two museums, a spectacular rose garden, one of the most authentic Japanese gardens in the world, all bordered by Forest Park — at 5,100 acres, one of the country’s premier urban wildernesses. `, `https://travel.usnews.com/images/JPLDesignsaerial-view-nature.jpg`, `https://a.travel-assets.com/findyours-php/viewfinder/images/res70/347000/347811-Washington-Park-Portland.jpg`, `https://topbrunchspots.com/wp-content/uploads/2022/05/AF1QipOmcI0Pb5thgA5QfoTcGUCiP22H2LPEFDkhvys7w1600-h1000-k-no.jpeg`)
const eagleCreek = new sceneryObject(`Eagle Creek`, `https://www.oregon.com/recreation/hike-eagle-creek`, `24 miles`, `https://cdn.backpacker.com/wp-content/uploads/2022/03/GettyImages-1144254865-scaled-e1648682179412.jpg`, `The Eagle Creek Trail is one of Oregon's most spectacular paths, passing half a dozen major waterfalls. The trail is also an engineering marvel. To maintain an easy grade through this rugged canyon, the builders blasted ledges out of sheer cliffs, bridged a colossal gorge and even chipped a tunnel through solid rock behind 120-foot Tunnel Falls.`, `https://thegorgeguide.com/wp-content/uploads/2021/08/USA-Oregon-Punchbowl-Falls-Tams-2.jpg`, `https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/HXVFYPLIMBDYNB5NUT3TW2LVVQ.JPGG`, `https://i.ytimg.com/vi/T5DzGrDp5Xw/maxresdefault.jpg`)
const japaneseGarden = new sceneryObject(`Portland Japanese Garden`, `https://japanesegarden.org/`, `8 miles`, `https://www.travelportland.com/wp-content/uploads/2021/05/mktg-20182804-japanese-garden-0043-scaled.jpg`, `The Garden sits nestled in the hills of Portland, Oregon’s iconic Washington Park, overlooking the city and providing a tranquil, urban oasis for locals and travelers alike. Designed in 1963, it encompasses 12 acres with eight separate garden styles, and includes an authentic Japanese Tea House, meandering streams, intimate walkways, and a spectacular view of Mt. Hood. This is a place to discard worldly thoughts and concerns and see oneself as a small but integral part of the universe.`, `https://pdxmovers.com/wp-content/uploads/2019/10/shutterstock_227120155.jpg`, `https://japanesegarden.org/wp-content/uploads/2020/12/Moon-Bridge-edit-web.jpg`, `https://lh3.googleusercontent.com/p/AF1QipPt0YAAihY9m7HIx_CW3KFFGDwbUkktjMBl1xiv=s680-w680-h510`)
const lanSuGarden = new sceneryObject(`Lan Su Chinese Garden`, `https://lansugarden.org/`, `5 miles`, `https://res.cloudinary.com/dragonspell/images/w_1440,h_864,c_fill,dpr_auto,fl_progressive:steep,f_auto/w_1440,h_864/v1640195255/www.travelportland.com/TP_Winter_Flow2.2_64664067cc/TP_Winter_Flow2.2_64664067cc.jpg`, `Opening in September 2000, Lan Su Chinese Garden is one of Portland's greatest treasures and most interesting sites to see while visiting Portland. A result of a collaboration between the cities of Portland and Suzhou, our sister city in China's Jiangsu province that's famous for its beautiful Ming dynasty gardens, Lan Su was built by Chinese artisans from Suzhou and is one the most authentic Chinese gardens outside of China.`, `https://www.oregonlive.com/resizer/2SdEtGu4KGsCxnYg_Y33tTmF66s=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NFUYHDTYVVFSZDL4RXOR3JRMUY.jpg`, `https://upload.wikimedia.org/wikipedia/commons/9/94/Lan_Su_Chinese_Garden_-_Portland%2C_Oregon_-_DSC01435.jpg`, `https://journeyaroundtheglobe.files.wordpress.com/2014/10/img_1969-elem.jpg`)
const crystalSprings = new sceneryObject(`Crystal Springs Rhododendron Garden`, `https://www.crystalspringsgardenpdx.org/`, `5 miles`, `https://portlandlivingonthecheap.com/lotc-cms/wp-content/uploads/2022/05/crystal-1.jpg`, `A unique 9.5-acre garden, Crystal Springs contains an outstanding collection of rare species and hybrid rhododendrons, azaleas, and other lesser-known ericaceous plants, as well as many companion plants and unusual trees.`, `https://images.squarespace-cdn.com/content/v1/5d1ecfd8522a2b0001f05d23/5f15c88e-ddea-4fd1-88b3-81b32e6ee5d7/IMG_4674.jpg?format=1500w`, `https://www.travelportland.com/wp-content/uploads/2021/10/mktg-20191606-Crystal-Springs-0004-scaled.jpg`, `https://images.squarespace-cdn.com/content/v1/52f3f666e4b0c5c8957ccc9f/1620838173191-ZYBKEWE76UWLVYGZMIVU/crystal-springs-rhododendron-elopement-portland-008.JPG`)
const powellButte = new sceneryObject(`Powell Butte Nature Park`, `https://www.portland.gov/parks/powell-butte-nature-park`, `9 miles`, `https://www.hikeoregon.net/uploads/2/9/0/0/29006543/view-of-mt-hood-from-powell-butte_orig.jpg`, `Powell Butte, an extinct cinder cone volcano, rises near the headwaters of Johnson Creek - an urban creek with remnant populations of native salmon and steelhead. The park is comprised of 611 acres of meadowland and forest.`, `https://media.oregonlive.com/oregonian/photo/2016/04/20/-cc41007328754658.jpg`, `https://media.oregonlive.com/oregonian/photo/2016/04/20/-474c09e74f339bf6.jpg`, `https://upload.wikimedia.org/wikipedia/commons/7/7b/Powell_Butte.jpg`)