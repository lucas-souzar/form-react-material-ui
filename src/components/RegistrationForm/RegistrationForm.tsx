import React from "react";

import PersonalDataForm from "../PersonalDataForm";
import UserDataForm from "../UserDataForm/UserDataForm";

const RegistrationForm: React.FC<any> = () => {
  return (
    <>
      <PersonalDataForm onSave={onSubmitData} validateCPF={validateCPF} />
      <UserDataForm />
    </>
  );
};

const onSubmitData = (data: any) => {
  console.log(data);
};

const validateCPF = (cpf: string) => {
  if (cpf.length !== 11) {
    return { valid: false, message: "CPF deve conter 11 dígitos" };
  } else {
    return { valid: true, message: "" };
  }
};

export default RegistrationForm;
