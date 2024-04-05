const form = document.getElementById("sign-up-form");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const passwordValidation = () => {
  passwordInput.addEventListener("input", (event) => {
    console.log("password-value:", event.target.value);
    if (passwordInput.validity.valid) {
      passwordError.textContent = "";
      passwordError.classList.remove("active");
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (event) => {
    if (!passwordInput.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  const showError = () => {
    if (passwordInput.validity.valueMissing) {
      passwordError.textContent = "You need to enter an password.";
    } else if (passwordInput.validity.tooShort) {
      passwordError.textContent = `The password needs to be between ${passwordInput.minLength}-${passwordInput.maxLength} characters; 
      you entered ${passwordInput.value.length}.`;
    } else if (passwordInput.validity.patternMismatch) {
      passwordError.textContent =
        "The password must contain at least one digit, one uppercase letter and one special character.";
    }
    passwordError.classList.add("active");
  };
};

export default passwordValidation;
