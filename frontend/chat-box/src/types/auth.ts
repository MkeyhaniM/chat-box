interface Register {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Login {
  username: string;
  email: string;
  password: string;
}

interface Forgetpassword {
  password: string;
  confirmPassword: string;
}

interface loginResultPromise {
  success: boolean;
  token: string | null;
}

interface registerResultPromise {
  success: boolean;
  message: string | null;
}

interface forgetPasswordResultPromise {
  success: boolean;
  message: string | null;
}

interface AuthQuery {
  username: string;
  email: string;
  password: string;
}

export type {
  Register,
  Login,
  Forgetpassword,
  loginResultPromise,
  registerResultPromise,
  forgetPasswordResultPromise,
  AuthQuery,
};
