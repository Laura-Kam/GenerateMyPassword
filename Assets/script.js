// Assignment Code- finds the button ID.
var generateBtn = document.querySelector("#generate");

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharactersArray = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numericCharactersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getRandomElement(myArray) {
  var randomIndex = Math.floor(Math.random() * myArray.length);
  var randomElement = myArray[randomIndex];
  return randomElement;
}

//write generate password function

function generatePassword() {
  var pwdOptions = askPasswordPrompts();
  console.log(pwdOptions);
  var guaranteedCharacters = [];
  var possibleCharacters = [];
  var finalResult = [];

  if (pwdOptions.lowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandomElement(lowerCasedCharacters));
  }

  if (pwdOptions.upperCase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandomElement(upperCasedCharacters));
  }

  if (pwdOptions.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharactersArray);
    guaranteedCharacters.push(getRandomElement(specialCharactersArray));
  }

  if (pwdOptions.numericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharactersArray);
    guaranteedCharacters.push(getRandomElement(numericCharactersArray));
  }

  for (var i = 0; i < pwdOptions.length; i++) {
    var possibleChar = getRandomElement(possibleCharacters);
    finalResult.push(possibleChar);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    finalResult[i] = guaranteedCharacters[i];
  }
  return finalResult.join("");
}

function askPasswordPrompts() {
  var passwordLength = parseInt(
    prompt("How many characters would you like in your password?")
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be 8 characters and 128 characters");
    return null;
  }

  var hasUpperCase = confirm("Would you like upper case letters?");

  var hasLowerCase = confirm("Would you like lower case letters?");

  var hasSpecialCharacters = confirm("Would you like special characters?");

  var hasNumericCharacters = confirm("Would you like numbers?");

  if (
    hasLowerCase === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters === false &&
    hasUpperCase === false
  ) {
    alert("!");
    return null;
  }

  var passwordPromptsObject = {
    length: passwordLength,
    upperCase: hasUpperCase,
    lowerCase: hasLowerCase,
    specialCharacters: hasSpecialCharacters,
    numericCharacters: hasNumericCharacters,
  };
  return passwordPromptsObject;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("password", password);
}

/*Add event listener to generate button
//targets generateButton (an object)- id is generatebtn. the event is clicking and writepassword function is executed.
//dot calls a method- an action. */
generateBtn.addEventListener("click", writePassword);
