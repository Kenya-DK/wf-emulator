import { useGetInventory } from ".";

export const useIsAuthenticated = () => {
  const inv = useGetInventory();
  return inv ? true : false;
}