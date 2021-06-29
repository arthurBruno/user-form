/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup';

yup.setLocale({
  mixed: {
    required: 'Preencha esse campo para continuar',
    default: 'Preencha um valor válido',
  },
  string: {
    email: 'Preencha um e-mail válido',
    min: 'Valor muito curto (mínimo ${min} caracteres)',
    max: 'Valor muito longo (máximo ${max} caracteres)'
  },
  number: {
    min: 'Valor inválido (deve ser maior ou igual a ${min})',
    max: 'Valor inválido (deve ser menor ou igual a ${max})'
  }
});

const userSchema = {
  name: yup.string().required(),
  birthDate: yup.string().required(), 
  email: yup.string().email().required(),
  address: yup.string().required(),
  phone: yup.string().min(10).max(11).required(),
};

export default userSchema;
