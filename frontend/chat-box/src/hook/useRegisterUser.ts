import {useMutation} from "@tanstack/react-query";

import {AuthQuery, registerResultPromise} from "../types";

import {registerFetch} from "@/src/services";

interface Props {
  registerInfo: AuthQuery;
}

export const useRegisterUser = ({registerInfo}: Props) => {
  return useMutation({
    mutationFn: (): Promise<registerResultPromise> => {
      return registerFetch(registerInfo);
    },
  });
};
