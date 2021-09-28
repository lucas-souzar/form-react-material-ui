import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function RegistrationForm() {
  return (
    <form>
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="lastName"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        placeholder="000.000.000-00"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promotions" color="primary" defaultChecked />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="news" color="primary" defaultChecked />}
      />

      <Button variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegistrationForm;
