import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ModalsProvider } from '@mantine/modals';
import { AppContextProvider } from '@contexts';
import { AppRoutes, PromptModal } from '@components';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from './lang/en'
import { dk } from './lang/dk'

// Create a Backend Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const modals = {
  prompt: PromptModal
  /* ...other modals */
};
export interface MantineModalsOverride {
  modals: typeof modals;
}
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      dk: { translation: dk },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ModalsProvider

        modals={modals}
        modalProps={{
          centered: true,
          onClose() { },
        }}>
        <AppContextProvider>
          <AppRoutes />
        </AppContextProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </ModalsProvider>
    </QueryClientProvider>
  )
}

export default App