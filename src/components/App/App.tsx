import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";

import "./App.css";
import RegistrationForm from "../RegistrationForm";

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>

      <RegistrationForm />
    </Container>
  );
};

export default App;
