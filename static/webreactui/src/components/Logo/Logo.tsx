import { Image, Text, Group, Title } from '@mantine/core';
import { useAppContext } from '@contexts';
import classes from './Logo.module.css';

export function Logo({ color }: { color: string }) {
	const { app_info } = useAppContext();
	return (
		<Group gap="xs" >
			<Image src={"/logo.png"} alt={app_info?.name} className={classes.logo} />
			<Title order={4} style={{ color: color }}>{app_info?.name}</Title>
			<Text size={"md"} fw={500} style={{ color: color }}>v{app_info?.version}</Text>
		</Group>
	);
}