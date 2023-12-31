// Assignment Code
var generateBtn = document.querySelector("#generate");



var lowAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberSet =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Password generation message
function generatePassword() {

  var passwordText = document.querySelector("#password");
  var passwordLength = prompt(`Enter a password length between 8 and 128 Characters`);
  if (isNaN(passwordLength)) 
  { alert('Please enter valid number(between 8 and 128)');
    generatePassword();
  
  }

if ((passwordLength < 8) || (passwordLength > 128)) {

  alert(`Please enter valid number(between 8 and 128)`);
  generatePassword();
  } else {
    alert(`The password will be ${passwordLength} characters.`);
  }

   // Lowercase message
   var passLower = confirm(`Should your password include lower case letters?`);
   var masterChar = [];
   if (passLower) {
     masterChar = masterChar.concat(lowAlpha);
     }

  // Uppercase message
    var passUpper = confirm(`Should your password include upper case letters?`);

   if (passUpper) {
      masterChar = masterChar.concat(upAlpha)
      }

    // Number message
    var passNumber = confirm(`Should your password include numbers?`);

   if (passNumber) {
      masterChar = masterChar.concat(numberSet);
      }

    // Symbols message
    var passSpecial = confirm(`Should your password include special characters?`);

   if (passSpecial) {
      masterChar = masterChar.concat(specialChar);
      }

      if ((passLower == false) && (passUpper == false) && (passNumber == false) && (passSpecial == false)) {
        return alert(`You must insert at least one type of character`);

      }

      // Generate password using chosen characters
      var Password = "";
      for (var i = 0; i < passwordLength; i++) {
        var gen = Math.floor(Math.random() * masterChar.length);
        Password = Password.concat(masterChar[gen]);
      }
      return Password;
}

      
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adds button
generateBtn.addEventListener("click", writePassword);
