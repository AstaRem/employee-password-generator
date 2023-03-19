// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let arr = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters]
// console.log(arr.length);

// Function to prompt user for password options
let answerLowerC;
let answerUpperC;
let answerNum;
let answerSpecialChar;
let answers = [];
let passwordString = "";

let answerLength = prompt("How long you would like your password to be? Enter a number between 8 and 128:");
console.log(`Your password length is ${answerLength}`);

function getPasswordOptions() {
  answerSpecialChar = confirm("Would you like your password to have special characters? ");
  answerNum = confirm("Would you like your password to have numbers? ");
  answerLowerC = confirm("Would you like your password to have lowercases? ");
  answerUpperC = confirm("Would you like your password to have uppercases? ");
  return answers = [answerSpecialChar, answerNum, answerLowerC, answerUpperC];
}
getPasswordOptions();
console.log(answers);

// Function for getting a random element from an array
function getRandom(answers) {
  let randomIndex;
  for(let i = 0; i < answers.length; i++){
    if(answers[i]){
      randomIndex = Math.floor(Math.random() * arr[i].length);
      console.log(randomIndex);
      symbolValue = arr[i][randomIndex];
      passwordString += symbolValue;
      console.log(passwordString);
    } 
    
  }
   return passwordString;
  }

// return passwordString;
let oneRound = getRandom(answers);


// Function to generate password with user input
function generatePassword(passwordString) {


  if(passwordString.length < answerLength){
    console.log(oneRound += getRandom(answers));
  }
  console.log(`Your generated password is : ${oneRound} `);

  }

  



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordString);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);