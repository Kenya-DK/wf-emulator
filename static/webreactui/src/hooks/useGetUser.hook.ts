import { useContext } from "react";
import { AuthContext } from "@contexts";
export const useGetUser = () => {
  const authState = useContext(AuthContext)
  return authState.user
}
