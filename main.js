// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
// console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")
printKata(0, greenEyes1) 

let activeUserKata = users.filter(user => user.isActive === true)
printKata(1, activeUserKata)

let userEmailKata = users.map(user => user.email)
 printKata(2, userEmailKata)

let userCompanyKata = users.some(user => user.company === "OVATION")
printKata(3, userCompanyKata)

let userAgeKata = users.find(user => user.age > 38)
printKata(4, userAgeKata)

let userAgeActiveKata = users.filter(user => user.age > 38).find(user => user.isActive === true)
printKata(5, userAgeActiveKata)

let userBalanceKata = users.filter(user => user.company === "ZENCO").map(user => user.balance )
printKata(6, userBalanceKata)

let userTagKata = users.filter(user => user.tags.includes("fugiat")).map(user =>user.age)
printKata(7, userTagKata)