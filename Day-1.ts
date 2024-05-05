//Day #1 

//Question #1

//Question Description: We simply had to install the compulsory apps/packages. ie. Git, Node, Vs, Ts.

// Question # 2

// Personal Message: 

// Question Description: Store a person's name in a variable, and print a message to that person.

// Example: Hello Aqsa Would you like to practice some Typescript Today.?

//Code Solution;

let personName = "Aqsaa";

let lastName = "Qaazi";

let fullName = personName + " " + lastName;

console.log(fullName);

let Greet = "Hello";

console.log(Greet + " " + fullName);

let Message = "Would you like to practice some Typescript Now?";

// Empty Quotations In Console declares Spaces.

console.log(Greet + " " + fullName + " " + Message);

console.log(Greet + " " + personName + " " + Message);

// Q2 Completed with some minor changes to help my fingertips understand the TS syntax. & is a bit personalized.

//Question #3

// LowerCase, UpperCase and TitleCase:

// Question Description : Store a person's name in a variable, then print it in lowercase, uppercase and titlecase.

//Code Solution;

console.log(fullName.toLowerCase());

console.log(fullName.toUpperCase());

//console.log(personName.toTitleCase());

//The above Commented Code line didn't Work, i had to scratch the HintCode Given :)

console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());