import { useState } from 'react';
import {
  Typography,
  TextField,
  Box,
  Button,
  makeStyles,
} from '@material-ui/core';
import SuccessSnackbar from '../components/SuccessSnackbar';
import { isUserValid } from '../functions/validations';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'grid',
    maxWidth: '600px',
    margin: '100px auto',
    gap: '20px',
    padding: '15px',

    '@media (max-width:800px)': {
      margin: '40px auto 50px',
      '& .MuiTypography-h3': theme.typography.h5,
    },
  },
  buttons: {
    display: 'flex',
    placeContent: 'flex-end',
    gap: '10px',
    marginTop: '15px',

    '@media (max-width:800px)': {
      display: 'grid',
      marginTop: '15px',
      placeContent: 'normal',
    },
  }
}));

const Contact = () => {
  const classes = useStyles();
  const [fieldsWithError, setFieldsWithError] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClear = () => {
    setFieldsWithError({});
    document.getElementById('name').value = '';
    document.getElementById('birth-date').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFieldsWithError({});

    const result = await isUserValid(event.target);

    if (result) {
      if (result.errors) {
        setFieldsWithError(result.errors);
      } else {
        setSnackbarOpen(true);
      }
    }
  };

  return (
    <>
      <form id="form-user" className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h3">Informações Pessoais</Typography>

        <TextField
          label="Nome"
          id="name"
          error={!!fieldsWithError.name}
          helperText={fieldsWithError.name}
        />
        <TextField
          label="Data de nascimento"
          id="birth-date"
          type="date"
          InputLabelProps={{ shrink: true }}
          error={!!fieldsWithError.birthDate}
          helperText={fieldsWithError.birthDate}
        />
        <TextField
          label="E-mail"
          id="email"
          error={!!fieldsWithError.email}
          helperText={fieldsWithError.email}
        />
        <TextField
          label="Endereço"
          id="address"
          error={!!fieldsWithError.address}
          helperText={fieldsWithError.address}
        />
        <TextField
          label="Telefone"
          id="phone"
          error={!!fieldsWithError.phone}
          helperText={fieldsWithError.phone}
        />

        <Box className={classes.buttons}>
          <Button variant="outlined" color="primary" onClick={handleClear}>Limpar</Button>
          <Button variant="contained" color="primary" type="submit">Enviar</Button>
        </Box>
      </form>

      <SuccessSnackbar open={snackbarOpen} setOpen={() => setSnackbarOpen(false)} />
    </>
  );
};

export default Contact;
