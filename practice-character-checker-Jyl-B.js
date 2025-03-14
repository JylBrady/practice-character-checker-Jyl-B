/*
Create a small program that prompts the user for a word or phrase and then allows 
them to query specific positions within that string.  

Your application should: 
    1. Use readlineSync.question() to prompt a user for input 
    2. Prompt a user for an index number to find the character at that index 
    3. Use bracket notation to access the character 
    4. Print out the character 
*/

const readline = require('readline-sync');

let text = readline.question("Hello! Enter the text you would like to search:");
let index = readline.question("Great.  Now please enter the index number you would like to search:")
let result = text[index]

console.log ("The character at that index is: " + result)