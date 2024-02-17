const passwordBox = document.getElementById("password");
const length = 14;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@<>,.!£$%^&*(){}\\|#~?/+=_-;:[]";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  // Add an initial special character
  password += symbol[Math.floor(Math.random() * symbol.length)];

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

