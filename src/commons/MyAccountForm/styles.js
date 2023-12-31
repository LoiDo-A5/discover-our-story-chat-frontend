import Colors from '@/configs/Colors';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  wrapBox: {
    border: `1px solid ${Colors.Gray3}`,
    boxShadow: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
    borderRadius: 16,
    height: 624,
    padding: 24,
    background: Colors.White,
  },
  wrapFormInput: {
    marginTop: 0,
  },
  textField: {
    '& fieldset': {
      borderColor: `${Colors.GrayScaleBluePalette30} !important`,
    },
  },
  textFieldDisabled: {
    '&.MuiTextField-root': {
      background: Colors.GrayScale10,
    },
  },
  btn: {
    '&.MuiButton-root': {
      padding: '12px 20px',
      marginRight: 16,
      textTransform: 'none',
      fontWeight: 500,
    },
  },
}));

export default useStyles;
