//Question 1: will the code nelow raise an error

let numbers = [1, 2, 3];
numbers[6] = 5
numbers[4]; // what will thsi line return? 
console.log(numbers)

//Question 2: How can you determine whether a given string ends with an exclamation mark

let str1 = 'Come over here!';
let str2 = "What's up, Doc?";

console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));

//Q3: determine whether the following object of people and their age contains an entry for 'Spot'

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty("Spot"));
