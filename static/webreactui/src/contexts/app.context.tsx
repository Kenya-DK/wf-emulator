import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProvider } from "./auth.context";
import { AppInfo, EventOperation, Events, OnDataEvent } from "@api";

export type AppContextProps = {
  app_info: AppInfo | undefined;
}

export type AppContextProviderProps = {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({
  app_info: {
    name: "Open Warframe",
    version: "0.0.1"
  },
});

export const useAppContext = () => useContext(AppContext);


export function AppContextProvider({ children }: AppContextProviderProps) {
  const [appInfo, setAppInfo] = useState<AppInfo | undefined>(useContext(AppContext).app_info);

  // Handle update, create, delete transaction
  const handleUpdateAppInfo = (operation: EventOperation, data: AppInfo) => {
    switch (operation) {
      case EventOperation.CREATE_OR_UPDATE:
        setAppInfo((settings) => ({ ...settings, ...data }));
        break;
      case EventOperation.SET:
        setAppInfo(data);
        break;
    }
  }
  // Hook on tauri events from rust side
  useEffect(() => {
    OnDataEvent<AppInfo>(Events.UpdateAppInfo, ({ data, operation }) => handleUpdateAppInfo(operation, data));
    return () => { }
  }, []);
  return (
    <AppContext.Provider value={{ app_info: appInfo }}>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </AppContext.Provider>
  )
}