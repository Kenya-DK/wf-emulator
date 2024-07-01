import { PaperProps, Button, Divider, Group, Paper, Stack, Text, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslateForms } from '@hooks';
import { api, CreateItem, Frame } from '@api';


export type CreateFrameFormProps = {
  frame?: Frame;
  onSubmit: (values: CreateItem) => void;
  paperProps?: PaperProps;
}


export function CreateFrameForm(props: CreateFrameFormProps) {

  // Translate general
  const useTranslateForm = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForms(`frame_form_create.${key}`, { ...context }, i18Key)
  const useTranslateFormFields = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`fields.${key}`, { ...context }, i18Key)
  const useTranslateButtons = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateForm(`buttons.${key}`, { ...context }, i18Key)

  // User form
  const form = useForm({
    initialValues: {
      _id: "",
      name: "",
      uniqueId: "",
      is_max_rank: false,
      quantity: 1,
    },

    validate: {

    },
  });

  const getOptions = () => {
    return api.cache.getWarframes()?.map((frame) => {
      return {
        value: frame.uniqueName,
        label: frame.name
      }
    })
  }
  return (
    <Paper radius="md" p="xl" withBorder {...props.paperProps}>

      <Text size="lg" fw={500}>
        {useTranslateForm('title')}
      </Text>

      <Divider my="lg" />

      <form onSubmit={form.onSubmit(() => {

        // props.onSubmit({ ...form.values, xp: form.values.is_max_rank ? 1_600_000 : 0 })
        props.onSubmit({
          type: "Powersuit",
          uniqueId: form.values.uniqueId,
        })
      })}>
        <Stack>
          <Select
            required
            label={useTranslateFormFields('frame.label')}
            searchable
            value={form.values.uniqueId}
            onChange={(value) => {
              if (value)
                form.setFieldValue('uniqueId', value)
            }}
            data={getOptions()}
          />
          {/* TODO: Add a way to add a frame with a custom name and max rank */}
          {/* <TextInput
            label={useTranslateFormFields('name.label')}
            placeholder={useTranslateFormFields('name.placeholder')}
            value={form.values.name}
            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
            error={form.errors.name && useTranslateFormFields('name.error')}
            radius="md"
          />

          <Tooltip label={useTranslateFormFields('is_max_rank.tooltip')}>
            <Checkbox
              label={useTranslateFormFields('is_max_rank.label')}
              checked={form.values.is_max_rank}
              onChange={(event) => form.setFieldValue('is_max_rank', event.currentTarget.checked)}
              error={form.errors.is_max_rank && useTranslateFormFields('is_max_rank.error')}
            />
          </Tooltip> */}
        </Stack>
        <Group justify="flex-end" mt="xl">
          <Button type="submit" radius="xl">
            {useTranslateButtons('submit')}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}