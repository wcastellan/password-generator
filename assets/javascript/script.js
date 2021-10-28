// Assignment code here
function generatePassword() {
    // ask for length of password
   var promptLength = window.prompt("Enter a password between 8 and 128 characters.");

   var lengthConfirm = parseInt(promptLength);
   console.log(lengthConfirm);

   // choose length of password
   if (promptLength < 8 || promptLength > 128 || null) {
       window.alert("Invalid choice. Please try again.");
       return;
   }
   
   // varibles for all of our characters
var charArray = [];
var lowerCase = "abcdefghijklmnopqrstuvwxyz" .split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var numberCase = "0123456789" .split("");
var specialCase = "!@#$%^&*()<>{}" .split("");

   // confirm if you want lower case characters
var confirmLowerCase = window.confirm("Do you want your password to include lower case letters?");
   if (confirmLowerCase === true) {
       for (var i = 0; i < lowerCase.length; i++) {
           charArray.push(lowerCase[i]);
       }
       console.log(lowerCase);
   }

   // confirm if you want upper case characters
var confirmUpperCase = window.confirm("Do you want your password to include upper case letters?");
   if (confirmUpperCase === true) {
       for (var i = 0; i < upperCase.length; i++) {
           charArray.push(upperCase[i]);
       }
       console.log(upperCase);
   }

   // confirm if you want numbers
var confirmNumberCase = window.confirm("Do you want your password to include numbers?");
   if (confirmNumberCase === true) {
       for (var i = 0; i < numberCase.length; i++) {
           charArray.push(numberCase[i]);
       }
       console.log(numberCase);
   }

   // confirm if you want special characters
var confirmSpecialCase = window.confirm("Do you want your password to include special characters?");
   if (confirmSpecialCase === true) {
       for (var i = 0; i < specialCase.length; i++) {
           charArray.push(specialCase[i]);
       }
       console.log(specialCase);
   }

   // generate the random password
   var randomPassword = "";
   for (var i = 0; i < lengthConfirm; i++) {
       charArray[Math.floor(Math.random() * charArray.length)];

           randomPassword += charArray[Math.floor(Math.random() * charArray.length)];
    
   }

   return randomPassword;
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
