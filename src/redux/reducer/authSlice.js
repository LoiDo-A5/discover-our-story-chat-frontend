import { createSlice } from '@reduxjs/toolkit';

import { initData, removeAxiosDefaultAuthToken } from '../../utils/utils';

const initialState = {
  errorMsg: '',

  isLoggedIn: false,
  account: {
    token: '',
    user: {},
    customer: {},
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      initData(action.payload);
      return {
        ...state,
        isLoggedIn: true,
        account: action.payload,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        isLoggedIn: false,
        errorMsg: action.payload,
      };
    },
    logout: () => {
      removeAxiosDefaultAuthToken();
      return initialState;
    },
    updateAccount: (state, action) => {
      return {
        ...state,
        account: {
          ...state.account,
          user: {
            ...state.account.user,
            ...action.payload,
          },
        },
      };
    },
  },
});

export const { login, loginFailure, logout, updateAccount } = authSlice.actions;
export default authSlice.reducer;
