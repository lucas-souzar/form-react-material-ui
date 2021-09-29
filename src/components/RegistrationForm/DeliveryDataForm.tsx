import React from "react";
import { Button, TextField } from "@material-ui/core";

interface DeliveryDataFormProps {}

const DeliveryDataForm: React.FC<DeliveryDataFormProps> = () => {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="address"
        label="Endereço"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="phoneNumber"
        label="Número"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="state"
        label="Estado"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <TextField
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