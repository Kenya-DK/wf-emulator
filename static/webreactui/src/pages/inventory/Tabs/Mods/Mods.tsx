import { Box } from "@mantine/core";

export type ModsPanelProps = {}
export const ModsPanel = ({ }: ModsPanelProps) => {

  // // Translate general
  // const useTranslateForm = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForms(`config.tabs.general.${key}`, { ...context }, i18Key)
  // const useTranslateButtons = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`buttons.${key}`, { ...context }, i18Key)
  // const useTranslateFormFields = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`fields.${key}`, { ...context }, i18Key)


  return (
    <Box h={"25vh"}>
      Mods
    </Box>
  );
};