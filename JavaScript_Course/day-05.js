/*
javascript is a scripting language that is used to create dynamic and interactive web pages, and it is a client-side scripting language, which means that it is used to create and control the behavior of web pages on a user's computer. 

#1 adding javascript to a web page
javascript can be added to web pages in three different ways: 
a. inline javascript: this is added to the html code directly using the script tag.

b. internal javascript: The internal script can be written in the head or the body, but it is preferred to put it on the body of the HTML document.
example: 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Click Me</button>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </body>
</html>

c. external javascript: Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body. First, we should create an external JavaScript file with .js extension. All files ending with .js extension are JavaScript files. Create a file named introduction.js inside your project directory and write the following code and link this .js file at the bottom of the body.

example: 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>


#2 Introduction to Data Types 

a. Primitive Data Types: Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.
(i). String: A string is a sequence of characters enclosed in single or double quotes.
    example: "Hello World"
(ii). Number: A number is a numeric value.
        example: 
        Integers: Integer (negative, zero and positive) numbers Example: ... -3, -2, -1, 0, 1, 2, 3 ...
        Float-point numbers: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...
(iii). Boolean: A boolean is a logical value that can be either true or false.

(iv). Undefined: An undefined value is a value that has not been assigned to a variable.
(v). Null: A null value is a value that has been explicitly set to null.
(vi). Symbol: A symbol is a unique and immutable value that is used to identify an object.


b. Non-Primitive Data Types:

(i). Object: An object is a collection of properties and methods.
(ii). Array: An array is a collection of values.
(iii). Function: A function is a block of code that performs a specific task.


#3 Variables: variables are containers of data. variables are used to store data in a memory location. when a variable is declared, a memory is reserved. when a variable is assigned a value, the memory is filled with that value.
Notes: 
(i) for a variable that changes at a diffrent time, we use "let" keyword. 
(ii) if the data of a variable is not going to change, we use "const" keyword.
(iii) we will not use var in this challange and we don't recommend you to use. it is error prone way of declaring variable it has a lot of issues. 
(iv) a valid javascript variable name must follow these rules:
 ** a javascript variable should not begin with a number.
 ** a javascript variable should not contain any special characters except $ and _.
 ** a javascript variable should not contain any spaces.
 ** a javascript variable name follow a camelCase convention. 

 example: firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020

example of declared variables: 
Declaring different variables of different data types
let firstName = 'Asabeneh',first name of a person
let lastName = 'Yetayeh' ,last name of a person
let country = 'Finland', country
let city = 'Helsinki', capital city
let age = 100, age in years
let isMarried = true


 ******************************************** Day 2 ********************************************

 #3. Data Types in JavaScript

 Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created. Let us see by creating an array. An array is a list of data values in a square bracket. Arrays can contain the same or different data types. Array values are referenced by their index. In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.






let nums = [ 1, 2,3 ]
let numbers = [ 1, 2, 3]
console.log(nums === numbers)

// strings are not modifiable or in other words imutable primitive data types are comapred by their value above we compare diffrent data values of two variables but they are not equal because they are not same.

// non primitive data types are modifiable or mutable. we can modify the value of non-primitive data types after it gets created. 

let userOne = {
  name: "ritik", 
  role: "teaching", 
  country: "India"
}
let userTwo = {
  name: "ritik",
  role: "teaching",
  country: "India"
}
console.log(userOne === userTwo)

// rule of thumb, we do not compare non-primitive data types. do not compare arrays, functions, or objects. Non-primitive values are reffered to as refrence types, because they are being compared by refrence instead of value. two objects are only equal if they are refferring to the same underlying object.

let nums = [ 1, 2, 3]
let numbers = nums
console.log(nums === numbers)

/*
#5 Math Object: In JavaScript the Math Object provides a lots of methods to work with numbers.
(i). Math.PI: returns the value of PI.
(ii). Math.abs: returns the absolute value of a number like if we have -5 it will return 5 , if we have 5 it will return 5 , if we have 2.3 it will return 2.3. 
(iii). Math.acos: returns the arc cosine of a number , arc cosine mean the angle between the positive x-axis and the line joining the origin to the point (x, y) and 
example:
Math.acos(0) returns 1.5707963267948966
Math.acos(-1) returns 3.141592653589793
Math.acos(1) returns 0
Math.acos(0.8) returns 1.0471975511965979
(iv) Math.acosh: returns the hyperbolic arc cosine of a number and hyperbolic arc cosine is the inverse of the hyperbolic sine function.
example:
Math.acosh(1) returns 0
Math.acosh(2) returns 1.3169578969248166
Math.acosh(3) returns 1.762747174039059
(v) Math.asin: returns the arc sine of a number arc sine is the inverse of the sine function.
example:
Math.asin(0) returns 0
Math.asin(0.5) returns 0.5235987755982988
Math.asin(1) returns 1.5707963267948966
(vi) Math.round: returns the value of a number rounded to the nearest integer.
example:
Math.round(4.6) returns 5
Math.round(4.4) returns 4
(vii) Math.ceil: returns the value of a number rounded up to its nearest integer.
example:
Math.ceil(4.6) returns 5
Math.ceil(4.4) returns 5
(viii) Math.floor: returns the value of a number rounded down to its nearest integer.
example:
Math.floor(4.6) returns 4
Math.floor(4.4) returns 4
(ix) Math.sign: returns the sign of a number. If the number is positive, it returns 1.
example:
Math.sign(4.6) returns 1
Math.sign(-4.6) returns -1
Math.sign(0) returns 0
(x) Math.pow: returns the value of x to the power of y.
example:
Math.pow(8, 2) returns 64
Math.pow(2, 3) returns 8
Math.pow(16, 5) returns 1048576
(xi) Math.sqrt: returns the square root of a number.
example:
Math.sqrt(64) returns 8
Math.sqrt(81) returns 9
Math.sqrt(100) returns 10
(xii) Math.cbrt: returns the cube root of a number.
example:
Math.cbrt(64) returns 4
Math.cbrt(81) returns 3
Math.cbrt(100) returns 10
(xiii) Math.max: returns the largest of zero or more numbers.  
example:
Math.max(1, 2, 3) returns 3
Math.max(1, 2, 3, 4, 5) returns 5  
(xiv) Math.min: returns the smallest of zero or more numbers.
example:
Math.min(1, 2, 3) returns 1
Math.min( 3, 4, 5) returns 3
(xv) Math.random: returns a random number between 0 (inclusive), and 1 (exclusive).
example:
Math.random() returns 0.323232324242
(xvi) Math.trunc: returns the integer part of a number by eliminating any fractional digits.
example:
Math.trunc(4.6) returns 4
Math.trunc(4.4) returns 4
(xvii) Math.log: returns the natural logarithm of a number, natural logorithm mean the logarithm of a number to the base e and e is the base of natural logarithm which is 2.718281828459045.
example:
Math.log(1) returns 0
Math.log(2) returns 0.6931471805599453
Math.log(3) returns 1.0986122886681098
(xviii) Math.log2: returns the base 2 logarithm of a number.
example:
Math.log2(1) returns 0
Math.log2(2) returns 1
Math.log2(3) returns 1.584962500721156
(xix) Math.log10: returns the base 10 logarithm of a number.
example:
Math.log10(1) returns 0
Math.log10(2) returns 0.3010299956639812
Math.log10(3) returns 1.0986122886681098
Math.log10(4) returns 1.3862943611198906
Math.log10(10) return 1
*/

/*   #6 Strings:Strings are texts, which are under single , double, back-tick quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote. Let's see some examples of strings:

  let space = "  "
  let firstname = "Asabeneh"
  let lastname = "Yetayeh"
  let country = "Finland"
  let city = "Helsinki"
  let language = "JavaScript"
  let job = "teacher"
  let quote = "The saying 'seeing is believing' is not always correct."
  let quotWithBacktick = `The saying 'seeing is believing' is not always correct.`

let fullDetails = space + firstname + space + lastname + space + country + job + quote + quotWithBacktick

console.log(fullDetails)



// string concatenation
let fullName = firstname + " " + lastname
let personInfoOne = fullName + " lives in " + city + ", " + country + "."
\n: new line 
\t: Tab means 8 spaces
\\: back slash 
\': single quote
\": double quote
\`: back tick




// in javascrip and other programming languages, follwed by some characters is an escape characters is an escape sequence.

console.log(" I hope everyone is enjoying the 30 Days of Javascript challenge . \n Do you ? \n \t I am enjoying it \n \t \t I am enjoying it " )





console.log('Days\tTopics\tExercises')
console.log('Day 1\t4\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t\t\t\t 5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')



#7 - template literals (Temlate strings)
to create a template strings, we use two back-tics. We can inject data as expressions inside a template string to inject data, we enclose the expression with a curly bracket ({}) preceded by a $sign. See the syntax below 

`string literal text`
`string literal text ${expression}`





example: 1
let a = 232242424 
let b = 332322323
console.log(`the sum of ${a} and ${b} is ${a+b}`)

example: 2
let firstName = "Asabeneh"
let lastName = "Yetayeh"
let country = "Finland"







let firstName = "Asabeneh"
let lastName = "Yetayeh"
let country = "Finland"

let personInfo = `${firstName} ${lastName} lives in ${country}`
console.log(personInfo)

// using a string template or string interpolation method, we can add expressions, which coulbe a value, or some operations (comparison, arithmetic operations, ternary operation)


*/

/*
#6 String Methods 
Everything in javascrip is an object, a string is a primitive data type that means we can not modify it once it is created. the string object has many string methods. There are different string methods for different purposes.

a. lenght: it returns the number of characters in a string.


*/

let javaScript = "JavaScript";







// 

// let quote = "Believe you can and you're halfway there."

// console.log(quote.search(/you/gi)) // this will return on which index the word "you" is present.

// let string = " i love javascript. if you do not lvoe javascript what else can you love."

// console.log(string.match("love"))

// let pattern = /love/gi 
// console.log(string.match(pattern))
// let us exract numbers from text using a regular expression. this is not the regular expression section, do not panic! we will cover it in the next section.

// let txt = "In 2019, I ran 30 Kms. Now, in 2020 I ran 30 Kms in free time"
// let regEx = /\d+/
// console.log(txt.match(regEx))
// console.log(txt.match(regEx))


// ********************** Changing Data Types **********************

/*


Casting is the process of converting one data type to another. we use parseInt(), parseFloat(), 
Number(), + sing, str() when we do arithmetic operations string numbers should be first converted to integer or float if not it retruns an error.

** string to integer **
let num1 = "9"
let numInt= parseInt(num1
)
let num = '10'
let numInt = +num

console.log(numInt) // 10
console.log(typeof numInt) // number
console.log(typeof num) // string

let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
console.log(typeof numFloat) // number
console.log(typeof num) // string

let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81
console.log(typeof numFloat) // number
console.log(typeof num) // string


let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
console.log(typeof numInt) // number
console.log(typeof num) // string


let challenge = " 30 days of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3,21))
console.log(challenge.substring(3, 22))
console.log(challenge.includes("Script"))




let naam = " radha_krishna"
console.log(naam.lastIndexOf("a"))
console.log(naam.indexOf("a"))


let cv = " You cannot end                 a sentance         with because because because is a conjuction"
console.log(cv.indexOf("because"))
console.log(cv.lastIndexOf("because"))
console.log(cv.search("because"))

*/

// ********************** Booleans **********************




// ********************** Undefined ***********************

/*
undefined is a data type that is primitive data type. it means it is not assigned any value.

let firstName;
console.log(firstName) // undefined

*/

// ********************** Null ***********************
/*
null is a data type that is primitive data type. it means it is assigned a value but it is empty.
*/

// ************************** Operators *************************

/*
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Increment Operators
6. Decrement Operators
7. Ternary Operators 
8. String Operators 
9. Operator Precedence

#1 Arithmetic Operators
  ** Arithmetic operators are methametical operators 
  * Addition (+): a + b 
  * Subtraction(-): a - b
  * Multiplication(*): a * b
  * Division(/): a / b
  * Modulus(%): a % b
  * Exponentiation(**): a ** b

  #2 Assignment Operators 
  ** An equal sign in javascript is an assignment operators. It used to assign a variable. 

  #3  Comparison Operators 
  **  In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to another value.
  * Greater than (>): a > b
  * Less than (<): a < b
  * Greater than or equal to (>=): a >= b
  * Less than or equal to (<=): a <= b
  * Equal to (==): a == b
  * Not equal to (!=): a != b
  * Strict equal to (===): a === b
  * Strict not equal to (!==): a !== b
  * Inequality (!=): a != b
  * Strict inequality (!==): a !== b

  ** if a value is not true with == it will not be equal with ===. 
  ** Using === is a safer than using ==. 


  #4 Logical Operators

  ** Logical operators are used to determine the logic between variables or values
  * Amperand (&&): returns true if both statements are true
  * Bar or Pipe  (||): returns true if one of the statements is true
  * Exclamation mark or Negation (!): returns false if the result is true

  #5 Increment Operators
  ** in javascript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. 

  a. Pre-Increment 

  let count = 0;
  console.log(++count) // return 1 
  console.log(count) // return 1

  b. Post-Increment
  let count = 0;
  console.log(count++) // return 0 
  console.log(count) // return 1


  #6 Decrement Operators
  ** in javascript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement.

  a. Pre-Decrement
  let count = 0;
  console.log(--count) // return -1 
  console.log(count) // return -1

  b. Post-Decrement
  let count = 0;
  console.log(count--) // return 0 
  console.log(count) // return -1


  #7 Ternary Operators
  ** Ternary operators are used to assign a value to a variable based on some condition.

  let isRaining = true;

  isRaining 
  ? console.log("You need a raincoat.")
  : console.log("No need for a raincoat.");

  is Raining = false 
  isRaining 
  ? console.log("You need a raincoat.")
  : console.log("No need for a raincoat.");


  let number = 5
  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
  number = -5

  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
  5 is a positive number
  -5 is a negative number


  #8 Operator Precedence
  ** Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

console.log(3 + 4 * 5) // 23
console.log( 4 * 3 ** 2 ) // 36

let a;  // Op1 
let b;  // Op2 
console.log(a = b = 5 )

// Precedence and associativity 
// If OP1 and OP2 have different precedence levels (see the table below), the operator with the higher precedence goes first and associativity does not matter. Observe how multiplication has higher precedence than addition and executed first, even though addition is written first in the code.

expression precedence in javascript
18. expression Grouping  (100 + 50) * 3 // first 100 + 50 is executed and then the result is multiplied by 3
17.  person.name , person["name"], optional chaning x?. y , myfunction(),new Date(" 17 June")
16. new Date()
** Increment Operators 
15. Post Increment ++  , Post Decrement  -- 
** Not Operators 
14. Not (!) , Logical NOT (!!)
** Unary Operators 
14. Prefix Increment ++x , Prefix Decrement --x , Logical NOT !x , Bitwise NOT ~x, Unary Plus +x , Unary Minus -x, Data Type , Evaluate Void , Property Delete 
** Arithmatic Operators 
13. exponetiation ** 
12. Multiplication * , Division / , Modulus %
11. Addition + , Subtraction - , concationation + 
** shift operators 
10. Left Shift << , Right Shift >> , Zero fill Right Shift >>>
** Relational Operators
9. Properties in Object, Instance of object
9. less than < , greater than > , less than or equal to <= , greater than or equal to >=
8. equal , strict equal , not equal , strict not equal
7. Bitwise AND & 
6. Bitwise XOR ^
5. Bitwise OR |
4. Logical AND &&
3. Logical OR || 
3. Nullish Coalescing ??
2. Condition Ternary ? :  "yes" or "no"
2. Spread Operator ...x , simple assignment x = y, colon assignment x:y
, addtion assignment x += y, subtraction assignment x -= y, multiplication assignment x *= y, division assignment x /= y,
exponentiation assignment x **= y, modulus assignment x %= y, left shift assignment x <<= y, right shift assignment, x >>= y, zero fill right shift assignment x >>>= y, bitwise AND assignment x &= y, bitwise XOR assignment x ^= y, bitwise OR assignment x |= y, logical or assignment x \|= y, logical AND assignment x &&= y, logical NOT assignment x \&\= y, logical NULL , arrow x => , yeild pause resume, yield* delegate, 
1. comma 


*/


/* 









  ************************************ Date Object *****************************


/* the Date Object in JavaScript is used to work with dates and times. It provides a number of methods for formatting, manipulating, and comparing dates and times.
** 


let date = new Date();
let myCreatedDate = new Date("2022-01-21");
let myCreatedDateTime = new Date("2022-01-21T09:00:00"); // we can create a date in this way but when we use time we have to use T , T is a time separator and when we have to add millisecond we have to use Z , Z is for milliseconds separator
let myCretedDateWithMilliSeconds = new Date("2022-01-21T09:00:00.000Z");
let myCreatedDateInString = new Date("2022, 0, 21, 12, 00, 00, 000"); // when we create a date in string we can use comma to seperate the date and time and month will start with 0 

// console.log(myCreatedDate);
// console.log(myCreatedDateTime);
// console.log(myCretedDateWithMilliSeconds.toDateString());
// date.setDate(15)  // this is how we can set the date with setDate
// date.setFullYear(2024) // this is how we can set the year with setFullYear
// date.setHours(10) // this is how we can set the hours with setHours
// console.log(date) // we can see our set date 
// console.log(date.toDateString())


// using toLocaleString for more information about date and time in specific way 
let currentDate = new Date().toLocaleString("en-In" ,
{timeZone:"Asia/Kolkata", 
 weekday:"long",
 year:"numeric",
 month:"long",
 day:"numeric",
 hour:"numeric",
 minute:"numeric",
 second:"numeric",
 hour12:true, 
 hourCycle:"h11",
 timeZoneName:"short",

});


// Q - 01 get year , date , month , hours and seconds using date object 

//** 
let date1 = new Date();
console.log(date1.toString()) // to see date in string formal // 2023-01-21T09:00:00.000Z
console.log(date1.toLocaleString()) // to see date in string formal // Tue Jan 21 2023 09:00:00 GMT+0530 (Coordinated Univeersal Time) 
console.log(date1.toLocaleDateString()) // to see date in date string format /// 12/21/2023 
console.log(date1.toUTCString( )) // to see date in UTC string format // Tue, 21 Jan 2023 09:00:00 GMT 
console.log(date1.getTime()) // to see date in milliseconds format // 1675661200000 
console.log(date1.getDate()) // to see Date 
console.log(date1.getDay()) // to see day
console.log(date1.getMonth()) // to see month 
console.log(date1.getMonth(Number) + 1 ) // to see month in number +1 because it comes in 0 index 

//  to check how many seconds, minutes , hours, days , months , years passed till 1970 
let Datt = new Date()
let milliSeconds = Datt.getTime()
let seconds = milliSeconds / 1000
let minutes = seconds / 60
let hours = minutes / 60
let days = hours / 24
let months = days / 30.44 
let year = months / 12

console.log(Math.round(year) )
console.log(Math.round(months))
console.log(Math.round(days))
console.log(Math.round(hours))
console.log(Math.round(minutes))
console.log(Math.round(seconds))
console.log(milliSeconds)


              //             I Calculate my birthyday to till Now             // 

const birthday = new Date('2000-07-08T09:23:10.433Z');
const today = new Date('2023-12-18T10:31:12.322Z');

const timeDiff = today.getTime() - birthday.getTime();

const secondsDiff = Math.floor(timeDiff / 1000);
const minutesDiff = Math.floor(secondsDiff / 60);
const hoursDiff = Math.floor(minutesDiff / 60);
const daysDiff = Math.floor(hoursDiff / 24);
const monthsDiff = today.getMonth() - birthday.getMonth() + (12 * (today.getFullYear() - birthday.getFullYear()));
const yearsDiff = Math.floor(monthsDiff / 12);
const seconds = secondsDiff % 60;
const minutes = minutesDiff % 60;
const hours = hoursDiff % 24;

const diffYears = today.getFullYear() - birthday.getFullYear();
const diffMonths = today.getMonth() - birthday.getMonth();
const diffDays = today.getDate() - birthday.getDate();

if (diffDays < 0) {
    diffMonths--;
    const tempDate = new Date(today);
    tempDate.setMonth(today.getMonth() - 1);
    diffDays = Math.floor((today.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
}

if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
}

console.log("You are " + diffYears + " years, " + diffMonths + " months, and " + diffDays + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds old.");


*/ 






