const validateCPF = (cpf: string) => {
  if (cpf.length !== 11) {
    return { valid: false, message: "CPF deve conter 11 dígitos" };
  } else {
    return { valid: true, message: "" };
  }
};

const validatePassword = (password: string) => {
  if (password.length < 4 || password.length > 72) {
    return { valid: false, message: "Senha deve ter entre 4 e 72 dígitos" };
  } else {
    return { valid: true, message: "" };
  }
};

export { validateCPF, validatePassword };
