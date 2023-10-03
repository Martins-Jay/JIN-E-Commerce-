// @ts-nocheck
const home = document.getElementsByClassName("home");
const formContainer = document.querySelector(".form-container");
const signUpContainer = document.querySelector(".signup-container");
const logInContainer = document.querySelector(".login-container");
const signUp = document.querySelector(".signup");
const signIn = document.querySelector(".signin");
const pwShowHide = document.querySelectorAll(".eye-slash");

// const form = document.getElementById("form");
const signUpForm = document.getElementById("signup-form");

const email = document.querySelector(".user-email");
const password = document.querySelector("#user-password");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const passwordConfirm = document.querySelector("#password-confirm");

signUp?.addEventListener("click", () => {
  logInContainer?.classList.toggle("hide");
  signUpContainer?.classList.toggle("show");
  formContainer?.classList.add("smaller");
});

signIn?.addEventListener("click", (e) => {
  signUpContainer?.classList.remove("show");
  logInContainer?.classList.remove("hide");
  formContainer?.classList.remove("smaller");
});

//
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    const inputTypeCheck = icon.parentElement?.querySelector("input");
    console.log(email);

    if (inputTypeCheck?.type === "password") {
      inputTypeCheck.type = "text";
    } else {
      inputTypeCheck.type = "password";
    }
  });
});

// SIGNUP FORM
function setErrorFor(input) {
  let inputBox = email.parentElement; //THIS IS WHERE WE ADD THE CSS CLASS
  let errorMessage = email.parentElement.querySelector('.error-message')

  inputBox.classList.add("error");
  errorMessage.classList.add('show')

}

function checkInputs() {
  // GET THE VALUES FROM THE INPUTS

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();

  if (emailValue === "") {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }
}

signUpForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});
