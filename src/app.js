import emailValidation from "./modules/emailValidation.js";
import coutryValidation from "./modules/countryValidation.js";
import zipCodeValidation from "./modules/zipCodeValidation.js";
import passwordValidation from "./modules/passwordValidation.js";
import confirmPasswordValidation from "./modules/confirmPasswordValidation.js";

const form = document.getElementById("form");
const dialog = document.getElementById("dialog");
const closeDialogButton = document.getElementById("close-dialog");

const handleFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    console.log("Form is invalid!");
  } else {
    console.log("Form is submitted!");
    dialog.showModal();
  }
};

const handleDialogClose = () => {
  dialog.close();
  form.reset();
};

const app = () => {
  emailValidation();
  coutryValidation();
  zipCodeValidation();
  passwordValidation();
  confirmPasswordValidation();

  form.addEventListener("submit", handleFormSubmit);
  closeDialogButton.addEventListener("click", handleDialogClose);
};

export default app;
