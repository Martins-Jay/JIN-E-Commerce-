const home = document.querySelector(".home");
const formContainer = document.querySelector(".form-container");
const signUpForm = document.querySelector(".signup-container");
const logInForm = document.querySelector(".login-form");
const signUp = document.querySelector(".signup");
const signIn = document.querySelector(".signin");
const pwShowHide = document.querySelectorAll(".eye-slash");


// SIGN-UP CODE
signUp?.addEventListener("click", (e) => {
  logInForm?.classList.toggle("hide");
  signUpForm?.classList.toggle("show");
  formContainer?.classList.add("smaller");
});

// SIGN-IN CODE
signIn?.addEventListener("click", (e) => {
  signUpForm?.classList.remove("show");
  logInForm?.classList.remove("hide");
  formContainer?.classList.remove("smaller");
});

// PW SHOW HIDE
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    const checkInputType = icon.parentElement?.querySelector("input"); //TYPE METHOD ONLY EXIST IN INPUT

    if (checkInputType?.type === "password") {
      checkInputType.type = "text";
    } else if (checkInputType?.type === "text") {
      checkInputType.type = "password";
    }
  });
});


// FORM VALIDATION 
const validateForm = (formSelector) => {
  const signupForm = document.querySelector(formSelector); //GET FORM

  signupForm.setAttribute("novalidate", ""); //DISABLES BROWSER FIELDS VALIDATION

  // ARRAY
  const validationOptions = [
    // ITEMS IN THIS ARRAY = OBJECTS WITH 3 PROPERTIES
    {
      // 1. ATTRIBUTE THAT WE WANT TO CHECK FOR
      attribute: "required",

      // 2. CHECK. IS INPUT FIELD EMPTY? || RETURNS TRUE/FALSE DEPENDING ON WHETHER IT IS MEETING THE ATTRIBUTED: REQUIRED AS SHOWN ABOVE
      isValid: (input) => input.value.trim() !== "", //TRUE IF FIELD IS NOT EMPTY. FALSE IF OTHERWISE

      userErrorMessage: (input, placeholder) =>
        `${placeholder.textContent} is required`, // textContent GIVES US THE TEXTCONTENT INSIDE PLACEHOLDER CLASS
    },
  ];

  // FUNCTION HELPS US MAKE THE REUSABLE CODE WHICH VALIDATES THE NORMAL FORM ITSELF
  const validateEachInputBox = (inputBox) => {
    //FIRST WE GET EACH OF THE ELEMENTS IN THE INPUTBOX
    const input = inputBox.querySelector("input");
    const inputField = inputBox.querySelector(".input-field");
    const placeholder = inputBox.querySelector("span");
    const errorMessage = inputBox.querySelector(".error-message");
    const errorIcon = inputBox.querySelector(".error-icon");
    const successIcon = inputBox.querySelector(".check-icon");

    // LOOP
    let formGroupError = false;

    // THEN WE LOOP THROUGH ALL OF THE validationOptions
    for (const option of validationOptions) {
      //  && --> is true if and only if all the operands are true
      if (
        input.hasAttribute(option.attribute) &&
        option.isValid(input) === false
      ) {
        errorMessage.textContent = option.userErrorMessage(input, placeholder);
        errorIcon.classList.add("error");
        successIcon.classList.remove("success");
        input.style.border = "1px solid red";
        formGroupError = true;
      }

      if (formGroupError === false) {
        errorMessage.textContent = "";
        successIcon.classList.add("success");
        errorIcon.classList.remove("error");
        inputField.add("transparent");
        input.style.border = "1px solid green";
      }
    }
  };

  // MY CUSTOM VALIDATION (WE CREATE A COUPLE OF FUNCTIONS)
  const validateAllFormGroups = (signupForm) => {
    // lets grab all the --> input-box <-- in our html file since it holds all the important elements.
    // We cn store them in an array.

    const inputBoxes = Array.from(
      signupForm.querySelectorAll(".input-box") // Converts NodeList into Array
    );

    inputBoxes.forEach((inputBox) => {
      validateEachInputBox(inputBox); // Let's get all the items in the input-box
    });
  };

  // EVENT LISTENER
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // PREVENTS SUBMITTING OF FORM

    validateAllFormGroups(signupForm); // WE CALL THE FUNCTION WHEN SUBMIT EVENT OCCURS
  });
};

validateForm("#signup-form");
