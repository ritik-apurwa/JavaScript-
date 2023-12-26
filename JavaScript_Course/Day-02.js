// function One() {
//   let username = "Ritik"
// function Subone(){
//   let website = "Ritik.com"
//   console.log(website)
//   Subone()
// } console.log(username)

// }
// One();
// if (true) {
//   let username = "Ritik";
//   if (username === "Ritik") {
//     let website = "R itik.com";
//     console.log(website + username);
//   }
//   // console.log(website);
// }
// console.log(username);
// function addone  (num) {
//   return num + 1;
// }
// addone(5)
// const addTwo = function(num){
//   return num + 2;
// }
// addTwo(5)
// if we write function and we call it before the function is written then it will give result and if we hold a function in a constant then we call it before const it will give error

// let user = {
//   username: "Ritik",
//   price: 999,

// welcomemessage: function() {
//   console.log(`${this.username}, welcome to site`)
// }
// }
// user.welcomemessage()
// user.username = "manish"
// user.welcomemessage()

// console.log(this);
// // in browser all this obejct is window object.

// function chai(){
//   let username = "Ritik"
//   console.log(this);
// }
// chai()

// let chai = function(){
//   let username = "Ritik"
//   console.log(this.username);
// } wrong output
// }
// // explicit return
// let addTwo = (num1, num2) => {
//   return num1 + num2
// }
// console.log(addTwo(5, 6))

// // Implicit return can give us result without curly braces
// let addThree  = (num1, num2) => num1 + num2

// console.log(addTwo(1333, 313131316))

// let addFour = (num1 , num2) => ({userName:"Ritik"})
// console.log(addFour)

// to return an object in implicit return we have to use curly braces don't get result
// to remove global scope pollution we use iife and iife mean immediately invoked function expression and we use it by adding () at the end of the function
// let iifeExample = (function(){
//   let username = "Ritik"
//   return {
//     getUsername: function(){
//       console.log(`DB Connected `)
//     }
//   }
// })();
// console.log(iifeExample)
// this is an example of iife
// js exectue code line by line and it is called as single threaded language

// let balance = 1000
// if (balance > 500 ) console.log("test");

// let balance = 6000;
// if (balance < 5000) {
//   console.log("Balance is low");
// } else if (balance === 5000) {
//   console.log("Balance is sufficient");
// } else {
//   console.log("Balance unlimited");
// }
// let score = 190
// if(score < 230) {
//   console.log("Target is to easy ")
// } else if (score === 230) {
//   console.log("Target is perfect")
// }
// else {
//   console.log("Target is to hard")
// }

// in these we can give condition in if else statement and we can give multiple condition in if else statement.

// let hasEmail = true;
// let hasPassword = true;

// if (!hasEmail) {
//   console.log("Please sign up");
// } else if (hasEmail && !hasPassword) {
//   console.log("Please enter your password");
// } else {
//   console.log("Welcome back!");
// }

// switch case statement usally we use switch case statement when we have to check multiple condition in one statement.

let day = "Monday";
let day2 = "Tuesday";
let day3 = "Wednesday";
let day4 = "Thursday";
let day5 = "Friday";
let day6 = "Saturday";
let day7 = "Sunday";

// switch (day1) {
//   case "Monday":
//     console.log(" This is Monday of 2023");
//     break;
//   case "Tuesday":
//     console.log("This is Tuesday of 2023");
//     break;
//   case "Wednesday":
//     console.log("This is Wednesday of 2023");
//     break;
//   case "Thursday":
//     console.log("This is Thursday of 2023");
//     break;
//   case "Friday":
//     console.log("This is Friday of 2023");
//     break;
//   case "Saturday":
//     console.log("This is Saturday of 2023");
//     break;
//   case "Sunday":
//     console.log("This is Sunday of 2023");
//     break;
//   default:

// }

// change case and get result, for example if we write monday then it will give result of case monday.

// after break statement it will  execute the after code after break statement till default break statement.
