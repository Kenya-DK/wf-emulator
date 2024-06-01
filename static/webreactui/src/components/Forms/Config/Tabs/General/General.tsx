import { Box, Button, Checkbox, Group, NumberInput, TextInput, Tooltip } from "@mantine/core";
import { Config } from "@api";
import { useTranslateForms } from "@hooks";
import { TooltipIcon } from "@components";
import { useForm } from "@mantine/form";

export type GeneralPanelProps = {
  value: Config;
  onSubmit: (value: Config) => void;
}
export const GeneralPanel = ({ onSubmit, value }: GeneralPanelProps) => {

  // Translate general
  const useTranslateForm = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForms(`config.tabs.general.${key}`, { ...context }, i18Key)
  const useTranslateButtons = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`buttons.${key}`, { ...context }, i18Key)
  const useTranslateFormFields = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`fields.${key}`, { ...context }, i18Key)

  // User form
  const form = useForm({
    initialValues: value,
    validate: {},
  });

  return (
    <Box h={"25vh"}>
      <form onSubmit={form.onSubmit(() => {
        onSubmit(form.values);
      })} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

      }}>
        <Group gap="md" grow>
          <TextInput
            required
            label={useTranslateFormFields('my_address.label')}
            placeholder={useTranslateFormFields('my_address.placeholder')}
            value={form.values.myAddress}
            onChange={(event) => form.setFieldValue('myAddress', event.currentTarget.value)}
            error={form.errors.myAddress && useTranslateFormFields('myAddress.error')}
            rightSection={<TooltipIcon label={useTranslateFormFields('my_address.tooltip')} />}
            radius="md"
          />
          <NumberInput
            label={useTranslateFormFields('spoof_mastery_rank.label')}
            placeholder={useTranslateFormFields('spoof_mastery_rank.placeholder')}
            value={form.values.spoofMasteryRank || -1}
            onChange={(event) => form.setFieldValue('spoofMasteryRank', Number(event))}
            error={form.errors.volume_threshold && useTranslateFormFields('spoof_mastery_rank.error')}
            rightSection={<TooltipIcon label={useTranslateFormFields('spoof_mastery_rank.tooltip')} />}
            radius="md"
          />
        </Group>

        <Group gap="md" mt={"md"}>
          <Tooltip label={useTranslateFormFields('auto_create_account.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('auto_create_account.label')}
              checked={form.values.autoCreateAccount}
              onChange={(event) => form.setFieldValue('autoCreateAccount', event.currentTarget.checked)}
              error={form.errors.autoCreateAccount && useTranslateFormFields('auto_create_account.error')}
            />
          </Tooltip>
          <Tooltip label={useTranslateFormFields('skip_storyMode_choice.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('skip_storyMode_choice.label')}
              checked={form.values.skipStoryModeChoice}
              onChange={(event) => form.setFieldValue('skipStoryModeChoice', event.currentTarget.checked)}
              error={form.errors.skipStoryModeChoice && useTranslateFormFields('skip_storyMode_choice.error')}
            />
          </Tooltip>
        </Group>
        <Group gap="md" mt={"md"}>
          <Tooltip label={useTranslateFormFields('skip_tutorial.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('skip_tutorial.label')}
              checked={form.values.skipTutorial}
              onChange={(event) => form.setFieldValue('skipTutorial', event.currentTarget.checked)}
              error={form.errors.skipTutorial && useTranslateFormFields('skip_tutorial.error')}
            />
          </Tooltip>
          <Tooltip label={useTranslateFormFields('unlock_all_scans.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('unlock_all_scans.label')}
              checked={form.values.unlockAllScans}
              onChange={(event) => form.setFieldValue('unlockAllScans', event.currentTarget.checked)}
              error={form.errors.unlockAllScans && useTranslateFormFields('unlock_all_scans.error')}
            />
          </Tooltip> </Group>
        <Group gap="md" mt={"md"}>
          <Tooltip label={useTranslateFormFields('unlock_all_missions.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('unlock_all_missions.label')}
              checked={form.values.unlockAllMissions}
              onChange={(event) => form.setFieldValue('unlockAllMissions', event.currentTarget.checked)}
              error={form.errors.unlockAllMissions && useTranslateFormFields('unlock_all_missions.error')}
            />
          </Tooltip>
          <Tooltip label={useTranslateFormFields('unlock_all_quests.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('unlock_all_quests.label')}
              checked={form.values.unlockAllQuests}
              onChange={(event) => form.setFieldValue('unlockAllQuests', event.currentTarget.checked)}
              error={form.errors.unlockAllQuests && useTranslateFormFields('unlock_all_quests.error')}
            />
          </Tooltip>
        </Group>
        <Group gap="md" mt={"md"}>
          <Tooltip label={useTranslateFormFields('infinite_resources.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('infinite_resources.label')}
              checked={form.values.infiniteResources}
              onChange={(event) => form.setFieldValue('infiniteResources', event.currentTarget.checked)}
              error={form.errors.infiniteResources && useTranslateFormFields('infinite_resources.error')}
            />
          </Tooltip>
          <Tooltip label={useTranslateFormFields('unlock_all_ship_features.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('unlock_all_ship_features.label')}
              checked={form.values.unlockallShipFeatures}
              onChange={(event) => form.setFieldValue('unlockallShipFeatures', event.currentTarget.checked)}
              error={form.errors.unlockallShipFeatures && useTranslateFormFields('unlock_all_ship_features.error')}
            />
          </Tooltip>
        </Group>
        <Group gap="md" mt={"md"}>
          <Tooltip label={useTranslateFormFields('unlock_all_ship_decorations.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('unlock_all_ship_decorations.label')}
              checked={form.values.unlockAllShipDecorations}
              onChange={(event) => form.setFieldValue('unlockAllShipDecorations', event.currentTarget.checked)}
              error={form.errors.unlockAllShipDecorations && useTranslateFormFields('unlock_all_ship_decorations.error')}
            />
          </Tooltip>
          <Tooltip label={useTranslateFormFields('unlock_all_flavour_items.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('unlock_all_flavour_items.label')}
              checked={form.values.unlockAllFlavourItems}
              onChange={(event) => form.setFieldValue('unlockAllFlavourItems', event.currentTarget.checked)}
              error={form.errors.unlockAllFlavourItems && useTranslateFormFields('unlock_all_flavour_items.error')}
            />
          </Tooltip>
        </Group>
        <Group gap="md" mt={"md"}>
          <Tooltip label={useTranslateFormFields('unlock_all_skins.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('unlock_all_skins.label')}
              checked={form.values.unlockAllSkins}
              onChange={(event) => form.setFieldValue('unlockAllSkins', event.currentTarget.checked)}
              error={form.errors.unlockAllSkins && useTranslateFormFields('unlock_all_skins.error')}
            />
          </Tooltip>
        </Group>
        <Group justify="flex-end" style={{
          position: "absolute",
          bottom: 25,
          right: 25,
        }}>
          <Button type="submit" variant="light" color="blue">
            {useTranslateButtons('save.label')}
          </Button>
        </Group>
      </form>
    </Box>
  );
};