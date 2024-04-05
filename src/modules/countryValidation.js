const form = document.getElementById("sign-up-form");
const countryInput = document.getElementById("country");
const countryError = document.getElementById("country-error");

const coutryValidation = () => {
  countryInput.addEventListener("input", (event) => {
    console.log("country-value:", event.target.value);
    if (countryInput.validity.valid) {
      countryError.textContent = "";
      countryError.classList.remove("active");
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (event) => {
    if (!countryInput.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  const showError = () => {
    if (countryInput.validity.valueMissing) {
      countryError.textContent = "You need select a country.";
    }
    countryError.classList.add("active");
  };
};

export default coutryValidation;
