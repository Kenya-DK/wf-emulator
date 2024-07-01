import { AppShell } from "@mantine/core";
import { Header, NavbarNested } from "@components";
import classes from "./LogInLayout.module.css";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes, faHome } from "@fortawesome/free-solid-svg-icons";
import { useTranslateComponent } from "@hooks";
export function LogInLayout() {
  // Translate general
  const useTranslate = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateComponent(`layout.log_in.${key}`, { ...context }, i18Key)
  const useTranslateNavBar = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslate(`navbar.${key}`, { ...context }, i18Key)
  // States
  const links = [
    { label: useTranslateNavBar("home"), icon: <FontAwesomeIcon icon={faHome} />, link: "/webui" },
    {
      label: useTranslateNavBar("inventory.title"),
      icon: <FontAwesomeIcon icon={faBoxes} />,
      initiallyOpened: true,
      links: [
        { label: useTranslateNavBar("inventory.frames"), link: '/webui/inventory/frames' },
        { label: useTranslateNavBar("inventory.mods"), link: '/webui/inventory/mods' },
        { label: useTranslateNavBar("inventory.weapons"), link: '/webui/inventory/weapons' },
      ],
    }
  ];

  return (
    <AppShell
      classNames={classes}
      header={{ height: 65 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
      }}

    >
      <AppShell.Header withBorder={false}>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar withBorder={false}>
        <NavbarNested links={links} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}