const form = document.getElementById("sign-up-form");
const countryInput = document.getElementById("country");
const countryError = document.getElementById("country-error");

const coutryValidation = () => {
  countryInput.addEventListener("input", (event) => {
    console.log("country-value:", event.target.value);
    if (countryInput.value !== "") {
      countryInput.setCustomValidity("");
      countryError.textContent = "";
      countryError.classList.remove("active");
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (event) => {
    if (countryInput.value === "") {
      showError();
      event.preventDefault();
    }
  });

  const showError = () => {
    countryInput.setCustomValidity("You need select a country.");
    countryError.textContent = "You need select a country.";

    countryError.classList.add("active");
  };
};

export default coutryValidation;
