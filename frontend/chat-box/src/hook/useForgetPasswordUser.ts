import {useMutation} from "@tanstack/react-query";

import {forgetPasswordResultPromise} from "../types";

import {forgetPasswordFetch} from "@/src/services";

interface Props {
  infoRestPassword: {
    username: string;
    password: string;
    gmail: string;
  };
}

export const useForgetpasswordUser = (infoRestPassword: Props) => {
  return useMutation({
    mutationFn: (): Promise<forgetPasswordResultPromise> => {
      return forgetPasswordFetch(infoRestPassword);
    },
  });
};
