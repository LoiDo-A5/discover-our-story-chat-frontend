const API_ROOT = process.env.NEXT_PUBLIC_API_URL;

const API = {
  AUTH: {
    LOGIN: `${API_ROOT}/accounts/login/`,
    SIGNUP: `${API_ROOT}/accounts/register/phone/`,
  },
};

export default API;
