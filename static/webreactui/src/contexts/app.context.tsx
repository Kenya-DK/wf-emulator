import { createContext, useContext, useEffect, useState } from "react";
import { InventoryContextProvider } from "./inventory.context";
import { AppInfo, EventOperation, Events, OnDataEvent, OnEvent } from "@api";
import { useQuery } from "@tanstack/react-query";
import { api, Config } from "@api";

export type AppContextProps = {
  app_info: AppInfo | undefined;
  config: Config | undefined;
  userName?: string;
}

export type AppContextProviderProps = {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({
  app_info: undefined,
  config: undefined,
  userName: undefined
});

export const useAppContext = () => useContext(AppContext);


export function AppContextProvider({ children }: AppContextProviderProps) {
  const [appInfo, setAppInfo] = useState<AppInfo | undefined>(useContext(AppContext).app_info);
  const [config, setConfig] = useState<Config | undefined>(useContext(AppContext).config);
  const [userName, setUserName] = useState<string | undefined>(useContext(AppContext).userName);
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
  const handleUpdateConfig = (operation: EventOperation, data: Config) => {
    switch (operation) {
      case EventOperation.CREATE_OR_UPDATE:
        setConfig((preConfig) => ({ ...preConfig, ...data }));
        break;
      case EventOperation.SET:
        setConfig({ ...data });
        break;
    }
  }





  // Fetch data from rust side
  const { data } = useQuery({
    queryKey: ['app_init'],
    queryFn: () => api.app.init(),
  })

  // Update app info
  useEffect(() => {
    if (!data) return;
    setAppInfo(data.app_info);
    setConfig(data.config);
  }, [data])

  // Hook on tauri events from rust side
  useEffect(() => {
    OnDataEvent<AppInfo>(Events.UpdateAppInfo, ({ data, operation }) => handleUpdateAppInfo(operation, data));
    OnDataEvent<Config>(Events.UpdateConfig, ({ data, operation }) => handleUpdateConfig(operation, data));
    OnEvent<string>(Events.SetUserName, (userName) => setUserName(userName));
    return () => { }
  }, []);
  return (
    <AppContext.Provider value={{ app_info: appInfo, config, userName }}>
      <InventoryContextProvider>
        {children}
      </InventoryContextProvider>
    </AppContext.Provider>
  )
}