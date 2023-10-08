const home = document.querySelector(".home");
const formContainer = document.querySelector(".form-container");
const signupContainer = document.querySelector(".signup-container");
const logInForm = document.querySelector(".login-form");
const signUp = document.querySelector(".signup");
const signIn = document.querySelector(".signin");
const pwShowHide = document.querySelectorAll(".eye-slash");

// SIGN-UP CODE
signUp?.addEventListener("click", (e) => {
  logInForm?.classList.toggle("hide");
  signupContainer?.classList.toggle("show");
  formContainer?.classList.add("smaller");
});

// SIGN-IN CODE
signIn?.addEventListener("click", (e) => {
  signupContainer?.classList.remove("show");
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

  const validationOptions = [
    // MIN LENGTH VALIDATION
    {
      attribute: "minlength",

      isValid: (input) =>
        input.value && input.value.length >= parseInt(input.minLength, 10), //TRUE IF: INPUT VALUE > MIN-LENGTH = 2

      userErrorMessage: (input, placeholder) =>
        `${placeholder.textContent} needs to be at least ${input.minLength} characters`,
    },

    //  REQUIRED VALIDATION
    {
      attribute: "required",

      isValid: (input) => input.value.trim() !== "", //TRUE IF FIELD IS NOT EMPTY. FALSE IF OTHERWISE

      userErrorMessage: (input, placeholder) =>
        `${placeholder.textContent} is required`, // textContent GIVES US THE TEXTCONTENT INSIDE PLACEHOLDER CLASS
    },

    // EMAIL PATTERN VALIDATION
    {
      attribute: "pattern",

      isValid: (input) => {
        const patternRegex = new RegExp(input.pattern); // NEW REGULAR EXPRESSION --> Pattern of characters

        return patternRegex.test(input.value); // TRUE IF USER INPUT MATCHES OUR DEFINED EMAIL PATTERN IN HTML
      },

      userErrorMessage: (input, placeholder) =>
        `Please provide a valid ${placeholder.textContent}`,
    },

    //  PASSWORD MATCH
    {
      attribute: "match",

      isValid: (input) => {
        const matchSelector = input.getAttribute("match"); // Since the function takes input as parameter
        const matchedElement = signupForm.querySelector(`#${matchSelector}`);

        return (
          matchedElement && matchedElement.value.trim() === input.value.trim()
        );
      },

      userErrorMessage: (input, placeholder) =>
        `Value dosen't match with password`,
    },
  ];

  const validateEachInputBox = (inputBox) => {
    const input = inputBox.querySelector("input");
    const inputField = inputBox.querySelector(".input-field");
    const placeholder = inputBox.querySelector(".placeholder");
    const errorMessage = inputBox.querySelector(".error-message");
    const errorIcon = inputBox.querySelector(".error-icon");
    const successIcon = inputBox.querySelector(".check-icon");

    let formGroupError = false;

    for (const option of validationOptions) {
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
        input.style.border = "1px solid rgb(11, 231, 11)";
      }
    }
  };

  const signupFormArray = Array.from(signupForm.elements);

  // BLUR
  signupFormArray.forEach((arrayValue) => {
    arrayValue.addEventListener("blur", (event) => {
      const value = validateEachInputBox(event.srcElement.parentElement);
      console.log(value);
    });
  });

  const validateAllFormGroups = (signupForm) => {
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
