// Example - 01 

const fullNumber = '212121681992';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*')
console.log(maskedNumber) ; 


const aNumber = "9876543210"
console.log(aNumber.length-2)



// Example - 02 
let companies2 = "Facebook Google Microsoft Apple IBM Oracle Amazon"
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split())  
console.log(companies.split("")) 
console.log(companies.split(" "))
console.log(companies2.split())
console.log(companies2.split(" "))
console.log(companies2.split(","))