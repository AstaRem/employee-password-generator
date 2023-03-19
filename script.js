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

// Function to prompt user for password options
let answerLowerC;
let answerUpperC;
let answerNum;
let answerSpecialChar;
let answers = [];
let passwordString = "";

// get password length from the user
let passwordLength = prompt("How long you would like your password to be? Enter a number between 8 and 128:");

//check if password length is matching
if(passwordLength >= 8 && passwordLength <= 128){
  getPasswordOptions();
} else {
  confirm("Please refresh the page and enter correct number for your password length!")
}

//get character options from user
function getPasswordOptions() {
  answerSpecialChar = confirm("Would you like your password to have special characters? ");
  answerNum = confirm("Would you like your password to have numbers? ");
  answerLowerC = confirm("Would you like your password to have lowercases? ");
  answerUpperC = confirm("Would you like your password to have uppercases? ");
  return answers = [answerSpecialChar, answerNum, answerLowerC, answerUpperC];
}

// check if user chose at least one character option
if(!answers[0] && !answers[1] && !answers[2] && !answers[3]){
  confirm("You need to choose at least one character option. Please refresh page and start again.")
}

// Function for getting a random number
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
   return randomIndex;
  }


// Function to generate password with user input
//I use the same i index for answers array and for arr - both arrays have 4 items
function generatePassword(arr, answers) {
  while(passwordString.length < passwordLength ){
    for(let i = 0; i < answers.length; i++){
      if(answers[i]){
        randomIndex = getRandom(arr[i]);
        symbolValue = arr[i][randomIndex];
        passwordString += symbolValue;
      } 
    }
  }
    //password is shortened to the number of symbols user requested
    let shortenedString = passwordString.slice(0, passwordLength);
   return shortenedString;
  }



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  var password = generatePassword(arr, answers);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);