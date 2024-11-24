import {loginResultPromise} from "@/src/types";

interface Props {
  username: string;
  password: string;
}

export const loginFetch = async (body: Props): Promise<loginResultPromise> => {
  const response = await fetch(`${process.env.SERVER_URL}/auth/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      credential: body.username,
      password: body.password,
    }),
  });

  return response.json();
};
