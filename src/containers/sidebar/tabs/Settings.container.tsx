import React from 'react';

import Sidebar from '../../../components/sidebar/Sidebar.component';
import FontSizeSetting from './settings/Font-size.container';
import IndentSizeSetting from './settings/Indent-size.container';
import LocalizationSetting from './settings/Localization.container';
import ThemeSetting from './settings/Theme.container';

export default function SettingsTab() {
  return (
    <Sidebar.Tab>
      <Sidebar.TabHeader>Settings</Sidebar.TabHeader>
      <Sidebar.TabList>
        <Sidebar.TabListItem>
          <Sidebar.TabListName>General</Sidebar.TabListName>
          <Sidebar.TabSubList>
            <ThemeSetting />
            <LocalizationSetting />
          </Sidebar.TabSubList>
        </Sidebar.TabListItem>

        <Sidebar.TabListItem>
          <Sidebar.TabListName>Editor</Sidebar.TabListName>
          <Sidebar.TabSubList>
            <FontSizeSetting />
            <IndentSizeSetting />
          </Sidebar.TabSubList>
        </Sidebar.TabListItem>
      </Sidebar.TabList>
    </Sidebar.Tab>
  );
}
