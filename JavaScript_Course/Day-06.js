// ****************************** Conditions ******************************

// conditional statements are used for make  decisions absed on different conditions. By defalut, statemnts 

// 
/* 

conditionals statements are used for make decisions based on different conditions. By default, statements are executed in sequence. 

****************** Conditional implanters ***********************
#1 if 
#2 if else
#3 if else if
#4 switch
#5 ternary operator


 #1  ** IF ** 
 in javascript and other programming languages, the if statement is used to execute a block of code if a specified condition is true. 

 if (condition){
 // this part of ocde runs for truthy conditons 
 }

 #2 ** IF ELSE **
 in javascript and other programming languages, the if else statement is used to execute a block of code if a specified condition is true if condition is true the first bloack will be executed, if not the else conditon will be executed.  

if (condition){ 
// this part of code runs for truthy conditons 
} else {
// this part of code runs 
} 

# 3 ** IF ELSE IF ELSE  **

if (condition) {
// this part of code runs for truthy conditons
} 
else if (condition) { 
// this part of code runs for truthy conditons
}
esle if (condition) {
// this part of code runs for truthy conditons
}
else (condition) {
// this part of code runs for truthy conditons
}
# 4 ** SWITCH **

// swithc is an alternativ for if else if else else. the swithc statement starts with a switch keywoed followed by a parethesis and code block. Inside the code block we will have diferent cases. The switch statement will compare the value of the expression with the value of each case. If there is a match, the code block associated with that case will be executed. 

switch (expression) {
case 1:
// code block
break
case 2:
// code block
break
case 3:
// code block
break
default:

# 5 ** TERNARY OPERATOR **

// The ternary operator is a shorthand for an if else statement. It is used to evaluate a condition and execute a block of code based on the result. 

let isRainning = true;


isRainning ? console.log('It is raining') : console.log('It is not raining ')



*/ 


// let num = 99
// if (num < 100 ){
//   console.log(`this ${num} number is  within range (1 - 100)`)
// };

// let num2 = 44 
// let num3 = 33 

// if ( num2 > num3 ) {
//   console.log(`this ${num2} is greater than ${num3} `)
// }
// else {
//   console.log( `this ${num3} is greater than ${num2}`)
// }



// let weather  = "cloudy" 

// if (weather === "rainy") {
//   console.log("its a sunny day")

// }
// else if ( weather === "cloudy" ){
//   console.log( "its a cloudy day")

// }
// else if ( weather === "hot"){
//   console.log( "its a hot day")
// } 
// else {
//     console.log("its a normal day ")
//   };



// let day = "monday"

// switch (day) {

//   case "monday": 
//     console.log(`what are you saying its ${day.toLocaleUpperCase()} ?  `)
//     break
//   case "tuesday":
//     console.log(`what are you saying its ${day} `)
//     break
//   case "Wednesday":
//     console.log(`what are you saying its ${day} `)
//     break
//   case "Thruday":
//     console.log(`what are you saying its ${day} `)
//     break
//   case "Friday":
//     console.log(`what are you saying its ${day} `)
//     break
//   case "Saturday":
//     console.log(`what are you saying its ${day} `)
//     break
//   case "Sunday":
//     console.log(`what are you saying its ${day} `)
//     break
//   default:
//     console.log( " enter a valid value")

// } 
// Question - 2  write a program to check months days -- 

// let month = "June";

// switch (month) {
//   case "January":
//   case "March":
//   case "May":
//   case "July":
//   case "August":
//   case "October":
//   case "December":
//     console.log(`${month} has 31 days`);
//     break;
//   case "April":
//   case "June":
//   case "September":
//   case "November":
//     console.log(`${month} has 30 days`);
//     break;
//   case "February":
//     console.log(`${month} has 28 days`);
//     break;
//   default:
//     console.log("Enter a valid month");
// }

// let month2 = "July"
// switch (month2) {
//   case "January":
//     console.log(` ${ month2} has 31 days `)
//     break;
//   case "June":

//     console.log(`${month2} has 30 days `)
//     break;
//   default:
//     console.log("please enter a valid month ")
// }
 // ********* create an empty array 
 let arr = ["" , "" , ""]
 console.log(arr)
 let array = []; // an emplty array 
 console.log(array);
 
 
 // Question -3 get a array and find first index , middle index, and last index of the array
 let array2 = [1, 2, 3, 4, 5];
 let firstIndex = array2[0]; // to find first onject we simply create a variable and assign it to our main array index[0] 
 let middleIndex = array2[Math.floor(array2.length / 2)]; // to find middle index we use the math.floor() to get a value in integer and then we divide the length of the array by 2.
 let lastIndex = array2[array2.length - 1]; // to get to last index we use the array.length - 1 
 
 
 // Question - 4
 console.log(firstIndex, middleIndex, lastIndex);
 let mixedData = ["apple", 5, true, {name: "John"}];
 let arrayLength = mixedData.length;
 console.log(arrayLength);
 
 
 let companies = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
 let companieslength = companies.length;
 let firstcompany = companies[0];
 let middlecompany = companies[Math.floor(companies.length / 2)]; 
 let lastcompany = companies.length - 1
 console.log(` companies name: ${companies} \n companies-length: ${companieslength} \n first company: ${firstcompany} \n middle company: ${middlecompany} \n last company: ${lastcompany} `)
 
 
 // Question - 5 Change all companies name to uppercase one by one and all at once 
 
 let companies2 = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
 
 companies2 = companies2.map(company => company.toUpperCase());
 
 console.log(companies);
 
 