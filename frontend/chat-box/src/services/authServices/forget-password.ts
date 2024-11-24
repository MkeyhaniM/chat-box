import {forgetPasswordResultPromise} from "@/src/types";

interface Props {
  infoRestPassword: {
    password: string;
    username: string;
    gmail: string;
  };
}

export const forgetPasswordFetch = async ({
  infoRestPassword,
}: Props): Promise<forgetPasswordResultPromise> => {
  const response = await fetch(`${process.env.SERVER_URL}/auth/forget-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(infoRestPassword),
  });

  return response.json();
};
