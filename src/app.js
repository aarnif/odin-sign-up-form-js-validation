import emailValidation from "./modules/emailValidation.js";
import coutryValidation from "./modules/countryValidation.js";

const app = () => {
  emailValidation();
  coutryValidation();
};

export default app;
