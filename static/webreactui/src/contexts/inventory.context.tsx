import { createContext, useContext, useEffect, useState } from "react";
import { EventOperation, Events, OnDataEvent } from "@api";
import { IInventory } from "@api";

export type InventoryContextProps = {
  inventory: IInventory | undefined;
}

export type InventoryContextProviderProps = {
  children: React.ReactNode;
}

export const InventoryContext = createContext<InventoryContextProps>({
  inventory: undefined,
});

export const useInventoryContext = () => useContext(InventoryContext);


export function InventoryContextProvider({ children }: InventoryContextProviderProps) {
  const [inventory, setInventory] = useState<IInventory | undefined>(useContext(InventoryContext).inventory);

  const handleUpdateInventory = (operation: EventOperation, data: IInventory) => {
    switch (operation) {
      case EventOperation.CREATE_OR_UPDATE:
        setInventory((preConfig) => ({ ...preConfig, ...data }));
        break;
      case EventOperation.SET:
        setInventory({ ...data });
        break;
    }
  }

  // Hook on tauri events from rust side
  useEffect(() => {
    OnDataEvent<IInventory>(Events.UpdateInventory, ({ data, operation }) => handleUpdateInventory(operation, data));
    return () => { }
  }, []);
  return (
    <InventoryContext.Provider value={{ inventory }}>
      {children}
    </InventoryContext.Provider>
  )
}