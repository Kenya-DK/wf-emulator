import { Paper } from '@mantine/core';
import classes from './Mod.module.css';
import { ItemMod } from '@api';

export interface ModProps {
  item: ItemMod;
}

export function Mod({ item }: ModProps) {
  return (
    <Paper className={classes.Mod}>
      {item.name} - {item.quality} - {item.rank}
    </Paper>
  );
}