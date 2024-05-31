import { createContext, useContext, useEffect, useState } from "react";
import { EventOperation, Events, OnDataEvent, User } from "@api";
export type AuthContextProps = {
  user: User | undefined;
}
export type TauriContextProviderProps = {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  user: undefined,
});

export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }: TauriContextProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);


  // Handle update, create, delete transaction
  const handleUpdateUser = (operation: string, data: User) => {
    switch (operation) {
      case EventOperation.CREATE_OR_UPDATE:
        setUser((user) => ({ ...user, ...data }));
        break;
      case EventOperation.DELETE:
        setUser(undefined);
        break;
      case EventOperation.SET:
        setUser(data);
        break;
    }
  }
  // Hook on tauri events from rust side
  useEffect(() => {
    OnDataEvent<User>(Events.UpdateUser, ({ data, operation }) => handleUpdateUser(operation, data));
    return () => {

    }
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}