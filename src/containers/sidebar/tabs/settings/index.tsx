import React from 'react';
import { useTranslation } from 'react-i18next';

import Sidebar from '../../../../components/sidebar/Sidebar.component';
import FontSizeSetting from './Font-size.container';
import IndentSizeSetting from './Indent-size.container';
import LocalizationSetting from './Localization.container';
import ThemeSetting from './Theme.container';
import { Tab } from '../../../../components/sidebar/types/sidebar.type';

export default function SettingsTab(props: Tab) {
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
            <LocalizationSetting />
          </Sidebar.TabSubList>
        </Sidebar.TabListItem>

        <Sidebar.TabListItem>
          <Sidebar.TabListName>{t('sidebar.settings.editor.title')}</Sidebar.TabListName>
          <Sidebar.TabSubList>
            <FontSizeSetting />
            <IndentSizeSetting />
          </Sidebar.TabSubList>
        </Sidebar.TabListItem>
      </Sidebar.TabList>
    </Sidebar.Tab>
  );
}
