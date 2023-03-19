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
function getPasswordOptions() {
  answerLowerC = confirm("Would you like your password to have lowercases? ");
  answerUpperC = confirm("Would you like your password to have uppercases? ");
  answerNum = confirm("Would you like your password to have numbers? ");
  answerSpecialChar = confirm("Would you like your password to have special characters? ");
  return [answerLowerC, answerUpperC, answerNum, answerSpecialChar];
}

getPasswordOptions();


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex;
  for(let i = 0; i < 4; i++){
    if(answerLowerC){
      randomIndex = Math.floor(Math.random() * 4);
      console.log(getPasswordOptions());

    }
    // return arr[randomIndex]  // returns random value from array
  
  }
}


// Function to generate password with user input
function generatePassword(arr) {
  let oneCharacter = getRandom(arr);
  console.log(oneCharacter);

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);