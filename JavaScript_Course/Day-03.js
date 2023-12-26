// falsy values = false , 0 , -0, BigInt, "" ,0n,  null , Nan , undefined,
// truthy values = true,"0", "false", " " , [] , {}, function(){},

const { log } = require("console");

// <, this is less than, >,
// >, this is greater than,
// <=, this is less than or equal to,
//   >=, this is greater than or equal to,
//   ==, this is equal to,
//   ===, this is equal to and type,
//   !=, this is not equal to,
//   !==, this is not equal to and type,
//   &&, this is and,
//   ||, this is or, !,
//   this is not, ?:,
//   this is a terniary operator

// && this is a logical operator
// || this is a or operator
// ! this is a not operator
// ?? this is a nullish coalescing operator (Important)
// terniary operator = ? : // condition ? true : false

// let val1 = 5 ?? 10 ;
// let val2 = null ?? 10 ;
// let val3 = undefined ?? 10 ;
// let val4 = null ?? 20 ?? 25

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);

// Terniary Operators
// let IceTeaPrice = 100
// IceTeaPrice <= 80 ? console.log("I will buy it") : console.log("I will not buy it")

// let userEmail = "ritikapurwa@gmail.com";
// let userPassword = "ritikapurwa";

// if (userEmail) {
// }

// ***************************** Loops *****************************

// for loop
// in for loop firtsly we have to declare a variable and then we have to give a condition and then we have to increment the variable.

// for (let i = 2; i <= 10; i++) {
//   const element = i;
//   if (element ==5 ){
//     console.log("5 is best number")
//   }
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`1 x ${i} = ${1 * i}`);
// }

// for (let i = 1; i <= 10; i++){
//   console.log(`" DDDDDDD walal loop value:${i}"`);
//  for (let j = 5; j <=10; j++){
//    console.log(`"SSSSSSS walal loop value:${j}"`)
//  }
// }

// for ( let a = 1; a <= 10; a++){
// for(let b = 1; b <= 10; b++){
//   console.log(`${a} x  ${b} = ${a * b}`);
// }
// }

// break and continue to stop the loop

// for (let i = 1; i <= 20; i++) {
//   console.log(`value of i is ${i}`);
//   if (i == 5) {
//     console.log(`Detected 5 `)

//   }
// }

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected 5 `)
//     continue
//   }
//   console.log(`value of i is ${i}`);
// }

// **************************** While or Do While loop *****************************

// let index = 2;

// while (index <= 20) {
//   console.log(`value of index is ${index}`);
//   index = index + 2;
// }

// let myArray = [ "flash", "batman", "superman", "wonder woman", "green lantern", "aquaman"]
// let arr = 0
// while (arr < myArray.length){
//   console.log(`These are our Heroes  ${myArray[arr]}`)
//   arr = arr + 1
// }

// let index = 21
// do {
//   console.log(`value of index is ${index}`);
//   index = index + 2;
// } while (index <= 20)

// const arr =  [ 1 ,2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// for ( const num of arr ) {
//   console.log(num);
// }

// const greeting = "Ritik Apurwa"
// for (const greet  of greeting) {
//   console.log(`each word of my name is ${greeting}`)
// }
// *********************** Map **********************
// const map = new Map()
// map.set('IN', "India")
// map.set("USA", "United States of America")
// map.set("CH", "China")
// map.set("JP", "Japan")
// console.log(Map);

// for in loop for array

// let languages = {
//   js: "javascript",
//   py: "python",
//   cpp: "c++",
//   rb: "ruby",
//   java: "java",
//   swift: "swift by Apple",
// };

// for (const key in languages) {

//   console.log(`${key} is shortcut value for ${(languages[key])}`);
// }

// const programmings = ["js", "rb" , "py" , "cpp" , "java" , "swift"]
//   for (const key in programmings) {
//     console.log(`${key} i am learning ${(programmings[key])}`);
//   }
// higher order function
// callback function don't have Name
// const coding = ["apple", "banana","fruit",  "orange"];

// coding.forEach( function  (item) {
//   console.log(item);
// } );
// arrow function

// coding.forEach((lgns) => {
//   console.log(lgns)
// })

// using PrintMe
// function PrintMe(item){
//   console.log(item);
// }

// coding.forEach(PrintMe)

const myCoding = [
  {
    languague: "js",
    languaFilename: "javascript",
  },
  {
    languague: "py",
    languaFilename: "python",
  },
  {
    languague: "cpp",
    languaFilename: "c++",
  },
  {
    languague: "rb",
    languaFilename: "ruby",
  },
];
// myCoding.forEach( (item) => {
//   console.log(item.languague)
// } )

// let values = myCoding.forEach ( (item) => {
//   console.log(item)
// })

// console.log(values)

// const myNums = [1,2,3,4,5,6,7,8,9,10];

//  const newNums =  myNums.filter( (num) => {
//   return num > 5;

// })

// console.log(newNums)

// const Noms  = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
// Noms.forEach ( () => {
//   if (Noms < 4) {
//     Noms.push(Noms)
//   }
//   console.log(Noms)
// })

// using filter
// const books = [
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genre: "Classic",
//     edition: "2001",
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Classic",
//     edition: "1960",
//   },
//   ,
//   {
//     title: "1984",
//     author: "George Orwell",
//     genre: "Dystopian",
//     edition: "1949",
//   },
//   ,
//   {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     genre: "Romance",
//     edition: "1813",
//   },
//   ,
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     genre: "Classic",
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     genre: "Fantasy",
//     edition: "1937",
//   },
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowling",
//     genre: "Fantasy",
//     edition: "1997",
//   },
//   {
//     title: "The Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     genre: "Fantasy",
//     edition: "1954",
//   },
//   {
//     title: "To the Lighthouse",
//     author: "Virginia Woolf",
//     genre: "Romance",
//     edition: "1927",
//   },
// ];
// const userBooks = books.filter ( (bk) => bk.genre === "Fantasy" )
// console.log(userBooks)

// filter of years
//  userBooks = books.filter ( (bk) => {
//   if (bk.edition > "2000") {
//     console.log(bk)
//   }

// });
// console.log(userBooks)

// multiply,  division , subtraction , addition etc using map.
// do it with for each

// const Noms = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNoms = Noms.map ( (num) => {
//   return num * 2;
// })
// console.log(newNoms)

// ********************** Channing ***********************

// const Noms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNoms = Noms.map((nums) => nums * 10);

// reduce with function
// const Noms = [ 1, 2, 3, 4, 5,6,7,8, 9, 10 ]
// const Total = Noms.reduce ( function (acc, curval) {
//   console.log(`acc: ${acc}, curval: ${curval}`);
//   return acc + curval;

// }, 0)

// console.log(Total)

// reduce with arrow function

// const Noms = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11 ];
// const Total = Noms.reduce ( (acc, curval) => acc + curval, 0)
// console.log(Total)

// ShoppingCart Total functions

// const ShooppingCart = [
//   {
//     itemName: "js book",
//     price: 200,
//   },
//   {
//     itemName: "python book",
//     price: 300,
//   },
//   {
//     itemName: "c++ book",
//     price: 400,
//   },
//   {
//     itemName: "ruby book",
//     price: 500,
//   },
//   {
//     itemName: "java book",
//     price: 600,
//   },
// ];

// ShoppingCardTotal = ShooppingCart.reduce((acc,item) => acc + item.price, 0)
// console.log(ShoppingCardTotal)
