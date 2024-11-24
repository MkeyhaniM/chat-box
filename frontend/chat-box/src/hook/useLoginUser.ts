import {useQuery} from "@tanstack/react-query";

import {loginResultPromise} from "../types";
import {loginFetch} from "../services";

interface Props {
  username: string;
  password: string;
}

export const useLoginUser = (loginInfo: Props) => {
  return useQuery({
    queryKey: ["loginUser"],
    queryFn: (): Promise<loginResultPromise> => {
      return loginFetch(loginInfo);
    },
  });
};
