import Colors from '@/configs/Colors';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  wrapFormInput: {
    marginTop: 16,
  },
  inputLabel: {
    padding: '0px 4px',
    marginBottom: 4,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '22px',
  },
  textField: {
    '& .MuiInputBase-input': {
      height: 'unset',
      padding: '12px 8px',
      fontSize: 14,
      lineHeight: 1.42858,
    },
    '& .MuiFormHelperText-root': {
      marginBottom: 0,
    },
  },
  iconEye: {
    height: 24,
  },
  helperText: {
    '&.MuiFormHelperText-root': {
      marginLeft: 4,
    },
  },

  // FormInputRadio
  formControlLabel: {
    '&.MuiFormControlLabel-root': {
      marginTop: 7,
      '&:first-child': {
        marginTop: 0,
      },
    },
    '& .MuiFormControlLabel-label': {
      marginLeft: 3,
    },
  },
  require: {
    marginLeft: 6,
    color: Colors.Red6,
    fontSize: 18,
  },

  // FormSelect
  select: {
    width: '100%',
    '& .MuiSelect-root': {
      background: 'red',
    },

    '& .MuiSelect-outlined': {
      padding: '12px 8px',
      fontSize: 14,
    },
  },
}));

export default useStyles;
