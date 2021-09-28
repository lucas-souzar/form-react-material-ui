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

      <RegistrationForm />
    </Container>
  );
}

export default App;
