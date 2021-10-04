import React, { useContext, useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

import FormValidations from "../../contexts/FormValidations";

export interface Person {
  name: string;
  lastName: string;
  cpf: string;
  promotions: boolean;
  news: boolean;
}

// declare interface PersonalDataFormProps {
//   onSave: (person: Person) => void;
//   validators: (validators: any) => void;
// }

const PersonalDataForm: React.FC<any> = ({ onSave }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    cpf: { valid: true, message: "" },
    name: { valid: true, message: "" },
  });

  const validators = useContext(FormValidations);

  const validateFields = (event: any) => {
    const { name, value } = event.target;
    // @ts-ignore
    const isValid = validators[name](value);
    const newState: any = { ...errors };
    newState[name] = isValid;
    setErrors(newState);

    console.log(newState);
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
        if (canSubmit()) onSave({ name, lastName, cpf, promotions, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        onBlur={(event) => validateFields(event)}
        error={!errors.name.valid}
        helperText={errors.name.message}
        id="name"
        name="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        id="lastName"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={(event) => validateFields(event)}
        error={!errors.cpf.valid}
        helperText={errors.cpf.message}
        id="cpf"
        name="cpf"
        label="CPF"
        placeholder="000.000.000-00"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promotions}
            onChange={(event) => setPromotions(event.target.checked)}
            name="promotions"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={news}
            onChange={(event) => setNews(event.target.checked)}
            name="news"
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
};

export default PersonalDataForm;
