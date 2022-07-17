// Assignment Code- finds the button ID.
var generateBtn = document.querySelector("#generate");


function getPassword () {
  var chars = "0123456789abcdefghijklmnopqrstuvwxy!@$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
}

for (var i = 0; i< passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);

}

document.getElementById('password').value = password;


//creating first alert


window.alert("Hello, in a moment, you will create a strong password. Please click 'ok' to the following options to choose your password. Are you ready?");


window.confirm("Do you want a special character to be selected?")


 if (window.confirm("Do you want to a lowercase letter to be selected?")) {window.open("Cancel", "Ok");

//write generate password function




// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
console.log('password', password);
}






/*Add event listener to generate button
//targets generateButton (an object)- id is generatebtn. the event is clicking and writepassword function is executed.
//dot calls a method- an action. */
generateBtn.addEventListener("click", writePassword());