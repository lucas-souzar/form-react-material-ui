import React from "react";

const noValidation = (data: any) => {
  console.log(data);
  return { valid: true, message: "" };
};

const FormValidations = React.createContext({
  cpf: noValidation,
  password: noValidation,
  name: noValidation,
});

export default FormValidations;
