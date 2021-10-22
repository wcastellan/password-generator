// Assignment code here
var password = function() {
    var promptLength = window.prompt("Choose a password length between 8 and 128 characters.");
        if (promptLength > 8 || promptLength < 128) {
        var promptLowerCase = window.confirm("Include lower case letters?");
            if (promptLowerCase === true) {
                promptLength.promptLowerCase = "abcdefghijklmnopqrstuvwxyz";
            } else {
                promptLength.promptLowerCase = false;
            }
        var promptUpperCase = window.confirm("Include upper case letters?");
            if (promptUpperCase === true) {
                promptLength.promptUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            } else {
                promptLength.promptUpperCase = false;
            }
        var promptNumeric = window.confirm("Include numerical values?");
            if (promptNumeric === true) {
                promptLength.promptNumeric = "123456789";
            } else {
                promptLength.promptNumeric = false;
            }
        var promptSpecialChar = window.confirm("Include special characters?");
            if (promptLength.promptSpecialChar === true) {
                promptLength.promptSpecialChar = "!@#$%^&*()";
            } else {
                promptLength.promptSpecialChar = false;
            }
        } else {
            (promptLength === "" || promptLength === null) 
            window.alert("Please try again and select a password lenght  between 8 and 128 characters");
            return promptLength;
            }
        
    
};

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