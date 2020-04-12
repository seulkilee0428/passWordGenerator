// Assignment Code
var generateBtn = document.querySelector("#generate");


//create generate password function
function generatePassword() {
  var passwordCharSet = "";

  //prompts when seleting Generate password
  var passwordLength = prompt("How many number of characters do you want for your password? (at least 8 characters and no more than 128 characters.) ");

  var passwordLowerCase = confirm("Do you want lowercases?");
  if (passwordLowerCase == true) {
    passwordCharSet += "abcdefghijklmnopqrstuvwxyz";
  }

  var passwordUpperCase = confirm("Do you want upperases?");
  if (passwordUpperCase == true) {
    passwordCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  var passwordNumeric = confirm("Do you want numberic numbers?");
  if (passwordNumeric == true) {
    passwordCharSet += "0123456789";
  }
  var passwordSpecial = confirm("Do you want special characters?");
  if (passwordSpecial == true) {
    passwordCharSet += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }


  var pw = "";
  for (var i = 0; i < passwordLength; i++) {
    pw += passwordCharSet[Math.floor(Math.random() * Math.floor(passwordCharSet.length))];
  }
  return (pw);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


