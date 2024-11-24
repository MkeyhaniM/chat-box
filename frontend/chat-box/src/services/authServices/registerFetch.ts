import {registerResultPromise} from "@/src/types";

interface Props {
  username: string;
  email: string;
  password: string;
}

export const registerFetch = async (userInfo: Props): Promise<registerResultPromise> => {
  const response = await fetch(`${process.env.SERVER_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  return response.json();
};
