import { Button, TextField } from "@material-ui/core";

interface UserDataFormProps {}

const UserDataForm: React.FC<UserDataFormProps> = () => {
  return (
    <form>
      <TextField
        id="email"
        type="email"
        label="Email"
        placeholder="user@email.com"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="password"
        type="password"
        label="Senha"
        placeholder="*********"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" color="primary" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
};

export default UserDataForm;
