// When user clicks generate password:
// ASk user for desiered length
//store length as variable
//ask if user wants to include lowercase
//ask if user wants to include uppcase
//ask if user wants to include numerics
//ask if user wants to include special character
//for loop to reach desired length

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() (max - min + 1) + min);

  return value;
};

var random



// Assignment code here
var generatePassword = function() {
  var promptLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.");
  promptLength = parseInt(promptLength);
  

  // check for blank responds
  if (promptLength === ""  || promptLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  for (var i = 0; i < promptLength; i++) {
    random
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
