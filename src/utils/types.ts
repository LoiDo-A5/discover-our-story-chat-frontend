export interface User {
    name: string;
    email: string;
    avatar: string;
    phone_number: string;
  }
  
  export interface Account {
    token: string;
    user: User;
    customer: Record<string, any>;
  }
  
  export interface AuthState {
    errorMsg: string;
    isLoggedIn: boolean;
    account: Account;
  }
  
  export interface RootState {
    auth: AuthState;
  }