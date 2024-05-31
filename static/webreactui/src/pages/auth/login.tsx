import { Center } from "@mantine/core";
import { LogInForm } from "@components";
import { useMutation } from "@tanstack/react-query";
import { EventOperation, Events, SendDataEvent, api } from "@api";
import { notifications } from "@mantine/notifications";
import { useTranslatePages } from "@hooks";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";

export function LoginPage() {
  // States
  const [email, setEmail] = useLocalStorage({ key: "email", defaultValue: "" });
  const [password, setPassword] = useLocalStorage({ key: "password", defaultValue: "" });

  // Translate general
  const useTranslatePage = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslatePages(`auth.${key}`, { ...context }, i18Key)
  const useTranslateSuccess = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslatePage(`success.${key}`, { ...context }, i18Key)


  useEffect(() => {
    if (email && password)
      logInMutation.mutate({ email, password });
  }, [email, password]);

  // Mutations
  const logInMutation = useMutation({
    mutationFn: (data: { email: string; password: string }) => {
      setEmail(data.email);
      setPassword(data.password);
      return api.auth.login(data.email, data.password)
    },
    onSuccess: async (u) => {
      notifications.show({ title: useTranslateSuccess("login.title"), message: useTranslateSuccess("login.message", { name: u.DisplayName }), color: "green.7" });
      getUserInfo.mutate();
    },
    onError: (err) => {
      console.error(err);
      setEmail("");
      setPassword("");
    }
  })

  const getUserInfo = useMutation({
    mutationFn: () => api.auth.getUserInfo(),
    onSuccess: async (u) => {
      SendDataEvent(Events.UpdateUser, EventOperation.SET, u);
    }
  })

  return (
    <Center w={"100%"} h={"92vh"}>
      <LogInForm is_loading={logInMutation.isPending} onSubmit={(d: { email: string; password: string }) => logInMutation.mutate(d)} />
    </Center>
  );
}
