import { useContext } from "react";
import { InventoryContext } from "@contexts";
export const useGetInventory = () => {
  const invState = useContext(InventoryContext)
  return invState.inventory
}
