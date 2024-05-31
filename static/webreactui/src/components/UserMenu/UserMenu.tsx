import { Group, Menu } from '@mantine/core';
import { useAuthContext } from '@contexts';
import { api } from '@api';
import { useTranslateComponent } from '@hooks';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
export function UserMenu() {
	// States
	const navigate = useNavigate();
	const { user } = useAuthContext();

	// Translate general
	const useTranslateUserMenu = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateComponent(`user_menu.${key}`, { ...context }, i18Key)
	const useTranslateErrors = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateUserMenu(`errors.${key}`, { ...context }, i18Key)
	const useTranslateSuccess = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateUserMenu(`success.${key}`, { ...context }, i18Key)

	// Mutations
	const logOutMutation = useMutation({
		mutationFn: () => api.auth.logout(),
		onSuccess: () => {
			notifications.show({ title: useTranslateSuccess("logout.title"), message: useTranslateSuccess("logout.message"), color: "green.7" });
			navigate('/webui');
		},
		onError: () => notifications.show({ title: useTranslateErrors("logout.title"), message: useTranslateErrors("logout.message"), color: "green.7" })
	})

	return (
		<Menu shadow="md" width={200}
			transitionProps={{ transition: "fade-down", duration: 150 }}
		>
			<Menu.Target>
				<Group>
					{user?.DisplayName}
				</Group>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>{useTranslateUserMenu("items.app_label")}</Menu.Label>
				<Menu.Item leftSection={<FontAwesomeIcon icon={faRightFromBracket} />} onClick={async () => { await logOutMutation.mutateAsync() }}>{useTranslateUserMenu("items.logout")}</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}