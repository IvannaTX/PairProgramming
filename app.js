/*EASY (1) Write a JavaScript function that takes in a random array 
and outputs two new arrays of odd numbers and even numbers.*/

function splitOddAndEven(numbers) {
    // filter out the odd numbers
    const odd = numbers.filter((number) => number % 2 === 1);
  
    // filter out the even numbers
    const even = numbers.filter((number) => number % 2 === 0);
  
    // create an object with the odd and even array in it
    const returnObject = {
      odd,
      even,
    };
  
    return returnObject;
  }
  console.log(splitOddAndEven([2, 4, 7, 11, 15, 16]));


/*EASY (2) Create a function that checks an array for prime numbers 
then inserts any primes into a new array.*/

function checkPrime(number) {
  if (number <= 1) {
      return false;
  } else {
      for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              return false;
          }
      }
      return true;
  }
}
const isPrime = checkPrime(9);

let checkForPrimeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

checkForPrimeNum.forEach(function (element) {
  const isPrime = checkPrime(element);
  if (isPrime) {
      console.log(`${element} is a prime number`);
  } else {
      console.log(`${element} is NOT a prime number`);
  }
});


/*MEDIUM (1) Create a Function Called “vowelChecker” that takes in a single argument (x) 
and logs weather or not the input is a vowel.*/

function vowelChecker(x){
  var char = x
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      console.log(`${x} is a vowel`);
    }
    else{
      console.log(`${x} is NOT a vowel`)
    }

}

vowelChecker("b");
vowelChecker("a");


/*MEDIUM (2) Create a function that accepts two strings, then determines whether or not the first string is an 
anagram of the second string by returning a boolean.*/

function anagramCheck (string1, string2) {
  string1 = string1.replace(/\s+/g, '');
  string2 = string2.replace(/\s+/g, '');

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  let stringArray1 = Array.from(string1);
  let stringArray2 = Array.from(string2);

  stringArray1 = stringArray1.sort();
  stringArray2 = stringArray2.sort();

  for (let i = 0; i < stringArray1.length; i++){
      if (stringArray1[i] != stringArray2[i]){
          return false;
      }
  }
  return true;
}

let string1 = "So dark the con of man";
let string2 = "Madonna of the Rocks";


console.log(anagramCheck(string1, string2));

/*MEDIUM (3) Write a function that takes in two numbers and determines the largest positive integer 
that divides the two numbers without a remainder. */

function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));


/*Medium (4) Create a car object with the items: Make, Model, Year, Milage, and Color. 
Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. 
Each of these methods should affect the car’s mileage adding to it each time and console 
logging the old mileage and the new mileage.*/

let car = {
  make: 'Toyota',
  model: 'Camry',
  year: "2021",
  mileage: 237,
  color: 'Black'
}
  //mileage in #s so we can do math with it!
  driveToWork = function(mileage){
    console.console.log(`Your mileage after driving to work is ${mileage}`);
  }
  