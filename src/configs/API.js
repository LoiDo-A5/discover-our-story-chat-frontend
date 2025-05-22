// configs/API.ts

const API_ROOT = process.env.NEXT_PUBLIC_API_URL;

const API = {
  AUTH: {
    LOGIN: `${API_ROOT}/accounts/login/`,
    SIGNUP: `${API_ROOT}/accounts/register/phone/`,
    ACCOUNT_INFO: `${API_ROOT}/accounts/me/`,
    TOKEN_REFRESH: `${API_ROOT}/accounts/token/refresh/`,
    LIST_USER: `${API_ROOT}/accounts/list_user/`,
  },
  ROOM: {
    LIST_ROOM: `${API_ROOT}/accounts/rooms/`,
  },
  MESSAGE: {
    LIST_MESSAGES: `${API_ROOT}/accounts/messages/`,
    LIST_DIRECT_MESSAGES: `${API_ROOT}/accounts/direct_messages/`,
  },
  FRIENDSHIP: {
    REQUEST_FRIEND: `${API_ROOT}/accounts/friendship/`,
    FRIENDS_LIST: `${API_ROOT}/accounts/friendship/friends_list/`,
    INCOMING_REQUESTS: `${API_ROOT}/accounts/friendship/incoming_requests/`,
    ACCEPT_REQUEST: `${API_ROOT}/accounts/friendship/accept_request/`,
  },
};

export default API;