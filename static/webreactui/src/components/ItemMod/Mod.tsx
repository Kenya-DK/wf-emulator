import { Box, Divider, Group, Paper, Stack, Text } from '@mantine/core';
import classes from './Mod.module.css';
import { ItemMod } from '@api';
import { TextTranslate } from '@components';
import { useTranslateComponent } from '@hooks';

export interface ModProps {
  item: ItemMod;
}

export function Mod({ item }: ModProps) {
  // Translate general
  const useTranslateStockItemInfo = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateComponent(`mod_item.${key}`, { ...context }, i18Key)
  const useTranslateFields = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateStockItemInfo(`fields.${key}`, { ...context }, i18Key)
  return (
    <Paper className={classes.Mod}>
      <Stack gap="xs">
        <Group ml={"xs"} justify='space-between'>
          <Group>
            <Text size='lg' fw={700}>{item.name}</Text>
          </Group>
          <Group>
            <TextTranslate size='md' i18nKey={useTranslateFields("quantity", undefined, true)} values={{ quantity: item.quantity }} />
          </Group>
        </Group>
        <Divider />
        <Group align="center" grow p={"sm"}>
					<Group justify="flex-end">
						<Box>
							<TextTranslate size='sm' i18nKey={useTranslateFields("mod_rank", undefined, true)} values={{ mod_rank: item.rank, mod_max_rank: item.maxRank }} />
						</Box>
					</Group>
				</Group>
      </Stack>
    </Paper>
  );
}