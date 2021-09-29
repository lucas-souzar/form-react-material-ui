import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export interface Delivery {
  cep: string;
  address: string;
  phoneNumber: string;
  state: string;
  city: string;
}

declare interface DeliveryDataFormProps {
  onSave: (delivery: Delivery) => void;
}

const DeliveryDataForm: React.FC<DeliveryDataFormProps> = (props) => {
  const [cep, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSave({ cep, address, phoneNumber, state, city });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => setCEP(event.target.value)}
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        id="address"
        label="Endereço"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        id="phoneNumber"
        label="Número"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={state}
        onChange={(event) => setState(event.target.value)}
        id="state"
        label="Estado"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={city}
        onChange={(event) => setCity(event.target.value)}
        id="city"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" color="primary" variant="contained" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
};

export default DeliveryDataForm;
