import { Group, useMantineTheme } from '@mantine/core';
import classes from './Header.module.css';
import { UserMenu } from '../UserMenu';
import { Logo } from '@components';

export type HeaderProps = {
	isHidden?: boolean;
}

export function Header({ }: HeaderProps) {
	const theme = useMantineTheme();
	return (
		<Group ml={"sm"} mr={"sm"} justify='space-between' className={classes.header}>
			<Logo color={theme.colors.blue[7]} />
			<UserMenu />
		</Group>
	);
}