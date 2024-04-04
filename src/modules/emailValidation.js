const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const emailValidation = () => {
  emailInput.addEventListener("input", (event) => {
    console.log("input-value:", event.target.value);
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
    console.log("emailInput.validity", emailInput.validity);
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
      emailError.textContent =
        "Entered value needs to be an valid email address.";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email address should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.classList.add("active");
  };
};

export default emailValidation;
