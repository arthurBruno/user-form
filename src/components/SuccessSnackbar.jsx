import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const SuccessSnackbar = ({ open, setOpen }) => (
  <Snackbar
    open={open}
    autoHideDuration={2000}
    onClose={setOpen}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <Alert onClose={setOpen} severity="success">
      Informações enviadas
    </Alert>
  </Snackbar>
);

export default SuccessSnackbar;
