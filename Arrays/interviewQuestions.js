// Create a function that reverses a string
// "Hi, my name is Andres"

// Pseudocode
// split the string into an array
// use .reverse to reverse the array
// then join the array to form a string
// return the reversed string

const reverseString = str => str.split('').reverse().join(',')

const reverseString2 = str => [...str].reverse().join('')


const string = 'Hi my name is Andres'


console.log(reverseString2(string))