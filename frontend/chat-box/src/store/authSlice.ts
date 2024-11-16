import {devtools, persist} from "zustand/middleware";
import {create} from "zustand";

import {AuthState, AuthStateSets, Login} from "@/src/types";

const useAuthStore = create<AuthState & AuthStateSets>()(
  devtools(
    persist(
      (set) => ({
        userInfo: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        accessTokenExpired: false,
        setUserInfo: (userInfo: Login | null) => set({userInfo}),
        setAccessToken: (token: string) => set({accessToken: token}),
        setRefreshToken: (token: string) => set({refreshToken: token}),
        setIsAuthenticated: (status: boolean) => set({isAuthenticated: status}),
        setAccessTokenExpired: (status: boolean) => set({accessTokenExpired: status}),
        logout: () =>
          set({
            userInfo: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            accessTokenExpired: false,
          }),
      }),
      {name: "authUser"},
    ),
  ),
);

export default useAuthStore;
