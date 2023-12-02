import { createTheme } from '@mui/material/styles';
import axios from 'axios';
import { toast } from 'react-toastify';
import { reactLocalStorage } from 'reactjs-localstorage';

import Colors from '../configs/Colors';

const notify = (type, msg, extra = {}) => {
  toast[type](msg, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    pauseOnFocusLoss: false,
    toastId: msg,
    ...extra,
  });
};

export const ToastTopHelper = {
  success: (msg, extra) => {
    notify('success', msg, extra);
  },
  error: (msg, extra) => {
    notify('error', msg, extra);
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Primary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'capitalize',
        },
      },
    },
  },
});

export const setAxiosDefaultAuthToken = (token) => {
  axios.defaults.headers.common.Accept = 'application/json';
  axios.defaults.headers.common.Authorization = `Token ${token}`;
  reactLocalStorage.set('token', token);
};

export const removeAxiosDefaultAuthToken = () => {
  delete axios.defaults.headers.common.Accept;
  delete axios.defaults.headers.common.Authorization;
  reactLocalStorage.remove('token');
};

export const initData = ({ token }) => {
  setAxiosDefaultAuthToken(token);
};

export const formatCurrency = (price) => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'VND',
  });

  return formatter.format(price);
};

export const capitalizeFirstLetter = (string) => {
  const newString = string.toLowerCase();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
};
