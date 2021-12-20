import { FormControl, FormControlLabel, Switch } from '@mui/material';
import React from 'react';

import {
  Container,
  Menu,
  MenuItem,
  Tab,
  TabHeader,
  TabHeaderInner,
  TabList,
  TabListItem,
  TabListName,
  TabSelect,
  TabSubList,
  TabSubListItem,
  TabSwitch,
} from './styles/sidebar.style';
import * as TSidebar from './types/sidebar.type';

export default function Sidebar(props: TSidebar.Inner) {
  const { children } = props;

  return <Container>{children}</Container>;
}

Sidebar.Menu = function SidebarMenu(props: TSidebar.Inner) {
  const { children } = props;

  return <Menu>{children}</Menu>;
};

Sidebar.MenuItem = function SidebarMenuItem(props: TSidebar.Item) {
  const { isActive, onClick, children } = props;

  return (
    <MenuItem isActive={isActive} onClick={onClick}>
      {children}
    </MenuItem>
  );
};

Sidebar.Tab = function SidebarTab(props: TSidebar.Tab) {
  const { children, isActive } = props;

  return <Tab isActive={isActive}>{children}</Tab>;
};

Sidebar.TabHeader = function SidebarTabHeader(props: TSidebar.Inner) {
  const { children } = props;

  return (
    <TabHeader>
      <TabHeaderInner>{children}</TabHeaderInner>
    </TabHeader>
  );
};

Sidebar.TabList = function SidebarTabList(props: TSidebar.Inner) {
  const { children } = props;

  return <TabList>{children}</TabList>;
};

Sidebar.TabSubList = function SidebarTabSubList(props: TSidebar.Inner) {
  const { children } = props;

  return <TabSubList>{children}</TabSubList>;
};

Sidebar.TabListItem = function SidebarTabListItem(props: TSidebar.Inner) {
  const { children } = props;

  return <TabListItem>{children}</TabListItem>;
};

Sidebar.TabSubListItem = function SidebarTabSubListItem(props: TSidebar.Inner) {
  const { children } = props;

  return <TabSubListItem>{children}</TabSubListItem>;
};

Sidebar.TabListName = function SidebarTabListName(props: TSidebar.Inner) {
  const { children } = props;

  return <TabListName>{children}</TabListName>;
};

Sidebar.TabSwitch = function SidebarTabSwitch(props: TSidebar.Switch) {
  const { label, onChange, checked } = props;

  return (
    <TabSwitch>
      <FormControl>
        <FormControlLabel
          control={<Switch onChange={onChange} checked={checked} />}
          label={label}
        />
      </FormControl>
    </TabSwitch>
  );
};

Sidebar.TabSelect = function SidebarTabSelect(props: TSidebar.Inner) {
  const { children } = props;

  return <TabSelect>{children}</TabSelect>;
};
