const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const emailValidation = () => {
  emailInput.addEventListener("input", (event) => {
    console.log("email-value:", event.target.value);
    if (emailInput.validity.valid) {
      emailError.textContent = "";
      emailError.classList.remove("active");
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (event) => {
    if (!emailInput.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  const showError = () => {
    if (emailInput.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address.";
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent =
        "Entered value needs to be an valid email address.";
    } else if (emailInput.validity.tooShort) {
      emailError.textContent = `Email address should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`;
    }
    emailError.classList.add("active");
  };
};

export default emailValidation;
