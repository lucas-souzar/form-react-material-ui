import React, { useState } from "react";
import DeliveryDataForm from "./DeliveryDataForm";

import PersonalDataForm from "./PersonalDataForm";
import UserDataForm from "./UserDataForm";

const RegistrationForm: React.FC<any> = () => {
  const [actualStep, setActualStep] = useState(0);

  const next = () => {
    setActualStep(actualStep + 1);
  };

  const forms = [
    <UserDataForm onSave={next} />,
    <PersonalDataForm onSave={next} validateCPF={validateCPF} />,
    <DeliveryDataForm onSave={onSubmitData} />,
  ];

  return <>{forms[actualStep]}</>;
};

const onSubmitData = (data?: any) => {
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
