const accountId = 245
let accountName = "Nikhil"
var accountEmail = "email@email.com"
accountCity = "Jaipur"
let accountState;

// accountId = 2  constant can't be reassigned
accountName = "Funsuk Wangdu"
accountEmail = "addweb.com"
accountCity = "Pune"

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/


// console.log(accountId);
console.table([accountId, accountName, accountEmail , accountCity, accountState])
