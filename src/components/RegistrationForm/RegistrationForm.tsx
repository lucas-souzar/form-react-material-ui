import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import DeliveryDataForm from "./DeliveryDataForm";
import PersonalDataForm from "./PersonalDataForm";
import UserDataForm from "./UserDataForm";

const RegistrationForm: React.FC<any> = ({ onSubmit, validators }) => {
  const [actualStep, setActualStep] = useState(0);
  const [collectedData, setCollectedData] = useState({});
  useEffect(() => {
    if (actualStep === forms.length - 1) onSubmit(collectedData);
  });

  const collectData = (data: any) => {
    setCollectedData({ ...collectedData, ...data });
    next();
  };

  const next = () => {
    setActualStep(actualStep + 1);
  };

  const forms = [
    <UserDataForm onSave={collectData} validators={validators} />,
    <PersonalDataForm onSave={collectData} validators={validators} />,
    <DeliveryDataForm onSave={collectData} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
  ];

  return (
    <>
      <Stepper activeStep={actualStep} style={{ margin: "1.5rem 0" }}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[actualStep]}
    </>
  );
};

export default RegistrationForm;
