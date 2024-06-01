import { PaperProps, Container, Tabs } from '@mantine/core';
import { useTranslateForms } from '@hooks';
import { Config } from '@api';
import { GeneralPanel } from './Tabs/General';

export type ConfigFormProps = {
  value: Config
  onSubmit: (value: Config) => void;
  paperProps?: PaperProps;
}


export function ConfigForm({ onSubmit, value }: ConfigFormProps) {

  // Translate general
  const useTranslateForm = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForms(`config.${key}`, { ...context }, i18Key)
  const useTranslateTabs = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`tabs.${key}`, { ...context }, i18Key)

  const tabs = [
    {
      label: useTranslateTabs("general.title"), component: <GeneralPanel value={value} onSubmit={(c) => {
        onSubmit({ ...c })
      }} />, id: "live_trading"
    },
  ];
  return (
    <Container p={0}>
      <Tabs defaultValue={tabs[0].id}>
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab value={tab.id} key={tab.id}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Panel value={tab.id} key={tab.id}>
            {tab.component}
          </Tabs.Panel>
        ))}
      </Tabs>
    </Container >
  );
}