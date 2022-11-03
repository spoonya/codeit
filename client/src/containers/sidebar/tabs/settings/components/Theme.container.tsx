import React from 'react';
import { useTranslation } from 'react-i18next';

import { Sidebar } from '../../../../../components';
import { settings } from '../../../../../constants';
import { useActions, useTypedSelector } from '../../../../../hooks';

export function ThemeSetting() {
  const { themeMode } = useTypedSelector((store) => store.theme);
  const { toggleTheme } = useActions();

  const { t } = useTranslation();

  return (
    <Sidebar.TabSubListItem>
      <Sidebar.TabSwitch
        label={t('sidebar.settings.general.lightTheme')}
        onChange={() => toggleTheme(themeMode)}
        checked={themeMode === settings.theme.values.light}
      />
    </Sidebar.TabSubListItem>
  );
}
