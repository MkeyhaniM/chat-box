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
export type {Register, Login, Forgetpassword};
