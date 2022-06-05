let accountBtn = document.getElementById("account-btn");
let loginBtn = document.getElementById("login");
let registerBtn = document.getElementById("register");

function register() {
  accountBtn.style.left = "100px";
  registerBtn.style.left = "60px";
  loginBtn.style.left = "-450px";
}
function login() {
  accountBtn.style.left = "0px";
  registerBtn.style.left = "450px";
  loginBtn.style.left = "60px";
}
