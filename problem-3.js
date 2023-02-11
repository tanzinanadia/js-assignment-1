// Write a JavaScript program that takes an array and removes all duplicate values of a number 
// and return all the unique values in an array of numbers.
// Test: 
// Input array: [8,7,8,1,2,5,1]
// Output array: [8,7,1,2,5]
let arr=[8,7,8,1,2,5,1];
let newArr=[...new Set(arr)];
console.log('unique values:',newArr)