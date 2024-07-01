import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton } from '@mantine/core';
import classes from './NavbarLinksGroup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export interface LinksGroupProps {
  icon: React.ReactNode;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
}

export function LinksGroup({ icon: Icon, link, label, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const goTo = useNavigate();
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault()
        goTo(link.link)
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton onClick={() => {
        if (link)
          goTo(link)
        else
          setOpened((o) => !o)
      }} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              {Icon}
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <FontAwesomeIcon icon={faChevronRight} className={classes.chevron} style={{ transform: opened ? 'rotate(-90deg)' : 'none' }} />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

export function NavbarLinksGroup(link: LinksGroupProps) {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...link} />
    </Box>
  );
}