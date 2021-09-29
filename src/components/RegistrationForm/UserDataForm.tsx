import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

export interface User {
  email: string;
  password: string;
}

interface UserDataFormProps {
  onSave: (user: User) => void;
}

const UserDataForm: React.FC<UserDataFormProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSave({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        id="email"
        type="email"
        label="Email"
        placeholder="user@email.com"
        required
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        id="password"
        type="password"
        label="Senha"
        placeholder="*********"
        required
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
