import emailValidation from "./modules/emailValidation.js";
import coutryValidation from "./modules/countryValidation.js";
import zipCodeValidation from "./modules/zipCodeValidation.js";

const app = () => {
  emailValidation();
  coutryValidation();
  zipCodeValidation();
};

export default app;
