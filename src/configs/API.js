const API_ROOT = process.env.NEXT_PUBLIC_API_URL;

const API = {
  AUTH: {
    LOGIN: `${API_ROOT}/accounts/login/`,
    SIGNUP: `${API_ROOT}/accounts/register/phone/`,
    ACCOUNT_INFO: `${API_ROOT}/accounts/me/`,
    TOKEN_REFRESH: `${API_ROOT}/accounts/token/refresh/`,
  },
  ROOM: {
    LIST_ROOM: `${API_ROOT}/accounts/rooms/`,
  },
  MESSAGE: {
    LIST_MESSAGES: `${API_ROOT}/accounts/messages/`,
  },
};

export default API;
