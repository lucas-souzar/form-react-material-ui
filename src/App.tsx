import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";

import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

import "./App.css";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>

      <RegistrationForm onSave={onSubmitData} validateCPF={validateCPF} />
    </Container>
  );
}

function onSubmitData(data: any) {
  console.log(data);
}

function validateCPF(cpf: string) {
  if (cpf.length !== 11) {
    return { valid: false, message: "CPF deve conter 11 dígitos" };
  } else {
    return { valid: true, message: "" };
  }
}

export default App;
