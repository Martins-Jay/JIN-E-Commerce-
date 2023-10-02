const home = document.getElementsByClassName("home");
const formContainer = document.querySelector(".form-container"); 
const signUpForm = document.querySelector(".signup-form");
const logInForm = document.querySelector(".login-form");
const signUp = document.querySelector(".signup");
const signIn = document.querySelector(".signin");
const pwShowHide = document.querySelectorAll(".eye-slash");

signUp?.addEventListener('click', (e) => {
  logInForm?.classList.toggle("hide");
  signUpForm?.classList.toggle("show");
  formContainer?.classList.add("smaller")
})

signIn?.addEventListener('click', (e) => {
  signUpForm?.classList.remove("show");
  logInForm?.classList.remove("hide");
  formContainer?.classList.remove("smaller");
})

pwShowHide.forEach( (icon) => {
  icon.addEventListener('click', () => {
    
  })
})