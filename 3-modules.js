//CommonJS , every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

// const secret = "Super Secret"
// const john = "john"
// const peter = "peter" //this piece of code is moved to 4-names.js

// const sayhi = (name)=>{
//     console.log(`Hi ${name}`)
// }  //this piece of code is moved to 5-utils.js

const names = require("./4-names")
//*2 const {john,peter} = require("./4-names")
const sayhi = require('./5-utils')
const data = require('./6-alternativExportFlavor')
require('./7-mind-granad')
// when we import a module we actually invok it.


console.log(data);

sayhi("susan")
sayhi(names.john)
//*2 sayhi(john)
sayhi(names.peter)
//*2 sayhi(peter)

