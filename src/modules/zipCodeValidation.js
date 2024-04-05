const form = document.getElementById("sign-up-form");
const zipCodeInput = document.getElementById("zip-code");
const zipCodeError = document.getElementById("zip-code-error");

const zipCodeValidation = () => {
  zipCodeInput.addEventListener("input", (event) => {
    console.log(event.target);
    console.log("zip-code-value:", event.target.value);
    if (zipCodeInput.validity.valid) {
      zipCodeError.textContent = "";
      zipCodeError.classList.remove("active");
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (event) => {
    if (!zipCodeInput.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  const showError = () => {
    if (zipCodeInput.validity.valueMissing) {
      zipCodeError.textContent = "You need to enter an ZIP-code.";
    } else if (zipCodeInput.validity.typeMismatch) {
      zipCodeError.textContent = "Entered value needs to be an valid ZIP-code.";
    } else if (zipCodeInput.validity.tooShort) {
      zipCodeError.textContent = `The ZIP-code needs to be ${zipCodeInput.minLength} characters; you entered ${zipCodeInput.value.length}.`;
    } else if (zipCodeInput.validity.patternMismatch) {
      zipCodeError.textContent = "The ZIP-code must contain only numbers.";
    }
    zipCodeError.classList.add("active");
  };
};

export default zipCodeValidation;
