import { Group, Menu } from '@mantine/core';
import { useAppContext, useAuthContext } from '@contexts';
import { useTranslateComponent } from '@hooks';
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modals } from '@mantine/modals';
import { Config, EventOperation, Events, SendDataEvent, api } from '@api';
import { notifications } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import { ConfigForm } from '@components';
export function UserMenu() {
	// States
	const { user } = useAuthContext();
	const { config } = useAppContext();
	// Translate general
	const useTranslateUserMenu = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateComponent(`user_menu.${key}`, { ...context }, i18Key)
	const useTranslateErrors = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateUserMenu(`errors.${key}`, { ...context }, i18Key)
	const useTranslateSuccess = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateUserMenu(`success.${key}`, { ...context }, i18Key)

	// Handlers
	const LogOut = async () => {
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		setTimeout(() => {
			window.location.reload();
		}, 250);
	};
	// Mutations
	const updateConfigMutation = useMutation({
		mutationFn: (s: Config) => api.app.updateConfig(s),
		onSuccess: (newConfig) => {
			notifications.show({ title: useTranslateSuccess("update_config.title"), message: useTranslateSuccess("update_config.message"), color: "green.7" });
			SendDataEvent(Events.UpdateConfig, EventOperation.SET, newConfig);
		},
		onError: () => notifications.show({ title: useTranslateErrors("update_config.title"), message: useTranslateErrors("update_config.message"), color: "red.7" })
	})

	return (
		<Menu shadow="md" width={200}
			transitionProps={{ transition: "fade-down", duration: 150 }}
		>
			<Menu.Target>
				<Group>
					{user?.user_name || "User"}
				</Group>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>{useTranslateUserMenu("items.app_label")}</Menu.Label>
				<Menu.Item leftSection={<FontAwesomeIcon icon={faGear} />} onClick={() => {
					if (!config) return;
					modals.open({
						withCloseButton: false,
						children: <ConfigForm value={config} onSubmit={async (s) => {
							console.log(s);
							await updateConfigMutation.mutateAsync(s);
							modals.closeAll();
						}} />,
					})
				}}>{useTranslateUserMenu("items.config")}</Menu.Item>
				{user && <Menu.Item leftSection={<FontAwesomeIcon icon={faRightFromBracket} />} onClick={async () => { await LogOut() }}>{useTranslateUserMenu("items.logout")}</Menu.Item>}
			</Menu.Dropdown>
		</Menu>
	);
}