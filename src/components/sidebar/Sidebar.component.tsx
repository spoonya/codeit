import React from 'react';

import { Container, Menu, MenuItem, Tab, TabHeader, TabInner } from './styles/sidebar.style';
import * as TSidebar from './types/sidebar.type';

export default function Sidebar(props: TSidebar.Inner): JSX.Element {
  const { children } = props;

  return <Container>{children}</Container>;
}

Sidebar.Menu = function SidebarMenu(props: TSidebar.Inner): JSX.Element {
  const { children } = props;

  return <Menu>{children}</Menu>;
};

Sidebar.MenuItem = function SidebarMenuItem(props: TSidebar.Item): JSX.Element {
  const { children, onClick } = props;

  return <MenuItem onClick={onClick}>{children}</MenuItem>;
};

Sidebar.Tab = function SidebarTab(props: TSidebar.Inner): JSX.Element {
  const { children } = props;

  return <Tab>{children}</Tab>;
};

Sidebar.TabHeader = function SidebarTabHeader(props: TSidebar.Inner): JSX.Element {
  const { children } = props;

  return (
    <TabHeader>
      <TabInner>{children}</TabInner>
    </TabHeader>
  );
};
