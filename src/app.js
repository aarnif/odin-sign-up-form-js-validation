import emailValidation from "./modules/emailValidation.js";
import coutryValidation from "./modules/countryValidation.js";
import zipCodeValidation from "./modules/zipCodeValidation.js";
import passwordValidation from "./modules/passwordValidation.js";

const app = () => {
  emailValidation();
  coutryValidation();
  zipCodeValidation();
  passwordValidation();
};

export default app;
