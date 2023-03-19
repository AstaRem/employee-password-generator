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

let passwordLength = prompt("How long you would like your password to be? Enter a number between 8 and 128:");
console.log(`Your password length is ${passwordLength}`);

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
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
   return randomIndex;
  }

//   let randomIndex2 = getRandom(specialCharacters);
// // return passwordString; 
// console.log(`random index is ${randomIndex2}`);


// Function to generate password with user input
//I use the same i index for answers array and for arr - both have 4 items
function generatePassword(arr, answers) {
  while(passwordString.length < passwordLength ){
    for(let i = 0; i < answers.length; i++){
      if(answers[i]){
        randomIndex = getRandom(arr[i]);
        console.log(`in array ${arr[i]} random index is: ${randomIndex}`);
        symbolValue = arr[i][randomIndex];
        passwordString += symbolValue;
        console.log(passwordString);
      } 
    }
  }
    //password is shortened to the ammount of symbols user requested
    let shortenedString = passwordString.slice(0, passwordLength);
    console.log(shortenedString);

   return shortenedString;
  }

  // if(passwordString.length < answerLength){
  //   console.log(oneRound += getRandom(answers));
  // }
  // console.log(`Your generated password is : ${oneRound} `);

  // }

  



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