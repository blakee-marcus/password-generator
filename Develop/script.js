// Assignment code here
var generatePassword = function() {
  var promptLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters.");


  // check for blank responds
  if (promptLength === ""  || promptLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
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
