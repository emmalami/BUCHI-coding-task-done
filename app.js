//1. calculate the sum of numbers in an array
function sumArray(arr) {
 let total = 0;

 for (i = 0; i < arr.length; i++) {
  total += arr[i];
 }
 return total;
}

// console.log(sumArray([1, 2, 3, 10, 28, 99, 48, 994, 28839]));

// 2. Lenght converter
function converter(ft) {
 const results = {
  meters: ft * 0.3048,
  cm: ft * 30.48,
  inches: ft * 121,
  yard: ft * 0.333,
 };

 return results;
}

console.log(converter(6));

// 3. Print all odd numbers between 1 and 100
function printOdd() {
 for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
   console.log(i);
  }
 }
}

// printOdd();

// 4. Multiplication table
function multiplicationTable(number) {
 for (let i = 1; i <= 121; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
 }
}

// multiplicationTable(13);

// 5. Reverse an array
function reverseArray(array) {
 return array.reverse();
}

// console.log(reverseArray(["Jan", "Feb", "March", "April", "May"]));

// 6. Sort an array of strings in alph. order
function sortStringArray(stringArray) {
 let newArr = [];
 const sorted = stringArray.sort();
 for (let i = 0; i < stringArray.length; i++) {
  newArr.push(stringArray[i].toLowerCase());
 }
 return newArr.sort().reverse();

 // NB: You can combine sort and reverse to changer the order of sorting
}

// console.log(sortStringArray(["jan", "Feb", "march", "April", "May"]));

// 7. Sort an array of NUMBERS in DESC order
function sortNumArray(numArray) {
 function compare(a, b) {
  return a - b;
 }
 const sorted = numArray.sort(compare);
 return sorted;
}

// console.log(sortNumArray([30, 400, 3, 19, 73, 1003, 201, 8]));

// 8. Return a boolean if a number is divisible by 100
function isDivisibleBy100(num) {
 if (num % 100 == 0) {
  return true;
 } else {
  return false;
 }
}

// console.log(isDivisibleBy10(1000));

// 9. Return the number of vowels in a string
function countVowels(string) {
 const vowels = ["a", "e", "u", "i", "o"];
 let numberOfVowels = 0;

 for (let i = 0; i < string.length; i++) {
  if (vowels.includes(string[i].toLowerCase())) {
   numberOfVowels++;
  }
 }
 return numberOfVowels;
}

// console.log(countVowels("Nigeria"));

// 10.
function filterNegatives(array) {
 return array.filter(function (num) {
  return num > 0;
 });
}

console.log(filterNegatives([47, 1, -5, 90, -82, 1, -11]));
