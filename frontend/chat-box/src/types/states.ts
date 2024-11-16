import {Login} from "./auth";

interface AuthState {
  userInfo: Login | null;
  accessToken: null | string;
  refreshToken: null | string;
  isAuthenticated: boolean;
  accessTokenExpired: boolean;
}

interface AuthStateSets {
  setUserInfo: (userInfo: Login) => void;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setIsAuthenticated: (status: boolean) => void;
  setAccessTokenExpired: (status: boolean) => void;
  logout: () => void;
}

export type {AuthState, AuthStateSets};
