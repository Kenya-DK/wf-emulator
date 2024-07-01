import { Divider, Group, Paper, Stack, Text } from '@mantine/core';
import classes from './FrameCard.module.css';
import { api, Frame } from '@api';
import { ActionWithTooltip, TextTranslate } from '@components';
import { useTranslateComponent } from '@hooks';
import { faArrowUp, faEye, faTag, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { modals } from '@mantine/modals';
import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';

export interface FrameCardProps {
  frame: Frame;
}

export function FrameCard({ frame }: FrameCardProps) {
  // State's
  const navigate = useNavigate();
  // Translate general
  const useTranslateStockItemInfo = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateComponent(`frame_card.${key}`, { ...context }, i18Key)
  const useTranslateFields = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateStockItemInfo(`fields.${key}`, { ...context }, i18Key)
  const useTranslateButtons = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateStockItemInfo(`buttons.${key}`, { ...context }, i18Key)
  const useTranslatePrompt = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateStockItemInfo(`prompt.${key}`, { ...context }, i18Key)
  const useTranslateSuccess = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateStockItemInfo(`success.${key}`, { ...context }, i18Key)
  const useTranslateErrors = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateStockItemInfo(`errors.${key}`, { ...context }, i18Key)

  // Mutations
  const renameFrameMutation = useMutation({
    mutationFn: (data: { id: string, name: string }) => api.inventory.renameGearItem("Suits", data.id, data.name),
    onSuccess: async (name) => {
      notifications.show({ title: useTranslateSuccess("rename.title"), message: useTranslateSuccess("rename.message", { name }), color: "green.7" });
    },
    onError: (e) => {
      console.error(e);
      notifications.show({ title: useTranslateErrors("rename.title"), message: useTranslateErrors("rename.message"), color: "red.7" })
    }
  })
  const deleteFrameMutation = useMutation({
    mutationFn: (id: string) => api.inventory.deleteGearItem("Suits", id),
    onSuccess: async () => {
      notifications.show({ title: useTranslateSuccess("delete.title"), message: useTranslateSuccess("delete.message"), color: "green.7" });
    },
    onError: (e) => {
      console.error(e);
      notifications.show({ title: useTranslateErrors("delete.title"), message: useTranslateErrors("delete.message"), color: "red.7" })
    }
  })
  const maxRankFrameMutation = useMutation({
    mutationFn: (data: { id: string, xp: number }) => api.inventory.addGearXP("Suits", data.id, data.xp),
    onSuccess: async () => {
      notifications.show({ title: useTranslateSuccess("max_rank.title"), message: useTranslateSuccess("max_rank.message"), color: "green.7" });
    },
    onError: (e) => {
      console.error(e);
      notifications.show({ title: useTranslateErrors("max_rank.title"), message: useTranslateErrors("max_rank.message"), color: "red.7" })
    }
  })


  const OpenRenameModal = (id: string) => {
    modals.openContextModal({
      modal: 'prompt',
      title: useTranslatePrompt(`rename.title`),
      innerProps: {
        fields: [
          {
            name: 'name',
            label: useTranslatePrompt(`rename.field.label`),
            value: 0,
            type: 'text',
          },
        ],
        onConfirm: async (data: { name: string }) => {
          if (!data) return;
          renameFrameMutation.mutate({ id, name: data.name });
        },
        onCancel: (id: string) => modals.close(id),
      },
    })
  }

  return (
    <Paper className={classes.Mod}>
      <Stack gap="xs">
        <Group ml={"xs"} justify='space-between'>
          <Group>
            <Text size='lg' fw={700}>{frame.name}</Text>
          </Group>
          <Group>
            <TextTranslate size='md' i18nKey={useTranslateFields("quantity", undefined, true)} values={{ quantity: frame.quantity }} />
          </Group>
        </Group>
        <Divider />
        <Group align="center" grow p={"sm"}>
          <Group justify="flex-end" gap={"sm"}>
            {frame.xp < 1_600_000 &&
              <ActionWithTooltip
                tooltip={useTranslateButtons('max_rank.tooltip')}
                actionProps={{ size: 'sm' }}
                icon={faArrowUp}
                color='green.7'
                iconProps={{ size: 'xs' }}
                onClick={async () => {

                  maxRankFrameMutation.mutate({ id: frame._id, xp: 1_600_000 - frame.xp });
                }}
              />
            }
            <ActionWithTooltip
              tooltip={useTranslateButtons('rename.tooltip')}
              actionProps={{ size: 'sm' }}
              icon={faTag}
              iconProps={{ size: 'xs' }}
              onClick={async () => {
                OpenRenameModal(frame._id);
              }}
            />
            <ActionWithTooltip
              tooltip={useTranslateButtons('view.tooltip')}
              actionProps={{ size: 'sm' }}
              icon={faEye}
              iconProps={{ size: 'xs' }}
              onClick={async () => {
                navigate(`edit/${frame._id}`);
              }}
            />
            <ActionWithTooltip
              tooltip={useTranslateButtons('delete.tooltip')}
              actionProps={{ size: 'sm' }}
              icon={faTrashCan}
              iconProps={{ size: 'xs' }}
              color='red.7'
              onClick={async () => {
                deleteFrameMutation.mutate(frame._id);
              }}
            />
          </Group>
        </Group>
      </Stack>
    </Paper>
  );
}