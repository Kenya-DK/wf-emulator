import { Box, Tabs } from "@mantine/core";
import { useTranslatePages } from "@hooks";
import { ModsPanel } from "./Tabs/Mods";
import { ItemsPanel } from "./Tabs/Items";
import { WeaponsPanel } from "./Tabs/Weapons";

export function InventoryPage() {
  // Translate general
  const useTranslateForm = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslatePages(`inventory.${key}`, { ...context }, i18Key)
  const useTranslateTabs = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`tabs.${key}`, { ...context }, i18Key)

  const tabs = [
    {
      label: useTranslateTabs("mods.title"), component: <ModsPanel />, id: "mods",
    },
    {
      label: useTranslateTabs("items.title"), component: <ItemsPanel />, id: "items",
    },
    {
      label: useTranslateTabs("weapons.title"), component: <WeaponsPanel />, id: "weapons",
    },
  ];
  return (
    <Box p={0}>
      <Tabs defaultValue={tabs[0].id} orientation="vertical">
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
    </Box >
  );
}