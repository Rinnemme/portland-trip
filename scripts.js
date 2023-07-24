let foodObjects = []
let barObjects = []
let sceneryObjects = []
let funObjects = []

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

function sceneryObject(name, link, image, description, first, second, third) {
    this.name = name
    this.link = link
    this.image = image
    this.description = description
    this.first = first
    this.second = second
    this.third = third
    sceneryObjects.push(this)
}

function funObject(name, link, image, description, first, second, third) {
    this.name = name
    this.link = link
    this.image = image
    this.description = description
    this.first = first
    this.second = second
    this.third = third
    funObjects.push(this)
}