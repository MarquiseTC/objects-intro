const wardrobe = { height: 80, 
manufacturer: "Killbrew and Sons",
contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
depth: 38,
width: 50}

console.log(wardrobe)

const empireStateBuilding ={ stories:103,
height: 1453,
address: "350 Fifth Avenue, Manhattan, New York 10118",
squareFeet: 2768591,
constructionDate: 1931,
cost: 40948900,
owner: "Empire State Reality Trust",
eastWestLength: 424,
northSouthLength: 187,
architect: 'Shreve, Lamb & Harmon'}

console.log(empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.stories)

console.log(empireStateBuilding["address"],empireStateBuilding["constructionDate"],
empireStateBuilding["cost"], empireStateBuilding["owner"], empireStateBuilding["architect"])

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"}


console.log(nashvilleSoftwareSchool.instructors)

let halfTime = nashvilleSoftwareSchool.instructors.partTime
let allTheTime = nashvilleSoftwareSchool.instructors.fullTime
console.log(halfTime, allTheTime)


console.log(allTheTime[4], halfTime[0])

