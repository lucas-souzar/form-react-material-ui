import { Container, Typography } from "@material-ui/core";
import { validateCPF, validatePassword } from "../../utils/validators";

import RegistrationForm from "../RegistrationForm";

import "./App.css";

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>

      <RegistrationForm
        onSubmit={onSubmitData}
        validators={{
          cpf: validateCPF,
          password: validatePassword,
          name: validatePassword,
        }}
      />
    </Container>
  );
};

const onSubmitData = (data?: any) => {
  console.log(data);
};

export default App;
