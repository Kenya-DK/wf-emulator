import { AppShell } from "@mantine/core";
import { Header, NavbarMinimalColored, NavbarLinkProps } from "@components";
import classes from "./LogInLayout.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useTranslateComponent } from "@hooks";
export function LogInLayout() {
  // Translate general
  const useTranslate = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslateComponent(`layout.log_in.${key}`, { ...context }, i18Key)
  const useTranslateNavBar = (key: string, context?: { [key: string]: any }, i18Key?: boolean) => useTranslate(`navbar.${key}`, { ...context }, i18Key)
  // States
  const navigate = useNavigate();
  const links = [
    { align: 'top', link: "/", icon: <FontAwesomeIcon icon={faHome} />, label: useTranslateNavBar("home"), onClick: (e: NavbarLinkProps) => handleNavigate(e) },
  ];

  const handleNavigate = (link: NavbarLinkProps) => {
    if (link.web)
      window.open(link.link, "_blank");
    else
      navigate(link.link);
  };
  return (
    <AppShell
      classNames={classes}
      header={{ height: 65 }}
      navbar={{
        width: 70,
        breakpoint: 'sm',
      }}

    >
      <AppShell.Header withBorder={false}>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar withBorder={false}>
        <NavbarMinimalColored links={links} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}