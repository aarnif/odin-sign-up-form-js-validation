const form = document.getElementById("form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementById("confirm-password-error");

const confirmPasswordValidation = () => {
  confirmPasswordInput.addEventListener("input", (event) => {
    console.log("confirm-password-value:", event.target.value);
    if (passwordInput.value === confirmPasswordInput.value) {
      confirmPasswordInput.setCustomValidity("");
      console.log("Passwords match!");
      confirmPasswordError.textContent = "";
      confirmPasswordError.classList.remove("active");
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (event) => {
    if (!passwordInput.value === confirmPasswordInput.value) {
      showError();
      event.preventDefault();
    }
  });

  const showError = () => {
    confirmPasswordInput.setCustomValidity("Passwords do not match!");
    console.log("Passwords do not match!");
    confirmPasswordError.textContent = "Passwords do not match!";

    confirmPasswordError.classList.add("active");
  };
};

export default confirmPasswordValidation;
