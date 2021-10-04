import { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";

import FormValidations from "../../contexts/FormValidations";

export interface User {
  email: string;
  password: string;
}

// interface UserDataFormProps {
//   onSave: (user: User) => void;
// }

const UserDataForm: React.FC<any> = ({ onSave }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    password: { valid: true, message: "" },
  });

  const validators = useContext(FormValidations);

  const validateFields = (event: any) => {
    const { name, value } = event.target;
    // @ts-ignore
    const isValid = validators[name](value);
    const newState: any = { ...errors };
    newState[name] = isValid;
    setErrors(newState);

    // console.log(newState);
  };

  const canSubmit = () => {
    for (let field in errors) {
      console.log(field);
      // @ts-ignore
      if (!errors[field].valid) return false;
    }
    return true;
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit()) onSave({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        id="email"
        name="email"
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
        onBlur={validateFields}
        error={!errors.password.valid}
        helperText={errors.password.message}
        id="password"
        name="password"
        type="password"
        label="Senha"
        placeholder="*********"
        required
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" color="primary" variant="contained">
        Próximo
      </Button>
    </form>
  );
};

export default UserDataForm;
