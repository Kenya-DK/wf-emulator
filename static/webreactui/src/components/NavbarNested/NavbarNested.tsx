import { ScrollArea } from '@mantine/core';
import classes from './NavbarNested.module.css';
import { LinksGroup, LinksGroupProps } from '../NavbarLinksGroup/NavbarLinksGroup';


export interface NavbarNestedProps {
  links: LinksGroupProps[];
}

export function NavbarNested({ links }: NavbarNestedProps) {
  const GetActiveLinkByAlign = () => {
    if (!links) return <></>;

    return links.map((link, index) => (
      <LinksGroup
        {...link}
        key={index}
      />
    ));
  }


  return (
    <nav className={classes.navbar}>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{GetActiveLinkByAlign()}</div>
      </ScrollArea>
    </nav>
  );
}