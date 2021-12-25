import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sidebar } from '../../../../components';
import { TabProps } from '../../../../components/sidebar/types/sidebar.type';
import {
  ThemeSetting,
  LayoutSetting,
  LocalizationSetting,
  LiveModeSetting,
  FontSizeSetting,
  IndentSizeSetting,
} from './components';

export function SettingsTab(props: TabProps) {
  const { isActive } = props;

  const { t } = useTranslation();

  return (
    <Sidebar.Tab isActive={isActive}>
      <Sidebar.TabHeader>{t('sidebar.settings.title')}</Sidebar.TabHeader>
      <Sidebar.TabList>
        <Sidebar.TabListItem>
          <Sidebar.TabListName>{t('sidebar.settings.general.title')}</Sidebar.TabListName>
          <Sidebar.TabSubList>
            <ThemeSetting />
            <LayoutSetting />
            <LocalizationSetting />
          </Sidebar.TabSubList>
        </Sidebar.TabListItem>

        <Sidebar.TabListItem>
          <Sidebar.TabListName>{t('sidebar.settings.editor.title')}</Sidebar.TabListName>
          <Sidebar.TabSubList>
            <LiveModeSetting />
            <FontSizeSetting />
            <IndentSizeSetting />
          </Sidebar.TabSubList>
        </Sidebar.TabListItem>
      </Sidebar.TabList>
    </Sidebar.Tab>
  );
}
