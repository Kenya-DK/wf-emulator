import { Group, Menu } from '@mantine/core';
import { useAuthContext } from '@contexts';
import { useTranslateComponent } from '@hooks';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function UserMenu() {
	// States
	const { user } = useAuthContext();

	// Translate general
	const useTranslateUserMenu = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateComponent(`user_menu.${key}`, { ...context }, i18Key)

	// Handlers
	const LogOut = async () => {
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		setTimeout(() => {
			window.location.reload();
		}, 250);
	};


	return (
		<Menu shadow="md" width={200}
			transitionProps={{ transition: "fade-down", duration: 150 }}
		>
			<Menu.Target>
				<Group>
					{user?.user_name}
				</Group>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>{useTranslateUserMenu("items.app_label")}</Menu.Label>
				<Menu.Item leftSection={<FontAwesomeIcon icon={faRightFromBracket} />} onClick={async () => { await LogOut() }}>{useTranslateUserMenu("items.logout")}</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}